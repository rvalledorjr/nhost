import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

// This object will be generated based on the introspection results

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
    _nin: { __type: '[Boolean!]' },
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
    _nin: { __type: '[Int!]' },
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
    _similar: { __type: 'String' },
  },
  authProviderRequests: {
    __typename: { __type: 'String!' },
    id: { __type: 'uuid!' },
    options: { __type: 'jsonb', __args: { path: 'String' } },
  },
  authProviderRequests_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'authProviderRequests_aggregate_fields' },
    nodes: { __type: '[authProviderRequests!]!' },
  },
  authProviderRequests_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: {
        columns: '[authProviderRequests_select_column!]',
        distinct: 'Boolean',
      },
    },
    max: { __type: 'authProviderRequests_max_fields' },
    min: { __type: 'authProviderRequests_min_fields' },
  },
  authProviderRequests_append_input: { options: { __type: 'jsonb' } },
  authProviderRequests_bool_exp: {
    _and: { __type: '[authProviderRequests_bool_exp!]' },
    _not: { __type: 'authProviderRequests_bool_exp' },
    _or: { __type: '[authProviderRequests_bool_exp!]' },
    id: { __type: 'uuid_comparison_exp' },
    options: { __type: 'jsonb_comparison_exp' },
  },
  authProviderRequests_delete_at_path_input: {
    options: { __type: '[String!]' },
  },
  authProviderRequests_delete_elem_input: { options: { __type: 'Int' } },
  authProviderRequests_delete_key_input: { options: { __type: 'String' } },
  authProviderRequests_insert_input: {
    id: { __type: 'uuid' },
    options: { __type: 'jsonb' },
  },
  authProviderRequests_max_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'uuid' },
  },
  authProviderRequests_min_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'uuid' },
  },
  authProviderRequests_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[authProviderRequests!]!' },
  },
  authProviderRequests_on_conflict: {
    constraint: { __type: 'authProviderRequests_constraint!' },
    update_columns: { __type: '[authProviderRequests_update_column!]!' },
    where: { __type: 'authProviderRequests_bool_exp' },
  },
  authProviderRequests_order_by: {
    id: { __type: 'order_by' },
    options: { __type: 'order_by' },
  },
  authProviderRequests_pk_columns_input: { id: { __type: 'uuid!' } },
  authProviderRequests_prepend_input: { options: { __type: 'jsonb' } },
  authProviderRequests_set_input: {
    id: { __type: 'uuid' },
    options: { __type: 'jsonb' },
  },
  authProviderRequests_stream_cursor_input: {
    initial_value: {
      __type: 'authProviderRequests_stream_cursor_value_input!',
    },
    ordering: { __type: 'cursor_ordering' },
  },
  authProviderRequests_stream_cursor_value_input: {
    id: { __type: 'uuid' },
    options: { __type: 'jsonb' },
  },
  authProviderRequests_updates: {
    _append: { __type: 'authProviderRequests_append_input' },
    _delete_at_path: { __type: 'authProviderRequests_delete_at_path_input' },
    _delete_elem: { __type: 'authProviderRequests_delete_elem_input' },
    _delete_key: { __type: 'authProviderRequests_delete_key_input' },
    _prepend: { __type: 'authProviderRequests_prepend_input' },
    _set: { __type: 'authProviderRequests_set_input' },
    where: { __type: 'authProviderRequests_bool_exp!' },
  },
  authProviders: {
    __typename: { __type: 'String!' },
    id: { __type: 'String!' },
    userProviders: {
      __type: '[authUserProviders!]!',
      __args: {
        distinct_on: '[authUserProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserProviders_order_by!]',
        where: 'authUserProviders_bool_exp',
      },
    },
    userProviders_aggregate: {
      __type: 'authUserProviders_aggregate!',
      __args: {
        distinct_on: '[authUserProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserProviders_order_by!]',
        where: 'authUserProviders_bool_exp',
      },
    },
  },
  authProviders_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'authProviders_aggregate_fields' },
    nodes: { __type: '[authProviders!]!' },
  },
  authProviders_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: {
        columns: '[authProviders_select_column!]',
        distinct: 'Boolean',
      },
    },
    max: { __type: 'authProviders_max_fields' },
    min: { __type: 'authProviders_min_fields' },
  },
  authProviders_bool_exp: {
    _and: { __type: '[authProviders_bool_exp!]' },
    _not: { __type: 'authProviders_bool_exp' },
    _or: { __type: '[authProviders_bool_exp!]' },
    id: { __type: 'String_comparison_exp' },
    userProviders: { __type: 'authUserProviders_bool_exp' },
    userProviders_aggregate: { __type: 'authUserProviders_aggregate_bool_exp' },
  },
  authProviders_insert_input: {
    id: { __type: 'String' },
    userProviders: { __type: 'authUserProviders_arr_rel_insert_input' },
  },
  authProviders_max_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
  },
  authProviders_min_fields: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
  },
  authProviders_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[authProviders!]!' },
  },
  authProviders_obj_rel_insert_input: {
    data: { __type: 'authProviders_insert_input!' },
    on_conflict: { __type: 'authProviders_on_conflict' },
  },
  authProviders_on_conflict: {
    constraint: { __type: 'authProviders_constraint!' },
    update_columns: { __type: '[authProviders_update_column!]!' },
    where: { __type: 'authProviders_bool_exp' },
  },
  authProviders_order_by: {
    id: { __type: 'order_by' },
    userProviders_aggregate: { __type: 'authUserProviders_aggregate_order_by' },
  },
  authProviders_pk_columns_input: { id: { __type: 'String!' } },
  authProviders_set_input: { id: { __type: 'String' } },
  authProviders_stream_cursor_input: {
    initial_value: { __type: 'authProviders_stream_cursor_value_input!' },
    ordering: { __type: 'cursor_ordering' },
  },
  authProviders_stream_cursor_value_input: { id: { __type: 'String' } },
  authProviders_updates: {
    _set: { __type: 'authProviders_set_input' },
    where: { __type: 'authProviders_bool_exp!' },
  },
  authRefreshTokens: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'timestamptz!' },
    expiresAt: { __type: 'timestamptz!' },
    refreshToken: { __type: 'uuid!' },
    user: { __type: 'users!' },
    userId: { __type: 'uuid!' },
  },
  authRefreshTokens_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'authRefreshTokens_aggregate_fields' },
    nodes: { __type: '[authRefreshTokens!]!' },
  },
  authRefreshTokens_aggregate_bool_exp: {
    count: { __type: 'authRefreshTokens_aggregate_bool_exp_count' },
  },
  authRefreshTokens_aggregate_bool_exp_count: {
    arguments: { __type: '[authRefreshTokens_select_column!]' },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'authRefreshTokens_bool_exp' },
    predicate: { __type: 'Int_comparison_exp!' },
  },
  authRefreshTokens_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: {
        columns: '[authRefreshTokens_select_column!]',
        distinct: 'Boolean',
      },
    },
    max: { __type: 'authRefreshTokens_max_fields' },
    min: { __type: 'authRefreshTokens_min_fields' },
  },
  authRefreshTokens_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'authRefreshTokens_max_order_by' },
    min: { __type: 'authRefreshTokens_min_order_by' },
  },
  authRefreshTokens_arr_rel_insert_input: {
    data: { __type: '[authRefreshTokens_insert_input!]!' },
    on_conflict: { __type: 'authRefreshTokens_on_conflict' },
  },
  authRefreshTokens_bool_exp: {
    _and: { __type: '[authRefreshTokens_bool_exp!]' },
    _not: { __type: 'authRefreshTokens_bool_exp' },
    _or: { __type: '[authRefreshTokens_bool_exp!]' },
    createdAt: { __type: 'timestamptz_comparison_exp' },
    expiresAt: { __type: 'timestamptz_comparison_exp' },
    refreshToken: { __type: 'uuid_comparison_exp' },
    user: { __type: 'users_bool_exp' },
    userId: { __type: 'uuid_comparison_exp' },
  },
  authRefreshTokens_insert_input: {
    createdAt: { __type: 'timestamptz' },
    expiresAt: { __type: 'timestamptz' },
    refreshToken: { __type: 'uuid' },
    user: { __type: 'users_obj_rel_insert_input' },
    userId: { __type: 'uuid' },
  },
  authRefreshTokens_max_fields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'timestamptz' },
    expiresAt: { __type: 'timestamptz' },
    refreshToken: { __type: 'uuid' },
    userId: { __type: 'uuid' },
  },
  authRefreshTokens_max_order_by: {
    createdAt: { __type: 'order_by' },
    expiresAt: { __type: 'order_by' },
    refreshToken: { __type: 'order_by' },
    userId: { __type: 'order_by' },
  },
  authRefreshTokens_min_fields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'timestamptz' },
    expiresAt: { __type: 'timestamptz' },
    refreshToken: { __type: 'uuid' },
    userId: { __type: 'uuid' },
  },
  authRefreshTokens_min_order_by: {
    createdAt: { __type: 'order_by' },
    expiresAt: { __type: 'order_by' },
    refreshToken: { __type: 'order_by' },
    userId: { __type: 'order_by' },
  },
  authRefreshTokens_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[authRefreshTokens!]!' },
  },
  authRefreshTokens_on_conflict: {
    constraint: { __type: 'authRefreshTokens_constraint!' },
    update_columns: { __type: '[authRefreshTokens_update_column!]!' },
    where: { __type: 'authRefreshTokens_bool_exp' },
  },
  authRefreshTokens_order_by: {
    createdAt: { __type: 'order_by' },
    expiresAt: { __type: 'order_by' },
    refreshToken: { __type: 'order_by' },
    user: { __type: 'users_order_by' },
    userId: { __type: 'order_by' },
  },
  authRefreshTokens_pk_columns_input: { refreshToken: { __type: 'uuid!' } },
  authRefreshTokens_set_input: {
    createdAt: { __type: 'timestamptz' },
    expiresAt: { __type: 'timestamptz' },
    refreshToken: { __type: 'uuid' },
    userId: { __type: 'uuid' },
  },
  authRefreshTokens_stream_cursor_input: {
    initial_value: { __type: 'authRefreshTokens_stream_cursor_value_input!' },
    ordering: { __type: 'cursor_ordering' },
  },
  authRefreshTokens_stream_cursor_value_input: {
    createdAt: { __type: 'timestamptz' },
    expiresAt: { __type: 'timestamptz' },
    refreshToken: { __type: 'uuid' },
    userId: { __type: 'uuid' },
  },
  authRefreshTokens_updates: {
    _set: { __type: 'authRefreshTokens_set_input' },
    where: { __type: 'authRefreshTokens_bool_exp!' },
  },
  authRoles: {
    __typename: { __type: 'String!' },
    role: { __type: 'String!' },
    userRoles: {
      __type: '[authUserRoles!]!',
      __args: {
        distinct_on: '[authUserRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserRoles_order_by!]',
        where: 'authUserRoles_bool_exp',
      },
    },
    userRoles_aggregate: {
      __type: 'authUserRoles_aggregate!',
      __args: {
        distinct_on: '[authUserRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserRoles_order_by!]',
        where: 'authUserRoles_bool_exp',
      },
    },
    usersByDefaultRole: {
      __type: '[users!]!',
      __args: {
        distinct_on: '[users_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[users_order_by!]',
        where: 'users_bool_exp',
      },
    },
    usersByDefaultRole_aggregate: {
      __type: 'users_aggregate!',
      __args: {
        distinct_on: '[users_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[users_order_by!]',
        where: 'users_bool_exp',
      },
    },
  },
  authRoles_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'authRoles_aggregate_fields' },
    nodes: { __type: '[authRoles!]!' },
  },
  authRoles_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[authRoles_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'authRoles_max_fields' },
    min: { __type: 'authRoles_min_fields' },
  },
  authRoles_bool_exp: {
    _and: { __type: '[authRoles_bool_exp!]' },
    _not: { __type: 'authRoles_bool_exp' },
    _or: { __type: '[authRoles_bool_exp!]' },
    role: { __type: 'String_comparison_exp' },
    userRoles: { __type: 'authUserRoles_bool_exp' },
    userRoles_aggregate: { __type: 'authUserRoles_aggregate_bool_exp' },
    usersByDefaultRole: { __type: 'users_bool_exp' },
    usersByDefaultRole_aggregate: { __type: 'users_aggregate_bool_exp' },
  },
  authRoles_insert_input: {
    role: { __type: 'String' },
    userRoles: { __type: 'authUserRoles_arr_rel_insert_input' },
    usersByDefaultRole: { __type: 'users_arr_rel_insert_input' },
  },
  authRoles_max_fields: {
    __typename: { __type: 'String!' },
    role: { __type: 'String' },
  },
  authRoles_min_fields: {
    __typename: { __type: 'String!' },
    role: { __type: 'String' },
  },
  authRoles_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[authRoles!]!' },
  },
  authRoles_obj_rel_insert_input: {
    data: { __type: 'authRoles_insert_input!' },
    on_conflict: { __type: 'authRoles_on_conflict' },
  },
  authRoles_on_conflict: {
    constraint: { __type: 'authRoles_constraint!' },
    update_columns: { __type: '[authRoles_update_column!]!' },
    where: { __type: 'authRoles_bool_exp' },
  },
  authRoles_order_by: {
    role: { __type: 'order_by' },
    userRoles_aggregate: { __type: 'authUserRoles_aggregate_order_by' },
    usersByDefaultRole_aggregate: { __type: 'users_aggregate_order_by' },
  },
  authRoles_pk_columns_input: { role: { __type: 'String!' } },
  authRoles_set_input: { role: { __type: 'String' } },
  authRoles_stream_cursor_input: {
    initial_value: { __type: 'authRoles_stream_cursor_value_input!' },
    ordering: { __type: 'cursor_ordering' },
  },
  authRoles_stream_cursor_value_input: { role: { __type: 'String' } },
  authRoles_updates: {
    _set: { __type: 'authRoles_set_input' },
    where: { __type: 'authRoles_bool_exp!' },
  },
  authUserProviders: {
    __typename: { __type: 'String!' },
    accessToken: { __type: 'String!' },
    createdAt: { __type: 'timestamptz!' },
    id: { __type: 'uuid!' },
    provider: { __type: 'authProviders!' },
    providerId: { __type: 'String!' },
    providerUserId: { __type: 'String!' },
    refreshToken: { __type: 'String' },
    updatedAt: { __type: 'timestamptz!' },
    user: { __type: 'users!' },
    userId: { __type: 'uuid!' },
  },
  authUserProviders_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'authUserProviders_aggregate_fields' },
    nodes: { __type: '[authUserProviders!]!' },
  },
  authUserProviders_aggregate_bool_exp: {
    count: { __type: 'authUserProviders_aggregate_bool_exp_count' },
  },
  authUserProviders_aggregate_bool_exp_count: {
    arguments: { __type: '[authUserProviders_select_column!]' },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'authUserProviders_bool_exp' },
    predicate: { __type: 'Int_comparison_exp!' },
  },
  authUserProviders_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: {
        columns: '[authUserProviders_select_column!]',
        distinct: 'Boolean',
      },
    },
    max: { __type: 'authUserProviders_max_fields' },
    min: { __type: 'authUserProviders_min_fields' },
  },
  authUserProviders_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'authUserProviders_max_order_by' },
    min: { __type: 'authUserProviders_min_order_by' },
  },
  authUserProviders_arr_rel_insert_input: {
    data: { __type: '[authUserProviders_insert_input!]!' },
    on_conflict: { __type: 'authUserProviders_on_conflict' },
  },
  authUserProviders_bool_exp: {
    _and: { __type: '[authUserProviders_bool_exp!]' },
    _not: { __type: 'authUserProviders_bool_exp' },
    _or: { __type: '[authUserProviders_bool_exp!]' },
    accessToken: { __type: 'String_comparison_exp' },
    createdAt: { __type: 'timestamptz_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    provider: { __type: 'authProviders_bool_exp' },
    providerId: { __type: 'String_comparison_exp' },
    providerUserId: { __type: 'String_comparison_exp' },
    refreshToken: { __type: 'String_comparison_exp' },
    updatedAt: { __type: 'timestamptz_comparison_exp' },
    user: { __type: 'users_bool_exp' },
    userId: { __type: 'uuid_comparison_exp' },
  },
  authUserProviders_insert_input: {
    accessToken: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    id: { __type: 'uuid' },
    provider: { __type: 'authProviders_obj_rel_insert_input' },
    providerId: { __type: 'String' },
    providerUserId: { __type: 'String' },
    refreshToken: { __type: 'String' },
    updatedAt: { __type: 'timestamptz' },
    user: { __type: 'users_obj_rel_insert_input' },
    userId: { __type: 'uuid' },
  },
  authUserProviders_max_fields: {
    __typename: { __type: 'String!' },
    accessToken: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    id: { __type: 'uuid' },
    providerId: { __type: 'String' },
    providerUserId: { __type: 'String' },
    refreshToken: { __type: 'String' },
    updatedAt: { __type: 'timestamptz' },
    userId: { __type: 'uuid' },
  },
  authUserProviders_max_order_by: {
    accessToken: { __type: 'order_by' },
    createdAt: { __type: 'order_by' },
    id: { __type: 'order_by' },
    providerId: { __type: 'order_by' },
    providerUserId: { __type: 'order_by' },
    refreshToken: { __type: 'order_by' },
    updatedAt: { __type: 'order_by' },
    userId: { __type: 'order_by' },
  },
  authUserProviders_min_fields: {
    __typename: { __type: 'String!' },
    accessToken: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    id: { __type: 'uuid' },
    providerId: { __type: 'String' },
    providerUserId: { __type: 'String' },
    refreshToken: { __type: 'String' },
    updatedAt: { __type: 'timestamptz' },
    userId: { __type: 'uuid' },
  },
  authUserProviders_min_order_by: {
    accessToken: { __type: 'order_by' },
    createdAt: { __type: 'order_by' },
    id: { __type: 'order_by' },
    providerId: { __type: 'order_by' },
    providerUserId: { __type: 'order_by' },
    refreshToken: { __type: 'order_by' },
    updatedAt: { __type: 'order_by' },
    userId: { __type: 'order_by' },
  },
  authUserProviders_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[authUserProviders!]!' },
  },
  authUserProviders_on_conflict: {
    constraint: { __type: 'authUserProviders_constraint!' },
    update_columns: { __type: '[authUserProviders_update_column!]!' },
    where: { __type: 'authUserProviders_bool_exp' },
  },
  authUserProviders_order_by: {
    accessToken: { __type: 'order_by' },
    createdAt: { __type: 'order_by' },
    id: { __type: 'order_by' },
    provider: { __type: 'authProviders_order_by' },
    providerId: { __type: 'order_by' },
    providerUserId: { __type: 'order_by' },
    refreshToken: { __type: 'order_by' },
    updatedAt: { __type: 'order_by' },
    user: { __type: 'users_order_by' },
    userId: { __type: 'order_by' },
  },
  authUserProviders_pk_columns_input: { id: { __type: 'uuid!' } },
  authUserProviders_set_input: {
    accessToken: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    id: { __type: 'uuid' },
    providerId: { __type: 'String' },
    providerUserId: { __type: 'String' },
    refreshToken: { __type: 'String' },
    updatedAt: { __type: 'timestamptz' },
    userId: { __type: 'uuid' },
  },
  authUserProviders_stream_cursor_input: {
    initial_value: { __type: 'authUserProviders_stream_cursor_value_input!' },
    ordering: { __type: 'cursor_ordering' },
  },
  authUserProviders_stream_cursor_value_input: {
    accessToken: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    id: { __type: 'uuid' },
    providerId: { __type: 'String' },
    providerUserId: { __type: 'String' },
    refreshToken: { __type: 'String' },
    updatedAt: { __type: 'timestamptz' },
    userId: { __type: 'uuid' },
  },
  authUserProviders_updates: {
    _set: { __type: 'authUserProviders_set_input' },
    where: { __type: 'authUserProviders_bool_exp!' },
  },
  authUserRoles: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'timestamptz!' },
    id: { __type: 'uuid!' },
    role: { __type: 'String!' },
    roleByRole: { __type: 'authRoles!' },
    user: { __type: 'users!' },
    userId: { __type: 'uuid!' },
  },
  authUserRoles_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'authUserRoles_aggregate_fields' },
    nodes: { __type: '[authUserRoles!]!' },
  },
  authUserRoles_aggregate_bool_exp: {
    count: { __type: 'authUserRoles_aggregate_bool_exp_count' },
  },
  authUserRoles_aggregate_bool_exp_count: {
    arguments: { __type: '[authUserRoles_select_column!]' },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'authUserRoles_bool_exp' },
    predicate: { __type: 'Int_comparison_exp!' },
  },
  authUserRoles_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: {
        columns: '[authUserRoles_select_column!]',
        distinct: 'Boolean',
      },
    },
    max: { __type: 'authUserRoles_max_fields' },
    min: { __type: 'authUserRoles_min_fields' },
  },
  authUserRoles_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'authUserRoles_max_order_by' },
    min: { __type: 'authUserRoles_min_order_by' },
  },
  authUserRoles_arr_rel_insert_input: {
    data: { __type: '[authUserRoles_insert_input!]!' },
    on_conflict: { __type: 'authUserRoles_on_conflict' },
  },
  authUserRoles_bool_exp: {
    _and: { __type: '[authUserRoles_bool_exp!]' },
    _not: { __type: 'authUserRoles_bool_exp' },
    _or: { __type: '[authUserRoles_bool_exp!]' },
    createdAt: { __type: 'timestamptz_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    role: { __type: 'String_comparison_exp' },
    roleByRole: { __type: 'authRoles_bool_exp' },
    user: { __type: 'users_bool_exp' },
    userId: { __type: 'uuid_comparison_exp' },
  },
  authUserRoles_insert_input: {
    createdAt: { __type: 'timestamptz' },
    id: { __type: 'uuid' },
    role: { __type: 'String' },
    roleByRole: { __type: 'authRoles_obj_rel_insert_input' },
    user: { __type: 'users_obj_rel_insert_input' },
    userId: { __type: 'uuid' },
  },
  authUserRoles_max_fields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'timestamptz' },
    id: { __type: 'uuid' },
    role: { __type: 'String' },
    userId: { __type: 'uuid' },
  },
  authUserRoles_max_order_by: {
    createdAt: { __type: 'order_by' },
    id: { __type: 'order_by' },
    role: { __type: 'order_by' },
    userId: { __type: 'order_by' },
  },
  authUserRoles_min_fields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'timestamptz' },
    id: { __type: 'uuid' },
    role: { __type: 'String' },
    userId: { __type: 'uuid' },
  },
  authUserRoles_min_order_by: {
    createdAt: { __type: 'order_by' },
    id: { __type: 'order_by' },
    role: { __type: 'order_by' },
    userId: { __type: 'order_by' },
  },
  authUserRoles_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[authUserRoles!]!' },
  },
  authUserRoles_on_conflict: {
    constraint: { __type: 'authUserRoles_constraint!' },
    update_columns: { __type: '[authUserRoles_update_column!]!' },
    where: { __type: 'authUserRoles_bool_exp' },
  },
  authUserRoles_order_by: {
    createdAt: { __type: 'order_by' },
    id: { __type: 'order_by' },
    role: { __type: 'order_by' },
    roleByRole: { __type: 'authRoles_order_by' },
    user: { __type: 'users_order_by' },
    userId: { __type: 'order_by' },
  },
  authUserRoles_pk_columns_input: { id: { __type: 'uuid!' } },
  authUserRoles_set_input: {
    createdAt: { __type: 'timestamptz' },
    id: { __type: 'uuid' },
    role: { __type: 'String' },
    userId: { __type: 'uuid' },
  },
  authUserRoles_stream_cursor_input: {
    initial_value: { __type: 'authUserRoles_stream_cursor_value_input!' },
    ordering: { __type: 'cursor_ordering' },
  },
  authUserRoles_stream_cursor_value_input: {
    createdAt: { __type: 'timestamptz' },
    id: { __type: 'uuid' },
    role: { __type: 'String' },
    userId: { __type: 'uuid' },
  },
  authUserRoles_updates: {
    _set: { __type: 'authUserRoles_set_input' },
    where: { __type: 'authUserRoles_bool_exp!' },
  },
  authUserSecurityKeys: {
    __typename: { __type: 'String!' },
    counter: { __type: 'bigint!' },
    credentialId: { __type: 'String!' },
    credentialPublicKey: { __type: 'bytea' },
    id: { __type: 'uuid!' },
    nickname: { __type: 'String' },
    transports: { __type: 'String!' },
    user: { __type: 'users!' },
    userId: { __type: 'uuid!' },
  },
  authUserSecurityKeys_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'authUserSecurityKeys_aggregate_fields' },
    nodes: { __type: '[authUserSecurityKeys!]!' },
  },
  authUserSecurityKeys_aggregate_bool_exp: {
    count: { __type: 'authUserSecurityKeys_aggregate_bool_exp_count' },
  },
  authUserSecurityKeys_aggregate_bool_exp_count: {
    arguments: { __type: '[authUserSecurityKeys_select_column!]' },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'authUserSecurityKeys_bool_exp' },
    predicate: { __type: 'Int_comparison_exp!' },
  },
  authUserSecurityKeys_aggregate_fields: {
    __typename: { __type: 'String!' },
    avg: { __type: 'authUserSecurityKeys_avg_fields' },
    count: {
      __type: 'Int!',
      __args: {
        columns: '[authUserSecurityKeys_select_column!]',
        distinct: 'Boolean',
      },
    },
    max: { __type: 'authUserSecurityKeys_max_fields' },
    min: { __type: 'authUserSecurityKeys_min_fields' },
    stddev: { __type: 'authUserSecurityKeys_stddev_fields' },
    stddev_pop: { __type: 'authUserSecurityKeys_stddev_pop_fields' },
    stddev_samp: { __type: 'authUserSecurityKeys_stddev_samp_fields' },
    sum: { __type: 'authUserSecurityKeys_sum_fields' },
    var_pop: { __type: 'authUserSecurityKeys_var_pop_fields' },
    var_samp: { __type: 'authUserSecurityKeys_var_samp_fields' },
    variance: { __type: 'authUserSecurityKeys_variance_fields' },
  },
  authUserSecurityKeys_aggregate_order_by: {
    avg: { __type: 'authUserSecurityKeys_avg_order_by' },
    count: { __type: 'order_by' },
    max: { __type: 'authUserSecurityKeys_max_order_by' },
    min: { __type: 'authUserSecurityKeys_min_order_by' },
    stddev: { __type: 'authUserSecurityKeys_stddev_order_by' },
    stddev_pop: { __type: 'authUserSecurityKeys_stddev_pop_order_by' },
    stddev_samp: { __type: 'authUserSecurityKeys_stddev_samp_order_by' },
    sum: { __type: 'authUserSecurityKeys_sum_order_by' },
    var_pop: { __type: 'authUserSecurityKeys_var_pop_order_by' },
    var_samp: { __type: 'authUserSecurityKeys_var_samp_order_by' },
    variance: { __type: 'authUserSecurityKeys_variance_order_by' },
  },
  authUserSecurityKeys_arr_rel_insert_input: {
    data: { __type: '[authUserSecurityKeys_insert_input!]!' },
    on_conflict: { __type: 'authUserSecurityKeys_on_conflict' },
  },
  authUserSecurityKeys_avg_fields: {
    __typename: { __type: 'String!' },
    counter: { __type: 'Float' },
  },
  authUserSecurityKeys_avg_order_by: { counter: { __type: 'order_by' } },
  authUserSecurityKeys_bool_exp: {
    _and: { __type: '[authUserSecurityKeys_bool_exp!]' },
    _not: { __type: 'authUserSecurityKeys_bool_exp' },
    _or: { __type: '[authUserSecurityKeys_bool_exp!]' },
    counter: { __type: 'bigint_comparison_exp' },
    credentialId: { __type: 'String_comparison_exp' },
    credentialPublicKey: { __type: 'bytea_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    nickname: { __type: 'String_comparison_exp' },
    transports: { __type: 'String_comparison_exp' },
    user: { __type: 'users_bool_exp' },
    userId: { __type: 'uuid_comparison_exp' },
  },
  authUserSecurityKeys_inc_input: { counter: { __type: 'bigint' } },
  authUserSecurityKeys_insert_input: {
    counter: { __type: 'bigint' },
    credentialId: { __type: 'String' },
    credentialPublicKey: { __type: 'bytea' },
    id: { __type: 'uuid' },
    nickname: { __type: 'String' },
    transports: { __type: 'String' },
    user: { __type: 'users_obj_rel_insert_input' },
    userId: { __type: 'uuid' },
  },
  authUserSecurityKeys_max_fields: {
    __typename: { __type: 'String!' },
    counter: { __type: 'bigint' },
    credentialId: { __type: 'String' },
    id: { __type: 'uuid' },
    nickname: { __type: 'String' },
    transports: { __type: 'String' },
    userId: { __type: 'uuid' },
  },
  authUserSecurityKeys_max_order_by: {
    counter: { __type: 'order_by' },
    credentialId: { __type: 'order_by' },
    id: { __type: 'order_by' },
    nickname: { __type: 'order_by' },
    transports: { __type: 'order_by' },
    userId: { __type: 'order_by' },
  },
  authUserSecurityKeys_min_fields: {
    __typename: { __type: 'String!' },
    counter: { __type: 'bigint' },
    credentialId: { __type: 'String' },
    id: { __type: 'uuid' },
    nickname: { __type: 'String' },
    transports: { __type: 'String' },
    userId: { __type: 'uuid' },
  },
  authUserSecurityKeys_min_order_by: {
    counter: { __type: 'order_by' },
    credentialId: { __type: 'order_by' },
    id: { __type: 'order_by' },
    nickname: { __type: 'order_by' },
    transports: { __type: 'order_by' },
    userId: { __type: 'order_by' },
  },
  authUserSecurityKeys_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[authUserSecurityKeys!]!' },
  },
  authUserSecurityKeys_on_conflict: {
    constraint: { __type: 'authUserSecurityKeys_constraint!' },
    update_columns: { __type: '[authUserSecurityKeys_update_column!]!' },
    where: { __type: 'authUserSecurityKeys_bool_exp' },
  },
  authUserSecurityKeys_order_by: {
    counter: { __type: 'order_by' },
    credentialId: { __type: 'order_by' },
    credentialPublicKey: { __type: 'order_by' },
    id: { __type: 'order_by' },
    nickname: { __type: 'order_by' },
    transports: { __type: 'order_by' },
    user: { __type: 'users_order_by' },
    userId: { __type: 'order_by' },
  },
  authUserSecurityKeys_pk_columns_input: { id: { __type: 'uuid!' } },
  authUserSecurityKeys_set_input: {
    counter: { __type: 'bigint' },
    credentialId: { __type: 'String' },
    credentialPublicKey: { __type: 'bytea' },
    id: { __type: 'uuid' },
    nickname: { __type: 'String' },
    transports: { __type: 'String' },
    userId: { __type: 'uuid' },
  },
  authUserSecurityKeys_stddev_fields: {
    __typename: { __type: 'String!' },
    counter: { __type: 'Float' },
  },
  authUserSecurityKeys_stddev_order_by: { counter: { __type: 'order_by' } },
  authUserSecurityKeys_stddev_pop_fields: {
    __typename: { __type: 'String!' },
    counter: { __type: 'Float' },
  },
  authUserSecurityKeys_stddev_pop_order_by: { counter: { __type: 'order_by' } },
  authUserSecurityKeys_stddev_samp_fields: {
    __typename: { __type: 'String!' },
    counter: { __type: 'Float' },
  },
  authUserSecurityKeys_stddev_samp_order_by: {
    counter: { __type: 'order_by' },
  },
  authUserSecurityKeys_stream_cursor_input: {
    initial_value: {
      __type: 'authUserSecurityKeys_stream_cursor_value_input!',
    },
    ordering: { __type: 'cursor_ordering' },
  },
  authUserSecurityKeys_stream_cursor_value_input: {
    counter: { __type: 'bigint' },
    credentialId: { __type: 'String' },
    credentialPublicKey: { __type: 'bytea' },
    id: { __type: 'uuid' },
    nickname: { __type: 'String' },
    transports: { __type: 'String' },
    userId: { __type: 'uuid' },
  },
  authUserSecurityKeys_sum_fields: {
    __typename: { __type: 'String!' },
    counter: { __type: 'bigint' },
  },
  authUserSecurityKeys_sum_order_by: { counter: { __type: 'order_by' } },
  authUserSecurityKeys_updates: {
    _inc: { __type: 'authUserSecurityKeys_inc_input' },
    _set: { __type: 'authUserSecurityKeys_set_input' },
    where: { __type: 'authUserSecurityKeys_bool_exp!' },
  },
  authUserSecurityKeys_var_pop_fields: {
    __typename: { __type: 'String!' },
    counter: { __type: 'Float' },
  },
  authUserSecurityKeys_var_pop_order_by: { counter: { __type: 'order_by' } },
  authUserSecurityKeys_var_samp_fields: {
    __typename: { __type: 'String!' },
    counter: { __type: 'Float' },
  },
  authUserSecurityKeys_var_samp_order_by: { counter: { __type: 'order_by' } },
  authUserSecurityKeys_variance_fields: {
    __typename: { __type: 'String!' },
    counter: { __type: 'Float' },
  },
  authUserSecurityKeys_variance_order_by: { counter: { __type: 'order_by' } },
  authors: {
    __typename: { __type: 'String!' },
    age: { __type: 'Int' },
    id: { __type: 'uuid!' },
    name: { __type: 'String!' },
    posts: {
      __type: '[posts!]!',
      __args: {
        distinct_on: '[posts_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[posts_order_by!]',
        where: 'posts_bool_exp',
      },
    },
    posts_aggregate: {
      __type: 'posts_aggregate!',
      __args: {
        distinct_on: '[posts_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[posts_order_by!]',
        where: 'posts_bool_exp',
      },
    },
  },
  authors_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'authors_aggregate_fields' },
    nodes: { __type: '[authors!]!' },
  },
  authors_aggregate_fields: {
    __typename: { __type: 'String!' },
    avg: { __type: 'authors_avg_fields' },
    count: {
      __type: 'Int!',
      __args: { columns: '[authors_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'authors_max_fields' },
    min: { __type: 'authors_min_fields' },
    stddev: { __type: 'authors_stddev_fields' },
    stddev_pop: { __type: 'authors_stddev_pop_fields' },
    stddev_samp: { __type: 'authors_stddev_samp_fields' },
    sum: { __type: 'authors_sum_fields' },
    var_pop: { __type: 'authors_var_pop_fields' },
    var_samp: { __type: 'authors_var_samp_fields' },
    variance: { __type: 'authors_variance_fields' },
  },
  authors_avg_fields: {
    __typename: { __type: 'String!' },
    age: { __type: 'Float' },
  },
  authors_bool_exp: {
    _and: { __type: '[authors_bool_exp!]' },
    _not: { __type: 'authors_bool_exp' },
    _or: { __type: '[authors_bool_exp!]' },
    age: { __type: 'Int_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    name: { __type: 'String_comparison_exp' },
    posts: { __type: 'posts_bool_exp' },
    posts_aggregate: { __type: 'posts_aggregate_bool_exp' },
  },
  authors_inc_input: { age: { __type: 'Int' } },
  authors_insert_input: {
    age: { __type: 'Int' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
    posts: { __type: 'posts_arr_rel_insert_input' },
  },
  authors_max_fields: {
    __typename: { __type: 'String!' },
    age: { __type: 'Int' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
  },
  authors_min_fields: {
    __typename: { __type: 'String!' },
    age: { __type: 'Int' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
  },
  authors_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[authors!]!' },
  },
  authors_obj_rel_insert_input: {
    data: { __type: 'authors_insert_input!' },
    on_conflict: { __type: 'authors_on_conflict' },
  },
  authors_on_conflict: {
    constraint: { __type: 'authors_constraint!' },
    update_columns: { __type: '[authors_update_column!]!' },
    where: { __type: 'authors_bool_exp' },
  },
  authors_order_by: {
    age: { __type: 'order_by' },
    id: { __type: 'order_by' },
    name: { __type: 'order_by' },
    posts_aggregate: { __type: 'posts_aggregate_order_by' },
  },
  authors_pk_columns_input: { id: { __type: 'uuid!' } },
  authors_set_input: {
    age: { __type: 'Int' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
  },
  authors_stddev_fields: {
    __typename: { __type: 'String!' },
    age: { __type: 'Float' },
  },
  authors_stddev_pop_fields: {
    __typename: { __type: 'String!' },
    age: { __type: 'Float' },
  },
  authors_stddev_samp_fields: {
    __typename: { __type: 'String!' },
    age: { __type: 'Float' },
  },
  authors_stream_cursor_input: {
    initial_value: { __type: 'authors_stream_cursor_value_input!' },
    ordering: { __type: 'cursor_ordering' },
  },
  authors_stream_cursor_value_input: {
    age: { __type: 'Int' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
  },
  authors_sum_fields: {
    __typename: { __type: 'String!' },
    age: { __type: 'Int' },
  },
  authors_updates: {
    _inc: { __type: 'authors_inc_input' },
    _set: { __type: 'authors_set_input' },
    where: { __type: 'authors_bool_exp!' },
  },
  authors_var_pop_fields: {
    __typename: { __type: 'String!' },
    age: { __type: 'Float' },
  },
  authors_var_samp_fields: {
    __typename: { __type: 'String!' },
    age: { __type: 'Float' },
  },
  authors_variance_fields: {
    __typename: { __type: 'String!' },
    age: { __type: 'Float' },
  },
  bigint_comparison_exp: {
    _eq: { __type: 'bigint' },
    _gt: { __type: 'bigint' },
    _gte: { __type: 'bigint' },
    _in: { __type: '[bigint!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'bigint' },
    _lte: { __type: 'bigint' },
    _neq: { __type: 'bigint' },
    _nin: { __type: '[bigint!]' },
  },
  buckets: {
    __typename: { __type: 'String!' },
    cacheControl: { __type: 'String' },
    createdAt: { __type: 'timestamptz!' },
    downloadExpiration: { __type: 'Int!' },
    files: {
      __type: '[files!]!',
      __args: {
        distinct_on: '[files_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[files_order_by!]',
        where: 'files_bool_exp',
      },
    },
    files_aggregate: {
      __type: 'files_aggregate!',
      __args: {
        distinct_on: '[files_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[files_order_by!]',
        where: 'files_bool_exp',
      },
    },
    id: { __type: 'String!' },
    maxUploadFileSize: { __type: 'Int!' },
    minUploadFileSize: { __type: 'Int!' },
    presignedUrlsEnabled: { __type: 'Boolean!' },
    updatedAt: { __type: 'timestamptz!' },
  },
  buckets_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'buckets_aggregate_fields' },
    nodes: { __type: '[buckets!]!' },
  },
  buckets_aggregate_fields: {
    __typename: { __type: 'String!' },
    avg: { __type: 'buckets_avg_fields' },
    count: {
      __type: 'Int!',
      __args: { columns: '[buckets_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'buckets_max_fields' },
    min: { __type: 'buckets_min_fields' },
    stddev: { __type: 'buckets_stddev_fields' },
    stddev_pop: { __type: 'buckets_stddev_pop_fields' },
    stddev_samp: { __type: 'buckets_stddev_samp_fields' },
    sum: { __type: 'buckets_sum_fields' },
    var_pop: { __type: 'buckets_var_pop_fields' },
    var_samp: { __type: 'buckets_var_samp_fields' },
    variance: { __type: 'buckets_variance_fields' },
  },
  buckets_avg_fields: {
    __typename: { __type: 'String!' },
    downloadExpiration: { __type: 'Float' },
    maxUploadFileSize: { __type: 'Float' },
    minUploadFileSize: { __type: 'Float' },
  },
  buckets_bool_exp: {
    _and: { __type: '[buckets_bool_exp!]' },
    _not: { __type: 'buckets_bool_exp' },
    _or: { __type: '[buckets_bool_exp!]' },
    cacheControl: { __type: 'String_comparison_exp' },
    createdAt: { __type: 'timestamptz_comparison_exp' },
    downloadExpiration: { __type: 'Int_comparison_exp' },
    files: { __type: 'files_bool_exp' },
    files_aggregate: { __type: 'files_aggregate_bool_exp' },
    id: { __type: 'String_comparison_exp' },
    maxUploadFileSize: { __type: 'Int_comparison_exp' },
    minUploadFileSize: { __type: 'Int_comparison_exp' },
    presignedUrlsEnabled: { __type: 'Boolean_comparison_exp' },
    updatedAt: { __type: 'timestamptz_comparison_exp' },
  },
  buckets_inc_input: {
    downloadExpiration: { __type: 'Int' },
    maxUploadFileSize: { __type: 'Int' },
    minUploadFileSize: { __type: 'Int' },
  },
  buckets_insert_input: {
    cacheControl: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    downloadExpiration: { __type: 'Int' },
    files: { __type: 'files_arr_rel_insert_input' },
    id: { __type: 'String' },
    maxUploadFileSize: { __type: 'Int' },
    minUploadFileSize: { __type: 'Int' },
    presignedUrlsEnabled: { __type: 'Boolean' },
    updatedAt: { __type: 'timestamptz' },
  },
  buckets_max_fields: {
    __typename: { __type: 'String!' },
    cacheControl: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    downloadExpiration: { __type: 'Int' },
    id: { __type: 'String' },
    maxUploadFileSize: { __type: 'Int' },
    minUploadFileSize: { __type: 'Int' },
    updatedAt: { __type: 'timestamptz' },
  },
  buckets_min_fields: {
    __typename: { __type: 'String!' },
    cacheControl: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    downloadExpiration: { __type: 'Int' },
    id: { __type: 'String' },
    maxUploadFileSize: { __type: 'Int' },
    minUploadFileSize: { __type: 'Int' },
    updatedAt: { __type: 'timestamptz' },
  },
  buckets_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[buckets!]!' },
  },
  buckets_obj_rel_insert_input: {
    data: { __type: 'buckets_insert_input!' },
    on_conflict: { __type: 'buckets_on_conflict' },
  },
  buckets_on_conflict: {
    constraint: { __type: 'buckets_constraint!' },
    update_columns: { __type: '[buckets_update_column!]!' },
    where: { __type: 'buckets_bool_exp' },
  },
  buckets_order_by: {
    cacheControl: { __type: 'order_by' },
    createdAt: { __type: 'order_by' },
    downloadExpiration: { __type: 'order_by' },
    files_aggregate: { __type: 'files_aggregate_order_by' },
    id: { __type: 'order_by' },
    maxUploadFileSize: { __type: 'order_by' },
    minUploadFileSize: { __type: 'order_by' },
    presignedUrlsEnabled: { __type: 'order_by' },
    updatedAt: { __type: 'order_by' },
  },
  buckets_pk_columns_input: { id: { __type: 'String!' } },
  buckets_set_input: {
    cacheControl: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    downloadExpiration: { __type: 'Int' },
    id: { __type: 'String' },
    maxUploadFileSize: { __type: 'Int' },
    minUploadFileSize: { __type: 'Int' },
    presignedUrlsEnabled: { __type: 'Boolean' },
    updatedAt: { __type: 'timestamptz' },
  },
  buckets_stddev_fields: {
    __typename: { __type: 'String!' },
    downloadExpiration: { __type: 'Float' },
    maxUploadFileSize: { __type: 'Float' },
    minUploadFileSize: { __type: 'Float' },
  },
  buckets_stddev_pop_fields: {
    __typename: { __type: 'String!' },
    downloadExpiration: { __type: 'Float' },
    maxUploadFileSize: { __type: 'Float' },
    minUploadFileSize: { __type: 'Float' },
  },
  buckets_stddev_samp_fields: {
    __typename: { __type: 'String!' },
    downloadExpiration: { __type: 'Float' },
    maxUploadFileSize: { __type: 'Float' },
    minUploadFileSize: { __type: 'Float' },
  },
  buckets_stream_cursor_input: {
    initial_value: { __type: 'buckets_stream_cursor_value_input!' },
    ordering: { __type: 'cursor_ordering' },
  },
  buckets_stream_cursor_value_input: {
    cacheControl: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    downloadExpiration: { __type: 'Int' },
    id: { __type: 'String' },
    maxUploadFileSize: { __type: 'Int' },
    minUploadFileSize: { __type: 'Int' },
    presignedUrlsEnabled: { __type: 'Boolean' },
    updatedAt: { __type: 'timestamptz' },
  },
  buckets_sum_fields: {
    __typename: { __type: 'String!' },
    downloadExpiration: { __type: 'Int' },
    maxUploadFileSize: { __type: 'Int' },
    minUploadFileSize: { __type: 'Int' },
  },
  buckets_updates: {
    _inc: { __type: 'buckets_inc_input' },
    _set: { __type: 'buckets_set_input' },
    where: { __type: 'buckets_bool_exp!' },
  },
  buckets_var_pop_fields: {
    __typename: { __type: 'String!' },
    downloadExpiration: { __type: 'Float' },
    maxUploadFileSize: { __type: 'Float' },
    minUploadFileSize: { __type: 'Float' },
  },
  buckets_var_samp_fields: {
    __typename: { __type: 'String!' },
    downloadExpiration: { __type: 'Float' },
    maxUploadFileSize: { __type: 'Float' },
    minUploadFileSize: { __type: 'Float' },
  },
  buckets_variance_fields: {
    __typename: { __type: 'String!' },
    downloadExpiration: { __type: 'Float' },
    maxUploadFileSize: { __type: 'Float' },
    minUploadFileSize: { __type: 'Float' },
  },
  bytea_comparison_exp: {
    _eq: { __type: 'bytea' },
    _gt: { __type: 'bytea' },
    _gte: { __type: 'bytea' },
    _in: { __type: '[bytea!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'bytea' },
    _lte: { __type: 'bytea' },
    _neq: { __type: 'bytea' },
    _nin: { __type: '[bytea!]' },
  },
  citext_comparison_exp: {
    _eq: { __type: 'citext' },
    _gt: { __type: 'citext' },
    _gte: { __type: 'citext' },
    _ilike: { __type: 'citext' },
    _in: { __type: '[citext!]' },
    _iregex: { __type: 'citext' },
    _is_null: { __type: 'Boolean' },
    _like: { __type: 'citext' },
    _lt: { __type: 'citext' },
    _lte: { __type: 'citext' },
    _neq: { __type: 'citext' },
    _nilike: { __type: 'citext' },
    _nin: { __type: '[citext!]' },
    _niregex: { __type: 'citext' },
    _nlike: { __type: 'citext' },
    _nregex: { __type: 'citext' },
    _nsimilar: { __type: 'citext' },
    _regex: { __type: 'citext' },
    _similar: { __type: 'citext' },
  },
  files: {
    __typename: { __type: 'String!' },
    bucket: { __type: 'buckets!' },
    bucketId: { __type: 'String!' },
    createdAt: { __type: 'timestamptz!' },
    etag: { __type: 'String' },
    id: { __type: 'uuid!' },
    isUploaded: { __type: 'Boolean' },
    mimeType: { __type: 'String' },
    name: { __type: 'String' },
    size: { __type: 'Int' },
    updatedAt: { __type: 'timestamptz!' },
    uploadedByUserId: { __type: 'uuid' },
  },
  files_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'files_aggregate_fields' },
    nodes: { __type: '[files!]!' },
  },
  files_aggregate_bool_exp: {
    bool_and: { __type: 'files_aggregate_bool_exp_bool_and' },
    bool_or: { __type: 'files_aggregate_bool_exp_bool_or' },
    count: { __type: 'files_aggregate_bool_exp_count' },
  },
  files_aggregate_bool_exp_bool_and: {
    arguments: {
      __type:
        'files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns!',
    },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'files_bool_exp' },
    predicate: { __type: 'Boolean_comparison_exp!' },
  },
  files_aggregate_bool_exp_bool_or: {
    arguments: {
      __type:
        'files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns!',
    },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'files_bool_exp' },
    predicate: { __type: 'Boolean_comparison_exp!' },
  },
  files_aggregate_bool_exp_count: {
    arguments: { __type: '[files_select_column!]' },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'files_bool_exp' },
    predicate: { __type: 'Int_comparison_exp!' },
  },
  files_aggregate_fields: {
    __typename: { __type: 'String!' },
    avg: { __type: 'files_avg_fields' },
    count: {
      __type: 'Int!',
      __args: { columns: '[files_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'files_max_fields' },
    min: { __type: 'files_min_fields' },
    stddev: { __type: 'files_stddev_fields' },
    stddev_pop: { __type: 'files_stddev_pop_fields' },
    stddev_samp: { __type: 'files_stddev_samp_fields' },
    sum: { __type: 'files_sum_fields' },
    var_pop: { __type: 'files_var_pop_fields' },
    var_samp: { __type: 'files_var_samp_fields' },
    variance: { __type: 'files_variance_fields' },
  },
  files_aggregate_order_by: {
    avg: { __type: 'files_avg_order_by' },
    count: { __type: 'order_by' },
    max: { __type: 'files_max_order_by' },
    min: { __type: 'files_min_order_by' },
    stddev: { __type: 'files_stddev_order_by' },
    stddev_pop: { __type: 'files_stddev_pop_order_by' },
    stddev_samp: { __type: 'files_stddev_samp_order_by' },
    sum: { __type: 'files_sum_order_by' },
    var_pop: { __type: 'files_var_pop_order_by' },
    var_samp: { __type: 'files_var_samp_order_by' },
    variance: { __type: 'files_variance_order_by' },
  },
  files_arr_rel_insert_input: {
    data: { __type: '[files_insert_input!]!' },
    on_conflict: { __type: 'files_on_conflict' },
  },
  files_avg_fields: {
    __typename: { __type: 'String!' },
    size: { __type: 'Float' },
  },
  files_avg_order_by: { size: { __type: 'order_by' } },
  files_bool_exp: {
    _and: { __type: '[files_bool_exp!]' },
    _not: { __type: 'files_bool_exp' },
    _or: { __type: '[files_bool_exp!]' },
    bucket: { __type: 'buckets_bool_exp' },
    bucketId: { __type: 'String_comparison_exp' },
    createdAt: { __type: 'timestamptz_comparison_exp' },
    etag: { __type: 'String_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    isUploaded: { __type: 'Boolean_comparison_exp' },
    mimeType: { __type: 'String_comparison_exp' },
    name: { __type: 'String_comparison_exp' },
    size: { __type: 'Int_comparison_exp' },
    updatedAt: { __type: 'timestamptz_comparison_exp' },
    uploadedByUserId: { __type: 'uuid_comparison_exp' },
  },
  files_inc_input: { size: { __type: 'Int' } },
  files_insert_input: {
    bucket: { __type: 'buckets_obj_rel_insert_input' },
    bucketId: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    etag: { __type: 'String' },
    id: { __type: 'uuid' },
    isUploaded: { __type: 'Boolean' },
    mimeType: { __type: 'String' },
    name: { __type: 'String' },
    size: { __type: 'Int' },
    updatedAt: { __type: 'timestamptz' },
    uploadedByUserId: { __type: 'uuid' },
  },
  files_max_fields: {
    __typename: { __type: 'String!' },
    bucketId: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    etag: { __type: 'String' },
    id: { __type: 'uuid' },
    mimeType: { __type: 'String' },
    name: { __type: 'String' },
    size: { __type: 'Int' },
    updatedAt: { __type: 'timestamptz' },
    uploadedByUserId: { __type: 'uuid' },
  },
  files_max_order_by: {
    bucketId: { __type: 'order_by' },
    createdAt: { __type: 'order_by' },
    etag: { __type: 'order_by' },
    id: { __type: 'order_by' },
    mimeType: { __type: 'order_by' },
    name: { __type: 'order_by' },
    size: { __type: 'order_by' },
    updatedAt: { __type: 'order_by' },
    uploadedByUserId: { __type: 'order_by' },
  },
  files_min_fields: {
    __typename: { __type: 'String!' },
    bucketId: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    etag: { __type: 'String' },
    id: { __type: 'uuid' },
    mimeType: { __type: 'String' },
    name: { __type: 'String' },
    size: { __type: 'Int' },
    updatedAt: { __type: 'timestamptz' },
    uploadedByUserId: { __type: 'uuid' },
  },
  files_min_order_by: {
    bucketId: { __type: 'order_by' },
    createdAt: { __type: 'order_by' },
    etag: { __type: 'order_by' },
    id: { __type: 'order_by' },
    mimeType: { __type: 'order_by' },
    name: { __type: 'order_by' },
    size: { __type: 'order_by' },
    updatedAt: { __type: 'order_by' },
    uploadedByUserId: { __type: 'order_by' },
  },
  files_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[files!]!' },
  },
  files_on_conflict: {
    constraint: { __type: 'files_constraint!' },
    update_columns: { __type: '[files_update_column!]!' },
    where: { __type: 'files_bool_exp' },
  },
  files_order_by: {
    bucket: { __type: 'buckets_order_by' },
    bucketId: { __type: 'order_by' },
    createdAt: { __type: 'order_by' },
    etag: { __type: 'order_by' },
    id: { __type: 'order_by' },
    isUploaded: { __type: 'order_by' },
    mimeType: { __type: 'order_by' },
    name: { __type: 'order_by' },
    size: { __type: 'order_by' },
    updatedAt: { __type: 'order_by' },
    uploadedByUserId: { __type: 'order_by' },
  },
  files_pk_columns_input: { id: { __type: 'uuid!' } },
  files_set_input: {
    bucketId: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    etag: { __type: 'String' },
    id: { __type: 'uuid' },
    isUploaded: { __type: 'Boolean' },
    mimeType: { __type: 'String' },
    name: { __type: 'String' },
    size: { __type: 'Int' },
    updatedAt: { __type: 'timestamptz' },
    uploadedByUserId: { __type: 'uuid' },
  },
  files_stddev_fields: {
    __typename: { __type: 'String!' },
    size: { __type: 'Float' },
  },
  files_stddev_order_by: { size: { __type: 'order_by' } },
  files_stddev_pop_fields: {
    __typename: { __type: 'String!' },
    size: { __type: 'Float' },
  },
  files_stddev_pop_order_by: { size: { __type: 'order_by' } },
  files_stddev_samp_fields: {
    __typename: { __type: 'String!' },
    size: { __type: 'Float' },
  },
  files_stddev_samp_order_by: { size: { __type: 'order_by' } },
  files_stream_cursor_input: {
    initial_value: { __type: 'files_stream_cursor_value_input!' },
    ordering: { __type: 'cursor_ordering' },
  },
  files_stream_cursor_value_input: {
    bucketId: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    etag: { __type: 'String' },
    id: { __type: 'uuid' },
    isUploaded: { __type: 'Boolean' },
    mimeType: { __type: 'String' },
    name: { __type: 'String' },
    size: { __type: 'Int' },
    updatedAt: { __type: 'timestamptz' },
    uploadedByUserId: { __type: 'uuid' },
  },
  files_sum_fields: {
    __typename: { __type: 'String!' },
    size: { __type: 'Int' },
  },
  files_sum_order_by: { size: { __type: 'order_by' } },
  files_updates: {
    _inc: { __type: 'files_inc_input' },
    _set: { __type: 'files_set_input' },
    where: { __type: 'files_bool_exp!' },
  },
  files_var_pop_fields: {
    __typename: { __type: 'String!' },
    size: { __type: 'Float' },
  },
  files_var_pop_order_by: { size: { __type: 'order_by' } },
  files_var_samp_fields: {
    __typename: { __type: 'String!' },
    size: { __type: 'Float' },
  },
  files_var_samp_order_by: { size: { __type: 'order_by' } },
  files_variance_fields: {
    __typename: { __type: 'String!' },
    size: { __type: 'Float' },
  },
  files_variance_order_by: { size: { __type: 'order_by' } },
  jsonb_cast_exp: { String: { __type: 'String_comparison_exp' } },
  jsonb_comparison_exp: {
    _cast: { __type: 'jsonb_cast_exp' },
    _contained_in: { __type: 'jsonb' },
    _contains: { __type: 'jsonb' },
    _eq: { __type: 'jsonb' },
    _gt: { __type: 'jsonb' },
    _gte: { __type: 'jsonb' },
    _has_key: { __type: 'String' },
    _has_keys_all: { __type: '[String!]' },
    _has_keys_any: { __type: '[String!]' },
    _in: { __type: '[jsonb!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'jsonb' },
    _lte: { __type: 'jsonb' },
    _neq: { __type: 'jsonb' },
    _nin: { __type: '[jsonb!]' },
  },
  mutation: {
    __typename: { __type: 'String!' },
    deleteAuthProvider: { __type: 'authProviders', __args: { id: 'String!' } },
    deleteAuthProviderRequest: {
      __type: 'authProviderRequests',
      __args: { id: 'uuid!' },
    },
    deleteAuthProviderRequests: {
      __type: 'authProviderRequests_mutation_response',
      __args: { where: 'authProviderRequests_bool_exp!' },
    },
    deleteAuthProviders: {
      __type: 'authProviders_mutation_response',
      __args: { where: 'authProviders_bool_exp!' },
    },
    deleteAuthRefreshToken: {
      __type: 'authRefreshTokens',
      __args: { refreshToken: 'uuid!' },
    },
    deleteAuthRefreshTokens: {
      __type: 'authRefreshTokens_mutation_response',
      __args: { where: 'authRefreshTokens_bool_exp!' },
    },
    deleteAuthRole: { __type: 'authRoles', __args: { role: 'String!' } },
    deleteAuthRoles: {
      __type: 'authRoles_mutation_response',
      __args: { where: 'authRoles_bool_exp!' },
    },
    deleteAuthUserProvider: {
      __type: 'authUserProviders',
      __args: { id: 'uuid!' },
    },
    deleteAuthUserProviders: {
      __type: 'authUserProviders_mutation_response',
      __args: { where: 'authUserProviders_bool_exp!' },
    },
    deleteAuthUserRole: { __type: 'authUserRoles', __args: { id: 'uuid!' } },
    deleteAuthUserRoles: {
      __type: 'authUserRoles_mutation_response',
      __args: { where: 'authUserRoles_bool_exp!' },
    },
    deleteAuthUserSecurityKey: {
      __type: 'authUserSecurityKeys',
      __args: { id: 'uuid!' },
    },
    deleteAuthUserSecurityKeys: {
      __type: 'authUserSecurityKeys_mutation_response',
      __args: { where: 'authUserSecurityKeys_bool_exp!' },
    },
    deleteBucket: { __type: 'buckets', __args: { id: 'String!' } },
    deleteBuckets: {
      __type: 'buckets_mutation_response',
      __args: { where: 'buckets_bool_exp!' },
    },
    deleteFile: { __type: 'files', __args: { id: 'uuid!' } },
    deleteFiles: {
      __type: 'files_mutation_response',
      __args: { where: 'files_bool_exp!' },
    },
    deleteUser: { __type: 'users', __args: { id: 'uuid!' } },
    deleteUsers: {
      __type: 'users_mutation_response',
      __args: { where: 'users_bool_exp!' },
    },
    delete_authors: {
      __type: 'authors_mutation_response',
      __args: { where: 'authors_bool_exp!' },
    },
    delete_authors_by_pk: { __type: 'authors', __args: { id: 'uuid!' } },
    delete_posts: {
      __type: 'posts_mutation_response',
      __args: { where: 'posts_bool_exp!' },
    },
    delete_posts_by_pk: { __type: 'posts', __args: { id: 'uuid!' } },
    insertAuthProvider: {
      __type: 'authProviders',
      __args: {
        object: 'authProviders_insert_input!',
        on_conflict: 'authProviders_on_conflict',
      },
    },
    insertAuthProviderRequest: {
      __type: 'authProviderRequests',
      __args: {
        object: 'authProviderRequests_insert_input!',
        on_conflict: 'authProviderRequests_on_conflict',
      },
    },
    insertAuthProviderRequests: {
      __type: 'authProviderRequests_mutation_response',
      __args: {
        objects: '[authProviderRequests_insert_input!]!',
        on_conflict: 'authProviderRequests_on_conflict',
      },
    },
    insertAuthProviders: {
      __type: 'authProviders_mutation_response',
      __args: {
        objects: '[authProviders_insert_input!]!',
        on_conflict: 'authProviders_on_conflict',
      },
    },
    insertAuthRefreshToken: {
      __type: 'authRefreshTokens',
      __args: {
        object: 'authRefreshTokens_insert_input!',
        on_conflict: 'authRefreshTokens_on_conflict',
      },
    },
    insertAuthRefreshTokens: {
      __type: 'authRefreshTokens_mutation_response',
      __args: {
        objects: '[authRefreshTokens_insert_input!]!',
        on_conflict: 'authRefreshTokens_on_conflict',
      },
    },
    insertAuthRole: {
      __type: 'authRoles',
      __args: {
        object: 'authRoles_insert_input!',
        on_conflict: 'authRoles_on_conflict',
      },
    },
    insertAuthRoles: {
      __type: 'authRoles_mutation_response',
      __args: {
        objects: '[authRoles_insert_input!]!',
        on_conflict: 'authRoles_on_conflict',
      },
    },
    insertAuthUserProvider: {
      __type: 'authUserProviders',
      __args: {
        object: 'authUserProviders_insert_input!',
        on_conflict: 'authUserProviders_on_conflict',
      },
    },
    insertAuthUserProviders: {
      __type: 'authUserProviders_mutation_response',
      __args: {
        objects: '[authUserProviders_insert_input!]!',
        on_conflict: 'authUserProviders_on_conflict',
      },
    },
    insertAuthUserRole: {
      __type: 'authUserRoles',
      __args: {
        object: 'authUserRoles_insert_input!',
        on_conflict: 'authUserRoles_on_conflict',
      },
    },
    insertAuthUserRoles: {
      __type: 'authUserRoles_mutation_response',
      __args: {
        objects: '[authUserRoles_insert_input!]!',
        on_conflict: 'authUserRoles_on_conflict',
      },
    },
    insertAuthUserSecurityKey: {
      __type: 'authUserSecurityKeys',
      __args: {
        object: 'authUserSecurityKeys_insert_input!',
        on_conflict: 'authUserSecurityKeys_on_conflict',
      },
    },
    insertAuthUserSecurityKeys: {
      __type: 'authUserSecurityKeys_mutation_response',
      __args: {
        objects: '[authUserSecurityKeys_insert_input!]!',
        on_conflict: 'authUserSecurityKeys_on_conflict',
      },
    },
    insertBucket: {
      __type: 'buckets',
      __args: {
        object: 'buckets_insert_input!',
        on_conflict: 'buckets_on_conflict',
      },
    },
    insertBuckets: {
      __type: 'buckets_mutation_response',
      __args: {
        objects: '[buckets_insert_input!]!',
        on_conflict: 'buckets_on_conflict',
      },
    },
    insertFile: {
      __type: 'files',
      __args: {
        object: 'files_insert_input!',
        on_conflict: 'files_on_conflict',
      },
    },
    insertFiles: {
      __type: 'files_mutation_response',
      __args: {
        objects: '[files_insert_input!]!',
        on_conflict: 'files_on_conflict',
      },
    },
    insertUser: {
      __type: 'users',
      __args: {
        object: 'users_insert_input!',
        on_conflict: 'users_on_conflict',
      },
    },
    insertUsers: {
      __type: 'users_mutation_response',
      __args: {
        objects: '[users_insert_input!]!',
        on_conflict: 'users_on_conflict',
      },
    },
    insert_authors: {
      __type: 'authors_mutation_response',
      __args: {
        objects: '[authors_insert_input!]!',
        on_conflict: 'authors_on_conflict',
      },
    },
    insert_authors_one: {
      __type: 'authors',
      __args: {
        object: 'authors_insert_input!',
        on_conflict: 'authors_on_conflict',
      },
    },
    insert_posts: {
      __type: 'posts_mutation_response',
      __args: {
        objects: '[posts_insert_input!]!',
        on_conflict: 'posts_on_conflict',
      },
    },
    insert_posts_one: {
      __type: 'posts',
      __args: {
        object: 'posts_insert_input!',
        on_conflict: 'posts_on_conflict',
      },
    },
    updateAuthProvider: {
      __type: 'authProviders',
      __args: {
        _set: 'authProviders_set_input',
        pk_columns: 'authProviders_pk_columns_input!',
      },
    },
    updateAuthProviderRequest: {
      __type: 'authProviderRequests',
      __args: {
        _append: 'authProviderRequests_append_input',
        _delete_at_path: 'authProviderRequests_delete_at_path_input',
        _delete_elem: 'authProviderRequests_delete_elem_input',
        _delete_key: 'authProviderRequests_delete_key_input',
        _prepend: 'authProviderRequests_prepend_input',
        _set: 'authProviderRequests_set_input',
        pk_columns: 'authProviderRequests_pk_columns_input!',
      },
    },
    updateAuthProviderRequests: {
      __type: 'authProviderRequests_mutation_response',
      __args: {
        _append: 'authProviderRequests_append_input',
        _delete_at_path: 'authProviderRequests_delete_at_path_input',
        _delete_elem: 'authProviderRequests_delete_elem_input',
        _delete_key: 'authProviderRequests_delete_key_input',
        _prepend: 'authProviderRequests_prepend_input',
        _set: 'authProviderRequests_set_input',
        where: 'authProviderRequests_bool_exp!',
      },
    },
    updateAuthProviders: {
      __type: 'authProviders_mutation_response',
      __args: {
        _set: 'authProviders_set_input',
        where: 'authProviders_bool_exp!',
      },
    },
    updateAuthRefreshToken: {
      __type: 'authRefreshTokens',
      __args: {
        _set: 'authRefreshTokens_set_input',
        pk_columns: 'authRefreshTokens_pk_columns_input!',
      },
    },
    updateAuthRefreshTokens: {
      __type: 'authRefreshTokens_mutation_response',
      __args: {
        _set: 'authRefreshTokens_set_input',
        where: 'authRefreshTokens_bool_exp!',
      },
    },
    updateAuthRole: {
      __type: 'authRoles',
      __args: {
        _set: 'authRoles_set_input',
        pk_columns: 'authRoles_pk_columns_input!',
      },
    },
    updateAuthRoles: {
      __type: 'authRoles_mutation_response',
      __args: { _set: 'authRoles_set_input', where: 'authRoles_bool_exp!' },
    },
    updateAuthUserProvider: {
      __type: 'authUserProviders',
      __args: {
        _set: 'authUserProviders_set_input',
        pk_columns: 'authUserProviders_pk_columns_input!',
      },
    },
    updateAuthUserProviders: {
      __type: 'authUserProviders_mutation_response',
      __args: {
        _set: 'authUserProviders_set_input',
        where: 'authUserProviders_bool_exp!',
      },
    },
    updateAuthUserRole: {
      __type: 'authUserRoles',
      __args: {
        _set: 'authUserRoles_set_input',
        pk_columns: 'authUserRoles_pk_columns_input!',
      },
    },
    updateAuthUserRoles: {
      __type: 'authUserRoles_mutation_response',
      __args: {
        _set: 'authUserRoles_set_input',
        where: 'authUserRoles_bool_exp!',
      },
    },
    updateAuthUserSecurityKey: {
      __type: 'authUserSecurityKeys',
      __args: {
        _inc: 'authUserSecurityKeys_inc_input',
        _set: 'authUserSecurityKeys_set_input',
        pk_columns: 'authUserSecurityKeys_pk_columns_input!',
      },
    },
    updateAuthUserSecurityKeys: {
      __type: 'authUserSecurityKeys_mutation_response',
      __args: {
        _inc: 'authUserSecurityKeys_inc_input',
        _set: 'authUserSecurityKeys_set_input',
        where: 'authUserSecurityKeys_bool_exp!',
      },
    },
    updateBucket: {
      __type: 'buckets',
      __args: {
        _inc: 'buckets_inc_input',
        _set: 'buckets_set_input',
        pk_columns: 'buckets_pk_columns_input!',
      },
    },
    updateBuckets: {
      __type: 'buckets_mutation_response',
      __args: {
        _inc: 'buckets_inc_input',
        _set: 'buckets_set_input',
        where: 'buckets_bool_exp!',
      },
    },
    updateFile: {
      __type: 'files',
      __args: {
        _inc: 'files_inc_input',
        _set: 'files_set_input',
        pk_columns: 'files_pk_columns_input!',
      },
    },
    updateFiles: {
      __type: 'files_mutation_response',
      __args: {
        _inc: 'files_inc_input',
        _set: 'files_set_input',
        where: 'files_bool_exp!',
      },
    },
    updateUser: {
      __type: 'users',
      __args: {
        _append: 'users_append_input',
        _delete_at_path: 'users_delete_at_path_input',
        _delete_elem: 'users_delete_elem_input',
        _delete_key: 'users_delete_key_input',
        _prepend: 'users_prepend_input',
        _set: 'users_set_input',
        pk_columns: 'users_pk_columns_input!',
      },
    },
    updateUsers: {
      __type: 'users_mutation_response',
      __args: {
        _append: 'users_append_input',
        _delete_at_path: 'users_delete_at_path_input',
        _delete_elem: 'users_delete_elem_input',
        _delete_key: 'users_delete_key_input',
        _prepend: 'users_prepend_input',
        _set: 'users_set_input',
        where: 'users_bool_exp!',
      },
    },
    update_authProviderRequests_many: {
      __type: '[authProviderRequests_mutation_response]',
      __args: { updates: '[authProviderRequests_updates!]!' },
    },
    update_authProviders_many: {
      __type: '[authProviders_mutation_response]',
      __args: { updates: '[authProviders_updates!]!' },
    },
    update_authRefreshTokens_many: {
      __type: '[authRefreshTokens_mutation_response]',
      __args: { updates: '[authRefreshTokens_updates!]!' },
    },
    update_authRoles_many: {
      __type: '[authRoles_mutation_response]',
      __args: { updates: '[authRoles_updates!]!' },
    },
    update_authUserProviders_many: {
      __type: '[authUserProviders_mutation_response]',
      __args: { updates: '[authUserProviders_updates!]!' },
    },
    update_authUserRoles_many: {
      __type: '[authUserRoles_mutation_response]',
      __args: { updates: '[authUserRoles_updates!]!' },
    },
    update_authUserSecurityKeys_many: {
      __type: '[authUserSecurityKeys_mutation_response]',
      __args: { updates: '[authUserSecurityKeys_updates!]!' },
    },
    update_authors: {
      __type: 'authors_mutation_response',
      __args: {
        _inc: 'authors_inc_input',
        _set: 'authors_set_input',
        where: 'authors_bool_exp!',
      },
    },
    update_authors_by_pk: {
      __type: 'authors',
      __args: {
        _inc: 'authors_inc_input',
        _set: 'authors_set_input',
        pk_columns: 'authors_pk_columns_input!',
      },
    },
    update_authors_many: {
      __type: '[authors_mutation_response]',
      __args: { updates: '[authors_updates!]!' },
    },
    update_buckets_many: {
      __type: '[buckets_mutation_response]',
      __args: { updates: '[buckets_updates!]!' },
    },
    update_files_many: {
      __type: '[files_mutation_response]',
      __args: { updates: '[files_updates!]!' },
    },
    update_posts: {
      __type: 'posts_mutation_response',
      __args: { _set: 'posts_set_input', where: 'posts_bool_exp!' },
    },
    update_posts_by_pk: {
      __type: 'posts',
      __args: {
        _set: 'posts_set_input',
        pk_columns: 'posts_pk_columns_input!',
      },
    },
    update_posts_many: {
      __type: '[posts_mutation_response]',
      __args: { updates: '[posts_updates!]!' },
    },
    update_users_many: {
      __type: '[users_mutation_response]',
      __args: { updates: '[users_updates!]!' },
    },
  },
  posts: {
    __typename: { __type: 'String!' },
    author: { __type: 'authors!' },
    author_id: { __type: 'uuid!' },
    id: { __type: 'uuid!' },
    title: { __type: 'String!' },
  },
  posts_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'posts_aggregate_fields' },
    nodes: { __type: '[posts!]!' },
  },
  posts_aggregate_bool_exp: {
    count: { __type: 'posts_aggregate_bool_exp_count' },
  },
  posts_aggregate_bool_exp_count: {
    arguments: { __type: '[posts_select_column!]' },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'posts_bool_exp' },
    predicate: { __type: 'Int_comparison_exp!' },
  },
  posts_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[posts_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'posts_max_fields' },
    min: { __type: 'posts_min_fields' },
  },
  posts_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'posts_max_order_by' },
    min: { __type: 'posts_min_order_by' },
  },
  posts_arr_rel_insert_input: {
    data: { __type: '[posts_insert_input!]!' },
    on_conflict: { __type: 'posts_on_conflict' },
  },
  posts_bool_exp: {
    _and: { __type: '[posts_bool_exp!]' },
    _not: { __type: 'posts_bool_exp' },
    _or: { __type: '[posts_bool_exp!]' },
    author: { __type: 'authors_bool_exp' },
    author_id: { __type: 'uuid_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    title: { __type: 'String_comparison_exp' },
  },
  posts_insert_input: {
    author: { __type: 'authors_obj_rel_insert_input' },
    author_id: { __type: 'uuid' },
    id: { __type: 'uuid' },
    title: { __type: 'String' },
  },
  posts_max_fields: {
    __typename: { __type: 'String!' },
    author_id: { __type: 'uuid' },
    id: { __type: 'uuid' },
    title: { __type: 'String' },
  },
  posts_max_order_by: {
    author_id: { __type: 'order_by' },
    id: { __type: 'order_by' },
    title: { __type: 'order_by' },
  },
  posts_min_fields: {
    __typename: { __type: 'String!' },
    author_id: { __type: 'uuid' },
    id: { __type: 'uuid' },
    title: { __type: 'String' },
  },
  posts_min_order_by: {
    author_id: { __type: 'order_by' },
    id: { __type: 'order_by' },
    title: { __type: 'order_by' },
  },
  posts_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[posts!]!' },
  },
  posts_on_conflict: {
    constraint: { __type: 'posts_constraint!' },
    update_columns: { __type: '[posts_update_column!]!' },
    where: { __type: 'posts_bool_exp' },
  },
  posts_order_by: {
    author: { __type: 'authors_order_by' },
    author_id: { __type: 'order_by' },
    id: { __type: 'order_by' },
    title: { __type: 'order_by' },
  },
  posts_pk_columns_input: { id: { __type: 'uuid!' } },
  posts_set_input: {
    author_id: { __type: 'uuid' },
    id: { __type: 'uuid' },
    title: { __type: 'String' },
  },
  posts_stream_cursor_input: {
    initial_value: { __type: 'posts_stream_cursor_value_input!' },
    ordering: { __type: 'cursor_ordering' },
  },
  posts_stream_cursor_value_input: {
    author_id: { __type: 'uuid' },
    id: { __type: 'uuid' },
    title: { __type: 'String' },
  },
  posts_updates: {
    _set: { __type: 'posts_set_input' },
    where: { __type: 'posts_bool_exp!' },
  },
  query: {
    __typename: { __type: 'String!' },
    authProvider: { __type: 'authProviders', __args: { id: 'String!' } },
    authProviderRequest: {
      __type: 'authProviderRequests',
      __args: { id: 'uuid!' },
    },
    authProviderRequests: {
      __type: '[authProviderRequests!]!',
      __args: {
        distinct_on: '[authProviderRequests_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authProviderRequests_order_by!]',
        where: 'authProviderRequests_bool_exp',
      },
    },
    authProviderRequestsAggregate: {
      __type: 'authProviderRequests_aggregate!',
      __args: {
        distinct_on: '[authProviderRequests_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authProviderRequests_order_by!]',
        where: 'authProviderRequests_bool_exp',
      },
    },
    authProviders: {
      __type: '[authProviders!]!',
      __args: {
        distinct_on: '[authProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authProviders_order_by!]',
        where: 'authProviders_bool_exp',
      },
    },
    authProvidersAggregate: {
      __type: 'authProviders_aggregate!',
      __args: {
        distinct_on: '[authProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authProviders_order_by!]',
        where: 'authProviders_bool_exp',
      },
    },
    authRefreshToken: {
      __type: 'authRefreshTokens',
      __args: { refreshToken: 'uuid!' },
    },
    authRefreshTokens: {
      __type: '[authRefreshTokens!]!',
      __args: {
        distinct_on: '[authRefreshTokens_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authRefreshTokens_order_by!]',
        where: 'authRefreshTokens_bool_exp',
      },
    },
    authRefreshTokensAggregate: {
      __type: 'authRefreshTokens_aggregate!',
      __args: {
        distinct_on: '[authRefreshTokens_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authRefreshTokens_order_by!]',
        where: 'authRefreshTokens_bool_exp',
      },
    },
    authRole: { __type: 'authRoles', __args: { role: 'String!' } },
    authRoles: {
      __type: '[authRoles!]!',
      __args: {
        distinct_on: '[authRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authRoles_order_by!]',
        where: 'authRoles_bool_exp',
      },
    },
    authRolesAggregate: {
      __type: 'authRoles_aggregate!',
      __args: {
        distinct_on: '[authRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authRoles_order_by!]',
        where: 'authRoles_bool_exp',
      },
    },
    authUserProvider: { __type: 'authUserProviders', __args: { id: 'uuid!' } },
    authUserProviders: {
      __type: '[authUserProviders!]!',
      __args: {
        distinct_on: '[authUserProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserProviders_order_by!]',
        where: 'authUserProviders_bool_exp',
      },
    },
    authUserProvidersAggregate: {
      __type: 'authUserProviders_aggregate!',
      __args: {
        distinct_on: '[authUserProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserProviders_order_by!]',
        where: 'authUserProviders_bool_exp',
      },
    },
    authUserRole: { __type: 'authUserRoles', __args: { id: 'uuid!' } },
    authUserRoles: {
      __type: '[authUserRoles!]!',
      __args: {
        distinct_on: '[authUserRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserRoles_order_by!]',
        where: 'authUserRoles_bool_exp',
      },
    },
    authUserRolesAggregate: {
      __type: 'authUserRoles_aggregate!',
      __args: {
        distinct_on: '[authUserRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserRoles_order_by!]',
        where: 'authUserRoles_bool_exp',
      },
    },
    authUserSecurityKey: {
      __type: 'authUserSecurityKeys',
      __args: { id: 'uuid!' },
    },
    authUserSecurityKeys: {
      __type: '[authUserSecurityKeys!]!',
      __args: {
        distinct_on: '[authUserSecurityKeys_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserSecurityKeys_order_by!]',
        where: 'authUserSecurityKeys_bool_exp',
      },
    },
    authUserSecurityKeysAggregate: {
      __type: 'authUserSecurityKeys_aggregate!',
      __args: {
        distinct_on: '[authUserSecurityKeys_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserSecurityKeys_order_by!]',
        where: 'authUserSecurityKeys_bool_exp',
      },
    },
    authors: {
      __type: '[authors!]!',
      __args: {
        distinct_on: '[authors_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authors_order_by!]',
        where: 'authors_bool_exp',
      },
    },
    authors_aggregate: {
      __type: 'authors_aggregate!',
      __args: {
        distinct_on: '[authors_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authors_order_by!]',
        where: 'authors_bool_exp',
      },
    },
    authors_by_pk: { __type: 'authors', __args: { id: 'uuid!' } },
    bucket: { __type: 'buckets', __args: { id: 'String!' } },
    buckets: {
      __type: '[buckets!]!',
      __args: {
        distinct_on: '[buckets_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[buckets_order_by!]',
        where: 'buckets_bool_exp',
      },
    },
    bucketsAggregate: {
      __type: 'buckets_aggregate!',
      __args: {
        distinct_on: '[buckets_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[buckets_order_by!]',
        where: 'buckets_bool_exp',
      },
    },
    file: { __type: 'files', __args: { id: 'uuid!' } },
    files: {
      __type: '[files!]!',
      __args: {
        distinct_on: '[files_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[files_order_by!]',
        where: 'files_bool_exp',
      },
    },
    filesAggregate: {
      __type: 'files_aggregate!',
      __args: {
        distinct_on: '[files_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[files_order_by!]',
        where: 'files_bool_exp',
      },
    },
    posts: {
      __type: '[posts!]!',
      __args: {
        distinct_on: '[posts_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[posts_order_by!]',
        where: 'posts_bool_exp',
      },
    },
    posts_aggregate: {
      __type: 'posts_aggregate!',
      __args: {
        distinct_on: '[posts_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[posts_order_by!]',
        where: 'posts_bool_exp',
      },
    },
    posts_by_pk: { __type: 'posts', __args: { id: 'uuid!' } },
    user: { __type: 'users', __args: { id: 'uuid!' } },
    users: {
      __type: '[users!]!',
      __args: {
        distinct_on: '[users_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[users_order_by!]',
        where: 'users_bool_exp',
      },
    },
    usersAggregate: {
      __type: 'users_aggregate!',
      __args: {
        distinct_on: '[users_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[users_order_by!]',
        where: 'users_bool_exp',
      },
    },
  },
  subscription: {
    __typename: { __type: 'String!' },
    authProvider: { __type: 'authProviders', __args: { id: 'String!' } },
    authProviderRequest: {
      __type: 'authProviderRequests',
      __args: { id: 'uuid!' },
    },
    authProviderRequests: {
      __type: '[authProviderRequests!]!',
      __args: {
        distinct_on: '[authProviderRequests_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authProviderRequests_order_by!]',
        where: 'authProviderRequests_bool_exp',
      },
    },
    authProviderRequestsAggregate: {
      __type: 'authProviderRequests_aggregate!',
      __args: {
        distinct_on: '[authProviderRequests_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authProviderRequests_order_by!]',
        where: 'authProviderRequests_bool_exp',
      },
    },
    authProviderRequests_stream: {
      __type: '[authProviderRequests!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[authProviderRequests_stream_cursor_input]!',
        where: 'authProviderRequests_bool_exp',
      },
    },
    authProviders: {
      __type: '[authProviders!]!',
      __args: {
        distinct_on: '[authProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authProviders_order_by!]',
        where: 'authProviders_bool_exp',
      },
    },
    authProvidersAggregate: {
      __type: 'authProviders_aggregate!',
      __args: {
        distinct_on: '[authProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authProviders_order_by!]',
        where: 'authProviders_bool_exp',
      },
    },
    authProviders_stream: {
      __type: '[authProviders!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[authProviders_stream_cursor_input]!',
        where: 'authProviders_bool_exp',
      },
    },
    authRefreshToken: {
      __type: 'authRefreshTokens',
      __args: { refreshToken: 'uuid!' },
    },
    authRefreshTokens: {
      __type: '[authRefreshTokens!]!',
      __args: {
        distinct_on: '[authRefreshTokens_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authRefreshTokens_order_by!]',
        where: 'authRefreshTokens_bool_exp',
      },
    },
    authRefreshTokensAggregate: {
      __type: 'authRefreshTokens_aggregate!',
      __args: {
        distinct_on: '[authRefreshTokens_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authRefreshTokens_order_by!]',
        where: 'authRefreshTokens_bool_exp',
      },
    },
    authRefreshTokens_stream: {
      __type: '[authRefreshTokens!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[authRefreshTokens_stream_cursor_input]!',
        where: 'authRefreshTokens_bool_exp',
      },
    },
    authRole: { __type: 'authRoles', __args: { role: 'String!' } },
    authRoles: {
      __type: '[authRoles!]!',
      __args: {
        distinct_on: '[authRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authRoles_order_by!]',
        where: 'authRoles_bool_exp',
      },
    },
    authRolesAggregate: {
      __type: 'authRoles_aggregate!',
      __args: {
        distinct_on: '[authRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authRoles_order_by!]',
        where: 'authRoles_bool_exp',
      },
    },
    authRoles_stream: {
      __type: '[authRoles!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[authRoles_stream_cursor_input]!',
        where: 'authRoles_bool_exp',
      },
    },
    authUserProvider: { __type: 'authUserProviders', __args: { id: 'uuid!' } },
    authUserProviders: {
      __type: '[authUserProviders!]!',
      __args: {
        distinct_on: '[authUserProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserProviders_order_by!]',
        where: 'authUserProviders_bool_exp',
      },
    },
    authUserProvidersAggregate: {
      __type: 'authUserProviders_aggregate!',
      __args: {
        distinct_on: '[authUserProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserProviders_order_by!]',
        where: 'authUserProviders_bool_exp',
      },
    },
    authUserProviders_stream: {
      __type: '[authUserProviders!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[authUserProviders_stream_cursor_input]!',
        where: 'authUserProviders_bool_exp',
      },
    },
    authUserRole: { __type: 'authUserRoles', __args: { id: 'uuid!' } },
    authUserRoles: {
      __type: '[authUserRoles!]!',
      __args: {
        distinct_on: '[authUserRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserRoles_order_by!]',
        where: 'authUserRoles_bool_exp',
      },
    },
    authUserRolesAggregate: {
      __type: 'authUserRoles_aggregate!',
      __args: {
        distinct_on: '[authUserRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserRoles_order_by!]',
        where: 'authUserRoles_bool_exp',
      },
    },
    authUserRoles_stream: {
      __type: '[authUserRoles!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[authUserRoles_stream_cursor_input]!',
        where: 'authUserRoles_bool_exp',
      },
    },
    authUserSecurityKey: {
      __type: 'authUserSecurityKeys',
      __args: { id: 'uuid!' },
    },
    authUserSecurityKeys: {
      __type: '[authUserSecurityKeys!]!',
      __args: {
        distinct_on: '[authUserSecurityKeys_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserSecurityKeys_order_by!]',
        where: 'authUserSecurityKeys_bool_exp',
      },
    },
    authUserSecurityKeysAggregate: {
      __type: 'authUserSecurityKeys_aggregate!',
      __args: {
        distinct_on: '[authUserSecurityKeys_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserSecurityKeys_order_by!]',
        where: 'authUserSecurityKeys_bool_exp',
      },
    },
    authUserSecurityKeys_stream: {
      __type: '[authUserSecurityKeys!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[authUserSecurityKeys_stream_cursor_input]!',
        where: 'authUserSecurityKeys_bool_exp',
      },
    },
    authors: {
      __type: '[authors!]!',
      __args: {
        distinct_on: '[authors_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authors_order_by!]',
        where: 'authors_bool_exp',
      },
    },
    authors_aggregate: {
      __type: 'authors_aggregate!',
      __args: {
        distinct_on: '[authors_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authors_order_by!]',
        where: 'authors_bool_exp',
      },
    },
    authors_by_pk: { __type: 'authors', __args: { id: 'uuid!' } },
    authors_stream: {
      __type: '[authors!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[authors_stream_cursor_input]!',
        where: 'authors_bool_exp',
      },
    },
    bucket: { __type: 'buckets', __args: { id: 'String!' } },
    buckets: {
      __type: '[buckets!]!',
      __args: {
        distinct_on: '[buckets_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[buckets_order_by!]',
        where: 'buckets_bool_exp',
      },
    },
    bucketsAggregate: {
      __type: 'buckets_aggregate!',
      __args: {
        distinct_on: '[buckets_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[buckets_order_by!]',
        where: 'buckets_bool_exp',
      },
    },
    buckets_stream: {
      __type: '[buckets!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[buckets_stream_cursor_input]!',
        where: 'buckets_bool_exp',
      },
    },
    file: { __type: 'files', __args: { id: 'uuid!' } },
    files: {
      __type: '[files!]!',
      __args: {
        distinct_on: '[files_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[files_order_by!]',
        where: 'files_bool_exp',
      },
    },
    filesAggregate: {
      __type: 'files_aggregate!',
      __args: {
        distinct_on: '[files_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[files_order_by!]',
        where: 'files_bool_exp',
      },
    },
    files_stream: {
      __type: '[files!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[files_stream_cursor_input]!',
        where: 'files_bool_exp',
      },
    },
    posts: {
      __type: '[posts!]!',
      __args: {
        distinct_on: '[posts_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[posts_order_by!]',
        where: 'posts_bool_exp',
      },
    },
    posts_aggregate: {
      __type: 'posts_aggregate!',
      __args: {
        distinct_on: '[posts_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[posts_order_by!]',
        where: 'posts_bool_exp',
      },
    },
    posts_by_pk: { __type: 'posts', __args: { id: 'uuid!' } },
    posts_stream: {
      __type: '[posts!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[posts_stream_cursor_input]!',
        where: 'posts_bool_exp',
      },
    },
    user: { __type: 'users', __args: { id: 'uuid!' } },
    users: {
      __type: '[users!]!',
      __args: {
        distinct_on: '[users_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[users_order_by!]',
        where: 'users_bool_exp',
      },
    },
    usersAggregate: {
      __type: 'users_aggregate!',
      __args: {
        distinct_on: '[users_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[users_order_by!]',
        where: 'users_bool_exp',
      },
    },
    users_stream: {
      __type: '[users!]!',
      __args: {
        batch_size: 'Int!',
        cursor: '[users_stream_cursor_input]!',
        where: 'users_bool_exp',
      },
    },
  },
  timestamptz_comparison_exp: {
    _eq: { __type: 'timestamptz' },
    _gt: { __type: 'timestamptz' },
    _gte: { __type: 'timestamptz' },
    _in: { __type: '[timestamptz!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'timestamptz' },
    _lte: { __type: 'timestamptz' },
    _neq: { __type: 'timestamptz' },
    _nin: { __type: '[timestamptz!]' },
  },
  users: {
    __typename: { __type: 'String!' },
    activeMfaType: { __type: 'String' },
    avatarUrl: { __type: 'String!' },
    createdAt: { __type: 'timestamptz!' },
    currentChallenge: { __type: 'String' },
    defaultRole: { __type: 'String!' },
    defaultRoleByRole: { __type: 'authRoles!' },
    disabled: { __type: 'Boolean!' },
    displayName: { __type: 'String!' },
    email: { __type: 'citext' },
    emailVerified: { __type: 'Boolean!' },
    id: { __type: 'uuid!' },
    isAnonymous: { __type: 'Boolean!' },
    lastSeen: { __type: 'timestamptz' },
    locale: { __type: 'String!' },
    metadata: { __type: 'jsonb', __args: { path: 'String' } },
    newEmail: { __type: 'citext' },
    otpHash: { __type: 'String' },
    otpHashExpiresAt: { __type: 'timestamptz!' },
    otpMethodLastUsed: { __type: 'String' },
    passwordHash: { __type: 'String' },
    phoneNumber: { __type: 'String' },
    phoneNumberVerified: { __type: 'Boolean!' },
    refreshTokens: {
      __type: '[authRefreshTokens!]!',
      __args: {
        distinct_on: '[authRefreshTokens_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authRefreshTokens_order_by!]',
        where: 'authRefreshTokens_bool_exp',
      },
    },
    refreshTokens_aggregate: {
      __type: 'authRefreshTokens_aggregate!',
      __args: {
        distinct_on: '[authRefreshTokens_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authRefreshTokens_order_by!]',
        where: 'authRefreshTokens_bool_exp',
      },
    },
    roles: {
      __type: '[authUserRoles!]!',
      __args: {
        distinct_on: '[authUserRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserRoles_order_by!]',
        where: 'authUserRoles_bool_exp',
      },
    },
    roles_aggregate: {
      __type: 'authUserRoles_aggregate!',
      __args: {
        distinct_on: '[authUserRoles_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserRoles_order_by!]',
        where: 'authUserRoles_bool_exp',
      },
    },
    securityKeys: {
      __type: '[authUserSecurityKeys!]!',
      __args: {
        distinct_on: '[authUserSecurityKeys_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserSecurityKeys_order_by!]',
        where: 'authUserSecurityKeys_bool_exp',
      },
    },
    securityKeys_aggregate: {
      __type: 'authUserSecurityKeys_aggregate!',
      __args: {
        distinct_on: '[authUserSecurityKeys_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserSecurityKeys_order_by!]',
        where: 'authUserSecurityKeys_bool_exp',
      },
    },
    ticket: { __type: 'String' },
    ticketExpiresAt: { __type: 'timestamptz!' },
    totpSecret: { __type: 'String' },
    updatedAt: { __type: 'timestamptz!' },
    userProviders: {
      __type: '[authUserProviders!]!',
      __args: {
        distinct_on: '[authUserProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserProviders_order_by!]',
        where: 'authUserProviders_bool_exp',
      },
    },
    userProviders_aggregate: {
      __type: 'authUserProviders_aggregate!',
      __args: {
        distinct_on: '[authUserProviders_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[authUserProviders_order_by!]',
        where: 'authUserProviders_bool_exp',
      },
    },
  },
  users_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'users_aggregate_fields' },
    nodes: { __type: '[users!]!' },
  },
  users_aggregate_bool_exp: {
    bool_and: { __type: 'users_aggregate_bool_exp_bool_and' },
    bool_or: { __type: 'users_aggregate_bool_exp_bool_or' },
    count: { __type: 'users_aggregate_bool_exp_count' },
  },
  users_aggregate_bool_exp_bool_and: {
    arguments: {
      __type:
        'users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns!',
    },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'users_bool_exp' },
    predicate: { __type: 'Boolean_comparison_exp!' },
  },
  users_aggregate_bool_exp_bool_or: {
    arguments: {
      __type:
        'users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns!',
    },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'users_bool_exp' },
    predicate: { __type: 'Boolean_comparison_exp!' },
  },
  users_aggregate_bool_exp_count: {
    arguments: { __type: '[users_select_column!]' },
    distinct: { __type: 'Boolean' },
    filter: { __type: 'users_bool_exp' },
    predicate: { __type: 'Int_comparison_exp!' },
  },
  users_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[users_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'users_max_fields' },
    min: { __type: 'users_min_fields' },
  },
  users_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'users_max_order_by' },
    min: { __type: 'users_min_order_by' },
  },
  users_append_input: { metadata: { __type: 'jsonb' } },
  users_arr_rel_insert_input: {
    data: { __type: '[users_insert_input!]!' },
    on_conflict: { __type: 'users_on_conflict' },
  },
  users_bool_exp: {
    _and: { __type: '[users_bool_exp!]' },
    _not: { __type: 'users_bool_exp' },
    _or: { __type: '[users_bool_exp!]' },
    activeMfaType: { __type: 'String_comparison_exp' },
    avatarUrl: { __type: 'String_comparison_exp' },
    createdAt: { __type: 'timestamptz_comparison_exp' },
    currentChallenge: { __type: 'String_comparison_exp' },
    defaultRole: { __type: 'String_comparison_exp' },
    defaultRoleByRole: { __type: 'authRoles_bool_exp' },
    disabled: { __type: 'Boolean_comparison_exp' },
    displayName: { __type: 'String_comparison_exp' },
    email: { __type: 'citext_comparison_exp' },
    emailVerified: { __type: 'Boolean_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    isAnonymous: { __type: 'Boolean_comparison_exp' },
    lastSeen: { __type: 'timestamptz_comparison_exp' },
    locale: { __type: 'String_comparison_exp' },
    metadata: { __type: 'jsonb_comparison_exp' },
    newEmail: { __type: 'citext_comparison_exp' },
    otpHash: { __type: 'String_comparison_exp' },
    otpHashExpiresAt: { __type: 'timestamptz_comparison_exp' },
    otpMethodLastUsed: { __type: 'String_comparison_exp' },
    passwordHash: { __type: 'String_comparison_exp' },
    phoneNumber: { __type: 'String_comparison_exp' },
    phoneNumberVerified: { __type: 'Boolean_comparison_exp' },
    refreshTokens: { __type: 'authRefreshTokens_bool_exp' },
    refreshTokens_aggregate: { __type: 'authRefreshTokens_aggregate_bool_exp' },
    roles: { __type: 'authUserRoles_bool_exp' },
    roles_aggregate: { __type: 'authUserRoles_aggregate_bool_exp' },
    securityKeys: { __type: 'authUserSecurityKeys_bool_exp' },
    securityKeys_aggregate: {
      __type: 'authUserSecurityKeys_aggregate_bool_exp',
    },
    ticket: { __type: 'String_comparison_exp' },
    ticketExpiresAt: { __type: 'timestamptz_comparison_exp' },
    totpSecret: { __type: 'String_comparison_exp' },
    updatedAt: { __type: 'timestamptz_comparison_exp' },
    userProviders: { __type: 'authUserProviders_bool_exp' },
    userProviders_aggregate: { __type: 'authUserProviders_aggregate_bool_exp' },
  },
  users_delete_at_path_input: { metadata: { __type: '[String!]' } },
  users_delete_elem_input: { metadata: { __type: 'Int' } },
  users_delete_key_input: { metadata: { __type: 'String' } },
  users_insert_input: {
    activeMfaType: { __type: 'String' },
    avatarUrl: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    currentChallenge: { __type: 'String' },
    defaultRole: { __type: 'String' },
    defaultRoleByRole: { __type: 'authRoles_obj_rel_insert_input' },
    disabled: { __type: 'Boolean' },
    displayName: { __type: 'String' },
    email: { __type: 'citext' },
    emailVerified: { __type: 'Boolean' },
    id: { __type: 'uuid' },
    isAnonymous: { __type: 'Boolean' },
    lastSeen: { __type: 'timestamptz' },
    locale: { __type: 'String' },
    metadata: { __type: 'jsonb' },
    newEmail: { __type: 'citext' },
    otpHash: { __type: 'String' },
    otpHashExpiresAt: { __type: 'timestamptz' },
    otpMethodLastUsed: { __type: 'String' },
    passwordHash: { __type: 'String' },
    phoneNumber: { __type: 'String' },
    phoneNumberVerified: { __type: 'Boolean' },
    refreshTokens: { __type: 'authRefreshTokens_arr_rel_insert_input' },
    roles: { __type: 'authUserRoles_arr_rel_insert_input' },
    securityKeys: { __type: 'authUserSecurityKeys_arr_rel_insert_input' },
    ticket: { __type: 'String' },
    ticketExpiresAt: { __type: 'timestamptz' },
    totpSecret: { __type: 'String' },
    updatedAt: { __type: 'timestamptz' },
    userProviders: { __type: 'authUserProviders_arr_rel_insert_input' },
  },
  users_max_fields: {
    __typename: { __type: 'String!' },
    activeMfaType: { __type: 'String' },
    avatarUrl: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    currentChallenge: { __type: 'String' },
    defaultRole: { __type: 'String' },
    displayName: { __type: 'String' },
    email: { __type: 'citext' },
    id: { __type: 'uuid' },
    lastSeen: { __type: 'timestamptz' },
    locale: { __type: 'String' },
    newEmail: { __type: 'citext' },
    otpHash: { __type: 'String' },
    otpHashExpiresAt: { __type: 'timestamptz' },
    otpMethodLastUsed: { __type: 'String' },
    passwordHash: { __type: 'String' },
    phoneNumber: { __type: 'String' },
    ticket: { __type: 'String' },
    ticketExpiresAt: { __type: 'timestamptz' },
    totpSecret: { __type: 'String' },
    updatedAt: { __type: 'timestamptz' },
  },
  users_max_order_by: {
    activeMfaType: { __type: 'order_by' },
    avatarUrl: { __type: 'order_by' },
    createdAt: { __type: 'order_by' },
    currentChallenge: { __type: 'order_by' },
    defaultRole: { __type: 'order_by' },
    displayName: { __type: 'order_by' },
    email: { __type: 'order_by' },
    id: { __type: 'order_by' },
    lastSeen: { __type: 'order_by' },
    locale: { __type: 'order_by' },
    newEmail: { __type: 'order_by' },
    otpHash: { __type: 'order_by' },
    otpHashExpiresAt: { __type: 'order_by' },
    otpMethodLastUsed: { __type: 'order_by' },
    passwordHash: { __type: 'order_by' },
    phoneNumber: { __type: 'order_by' },
    ticket: { __type: 'order_by' },
    ticketExpiresAt: { __type: 'order_by' },
    totpSecret: { __type: 'order_by' },
    updatedAt: { __type: 'order_by' },
  },
  users_min_fields: {
    __typename: { __type: 'String!' },
    activeMfaType: { __type: 'String' },
    avatarUrl: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    currentChallenge: { __type: 'String' },
    defaultRole: { __type: 'String' },
    displayName: { __type: 'String' },
    email: { __type: 'citext' },
    id: { __type: 'uuid' },
    lastSeen: { __type: 'timestamptz' },
    locale: { __type: 'String' },
    newEmail: { __type: 'citext' },
    otpHash: { __type: 'String' },
    otpHashExpiresAt: { __type: 'timestamptz' },
    otpMethodLastUsed: { __type: 'String' },
    passwordHash: { __type: 'String' },
    phoneNumber: { __type: 'String' },
    ticket: { __type: 'String' },
    ticketExpiresAt: { __type: 'timestamptz' },
    totpSecret: { __type: 'String' },
    updatedAt: { __type: 'timestamptz' },
  },
  users_min_order_by: {
    activeMfaType: { __type: 'order_by' },
    avatarUrl: { __type: 'order_by' },
    createdAt: { __type: 'order_by' },
    currentChallenge: { __type: 'order_by' },
    defaultRole: { __type: 'order_by' },
    displayName: { __type: 'order_by' },
    email: { __type: 'order_by' },
    id: { __type: 'order_by' },
    lastSeen: { __type: 'order_by' },
    locale: { __type: 'order_by' },
    newEmail: { __type: 'order_by' },
    otpHash: { __type: 'order_by' },
    otpHashExpiresAt: { __type: 'order_by' },
    otpMethodLastUsed: { __type: 'order_by' },
    passwordHash: { __type: 'order_by' },
    phoneNumber: { __type: 'order_by' },
    ticket: { __type: 'order_by' },
    ticketExpiresAt: { __type: 'order_by' },
    totpSecret: { __type: 'order_by' },
    updatedAt: { __type: 'order_by' },
  },
  users_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[users!]!' },
  },
  users_obj_rel_insert_input: {
    data: { __type: 'users_insert_input!' },
    on_conflict: { __type: 'users_on_conflict' },
  },
  users_on_conflict: {
    constraint: { __type: 'users_constraint!' },
    update_columns: { __type: '[users_update_column!]!' },
    where: { __type: 'users_bool_exp' },
  },
  users_order_by: {
    activeMfaType: { __type: 'order_by' },
    avatarUrl: { __type: 'order_by' },
    createdAt: { __type: 'order_by' },
    currentChallenge: { __type: 'order_by' },
    defaultRole: { __type: 'order_by' },
    defaultRoleByRole: { __type: 'authRoles_order_by' },
    disabled: { __type: 'order_by' },
    displayName: { __type: 'order_by' },
    email: { __type: 'order_by' },
    emailVerified: { __type: 'order_by' },
    id: { __type: 'order_by' },
    isAnonymous: { __type: 'order_by' },
    lastSeen: { __type: 'order_by' },
    locale: { __type: 'order_by' },
    metadata: { __type: 'order_by' },
    newEmail: { __type: 'order_by' },
    otpHash: { __type: 'order_by' },
    otpHashExpiresAt: { __type: 'order_by' },
    otpMethodLastUsed: { __type: 'order_by' },
    passwordHash: { __type: 'order_by' },
    phoneNumber: { __type: 'order_by' },
    phoneNumberVerified: { __type: 'order_by' },
    refreshTokens_aggregate: { __type: 'authRefreshTokens_aggregate_order_by' },
    roles_aggregate: { __type: 'authUserRoles_aggregate_order_by' },
    securityKeys_aggregate: {
      __type: 'authUserSecurityKeys_aggregate_order_by',
    },
    ticket: { __type: 'order_by' },
    ticketExpiresAt: { __type: 'order_by' },
    totpSecret: { __type: 'order_by' },
    updatedAt: { __type: 'order_by' },
    userProviders_aggregate: { __type: 'authUserProviders_aggregate_order_by' },
  },
  users_pk_columns_input: { id: { __type: 'uuid!' } },
  users_prepend_input: { metadata: { __type: 'jsonb' } },
  users_set_input: {
    activeMfaType: { __type: 'String' },
    avatarUrl: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    currentChallenge: { __type: 'String' },
    defaultRole: { __type: 'String' },
    disabled: { __type: 'Boolean' },
    displayName: { __type: 'String' },
    email: { __type: 'citext' },
    emailVerified: { __type: 'Boolean' },
    id: { __type: 'uuid' },
    isAnonymous: { __type: 'Boolean' },
    lastSeen: { __type: 'timestamptz' },
    locale: { __type: 'String' },
    metadata: { __type: 'jsonb' },
    newEmail: { __type: 'citext' },
    otpHash: { __type: 'String' },
    otpHashExpiresAt: { __type: 'timestamptz' },
    otpMethodLastUsed: { __type: 'String' },
    passwordHash: { __type: 'String' },
    phoneNumber: { __type: 'String' },
    phoneNumberVerified: { __type: 'Boolean' },
    ticket: { __type: 'String' },
    ticketExpiresAt: { __type: 'timestamptz' },
    totpSecret: { __type: 'String' },
    updatedAt: { __type: 'timestamptz' },
  },
  users_stream_cursor_input: {
    initial_value: { __type: 'users_stream_cursor_value_input!' },
    ordering: { __type: 'cursor_ordering' },
  },
  users_stream_cursor_value_input: {
    activeMfaType: { __type: 'String' },
    avatarUrl: { __type: 'String' },
    createdAt: { __type: 'timestamptz' },
    currentChallenge: { __type: 'String' },
    defaultRole: { __type: 'String' },
    disabled: { __type: 'Boolean' },
    displayName: { __type: 'String' },
    email: { __type: 'citext' },
    emailVerified: { __type: 'Boolean' },
    id: { __type: 'uuid' },
    isAnonymous: { __type: 'Boolean' },
    lastSeen: { __type: 'timestamptz' },
    locale: { __type: 'String' },
    metadata: { __type: 'jsonb' },
    newEmail: { __type: 'citext' },
    otpHash: { __type: 'String' },
    otpHashExpiresAt: { __type: 'timestamptz' },
    otpMethodLastUsed: { __type: 'String' },
    passwordHash: { __type: 'String' },
    phoneNumber: { __type: 'String' },
    phoneNumberVerified: { __type: 'Boolean' },
    ticket: { __type: 'String' },
    ticketExpiresAt: { __type: 'timestamptz' },
    totpSecret: { __type: 'String' },
    updatedAt: { __type: 'timestamptz' },
  },
  users_updates: {
    _append: { __type: 'users_append_input' },
    _delete_at_path: { __type: 'users_delete_at_path_input' },
    _delete_elem: { __type: 'users_delete_elem_input' },
    _delete_key: { __type: 'users_delete_key_input' },
    _prepend: { __type: 'users_prepend_input' },
    _set: { __type: 'users_set_input' },
    where: { __type: 'users_bool_exp!' },
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
    _nin: { __type: '[uuid!]' },
  },
} as const

