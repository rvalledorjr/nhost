import { parse, print } from 'graphql/language'
import pascalCase from 'just-pascal-case'
import { QueryParam } from '../../client/client.types'
import capitalize from '../capitalize'

export interface GetGraphqlQueryStringOptions {
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
export default function getGraphqlQueryString({
  name,
  returnFields,
  queryParams,
  variables
}: GetGraphqlQueryStringOptions) {
  const mappedQueryParams = queryParams?.filter(({ type }) => Boolean(type))
  const allParamPaths = new Set(mappedQueryParams?.map(({ path }) => path) || [])
  const fieldParameters = Object.keys(variables || {}).filter((key) =>
    mappedQueryParams?.some(({ name }) => name === key)
  )

  return print(
    parse(
      `query ${pascalCase(name)}${
        mappedQueryParams?.length
          ? `(${mappedQueryParams
              .map(({ name, path, type }) => {
                if (allParamPaths.size === 1) {
                  return `$${name}: ${type}`
                }

                return `$${path
                  .split('.')
                  .map((pathPart, index) => (index > 0 ? capitalize(pathPart) : pathPart))
                  .join('')}${capitalize(name)}: ${type}`
              })
              .join(', ')})`
          : ''
      } { ${name}${
        fieldParameters.length
          ? `(${fieldParameters
              .map((key) => {
                if (allParamPaths.size === 1) {
                  return `${key}: $${key}`
                }

                return `${key}: $${name}${capitalize(key)}`
              })
              .join(', ')})`
          : ''
      } { ${returnFields} }}`
    )
  )
}
