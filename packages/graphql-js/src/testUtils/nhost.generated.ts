/**
 * query Messages {
 *   messages {
 *     id
 *     message
 *     author {
 *       id
 *     }
 *   }
 * }
 */

// This should be auto-generated based on the results of the schema
// introspection

export type Maybe<T> = T | null

export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bigint: any
  bytea: any
  citext: any
  date: any
  jsonb: any
  timestamptz: any
  uuid: any
}

export interface general_comparison_exp {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
}

export interface timestamptz_comparison_exp {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

export interface uuid_comparison_exp {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}

export type BooleanExpression<T> = {
  [P in keyof T]: T[P] extends Scalars['uuid']
    ? uuid_comparison_exp
    : T[P] extends Scalars['timestamptz']
    ? timestamptz_comparison_exp
    : general_comparison_exp
} & {
  _and?: Maybe<Array<BooleanExpression<T>>>
  _not?: Maybe<BooleanExpression<T>>
  _or?: Maybe<Array<BooleanExpression<T>>>
}

export enum order_by {
  /** in ascending order, nulls last */
  asc = 'asc',
  /** in ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in descending order, nulls first */
  desc = 'desc',
  /** in descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last'
}

export type OrderByExpression<T> = { [P in keyof T]?: order_by }

export interface ListQueryArgs<T> {
  distinct_on?: Maybe<Array<keyof T>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<OrderByExpression<T> | Array<OrderByExpression<T>>>
  where?: Maybe<BooleanExpression<Partial<T>>>
}

export interface Message {
  id: Scalars['uuid']
  message: Scalars['String']
}

export interface Query {
  messages: (args?: ListQueryArgs<Message>) => Promise<Partial<Message>>
  // message_by_pk: (args?: { id: })
  // projects: () => Promise<void>
}
