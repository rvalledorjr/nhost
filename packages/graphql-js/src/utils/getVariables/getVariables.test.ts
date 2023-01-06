import { expect, test } from 'vitest'
import { generatedSchema } from '../../testUtils/nhost.generated'
import getVariables from './getVariables'

test('should return an empty object if no variables are passed', () => {
  expect(
    getVariables({ generatedSchema, field: { name: 'authors', type: 'authors' } })
  ).toStrictEqual({})
})

test('should return the variables if some variables are passed', () => {
  expect(
    getVariables({
      generatedSchema,
      field: { name: 'authors', type: 'authors' },
      args: {
        variables: {
          where: {
            _eq: 'John Doe'
          }
        }
      }
    })
  ).toMatchObject({
    where: {
      _eq: 'John Doe'
    }
  })
})

test('should return customized variables if there are nested selections', () => {
  expect(
    getVariables({
      generatedSchema,
      field: { name: 'authors', type: 'authors' },
      args: {
        variables: {
          where: {
            _eq: 'John Doe'
          }
        },
        select: {
          posts: {
            where: {
              _eq: 'John Doe'
            }
          }
        }
      }
    })
  ).toMatchObject({
    where: {
      _eq: 'John Doe'
    }
  })
})