// These types should be used as utilities, maybe some of them will be generated
// based on the introspection results
export type Maybe<T> = T | null

export type Enumerable<T> = T | Array<T>

export type TruthyKeys<T> = keyof {
  [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
}

export type SelectSubset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
}

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

export interface general_comparison_exp<T> {
  _eq?: Maybe<T>
  _gt?: Maybe<T>
  _gte?: Maybe<T>
  _in?: Maybe<Array<T>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<T>
  _lte?: Maybe<T>
  _neq?: Maybe<T>
  _nin?: Maybe<Array<T>>
}

export type String_comparison_exp = general_comparison_exp<
  Scalars['String']
> & {
  _like?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _nlike?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _regex?: Maybe<Scalars['String']>
  _iregex?: Maybe<Scalars['String']>
  _nregex?: Maybe<Scalars['String']>
  _niregex?: Maybe<Scalars['String']>
}

export type BooleanExpression<T> = {
  _and?: Maybe<Array<BooleanExpression<T>>>
  _not?: Maybe<BooleanExpression<T>>
  _or?: Maybe<Array<BooleanExpression<T>>>
} & {
  [P in keyof T]?: T[P] extends object
    ? BooleanExpression<T[P]>
    : general_comparison_exp<T[P]>
}

export type OrderBy =
  | 'asc'
  | 'asc_nulls_first'
  | 'asc_nulls_last'
  | 'desc'
  | 'desc_nulls_first'
  | 'desc_nulls_last'

