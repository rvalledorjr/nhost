import type { DocumentNode } from 'graphql'
import type {
  BaseGeneratedSchema,
  NhostGraphqlRequestConfig,
  NhostGraphqlRequestResponse,
  QueryArgs,
  QueryField
} from '../../client/client.types'
import getGraphqlQueryString from '../getGraphqlQueryString'
import getQueryParams from '../getQueryParams'
import getReturnableFields from '../getReturnableFields'
import normalizeType from '../normalizeType'

export type FetchFunction = <T = any, V = any>(
  document: string | DocumentNode,
  variables?: V,
  config?: NhostGraphqlRequestConfig & { useAxios: false }
) => Promise<NhostGraphqlRequestResponse<T>>

/**
 * Creates a query client from a generated schema.
 *
 * @param generatedSchema - The generated schema.
 * @param fetchQuery - Function to use for fetching data.
 * @returns A query client.
 */
export default function createQueryClient<Q extends object = any>(
  generatedSchema?: BaseGeneratedSchema,
  fetchQuery?: FetchFunction
) {
  if (!generatedSchema) {
    return {} as Q
  }

  const { query: generatedQueries } = generatedSchema

  return Object.keys(generatedQueries).reduce(
    (queryClient, queryName) => ({
      ...queryClient,
      [queryName]: (args?: QueryArgs) => {
        const field: QueryField = {
          name: queryName,
          type: normalizeType(generatedQueries[queryName]?.__type)
        }

        const graphqlQuery = getGraphqlQueryString({
          name: queryName,
          queryParams: getQueryParams({
            generatedSchema,
            args,
            field
          }),
          returnableFields: getReturnableFields({
            generatedSchema,
            args,
            field
          })
        })

        return new Promise(async (resolve, reject) => {
          if (!fetchQuery) {
            resolve(null)

            return
          }

          // note: we need to include nested variables here as well
          const { data, error } = await fetchQuery?.(graphqlQuery, args?.variables, {
            useAxios: false
          })

          if (error) {
            reject(error)

            return
          }

          resolve(data?.[queryName])
        })
      }
    }),
    {} as Q
  )
}
