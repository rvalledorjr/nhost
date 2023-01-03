import { expect, test } from 'vitest'
import { generatedSchema } from '../testUtils/schema.generated'
import { NhostGraphQlClient } from './client'

test('client should have a default generated schema', () => {
  const client = new NhostGraphQlClient<typeof generatedSchema>({
    url: 'http://localhost:1337/v1/graphql',
    generatedSchema
  })

  expect(client.query.authProvider).toBeTypeOf('function')
})