export type OrderByExpression<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? OrderByExpression<U>
    : T[P] extends object
    ? OrderByExpression<T[P]>
    : OrderBy
}

export interface ListQueryArgs<T> {
  distinct_on?: Maybe<keyof T | Array<keyof T>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<OrderByExpression<T> | Array<OrderByExpression<T>>>
}

// These types will be generated based on the schema

// Default models

export interface Author {
  __typename: Scalars['String']
  id: Scalars['uuid']
  name: Scalars['String']
  age: Scalars['Int']
}

export interface Post {
  __typename: Scalars['String']
  id: Scalars['uuid']
  title: Scalars['String']
}

// Where inputs

export interface AuthorsWhereQueryInput {
  _and?: Enumerable<AuthorsWhereQueryInput>
  _or?: Enumerable<AuthorsWhereQueryInput>
  _not?: AuthorsWhereQueryInput
  id?: general_comparison_exp<Scalars['uuid']>
  name?: String_comparison_exp
  age?: general_comparison_exp<Scalars['Int']>
  posts?: PostsWhereQueryInput
}

export interface PostsWhereQueryInput {
  _and?: Enumerable<PostsWhereQueryInput>
  _or?: Enumerable<PostsWhereQueryInput>
  _not?: PostsWhereQueryInput
  id?: general_comparison_exp<Scalars['uuid']>
  title?: String_comparison_exp
  author_id?: general_comparison_exp<Scalars['uuid']>
}

