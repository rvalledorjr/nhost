import { BaseGeneratedSchema } from '../../client/client.types'

export interface SelectedFields
  extends Record<string, boolean | Record<string, any> | SelectedFields> {}

export interface QueryArgs {
  variables?: Record<string, string>
  select?: SelectedFields
}

function capitalize(text: string) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
}

export function getVariableNames(config: QueryArgs): string[] {
  const nestedVariables = Object.keys(config.select || {})
    .filter((key) => typeof config.select?.[key] !== 'boolean')
    .map((key) => {
      console.log(key)
      return getVariableNames(config.select?.[key] as QueryArgs)
    })
    .reduce((variables, currentVariables) => [...variables, ...currentVariables], [])

  console.log(config.variables)

  return [...Object.keys(config?.variables || {}), ...nestedVariables]
}

export function prepareFields<S extends BaseGeneratedSchema = any>(
  generatedSchema: S,
  selectedFields: SelectedFields
): string {
  const { query: generatedQueries } = generatedSchema
  const keys = Object.keys(selectedFields)

  return keys.reduce((queryFields, key) => {
    const value = selectedFields[key]

    if (!value) {
      return queryFields
    }

    if (typeof value === 'boolean') {
      const isScalar = typeof generatedSchema[key] === 'undefined'

      if (isScalar) {
        return `${queryFields} ${key}`
      }

      const { scalar } = prepareQueryFields(generatedSchema, key as keyof S)

      return `${queryFields} ${key} { ${scalar.join(' ')} }`
    }

    if (!value.select) {
      return queryFields
    }

    if (!value.variables || Object.keys(value.variables).length === 0) {
      return `${queryFields} ${key} { ${prepareFields(generatedSchema, value.select)} }`
    }

    // we get all the variables of the current
    const variables = Object.keys(value.variables).reduce(
      (currentArguments, variable) => ({
        ...currentArguments,
        [`${key}${capitalize(variable)}`]: {
          type: generatedQueries[key].__args?.[variable] || '',
          originalName: variable
        }
      }),
      {} as Record<string, { type: string; originalName: string }>
    )

    return `${queryFields} ${key}${`(${Object.keys(variables)
      .map((variable) => `${variables[variable].originalName}: $${variable}`)
      .join(', ')})`} { ${prepareFields(generatedSchema, value.select).trim()} }`
  }, '')
}

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
