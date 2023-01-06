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

export class Client<
  Schema extends Record<string, any>,
  Queries extends Schema extends { Query_Root: { prototype: any } }
    ? Omit<Schema['Query_Root']['prototype'], '__typename'>
    : never
> {
  constructor({ schema, url, headers }: { schema?: Schema; url?: string; headers?: HeadersInit }) {
    this.query = new Proxy({} as any, {
      get(_target, prop: string, _receiver) {
        return ({ select, ...rest }: { select?: Record<string, any> } & Record<string, any>) => {
          const toRawGraphQL = () => {
            const name = schema?.Queries[prop].name
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
                query: {
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
              if (!url) {
                throw new Error('Missing url')
              }
              const query = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify({ query: toRawGraphQL() })
              })
              const { data } = await query.json()
              return data[prop]
            },
            toRawGraphQL
          }
        }
      }
    })
  }

  query: Required<{
    [name in keyof Queries]: <
      Query extends Queries[name],
      Element extends UnwrapArray<Query>,
      // TODO problem: Partial Type Argument Inference
      // * See https://stackoverflow.com/questions/58864033/in-typescript-is-there-a-way-to-restrict-extra-excess-properties-for-a-partial
      Select extends SelectFields<Element>,
      Result extends WrapArray<Query, ResultFields<Select, Element>>,
      ArgsType extends `Query_Root${Capitalize<string & name>}Args`,
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
}
