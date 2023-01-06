import type { BaseGeneratedSchema, QueryArgs, QueryParam } from '../../client/client.types'

export default function getQueryParams(
  queryArgs: QueryArgs,
  fieldName: string,
  generatedSchema: BaseGeneratedSchema
): QueryParam[] {
  const currentParams: QueryParam[] = Object.keys(queryArgs.variables || {}).map((variable) => ({
    name: variable,
    path: fieldName,
    type: generatedSchema?.query?.[fieldName].__args?.[variable]
  }))

  const nestedParams: QueryParam[] = Object.keys(queryArgs.select || {})
    .filter((key) => typeof queryArgs.select?.[key] !== 'boolean')
    .map((key) =>
      getQueryParams(queryArgs.select?.[key] as QueryArgs, key, generatedSchema).map((param) => ({
        ...param,
        path: `${fieldName}.${param.path}`
      }))
    )
    .reduce((variables, currentVariables) => [...variables, ...currentVariables], [])

  return [...currentParams, ...nestedParams]
}