// Insert inputs

export interface PostsInsertInput {
  id?: Maybe<Scalars['uuid']>
  title: Scalars['String']
  author_id: Scalars['uuid']
  author?: Maybe<AuthorsInsertInput>
}

export interface PostsArrRelInsertInput {
  data: PostsInsertInput[]
}

export interface AuthorsInsertInput {
  id?: Maybe<Scalars['uuid']>
  name: Scalars['String']
  age: Scalars['Int']
  posts?: Maybe<PostsInsertInput>
}

// Select inputs

export interface AuthorSelect {
  __typename?: boolean
  id?: boolean
  name?: boolean
  age?: boolean
  posts?: boolean | PostsArgs
}

export interface AuthorsSelect {
  __typename?: boolean
  id?: boolean
  name?: boolean
  age?: boolean
  posts?: boolean | PostsArgs
}

export interface PostsSelect {
  __typename?: boolean
  id?: boolean
  title?: boolean
  author_id?: boolean
  author?: boolean | AuthorArgs
}

// Arguments

export interface AuthorArgs {
  select?: AuthorSelect
}

export interface AuthorsArgs {
  variables?: ListQueryArgs<Author> & {
    where?: AuthorsWhereQueryInput
  }
  select?: AuthorsSelect
  typedDocumentNode?: boolean
}

