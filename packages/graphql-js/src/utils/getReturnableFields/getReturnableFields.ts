import type {
  BaseGeneratedSchema,
  QueryArgs,
  QueryField,
  QueryParam,
} from '../../client/client.types'
import capitalize from '../capitalize'
import getQueryParams from '../getQueryParams'
import normalizeType from '../normalizeType'

export interface GetReturnableFieldsOptions {
  /**
   * Generated schema.
   */
  generatedSchema: BaseGeneratedSchema
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
   * @default ''
   */
  previousPath?: string
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
export default function getReturnableFields({
  generatedSchema,
  field,
  args,
  previousPath = '',
  previousQueryParams,
}: GetReturnableFieldsOptions): string {
  const generatedFields = generatedSchema[field.type]
  const queryParams =
    previousQueryParams || getQueryParams({ generatedSchema, args, field })

  const currentQueryParams = queryParams?.filter(({ path }) => {
    if (previousPath) {
      return path === `${previousPath}.${field.name}`
    }

    return path === field.name
  })

  const { scalar, nonScalar } = Object.keys(generatedFields || {}).reduce(
    ({ scalar, nonScalar }, field) => {
      const fieldType = normalizeType(generatedFields[field]?.__type)

      if (args?.select && !args.select[field]) {
        return { scalar, nonScalar }
      }

      if (typeof generatedSchema[fieldType] === 'undefined') {
        return {
          nonScalar,
          scalar: [...scalar, { name: field, type: fieldType }],
        }
      }

      return {
        scalar,
        nonScalar: [...nonScalar, { name: field, type: fieldType }],
      }
    },
    {
      scalar: [] as QueryField[],
      nonScalar: [] as QueryField[],
    },
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
            previousPath: previousPath
              ? `${previousPath}.${field.name}`
              : field.name,
            previousQueryParams: queryParams,
          }),
        ),
      ]

  if (currentQueryParams.length === queryParams.length) {
    return `${field.name}${
      currentQueryParams.length > 0
        ? `(${currentQueryParams
            .map(({ name }) => `${name}: $${name}`)
            .join(', ')})`
        : ''
    } { ${returnFields.join(' ')} }`
  }

  return `${field.name}${
    currentQueryParams.length > 0
      ? `(${currentQueryParams
          .map(
            ({ name, path }) =>
              `${name}: $${path
                .split('.')
                .map((pathPart, index) =>
                  index > 0 ? capitalize(pathPart) : pathPart,
                )
                .join('')}${capitalize(name)}`,
          )
          .join(', ')})`
      : ''
  } { ${returnFields.join(' ')} }`
}
