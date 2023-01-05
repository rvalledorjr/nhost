import { graphql } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, beforeAll, beforeEach, expect, test } from 'vitest'
import { order_by, Query } from '../testUtils/nhost.generated'
import { generatedSchema } from '../testUtils/schema.generated'
import { NhostGraphQlClient } from './client'

const mockLink = graphql.link('http://localhost:1337/v1/graphql')
const server = setupServer()

const client = new NhostGraphQlClient<Query>({
  url: 'http://localhost:1337/v1/graphql',
  generatedSchema
})

beforeAll(() => server.listen())
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())

test('client should have a default generated schema', async () => {
  server.use(
    mockLink.query('Messages', (req, res, ctx) =>
      res(
        ctx.data({
          data: {
            messages: [
              { id: '1', message: 'Hello World 1' },
              { id: '2', message: 'Hello World 2' }
            ]
          }
        })
      )
    )
  )

  const messages = await client.query.messages({
    limit: 2,
    order_by: { message: order_by.asc }
  })

  expect(messages).toStrictEqual([
    { id: '1', message: 'Hello World 1' },
    { id: '2', message: 'Hello World 2' }
  ])
})
