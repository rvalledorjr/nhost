import { graphql } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, beforeAll, beforeEach, expect, test } from 'vitest'
import { generatedSchema, type Query } from '../testUtils/nhost.generated'
import { NhostGraphqlClient } from './client'

const mockLink = graphql.link('http://localhost:1337/v1/graphql')
const server = setupServer()

const client = new NhostGraphqlClient<Query>({
  url: 'http://localhost:1337/v1/graphql',
  generatedSchema
})

beforeAll(() => server.listen())
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())

test('client should have a default generated schema', async () => {
  server.use(
    mockLink.query('Authors', (req, res, ctx) => {
      return res(
        ctx.data({
          data: {
            authors: [
              { id: '1', name: 'Jane Doe' },
              { id: '2', name: 'John Doe' }
            ]
          }
        })
      )
    })
  )

  const authors = await client.query.authors({
    where: {
      posts: {
        _and: [
          {
            title: {
              _eq: 'hello World'
            }
          }
        ]
      }
    },
    limit: 2,
    order_by: { name: 'asc' },
    distinct_on: 'name'
  })

  expect(authors).toStrictEqual([
    { id: '1', name: 'Jane Doe' },
    { id: '2', name: 'John Doe' }
  ])
})
