import type {
  BaseGeneratedSchema,
  QueryArgs,
  QueryField,
  QueryParam
} from '../../client/client.types'
import getQueryParams from '../getQueryParams'

function capitalize(text: string) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
}

export interface GetReturnableFieldsOptions<S extends BaseGeneratedSchema = any> {
  /**
   * Generated schema.
   */
  generatedSchema: S
  /**
   * The field to get the return fields for.
   */
  field: QueryField
  /**
   * The query arguments.
   */
  args?: QueryArgs
  /**
   * The previous field that was used to get the return fields for.
   *
   * @internal
   * @default '''
   */
  previousField?: string
  /**
   * The previous query params that were used to get the return fields for.
   *
   * @internal
   */
  previousQueryParams?: QueryParam[]
}

/**
 * Returns all the fields that should be returned in the query. Included nested
 * fields with proper query arguments.
 *
 * @param options - Options to configure the returnable fields.
 * @returns The returnable fields.
 */
export default function getReturnableFields<S extends BaseGeneratedSchema = any>({
  generatedSchema,
  field,
  args,
  previousField = '',
  previousQueryParams
}: GetReturnableFieldsOptions<S>): string {
  const generatedFields = generatedSchema[field.type]
  const queryParams = previousQueryParams || getQueryParams(args || {}, field.name)

  const currentQueryParams = queryParams?.filter(({ fieldType }) => {
    if (previousField) {
      return fieldType === `${previousField}.${field.name}`
    }

    return fieldType === field.name
  })

  const { scalar, nonScalar } = Object.keys(generatedFields || {}).reduce(
    ({ scalar, nonScalar }, field) => {
      const fieldType = generatedFields[field]?.__type.replace(/!|\[|\]/g, '')

      if (typeof generatedSchema[fieldType] === 'undefined') {
        return { nonScalar, scalar: [...scalar, { name: field, type: fieldType }] }
      }

      if (args?.select && !args.select[field]) {
        return { scalar, nonScalar }
      }

      return { scalar, nonScalar: [...nonScalar, { name: field, type: fieldType }] }
    },
    {
      scalar: [] as QueryField[],
      nonScalar: [] as QueryField[]
    }
  )

  const returnFields = !args?.select
    ? [...scalar.map(({ name }) => name)]
    : [
        ...scalar.map(({ name }) => name),
        ...nonScalar.map((nonScalarField) =>
          getReturnableFields({
            generatedSchema,
            field: nonScalarField,
            args: args.select?.[nonScalarField.name] as QueryArgs,
            previousField: previousField ? `${previousField}.${field.name}` : field.name,
            previousQueryParams: queryParams
          })
        )
      ]

  if (currentQueryParams.length === queryParams.length) {
    return `${field.name}${
      currentQueryParams.length > 0
        ? `(${currentQueryParams.map(({ name }) => `${name}: $${name}`).join(', ')})`
        : ''
    } { ${returnFields.join(' ')} }`
  }

  return `${field.name}${
    currentQueryParams.length > 0
      ? `(${currentQueryParams
          .map(
            ({ fieldType, name }) =>
              `${name}: $${fieldType
                .split('.')
                .map((fieldPart, index) => (index > 0 ? capitalize(fieldPart) : fieldPart))
                .join('')}${capitalize(name)}`
          )
          .join(', ')})`
      : ''
  } { ${returnFields.join(' ')} }`
}