export interface InsertAuthorsOneArgs {
  variables: {
    object: AuthorsInsertInput
    // TODO: extend with on_conflict
  }
  select?: AuthorsSelect
  typedDocumentNode?: boolean
}

export interface AuthorsByPkArgs {
  variables?: {
    id: Scalars['uuid']
  }
  select?: AuthorsSelect
  typedDocumentNode?: boolean
}

export interface PostsArgs {
  variables?: ListQueryArgs<Post> & {
    where?: PostsWhereQueryInput
  }
  select?: PostsSelect
  typedDocumentNode?: boolean
}

// Documents

export type AuthorsDocument<
  TAuthor extends Author | Author[],
  S extends
    | boolean
    | null
    | undefined
    | AuthorsArgs
    | InsertAuthorsOneArgs
    | AuthorsByPkArgs,
> = S extends { select: any }
  ? TypedDocumentNode<
      {
        [P in TruthyKeys<S['select']>]: P extends 'posts'
          ? Array<PostsPayload<S['select'][P]>>
          : P extends keyof Author
          ? Author[P]
          : never
      },
      AuthorsArgs
    >
  : TypedDocumentNode<TAuthor, AuthorsArgs>

export type PostsDocument<
  TPost extends Post | Post[],
  S extends boolean | null | undefined | PostsArgs,
