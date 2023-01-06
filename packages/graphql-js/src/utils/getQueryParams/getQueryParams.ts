import type { BaseGeneratedSchema, QueryArgs, QueryParam } from '../../client/client.types'

export interface GetQueryParamsOptions {
  /**
   * The name of the field.
   */
  fieldName: string
  /**
   * Arguments passed to the query.
   */
  args?: QueryArgs
  /**
   * The generated schema.
   */
  generatedSchema: BaseGeneratedSchema
}

export default function getQueryParams({
  args,
  fieldName,
  generatedSchema
}: GetQueryParamsOptions): QueryParam[] {
  if (!args) {
    return []
  }

  const currentParams: QueryParam[] = Object.keys(args.variables || {}).map((variable) => ({
    name: variable,
    path: fieldName,
    type: generatedSchema?.query?.[fieldName].__args?.[variable]
  }))

  const nestedParams: QueryParam[] = Object.keys(args.select || {})
    .filter((key) => typeof args.select?.[key] !== 'boolean')
    .map((key) =>
      getQueryParams({
        generatedSchema,
        args: args.select?.[key] as QueryArgs,
        fieldName: key
      }).map((param) => ({
        ...param,
        path: `${fieldName}.${param.path}`
      }))
    )
    .reduce((variables, currentVariables) => [...variables, ...currentVariables], [])

  return [...currentParams, ...nestedParams]
}
