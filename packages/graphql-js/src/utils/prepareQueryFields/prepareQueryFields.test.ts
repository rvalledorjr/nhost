import { expect, test } from 'vitest'
import { generatedSchema } from '../../testUtils/nhost.generated'
import prepareQueryFields from './prepareQueryFields'

test('return values should be prepared', () => {
  expect(prepareQueryFields(generatedSchema, 'authors')).toMatchObject({
    nonScalar: ['posts', 'posts_aggregate'],
    scalar: ['__typename', 'age', 'id', 'name']
  })
})
