import { expect, test } from 'vitest'
import { generatedSchema, Mutation, Query, Subscription } from '../testUtils/schema.generated'
import { NhostGraphQlClient, prepareFields } from './client'

test('client should have a default generated schema', () => {
  const client = new NhostGraphQlClient<Query, Mutation, Subscription>({
    url: 'http://localhost:1337/v1/graphql',
    generatedSchema
  })

  expect(
    client.query
      ?.messages({
        where: {
          id: { _eq: '4ea37249-2b87-45c4-a501-74596fd6c8ba' }
        }
      })
      // @ts-ignore
      .returnAll()
  ).toMatchInlineSnapshot(`
    "query Messages($where: messages_bool_exp) {
      messages(where: $where) {
        __typename
        expiration_date
        from_email
        id
        message
        phone_number
        project_id
        subject
      }
    }"
  `)

  expect(
    client.query
      ?.messages({
        where: {
          id: { _eq: '4ea37249-2b87-45c4-a501-74596fd6c8ba' }
        }
      })
      // @ts-ignore
      .projects({ where: { id: {} } })
      .returnAll()
  ).toMatchInlineSnapshot(`
    "query Projects($where: projects_bool_exp) {
      projects(where: $where) {
        __typename
        api_key
        id
        name
        to_emails
        to_emails_2
      }
    }"
  `)
})

test('return values should be prepared', () => {
  expect(prepareFields(generatedSchema, 'messages')).toMatchObject({
    nonScalar: ['projects'],
    scalar: [
      '__typename',
      'expiration_date',
      'from_email',
      'id',
      'message',
      'phone_number',
      'project_id',
      'subject'
    ]
  })
})
