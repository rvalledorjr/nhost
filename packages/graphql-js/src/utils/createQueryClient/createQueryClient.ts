import { DocumentNode } from 'graphql'
import {
  BaseGeneratedSchema,
  NhostGraphqlRequestConfig,
  NhostGraphqlRequestResponse
} from '../../client/client.types'
import generateGraphqlQuery from '../generateGraphqlQuery'
import prepareQueryFields, { QueryArgs } from '../prepareQueryFields'

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
        const { scalar: scalarFields } = prepareQueryFields(generatedSchema, queryName)

        const graphqlQuery = generateGraphqlQuery({
          name: queryName,
          returnFields: scalarFields,
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
