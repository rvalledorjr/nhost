import { DocumentNode } from 'graphql'
import camelCase from 'just-camel-case'
import type {
  BaseGeneratedSchema,
  NhostGraphqlRequestConfig,
  NhostGraphqlRequestResponse,
  OperationArgs,
  OperationField,
} from '../../client/client.types'
import getGraphqlMutationString from '../getGraphqlMutationString'
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
 * Creates a mutation client from a generated schema.
 *
 * @param generatedSchema - The generated schema.
 * @param fetchQuery - Function to use for fetching data.
 * @returns A mutation client.
 */
export default function createMutationClient<TMutation extends object = any>(
  generatedSchema?: BaseGeneratedSchema,
  fetchQuery?: FetchFunction,
) {
  if (!generatedSchema) {
    return {} as TMutation
  }

  const { mutation: generatedMutations } = generatedSchema

  return Object.keys(generatedMutations).reduce(
    (queryClient, mutationName) => ({
      ...queryClient,
      [camelCase(mutationName)]: (args?: OperationArgs) => {
        const field: OperationField = {
          name: mutationName,
          type: normalizeType(generatedMutations[mutationName]?.__type),
        }

        const graphqlQuery = getGraphqlMutationString({
          name: mutationName,
          mutationParams: getOperationParams({
            generatedSchema,
            args,
            field,
            operationType: 'mutation',
          }),
          returnableFields: getReturnableFields({
            generatedSchema,
            args,
            field,
            operationType: 'mutation',
          }),
        })

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

          resolve(data?.[mutationName])
        })
      },
    }),
    {} as TMutation,
  )
}
