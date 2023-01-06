import { parse, print } from 'graphql/language'
import pascalCase from 'just-pascal-case'

export interface GenerateGraphqlQueryOptions {
  name: string
  returnFields: string
  queryParams?: { field: string; variable: string }[]
  variables?: Record<string, string> | null
}

export default function generateGraphqlQuery({
  name,
  returnFields,
  queryParams,
  variables
}: GenerateGraphqlQueryOptions) {
  const mappedQueryParams = queryParams
    ?.map(({ field: fieldType, variable: paramName }) => `$${paramName}: ${fieldType}`)
    .join(', ')

  const fieldParameters = variables
    ? Object.keys(variables)
        .map((key) => `${key}: $${key}`)
        .join(', ')
    : ''

  return print(
    parse(
      `query ${pascalCase(name)}${mappedQueryParams ? `(${mappedQueryParams})` : ''} { ${name}${
        fieldParameters ? `(${fieldParameters})` : ''
      } { ${returnFields} }}`
    )
  )
}
