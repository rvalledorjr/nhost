import { expect, test } from 'vitest'
import getQueryParams from './getQueryParams'

test('should generate proper query parameters', () => {
  expect(
    getQueryParams(
      {
        variables: {
          where: {
            id: {
              _eq: 'Name'
            }
          }
        },
        select: {
          id: true,
          posts: {
            variables: {
              where: {
                id: {
                  _eq: 'Name'
                }
              }
            },
            select: {
              id: true,
              title: true
            }
          }
        }
      },
      'authors'
    )
  ).toStrictEqual([
    {
      fieldType: 'authors',
      name: 'where'
    },
    {
      fieldType: 'authors.posts',
      name: 'where'
    }
  ])
})
