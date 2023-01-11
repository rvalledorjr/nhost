import { expect, test } from 'vitest'
import getGraphqlMutationString from './getGraphqlMutationString'

test('should generate a GraphQL mutation with arguments', () => {
  expect(
    getGraphqlMutationString({
      name: 'messages',
      mutationParams: [
        {
          name: 'object',
          path: 'messages',
          type: 'messages_insert_input!',
        },
      ],
      returnableFields: 'insert_messages_one(object: $object) { id message }',
    }),
  ).toBe(`mutation Messages($object: messages_insert_input!) {
  insert_messages_one(object: $object) {
    id
    message
  }
}`)
})

test('should generate proper argument list for query if there are nested arguments', () => {
  expect(
    getGraphqlMutationString({
      name: 'insert_authors_one',
      mutationParams: [
        {
          name: 'object',
          path: 'authors',
          type: 'authors_insert_input!',
        },
        { name: 'where', path: 'authors.messages', type: 'messages_bool_exp' },
      ],
      returnableFields:
        'insert_authors_one(where: $authorsObject) { id name messages(where: $authorsMessagesWhere) { id message } }',
    }),
  )
    .toBe(`mutation InsertAuthorsOne($authorsObject: authors_insert_input!, $authorsMessagesWhere: messages_bool_exp) {
  insert_authors_one(where: $authorsObject) {
    id
    name
    messages(where: $authorsMessagesWhere) {
      id
      message
    }
  }
}`)
})
