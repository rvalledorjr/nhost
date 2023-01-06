import type { QueryArgs, QueryParam } from '../../client/client.types'

export default function getQueryParams(queryArgs: QueryArgs, fieldName: string): QueryParam[] {
  const currentParams: QueryParam[] = Object.keys(queryArgs.variables || {}).map((variable) => ({
    name: variable,
    fieldType: fieldName
  }))

  const nestedParams: QueryParam[] = Object.keys(queryArgs.select || {})
    .filter((key) => typeof queryArgs.select?.[key] !== 'boolean')
    .map((key) =>
      getQueryParams(queryArgs.select?.[key] as QueryArgs, key).map((param) => {
        return {
          name: param.name,
          fieldType: `${fieldName}.${param.fieldType}`
        }
      })
    )
    .reduce((variables, currentVariables) => [...variables, ...currentVariables], [])

  return [...currentParams, ...nestedParams]
}
