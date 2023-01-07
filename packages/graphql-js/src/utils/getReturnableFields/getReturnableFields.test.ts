import { expect, test } from 'vitest'
import { generatedSchema } from '../../testUtils/nhost.generated'
import getReturnableFields from './getReturnableFields'

test('should prepare return fields', () => {
  expect(
    getReturnableFields({
      generatedSchema,
      field: { name: 'authors', type: 'authors' },
      args: {
        variables: { where: { name: { _eq: 'John Doe' } }, limit: 1 },
        select: {
          id: true,
          posts: {
            variables: {
              where: {
                title: {
                  _eq: 'asd',
                },
              },
            },
            select: {
              author: {
                select: {
                  posts: {
                    variables: {
                      where: {
                        title: { _eq: 'asd2' },
                      },
                    },
                    select: {
                      id: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    }),
  ).toBe(
    'authors(where: $authorsWhere, limit: $authorsLimit) { id posts(where: $authorsPostsWhere) { author { posts(where: $authorsPostsAuthorPostsWhere) { id } } } }',
  )
})
