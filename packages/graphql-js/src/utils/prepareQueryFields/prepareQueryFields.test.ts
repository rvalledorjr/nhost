import { expect, test } from 'vitest'
import { generatedSchema } from '../../testUtils/nhost.generated'
import prepareQueryFields, { prepareReturnFields } from './prepareQueryFields'

test('should prepare return fields', () => {
  expect(
    prepareReturnFields(
      generatedSchema,
      { name: 'authors', type: 'authors' },
      {
        variables: { where: { name: { _eq: 'John Doe' } }, limit: 1 },
        select: {
          id: true,
          posts: {
            variables: {
              where: {
                title: {
                  _eq: 'asd'
                }
              }
            },
            select: {
              author: {
                select: {
                  posts: {
                    variables: {
                      where: {
                        title: { _eq: 'asd2' }
                      }
                    },
                    select: {
                      id: true
                    }
                  }
                }
              }
            }
          }
        }
      }
    )
  ).toMatchInlineSnapshot(
    '"authors(where: $authorsWhere, limit: $authorsLimit) { __typename age id name posts(where: $authorsPostsWhere) { __typename author_id id title author { __typename age id name posts(where: $authorsPostsAuthorPostsWhere) { __typename author_id id title } } } }"'
  )
})

test('should prepare return values', () => {
  expect(prepareQueryFields(generatedSchema, 'authors')).toMatchObject({
    nonScalar: ['posts', 'posts_aggregate'],
    scalar: ['__typename', 'age', 'id', 'name']
  })
})
