import { expect, test } from 'vitest'
import getGraphqlQueryString from './getGraphqlQueryString'

test('should generate a GraphQL query without arguments', () => {
  expect(getGraphqlQueryString({ name: 'messages', returnFields: 'id message' }))
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
    getGraphqlQueryString({
      name: 'messages',
      variables: { where: 'messages_bool_exp' },
      returnFields: 'id message'
    })
  ).toBe(`query Messages {
  messages {
    id
    message
  }
}`)
})

test('should generate a GraphQL query with nested arguments', () => {
  expect(
    getGraphqlQueryString({
      name: 'messages',
      variables: { where: 'messages_bool_exp' },
      queryParams: [{ name: 'where', path: 'messages', type: 'messages_bool_exp' }],
      returnFields: 'id message'
    })
  ).toBe(`query Messages($where: messages_bool_exp) {
  messages(where: $where) {
    id
    message
  }
}`)
})

test('should generate proper argument list for query if there are nested arguments', () => {
  expect(
    getGraphqlQueryString({
      name: 'authors',
      variables: { where: 'authors_bool_exp' },
      queryParams: [
        { name: 'where', path: 'authors', type: 'authors_bool_exp' },
        { name: 'where', path: 'authors.messages', type: 'messages_bool_exp' }
      ],
      returnFields: 'id name messages(where: $authorsMessagesWhere) { id message }'
    })
  ).toBe(`query Authors($authorsWhere: authors_bool_exp, $authorsMessagesWhere: messages_bool_exp) {
  authors(where: $authorsWhere) {
    id
    name
    messages(where: $authorsMessagesWhere) {
      id
      message
    }
  }
}`)
})
