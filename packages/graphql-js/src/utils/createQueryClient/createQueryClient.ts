import type { DocumentNode } from 'graphql'
import type {
  BaseGeneratedSchema,
  NhostGraphqlRequestConfig,
  NhostGraphqlRequestResponse,
  QueryArgs
} from '../../client/client.types'
import generateGraphqlQuery from '../generateGraphqlQuery'
import getQueryParams from '../getQueryParams'
import getReturnableFields from '../getReturnableFields'

export type FetchFunction = <T = any, V = any>(
  document: string | DocumentNode,
  variables?: V,
  config?: NhostGraphqlRequestConfig & { useAxios: false }
) => Promise<NhostGraphqlRequestResponse<T>>

export default function createQueryClient<Q extends object = any>(
  generatedSchema?: BaseGeneratedSchema,
  fetch?: FetchFunction
) {
  if (!generatedSchema) {
    return {} as Q
  }

  const { query: generatedQueries } = generatedSchema

  return Object.keys(generatedQueries).reduce(
    (queryClient, queryName) => ({
      ...queryClient,
      [queryName]: (args?: QueryArgs) => {
        const queryParams = getQueryParams(args || {}, queryName)
        const returnFields = getReturnableFields({
          generatedSchema,
          field: { name: queryName, type: queryName },
          args
        })

        const graphqlQuery = generateGraphqlQuery({
          name: queryName,
          returnFields,
          queryParams,
          // TODO: Gather all variables from the args object (even nested ones)
          variables: args?.variables
            ? Object.keys(args.variables).reduce(
                (currentArguments, key) => ({
                  ...currentArguments,
                  [key]: generatedQueries[queryName].__args?.[key]
                }),
                {}
              )
            : null
        })

        return new Promise(async (resolve, reject) => {
          if (!fetch) {
            resolve(null)
            return
          }

          const { data, error } = await fetch?.(graphqlQuery, args?.variables, { useAxios: false })

          if (error) {
            reject(error)
          }

          resolve(data?.[queryName])
        })
      }
    }),
    {} as Q
  )
}
