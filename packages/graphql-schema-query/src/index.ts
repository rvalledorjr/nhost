import fetch from 'cross-fetch'
import { jsonToGraphQLQuery } from 'json-to-graphql-query'

type Class = { prototype: any }

type OmitByValue<T, ValueType> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends ValueType ? never : Key }[keyof T]
>

type SelectFields<T> = Partial<{
  [k in keyof T]: UnwrapArray<T[k]> extends object ? SelectFields<UnwrapArray<T[k]>> : true
}>

type UnwrapArray<T> = T extends (infer E)[] ? E : NonNullable<T>

type WrapArray<T, U> = T extends any[] ? U[] : U

type ResultFields<Select, Element> = UnwrapArray<Select> extends undefined
  ? Element
  : WrapArray<
      Element,
      OmitByValue<
        {
          [k in keyof Select]: k extends keyof UnwrapArray<Element>
            ? UnwrapArray<Element>[k] extends object
              ? ResultFields<Select[k], UnwrapArray<Element>[k]>
              : UnwrapArray<Element>[k]
            : never
        },
        never
      >
    >

type OperationFactory<
  Schema extends Record<string, any>,
  OperationName extends 'Query' | 'Mutation',
  OperationType = Omit<Schema[`${string & OperationName}_Root`]['prototype'], '__typename'>
> = Required<{
  [name in keyof OperationType]: <
    Mutation extends OperationType[name],
    Element extends UnwrapArray<Mutation>,
    // TODO problem: Partial Type Argument Inference
    // * See https://stackoverflow.com/questions/58864033/in-typescript-is-there-a-way-to-restrict-extra-excess-properties-for-a-partial
    Select extends SelectFields<Element>,
    Result extends WrapArray<Mutation, ResultFields<Select, Element>>,
    ArgsType extends `${OperationName}_Root${Capitalize<string & name>}Args`,
    Args extends ArgsType extends keyof Schema
      ? Schema[ArgsType] extends Class
        ? Schema[ArgsType]['prototype']
        : never
      : never
  >(
    params: {
      select?: Select
    } & Args
  ) => {
    run: () => Promise<Result>
    toRawGraphQL: () => string
  }
}>

type ClientConstructorParams<Schema = Record<string, any>> = {
  schema?: Schema
  url?: string
  headers?: HeadersInit
}

const proxyConstructor = <Schema extends Record<string, any>>(
  operation: 'Queries' | 'Mutations',
  params?: ClientConstructorParams<Schema>
): OperationFactory<Schema, 'Query'> => {
  const schema = params?.schema
  return new Proxy({} as any, {
    get(_, prop: string) {
      const operationTypes: Record<typeof operation, string> = {
        Mutations: 'Mutation',
        Queries: 'Query'
      }
      const operationType = operationTypes[operation]
      return ({ select, ...rest }: { select?: Record<string, any> } & Record<string, any>) => {
        const toRawGraphQL = () => {
          const name = schema?.[`${operationType}Factory`][prop].name
          const columnEnum = schema?.[`${name}_Select_Column`]
          if (!columnEnum) {
            // TODO: could not find "columns" for aggregate queries
            console.warn(`Missing column enum ${name}_Select_Column`)
          }
          const columns = Object.values<string>(columnEnum || {})
          const fields: Record<string, any> = {}
          if (select) {
            for (const [key, value] of Object.entries(select)) {
              // TODO: Only add fields that matches a valid column or relationship
              // TODO: and add support to relationship check
              // if (columns.includes(key)) {
              fields[key] = value
              // }
            }
          }
          if (Object.keys(fields).length === 0) {
            // * Add all columns if no valid field is specified in 'select', or if 'select' is undefined
            for (const field of columns) {
              fields[field] = true
            }
          }
          return jsonToGraphQLQuery(
            {
              [operationType.toLowerCase()]: {
                [prop]: {
                  __args: rest,
                  ...fields
                }
              }
            },
            { pretty: true }
          )
        }

        return {
          run: async () => {
            if (!params?.url) {
              throw new Error('Missing url')
            }
            const query = await fetch(params.url, {
              method: 'POST',
              headers: params.headers,
              body: JSON.stringify({ query: toRawGraphQL() })
            })
            if (!query.ok) {
              throw new Error(query.statusText)
            }
            const { data, errors } = await query.json()
            if (errors) {
              throw new Error(errors[0].message)
            }
            return data[prop]
          },
          toRawGraphQL
        }
      }
    }
  })
}
export class Client<Schema extends Record<string, any>> {
  query: OperationFactory<Schema, 'Query'>
  mutation: OperationFactory<Schema, 'Mutation'>

  constructor(params?: ClientConstructorParams<Schema>) {
    this.query = proxyConstructor('Queries', params)
    this.mutation = proxyConstructor('Mutations', params)
  }
}
