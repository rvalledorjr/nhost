import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { DocumentNode, GraphQLError, parse, print } from 'graphql'
import pascalCase from 'just-pascal-case'
import type {
  BaseGeneratedSchema,
  DeprecatedNhostGraphqlRequestResponse,
  NhostGraphqlConstructorParams,
  NhostGraphqlRequestConfig,
  NhostGraphqlRequestResponse
} from './client.types'

export function prepareFields<S extends BaseGeneratedSchema = any>(
  generatedSchema: S,
  key: keyof S,
  previousKey?: string,
  existingKeys: string[] = []
) {
  const { query: generatedQueries } = generatedSchema
  const currentQuery =
    generatedSchema[generatedQueries[key as string]?.__type?.replace(/(!|\[|\])/g, '')]
  const availableReturnValues = Object.keys(currentQuery || {})

  const { scalar, nonScalar } = availableReturnValues.reduce(
    (currentValues, returnValue) => {
      const type = currentQuery[returnValue].__type.replace(/(!|\[|\])/g, '')

      if (Object.keys(generatedSchema).includes(type)) {
        if (existingKeys.includes(type)) {
          return currentValues
        }

        return {
          ...currentValues,
          nonScalar: [...currentValues.nonScalar, type]
        }
      }

      return {
        ...currentValues,
        scalar: [
          ...currentValues.scalar,
          previousKey ? `${previousKey}.${returnValue}` : returnValue
        ]
      }
    },
    { scalar: [] as string[], nonScalar: [] as string[] }
  )

  return { scalar, nonScalar }
}

function createQueryClient<Q extends object = any>(generatedSchema: BaseGeneratedSchema) {
  const { query: generatedQueries } = generatedSchema

  return Object.keys(generatedQueries).reduce(
    (queryClient, queryName) => ({
      ...queryClient,
      [queryName]: (args?: typeof generatedQueries[typeof queryName]['__args']) => {
        const { scalar: scalarFields, nonScalar: nonScalarFields } = prepareFields(
          generatedSchema,
          queryName
        )

        return {
          ...nonScalarFields.reduce(
            (currentFunctions, nonScalarField) => ({
              ...currentFunctions,
              [nonScalarField]: (
                nestedArgs?: typeof generatedQueries[typeof nonScalarField]['__args']
              ) => {
                return {
                  returnAll: () => {
                    const { scalar: nestedScalarFields, nonScalar: nestedNonScalarFields } =
                      prepareFields(generatedSchema, nonScalarField)

                    return print(
                      parse(
                        `query ${pascalCase(nonScalarField)}${
                          nestedArgs
                            ? `(${Object.keys(nestedArgs)
                                .map(
                                  (key) =>
                                    `$${key}: ${generatedQueries[nonScalarField].__args?.[key]}`
                                )
                                .join(', ')})`
                            : ''
                        } { ${nonScalarField}${
                          nestedArgs
                            ? `(${Object.keys(nestedArgs)
                                .map((key) => `${key}: $${key}`)
                                .join(', ')})`
                            : ''
                        } { ${nestedScalarFields.join(' ')} }}`
                      )
                    )
                  }
                }
              }
            }),
            {}
          ),
          returnAll: () => {
            return print(
              parse(
                `query ${pascalCase(queryName)}${
                  args
                    ? `(${Object.keys(args)
                        .map((key) => `$${key}: ${generatedQueries[queryName].__args?.[key]}`)
                        .join(', ')})`
                    : ''
                } { ${queryName}${
                  args
                    ? `(${Object.keys(args)
                        .map((key) => `${key}: $${key}`)
                        .join(', ')})`
                    : ''
                } { ${scalarFields.join(' ')} }}`
              )
            )
          }
        }
      }
    }),
    {} as Q
  )
}

/**
 * @alias GraphQL
 */
export class NhostGraphQlClient<
  GeneratedQuery extends object = any,
  GeneratedMutation extends object = any,
  GeneratedSubscription extends object = any
