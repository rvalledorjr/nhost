import { BaseGeneratedSchema } from '../../client/client.types'

export interface SelectedFields
  extends Record<string, boolean | Record<string, any> | SelectedFields> {}

export interface QueryArgs {
  variables?: Record<string, any>
  select?: SelectedFields
}

export interface QueryField {
  name: string
  type: string
}

function capitalize(text: string) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
}

export function getVariableNames(
  queryArgs: QueryArgs,
  fieldName: string
): { field: string; variable: string }[] {
  const currentVariables = Object.keys(queryArgs.variables || {}).map((variable) => ({
    field: fieldName,
    variable
  }))

  const nestedVariables = Object.keys(queryArgs.select || {})
    .filter((key) => typeof queryArgs.select?.[key] !== 'boolean')
    .map((key) =>
      getVariableNames(queryArgs.select?.[key] as QueryArgs, key).map((variable) => ({
        field: `${fieldName}.${variable.field}`,
        variable: variable.variable
      }))
    )
    .reduce((variables, currentVariables) => [...variables, ...currentVariables], [])

  return [...currentVariables, ...nestedVariables]
}

export function prepareReturnFields<S extends BaseGeneratedSchema = any>(
  generatedSchema: S,
  field: QueryField,
  config: QueryArgs,
  previousField?: string
): string {
  const variables = getVariableNames(config, field.name)
  const currentVariables = variables?.filter(({ field: variableField }) =>
    previousField
      ? variableField === `${previousField}.${field.name}`
      : variableField === field.name
  )
  const fields = generatedSchema[field.type]

  const { scalar, nonScalar } = Object.keys(fields || {}).reduce(
    ({ scalar, nonScalar }, field) => {
      if (!config.select?.[field]) {
        return { nonScalar, scalar }
      }

      const fieldType = fields[field]?.__type.replace(/!|\[|\]/g, '')

      if (typeof generatedSchema[fieldType] === 'undefined') {
        return { nonScalar, scalar: [...scalar, { name: field, type: fieldType }] }
      }

      return { scalar, nonScalar: [...nonScalar, { name: field, type: fieldType }] }
    },
    {
      scalar: [] as { name: string; type: string }[],
      nonScalar: [] as { name: string; type: string }[]
    }
  )

  const returnFields = [
    ...scalar.map(({ name }) => name),
    ...nonScalar.map(({ name, type }) =>
      prepareReturnFields(generatedSchema, { name, type }, config.select?.[name] as QueryArgs, name)
    )
  ]

  console.log(currentVariables, variables)

  if (currentVariables.length === variables.length) {
    return `${field.name}${
      currentVariables.length > 0
        ? `(${currentVariables.map(({ variable }) => `${variable}: $${variable}`).join(', ')})`
        : ''
    } { ${returnFields.join(' ')} }`
  }

  return `${field.name}${
    currentVariables.length > 0
      ? `(${currentVariables
          .map(
            ({ field, variable }) =>
              `${variable}: $${field
                .split('.')
                .map((subField, index) => (index > 0 ? capitalize(subField) : subField))
                .join()}${capitalize(variable)}`
          )
          .join(', ')})`
      : ''
  } { ${returnFields.join(' ')} }`
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
