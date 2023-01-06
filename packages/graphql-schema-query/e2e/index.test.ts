import fetch from 'cross-fetch'
import { beforeAll, describe, expect, it } from 'vitest'
import { Client } from '../src'
import * as schema from '../tests/schema'

const url = 'http://localhost:1337/v1/graphql'
const headers = {
  'x-hasura-admin-secret': 'nhost-admin-secret'
}
const client = new Client({
  schema,
  url,
  headers
})

describe('main', () => {
  let userId: string
  beforeAll(async () => {
    const result = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query: `mutation { insertUser(object: {locale: "en"} ) { id } }` })
    })
    const { data } = await result.json()
    userId = data.insertUser.id
  })

  it('should insert a todo', async () => {
    const result = await client.mutation
      .insertTodo({
        object: { contents: 'test', userId },
        select: { contents: true, user: { email: true, id: true } }
      })
      .run()
    expect(result.contents).toMatchInlineSnapshot('"test"')
    expect(result.user.id).toEqual(userId)
  })

  it('should insert and remove a todo', async () => {
    const insertResult = await client.mutation
      .insertTodo({
        object: { contents: 'test', userId },
        select: { id: true, contents: true }
      })
      .run()

    expect(insertResult.contents).toMatchInlineSnapshot('"test"')
    const deleteResult = await client.mutation
      .deleteTodo({ id: insertResult.id, select: { contents: true } })
      .run()

    expect(deleteResult).toMatchInlineSnapshot(`
      {
        "contents": "test",
      }
    `)
  })
})
