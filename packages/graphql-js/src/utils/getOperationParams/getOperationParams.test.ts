import { expect, test } from 'vitest'
import { generatedSchema } from '../../testUtils/nhost.generated'
import getOperationParams from './getOperationParams'

test('should generate proper query parameters', () => {
  expect(
    getOperationParams({
      generatedSchema,
      field: { name: 'authors', type: 'authors_bool_exp' },
      args: {
        variables: {
          where: {
            id: {
              _eq: 'Name',
            },
          },
        },
        select: {
          id: true,
          posts: {
            variables: {
              where: {
                id: {
                  _eq: 'Name',
                },
              },
            },
            select: {
              id: true,
              title: true,
            },
          },
        },
      },
      operationType: 'query',
    }),
  ).toStrictEqual([
    {
      name: 'where',
      path: 'authors',
      type: 'authors_bool_exp',
    },
    {
      name: 'where',
      path: 'authors.posts',
      type: 'posts_bool_exp',
    },
  ])
})
