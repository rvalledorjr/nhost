import { expect, test } from 'vitest'
import { generatedSchema } from '../../testUtils/nhost.generated'
import prepareQueryFields, { prepareReturnFields } from './prepareQueryFields'

test('should prepare return fields', () => {
  expect(
    prepareReturnFields(
      generatedSchema,
      { name: 'authors', type: 'authors' },
      {
        variables: { where: { _eq: 'Post 1' }, limit: 1 },
        select: { id: true, title: true }
      }
    )
  ).toMatchInlineSnapshot('"authors(where: $where, limit: $limit) { id }"')
})

test('should prepare return values', () => {
  expect(prepareQueryFields(generatedSchema, 'authors')).toMatchObject({
    nonScalar: ['posts', 'posts_aggregate'],
    scalar: ['__typename', 'age', 'id', 'name']
  })
})
