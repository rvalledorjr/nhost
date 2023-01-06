import { Client } from '../src'
import * as schema from './schema'

import { describe, expect, it } from 'vitest'

const client = new Client({
  schema,
  url: 'http://localhost:1337/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'nhost-admin-secret'
  }
})

describe('main', () => {
  it('single todo with all the fields', () => {
    expect(client.query.todo({ id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1' }).toRawGraphQL())
      .toMatchInlineSnapshot(`
      "query {
          todo (id: \\"6503ef87-d0c2-47a5-80a2-d664a5ae23c1\\") {
              contents
              createdAt
              id
              updatedAt
              userId
          }
      }"
    `)
  })

  it('single todo', () => {
    expect(
      client.query
        .todo({ select: { createdAt: true }, id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1' })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "query {
          todo (id: \\"6503ef87-d0c2-47a5-80a2-d664a5ae23c1\\") {
              createdAt
          }
      }"
    `)
  })

  it('todo list', () => {
    expect(
      client.query
        .todos({
          select: { createdAt: true, contents: true },
          limit: 2,
          where: { createdAt: { _lte: new Date(2023, 1, 5).toISOString() } },
          order_by: [{ createdAt: schema.Order_By.Asc }]
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "query {
          todos (limit: 2, where: {createdAt: {_lte: \\"2023-02-04T23:00:00.000Z\\"}}, order_by: [{createdAt: \\"asc\\"}]) {
              createdAt
              contents
          }
      }"
    `)
  })

  it('select a relationship', () => {
    expect(
      client.query
        .todos({ select: { userId: true, user: { email: true, avatarUrl: true } } })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "query {
          todos {
              userId
              user {
                  email
                  avatarUrl
              }
          }
      }"
    `)
  })

  it('use an aggregate', () => {
    expect(
      client.query
        .todosAggregate({
          select: {
            aggregate: { count: true },
            nodes: { id: true, createdAt: true, user: { email: true } }
          }
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "query {
          todosAggregate {
              aggregate {
                  count
              }
              nodes {
                  id
                  createdAt
                  user {
                      email
                  }
              }
          }
      }"
    `)
  })

  it('single insert mutation', () => {
    expect(
      client.mutation
        .insertFile({
          object: { bucketId: 'dew', name: 'dew' },
          on_conflict: {
            constraint: schema.Files_Constraint.FilesPkey,
            update_columns: [schema.Files_Update_Column.Name]
          },
          select: {
            id: true
          }
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "mutation {
          insertFile (object: {bucketId: \\"dew\\", name: \\"dew\\"}, on_conflict: {constraint: \\"files_pkey\\", update_columns: [\\"name\\"]}) {
              id
          }
      }"
    `)
  })

  it('multiple inserts mutation', () => {
    expect(
      client.mutation
        .insertFiles({
          objects: [
            { bucketId: 'dew', name: 'dew' },
            { bucketId: 'dew', name: 'dew' }
          ],
          on_conflict: {
            constraint: schema.Files_Constraint.FilesPkey,
            update_columns: [schema.Files_Update_Column.Name]
          },
          select: {
            affected_rows: true,
            returning: {
              id: true
            }
          }
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "mutation {
          insertFiles (objects: [{bucketId: \\"dew\\", name: \\"dew\\"}, {bucketId: \\"dew\\", name: \\"dew\\"}], on_conflict: {constraint: \\"files_pkey\\", update_columns: [\\"name\\"]}) {
              affected_rows
              returning {
                  id
              }
          }
      }"
    `)
  })

  it('single deletion mutation', () => {
    expect(
      client.mutation
        .deleteFile({
          id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1',
          select: {
            id: true
          }
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "mutation {
          deleteFile (id: \\"6503ef87-d0c2-47a5-80a2-d664a5ae23c1\\") {
              id
          }
      }"
    `)
  })

  it('multiple deletion mutation', () => {
    expect(
      client.mutation
        .deleteFiles({
          where: { bucketId: { _eq: 'default' } },
          select: {
            affected_rows: true
          }
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "mutation {
          deleteFiles (where: {bucketId: {_eq: \\"default\\"}}) {
              affected_rows
          }
      }"
    `)
  })
})