> {
  readonly url: string
  private instance: AxiosInstance
  private accessToken: string | null
  private adminSecret?: string

  query?: GeneratedQuery
  mutation?: GeneratedMutation
  subscription?: GeneratedSubscription

  constructor(params: NhostGraphqlConstructorParams) {
    const { url, adminSecret } = params

    this.url = url
    this.accessToken = null
    this.adminSecret = adminSecret
    this.instance = axios.create({
      baseURL: url
    })

    this.query = params.generatedSchema
      ? createQueryClient<GeneratedQuery>(params.generatedSchema)
      : undefined
  }

  /** @deprecated Axios will be replaced by cross-fetch in the near future. Only the headers configuration will be kept. */
  async request<T = any, V = any>(
    document: string | DocumentNode,
    variables?: V,
    config?: (AxiosRequestConfig | NhostGraphqlRequestConfig) & { useAxios?: true }
  ): Promise<DeprecatedNhostGraphqlRequestResponse<T>>

  async request<T = any, V = any>(
    document: string | DocumentNode,
    variables?: V,
    config?: NhostGraphqlRequestConfig & { useAxios: false }
  ): Promise<NhostGraphqlRequestResponse<T>>

  /**
   * Use `nhost.graphql.request` to send a GraphQL request. For more serious GraphQL usage we recommend using a GraphQL client such as Apollo Client (https://www.apollographql.com/docs/react).
   *
   * @example
   * ```ts
   * const CUSTOMERS = gql`
   *  query {
   *   customers {
   *    id
   *    name
   *  }
   * }
   * `
   * const { data, error } = await nhost.graphql.request(CUSTOMERS)
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/nhost-js/graphql/request
   */
  async request<T = any, V = any>(
    document: string | DocumentNode,
    variables?: V,
    {
      useAxios = true,
      ...config
    }: (AxiosRequestConfig | NhostGraphqlRequestConfig) & { useAxios?: boolean } = {}
  ): Promise<DeprecatedNhostGraphqlRequestResponse<T> | NhostGraphqlRequestResponse<T>> {
    // add auth headers if any
    const headers = {
      'Accept-Encoding': '*',
      ...this.generateAccessTokenHeaders(),
      ...config?.headers
    }

    try {
      const operationName = ''
      const res = await this.instance.post<{
        errors?: GraphQLError[]
        data?: T
      }>(
        '',
        {
          operationName: operationName || undefined,
          query: typeof document === 'string' ? document : print(document),
          variables
        },
        { ...config, headers }
      )

      const responseData = res.data
      const { data } = responseData

      if (responseData.errors) {
        return {
          data: null,
          error: responseData.errors
        }
      }

      if (typeof data !== 'object' || Array.isArray(data) || data === null) {
        if (useAxios) {
          return {
            data: null,
            error: new Error('incorrect response data from GraphQL server')
          }
        }
        return {
          data: null,
          error: {
            error: 'invalid-response',
            status: 0,
            message: 'incorrect response data from GraphQL server'
          }
        }
      }

      return { data, error: null }
    } catch (error) {
      console.error(error)
      if (useAxios) {
        if (error instanceof Error) {
          return { data: null, error }
        }
        return {
          data: null,
          error: new Error('Unable to get do GraphQL request')
        }
      }

      const axiosError = error as AxiosError
      return {
        data: null,
        error: {
          error: axiosError.code || 'unknown',
          status: axiosError.status || 0,
          message: axiosError.message
        }
      }
    }
  }

  /**
   * Use `nhost.graphql.getUrl` to get the GraphQL URL.
   *
   * @example
   * ```ts
   * const url = nhost.graphql.getUrl();
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/nhost-js/graphql/get-url
   */
  getUrl(): string {
    return this.url
  }

  /**
   * Use `nhost.graphql.setAccessToken` to a set an access token to be used in subsequent graphql requests. Note that if you're signin in users with `nhost.auth.signIn()` the access token will be set automatically.
   *
   * @example
   * ```ts
   * nhost.graphql.setAccessToken('some-access-token')
   * ```
   *
   * @docs https://docs.nhost.io/reference/javascript/nhost-js/graphql/set-access-token
   */
  setAccessToken(accessToken: string | undefined) {
    if (!accessToken) {
      this.accessToken = null
      return
    }

    this.accessToken = accessToken
  }

  private generateAccessTokenHeaders(): Record<string, string> {
    if (this.adminSecret) {
      return {
        'x-hasura-admin-secret': this.adminSecret
      }
    }
    if (this.accessToken) {
      return {
        Authorization: `Bearer ${this.accessToken}`
      }
    }
    return {}
  }
}
