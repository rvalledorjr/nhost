import { parse, print } from 'graphql/language'
import pascalCase from 'just-pascal-case'
import { QueryParam } from '../../client/client.types'

export interface GenerateGraphqlQueryOptions {
  /**
   * The name of the query.
   */
  name: string
  /**
   * The fields to return.
   */
  returnFields: string
  /**
   * The query parameters.
   */
  queryParams?: QueryParam[]
  /**
   * The variables to use in the query.
   */
  variables?: Record<string, string> | null
}

/**
 * Generates a GraphQL query string.
 *
 * @param args - The arguments to generate the query string.
 * @returns The GraphQL query string.
 */
export default function generateGraphqlQuery({
  name,
  returnFields,
  queryParams,
  variables
}: GenerateGraphqlQueryOptions) {
  const mappedQueryParams = queryParams
    ?.map(({ name, fieldType }) => `$${name}: ${fieldType}`)
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
