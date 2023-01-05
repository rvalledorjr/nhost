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

export interface general_comparison_exp<T extends keyof Scalars> {
  _eq?: Maybe<Scalars[T]>
  _gt?: Maybe<Scalars[T]>
  _gte?: Maybe<Scalars[T]>
  _in?: Maybe<Array<Scalars[T]>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars[T]>
  _lte?: Maybe<Scalars[T]>
  _neq?: Maybe<Scalars[T]>
  _nin?: Maybe<Array<Scalars[T]>>
}

export type Boolean_comparison_exp = general_comparison_exp<'Boolean'>
export type Int_comparison_exp = general_comparison_exp<'Int'>
export type timestamptz_comparison_exp = general_comparison_exp<'timestamptz'>
export type uuid_comparison_exp = general_comparison_exp<'uuid'>
export type String_comparison_exp = general_comparison_exp<'String'> & {
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

export type BooleanExpression<T> = {
  [P in keyof T]: T[P] extends Scalars['ID']
    ? String_comparison_exp
    : T[P] extends Scalars['String']
    ? String_comparison_exp
    : T[P] extends Scalars['Int']
    ? Int_comparison_exp
    : T[P] extends Scalars['Float']
    ? Int_comparison_exp
    : T[P] extends Scalars['Boolean']
    ? Boolean_comparison_exp
    : T[P] extends Scalars['uuid']
    ? uuid_comparison_exp
    : T[P] extends Scalars['timestamptz']
    ? timestamptz_comparison_exp
    : String_comparison_exp
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

// These types will be generated based on the schema

export interface Author {
  id: Scalars['uuid']
  name: Scalars['String']
}

export interface Query {
  authors: (args?: ListQueryArgs<Author>) => Promise<Partial<Author>[]>
}

export const generatedSchema = {
  Boolean_comparison_exp: {
    _eq: { __type: 'Boolean' },
    _gt: { __type: 'Boolean' },
    _gte: { __type: 'Boolean' },
    _in: { __type: '[Boolean!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'Boolean' },
    _lte: { __type: 'Boolean' },
    _neq: { __type: 'Boolean' },
    _nin: { __type: '[Boolean!]' }
  },
  Int_comparison_exp: {
    _eq: { __type: 'Int' },
    _gt: { __type: 'Int' },
    _gte: { __type: 'Int' },
    _in: { __type: '[Int!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'Int' },
    _lte: { __type: 'Int' },
    _neq: { __type: 'Int' },
    _nin: { __type: '[Int!]' }
  },
  String_comparison_exp: {
    _eq: { __type: 'String' },
    _gt: { __type: 'String' },
    _gte: { __type: 'String' },
    _ilike: { __type: 'String' },
    _in: { __type: '[String!]' },
    _iregex: { __type: 'String' },
    _is_null: { __type: 'Boolean' },
    _like: { __type: 'String' },
    _lt: { __type: 'String' },
    _lte: { __type: 'String' },
    _neq: { __type: 'String' },
    _nilike: { __type: 'String' },
    _nin: { __type: '[String!]' },
    _niregex: { __type: 'String' },
    _nlike: { __type: 'String' },
    _nregex: { __type: 'String' },
    _nsimilar: { __type: 'String' },
    _regex: { __type: 'String' },
    _similar: { __type: 'String' }
  },
  authors: {
    __typename: { __type: 'String!' },
    id: { __type: 'uuid!' },
    name: { __type: 'String!' }
  },
  authors_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'authors_aggregate_fields' },
    nodes: { __type: '[authors!]!' }
  },
  authors_aggregate_bool_exp: {
    count: { __type: 'authors_aggregate_bool_exp_count' }
  },
  authors_aggregate_bool_exp_count: {
    arguments: { __type: '[authors_select_column!]' },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'authors_bool_exp' },
    predicate: { __type: 'Int_comparison_exp!' }
  },
  authors_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[authors_select_column!]', distinct: 'Boolean' }
    },
    max: { __type: 'authors_max_fields' },
    min: { __type: 'authors_min_fields' }
  },
  authors_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'authors_max_order_by' },
    min: { __type: 'authors_min_order_by' }
  },
  authors_arr_rel_insert_input: {
    data: { __type: '[authors_insert_input!]!' },
    on_conflict: { __type: 'authors_on_conflict' }
  },
  authors_bool_exp: {
    _and: { __type: '[authors_bool_exp!]' },
    _not: { __type: 'authors_bool_exp' },
    _or: { __type: '[authors_bool_exp!]' },
    id: { __type: 'uuid_comparison_exp' },
    name: { __type: 'String_comparison_exp' }
  },
  authors_insert_input: {
    id: { __type: 'uuid' },
    name: { __type: 'String' }
  },
  authors_max_fields: {
    __typename: { __type: 'String!' },
    expiration_date: { __type: 'date' },
    from_email: { __type: 'String' },
    id: { __type: 'uuid' },
    message: { __type: 'String' },
    phone_number: { __type: 'String' },
    project_id: { __type: 'uuid' },
    subject: { __type: 'String' }
  },
  authors_max_order_by: {
    expiration_date: { __type: 'order_by' },
    from_email: { __type: 'order_by' },
    id: { __type: 'order_by' },
    message: { __type: 'order_by' },
    phone_number: { __type: 'order_by' },
    project_id: { __type: 'order_by' },
    subject: { __type: 'order_by' }
  },
  authors_min_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'uuid' },
    name: { __type: 'String' }
  },
  authors_min_order_by: {
    id: { __type: 'order_by' },
    name: { __type: 'order_by' }
  },
  authors_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[authors!]!' }
  },
  authors_on_conflict: {
    constraint: { __type: 'authors_constraint!' },
    update_columns: { __type: '[authors_update_column!]!' },
    where: { __type: 'authors_bool_exp' }
  },
  authors_order_by: {
    id: { __type: 'order_by' },
    name: { __type: 'order_by' }
  },
  authors_pk_columns_input: { id: { __type: 'uuid!' } },
  authors_set_input: {
    id: { __type: 'uuid' },
    name: { __type: 'String' }
  },
  authors_stream_cursor_input: {
    initial_value: { __type: 'authors_stream_cursor_value_input!' },
    ordering: { __type: 'cursor_ordering' }
  },
  authors_stream_cursor_value_input: {
    id: { __type: 'uuid' },
    name: { __type: 'String' }
  },
  authors_updates: {
    _set: { __type: 'authors_set_input' },
    where: { __type: 'authors_bool_exp!' }
  },
  mutation: {
    __typename: { __type: 'String!' }
  },
  query: {
    __typename: { __type: 'String!' },
    authors: {
      __type: '[authors!]!',
      __args: {
        distinct_on: '[authors_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authors_order_by!]',
        where: 'authors_bool_exp'
      }
    },
    authors_aggregate: {
      __type: 'authors_aggregate!',
      __args: {
        distinct_on: '[authors_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authors_order_by!]',
        where: 'authors_bool_exp'
      }
    },
    authors_by_pk: { __type: 'authors', __args: { id: 'uuid!' } }
  },
  subscription: {
    __typename: { __type: 'String!' }
  },
  uuid_comparison_exp: {
    _eq: { __type: 'uuid' },
    _gt: { __type: 'uuid' },
    _gte: { __type: 'uuid' },
    _in: { __type: '[uuid!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'uuid' },
    _lte: { __type: 'uuid' },
    _neq: { __type: 'uuid' },
    _nin: { __type: '[uuid!]' }
  }
} as const
