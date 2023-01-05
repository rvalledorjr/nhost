import { expect, test } from 'vitest'
import generateGraphqlQuery from './generateGraphqlQuery'

test('should generate a GraphQL query without arguments', () => {
  expect(generateGraphqlQuery({ name: 'messages', returnFields: ['id', 'message'] }))
    .toMatchInlineSnapshot(`
    "query Messages {
      messages {
        id
        message
      }
    }"
  `)
})

test('should generate a GraphQL query with arguments', () => {
  expect(
    generateGraphqlQuery({
      name: 'messages',
      args: { where: 'messages_bool_exp' },
      returnFields: ['id', 'message']
    })
  ).toMatchInlineSnapshot(`
    "query Messages($where: messages_bool_exp) {
      messages(where: $where) {
        id
        message
      }
    }"
  `)
})
