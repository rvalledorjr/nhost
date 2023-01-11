import { DocumentNode, parse } from 'graphql'
import camelCase from 'just-camel-case'
import type {
  BaseGeneratedSchema,
  NhostGraphqlRequestConfig,
  NhostGraphqlRequestResponse,
  OperationArgs,
  OperationField,
} from '../../client/client.types'
import getGraphqlQueryString from '../getGraphqlQueryString'
import getOperationParams from '../getOperationParams'
import getReturnableFields from '../getReturnableFields'
import getVariables from '../getVariables'
import normalizeType from '../normalizeType'

export type FetchFunction = <T = any, V = any>(
  document: string | DocumentNode,
  variables?: V,
  config?: NhostGraphqlRequestConfig & { useAxios: false },
) => Promise<NhostGraphqlRequestResponse<T>>

/**
 * Creates a query client from a generated schema.
 *
 * @param generatedSchema - The generated schema.
 * @param fetchQuery - Function to use for fetching data.
 * @returns A query client.
 */
export default function createQueryClient<TQuery extends object = any>(
  generatedSchema?: BaseGeneratedSchema,
  fetchQuery?: FetchFunction,
) {
  if (!generatedSchema) {
    return {} as TQuery
  }

  const { query: generatedQueries } = generatedSchema

  return Object.keys(generatedQueries).reduce(
    (queryClient, queryName) => ({
      ...queryClient,
      [camelCase(queryName)]: (args?: OperationArgs) => {
        const field: OperationField = {
          name: queryName,
          type: normalizeType(generatedQueries[queryName]?.__type),
        }

        const graphqlQuery = getGraphqlQueryString({
          name: queryName,
          queryParams: getOperationParams({
            generatedSchema,
            args,
            field,
            operationType: 'query',
          }),
          returnableFields: getReturnableFields({
            generatedSchema,
            args,
            field,
            operationType: 'query',
          }),
        })

        if (args?.typedDocumentNode) {
          return parse(graphqlQuery)
        }

        return new Promise(async (resolve, reject) => {
          if (!fetchQuery) {
            resolve(null)

            return
          }

          const { data, error } = await fetchQuery?.(
            graphqlQuery,
            getVariables({ args, field }),
            {
              useAxios: false,
            },
          )

          if (error) {
            reject(error)

            return
          }

          resolve(data?.[queryName])
        })
      },
    }),
    {} as TQuery,
  )
}
