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
  returnableFields: string
  /**
   * The query parameters.
   */
  queryParams?: QueryParam[]
}

/**
 * Generates a GraphQL query string.
 *
 * @param args - The arguments to generate the query string.
 * @returns The GraphQL query string.
 */
export default function getGraphqlQueryString({
  name,
  returnableFields,
  queryParams
}: GetGraphqlQueryStringOptions) {
  const mappedQueryParams = queryParams?.filter(({ type }) => Boolean(type))
  const allParamPaths = new Set(mappedQueryParams?.map(({ path }) => path) || [])

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
      } { ${returnableFields} }`
    )
  )
}
