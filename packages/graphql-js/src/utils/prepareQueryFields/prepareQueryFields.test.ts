import { expect, test } from 'vitest'
import { generatedSchema } from '../../testUtils/schema.generated'
import prepareQueryFields from './prepareQueryFields'

test('return values should be prepared', () => {
  expect(prepareQueryFields(generatedSchema, 'messages')).toMatchObject({
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
