import { parse, print } from 'graphql/language'
import pascalCase from 'just-pascal-case'
import type { OperationParam } from '../../client/client.types'
import camelizeDotNotation from '../camelizeDotNotation'

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
  queryParams?: OperationParam[]
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
  queryParams,
}: GetGraphqlQueryStringOptions) {
  const mappedQueryParams = queryParams?.filter(({ type }) => Boolean(type))
  const allParamPaths = new Set(
    mappedQueryParams?.map(({ path }) => path) || [],
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

                return `$${camelizeDotNotation(path, name)}: ${type}`
              })
              .join(', ')})`
          : ''
      } { ${returnableFields} }`,
    ),
  )
}