> = S extends { select: any }
  ? TypedDocumentNode<
      {
        [P in TruthyKeys<S['select']>]: P extends 'author'
          ? AuthorsPayload<S['select'][P]>
          : P extends keyof Post
          ? Post[P]
          : never
      },
      PostsArgs
    >
  : TypedDocumentNode<TPost, PostsArgs>

// Payloads

export type PostsPayload<S extends boolean | null | undefined | PostsArgs> =
  S extends true
    ? Post
    : S extends undefined
    ? never
    : S extends { select: any } & PostsArgs
    ? {
        [P in TruthyKeys<S['select']>]: P extends 'author'
          ? AuthorsPayload<S['select'][P]>
          : P extends keyof Post
          ? Post[P]
          : never
      }
    : Post

export type AuthorsPayload<
  S extends
    | boolean
    | null
    | undefined
    | AuthorsArgs
    | InsertAuthorsOneArgs
    | AuthorsByPkArgs,
> = S extends true
  ? Author
  : S extends undefined
  ? never
  : S extends { select: any } & (
      | AuthorsByPkArgs
      | AuthorsArgs
      | InsertAuthorsOneArgs
    )
  ? {
      [P in TruthyKeys<S['select']>]: P extends 'posts'
        ? Array<PostsPayload<S['select'][P]>>
        : P extends keyof Author
        ? Author[P]
        : never
    }
  : Author

// Query, Mutation and Subscription interfaces

export interface Query {
  authors: <T extends AuthorsArgs>(
    args?: SelectSubset<T, AuthorsArgs>,
  ) => T extends { typedDocumentNode: true }
    ? AuthorsDocument<Author[], T>
    : Promise<AuthorsPayload<T>[]>
  authorsByPk: <T extends AuthorsByPkArgs>(
    args?: SelectSubset<T, AuthorsByPkArgs>,
  ) => T extends { typedDocumentNode: true }
    ? AuthorsDocument<Author, T>
    : Promise<AuthorsPayload<T>>
  posts: <T extends PostsArgs>(
    args?: SelectSubset<T, PostsArgs>,
  ) => T extends { typedDocumentNode: true }
    ? PostsDocument<Post[], T>
    : Promise<PostsPayload<T>[]>
}

export interface Mutation {
  insertAuthorsOne: <T extends InsertAuthorsOneArgs>(
    args?: SelectSubset<T, InsertAuthorsOneArgs>,
  ) => T extends { typedDocumentNode: true }
    ? AuthorsDocument<Author, T>
    : Promise<AuthorsPayload<T>>
}
