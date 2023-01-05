import { graphql } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, beforeAll, beforeEach, expect, test } from 'vitest'
import { generatedSchema, order_by, Query } from '../testUtils/nhost.generated'
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
    mockLink.query('Authors', (req, res, ctx) =>
      res(
        ctx.data({
          data: {
            messages: [
              { id: '1', name: 'Jane Doe' },
              { id: '2', name: 'John Doe' }
            ]
          }
        })
      )
    )
  )

  const authors = await client.query.authors({
    limit: 2,
    order_by: { name: order_by.asc }
  })

  console.log(authors)

  // client.query.authors({ where: {  }})

  expect(authors).toStrictEqual([
    { id: '1', name: 'Jane Doe' },
    { id: '2', name: 'John Doe' }
  ])
})
