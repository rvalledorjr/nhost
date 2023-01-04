import { GraphQLError } from 'graphql'

export interface ErrorPayload {
  error: string
  status: number
  message: string
}

export interface BaseGeneratedSchema extends Record<string, any> {
  query: Record<string, { __type: string; __args?: Record<string, string> }>
  mutation: object
  subscription: object
}

export interface NhostGraphqlConstructorParams {
  /**
   * GraphQL endpoint.
   */
  url: string
  /**
   * Generated schema. When set, it is used to provide type safety for the `query` and `mutation` methods.
   */
  generatedSchema?: BaseGeneratedSchema
  /**
   * Admin secret. When set, it is sent as an `x-hasura-admin-secret` header for all requests.
   */
  adminSecret?: string
}

export type NhostGraphqlRequestResponse<T = unknown> =
  | {
      data: null
      error: GraphQLError[] | ErrorPayload
    }
  | {
      data: T
      error: null
    }

/**@deprecated */
export type DeprecatedNhostGraphqlRequestResponse<T = unknown> =
  | {
      data: null
      error: Error | object | object[]
    }
  | {
      data: T
      error: null
    }

/** Subset of RequestInit parameters that are supported by the graphql client */
export interface NhostGraphqlRequestConfig {
  headers?: Record<string, string>
}
