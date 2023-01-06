import { expect, test } from 'vitest'
import { generatedSchema } from '../../testUtils/nhost.generated'
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
      'authors',
      generatedSchema
    )
  ).toStrictEqual([
    {
      name: 'where',
      path: 'authors',
      type: 'authors_bool_exp'
    },
    {
      name: 'where',
      path: 'authors.posts',
      type: 'posts_bool_exp'
    }
  ])
})
