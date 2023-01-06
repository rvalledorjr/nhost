import { expect, test } from 'vitest'
import { generatedSchema } from '../../testUtils/nhost.generated'
import getQueryParams from './getQueryParams'

test('should generate proper query parameters', () => {
  expect(
    getQueryParams({
      generatedSchema,
      fieldName: 'authors',
      args: {
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
      }
    })
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
