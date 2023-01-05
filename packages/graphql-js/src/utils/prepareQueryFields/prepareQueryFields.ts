import { BaseGeneratedSchema } from '../../client/client.types'

export default function prepareQueryFields<S extends BaseGeneratedSchema = any>(
  generatedSchema: S,
  key: keyof S,
  previousKey?: string,
  existingKeys: string[] = []
) {
  const { query: generatedQueries } = generatedSchema
  const currentQuery =
    generatedSchema[generatedQueries[key as string]?.__type?.replace(/(!|\[|\])/g, '')]
  const availableReturnValues = Object.keys(currentQuery || {})

  const { scalar, nonScalar } = availableReturnValues.reduce(
    (currentValues, returnValue) => {
      const type = currentQuery[returnValue].__type.replace(/(!|\[|\])/g, '')

      if (Object.keys(generatedSchema).includes(type)) {
        if (existingKeys.includes(type)) {
          return currentValues
        }

        return {
          ...currentValues,
          nonScalar: [...currentValues.nonScalar, type]
        }
      }

      return {
        ...currentValues,
        scalar: [
          ...currentValues.scalar,
          previousKey ? `${previousKey}.${returnValue}` : returnValue
        ]
      }
    },
    { scalar: [] as string[], nonScalar: [] as string[] }
  )

  return { scalar, nonScalar }
}
