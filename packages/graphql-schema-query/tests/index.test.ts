import { Client } from '../src'
import * as schema from './schema'

import { describe, expect, it } from 'vitest'

describe('main', async () => {
  const client = new Client({
    schema,
    url: 'http://localhost:1337/v1/graphql',
    headers: {
      'x-hasura-admin-secret': 'nhost-admin-secret'
    }
  })

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

  it('select a relationship', async () => {
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

  it('use an aggregate', async () => {
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
})
