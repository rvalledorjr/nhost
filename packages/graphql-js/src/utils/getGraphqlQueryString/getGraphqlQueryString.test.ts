import { expect, test } from 'vitest'
import getGraphqlQueryString from './getGraphqlQueryString'

test('should generate a GraphQL query without arguments', () => {
  expect(
    getGraphqlQueryString({
      name: 'messages',
      returnableFields: 'messages { id message }',
    }),
  ).toBe(`query Messages {
  messages {
    id
    message
  }
}`)
})

test('should generate a GraphQL query with arguments', () => {
  expect(
    getGraphqlQueryString({
      name: 'messages',
      queryParams: [
        { name: 'where', path: 'messages', type: 'messages_bool_exp' },
      ],
      returnableFields: 'messages(where: $where) { id message }',
    }),
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
      queryParams: [
        { name: 'where', path: 'authors', type: 'authors_bool_exp' },
        { name: 'where', path: 'authors.messages', type: 'messages_bool_exp' },
      ],
      returnableFields:
        'authors(where: $authorsWhere) { id name messages(where: $authorsMessagesWhere) { id message } }',
    }),
  )
    .toBe(`query Authors($authorsWhere: authors_bool_exp, $authorsMessagesWhere: messages_bool_exp) {
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
