import { expect, test } from 'vitest'
import { generatedSchema, Mutation, Query, Subscription } from '../testUtils/schema.generated'
import { NhostGraphQlClient, prepareReturnValues } from './client'

test('client should have a default generated schema', () => {
  const client = new NhostGraphQlClient<Query, Mutation, Subscription>({
    url: 'http://localhost:1337/v1/graphql',
    generatedSchema
  })

  // @ts-ignore
  console.log(client.query.authProvider({ id: '4ea37249-2b87-45c4-a501-74596fd6c8ba' }).returnAll())

  // @ts-ignore
  expect(client.query.authProvider({ id: '4ea37249-2b87-45c4-a501-74596fd6c8ba' }).returnAll())
    .toMatchInlineSnapshot(`
      "query AuthProvider($id: String!) {
        authProvider(id: $id) {
          __typename
          id
        }
      }"
    `)
})

test('return values should be prepared', () => {
  expect(prepareReturnValues(generatedSchema, 'authProvider')).toBe([
    '__typename',
    'id',
    'userProviders.id',
    'userProviders.provider.id'
  ])
})
