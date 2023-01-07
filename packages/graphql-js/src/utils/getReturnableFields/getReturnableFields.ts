import type {
  BaseGeneratedSchema,
  QueryArgs,
  QueryField,
  QueryParam,
} from '../../client/client.types'
import camelizeDotNotation from '../camelizeDotNotation'
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

  // We need to distinguish between scalar and non-scalar fields. Scalar fields
  // can be returned as is, but non-scalar fields need to be unwrapped using
  // the generated schema.
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

  // We are not manipulating the name of the variable if we have all
  // the query params passed to the current field.
  if (currentQueryParams.length === queryParams.length) {
    return `${field.name}${
      currentQueryParams.length > 0
        ? `(${currentQueryParams
            .map(({ name }) => `${name}: $${name}`)
            .join(', ')})`
        : ''
    } { ${returnFields.join(' ')} }`
  }

  // We need to manipulate the name of the variable if we have nested variables
  // as well. For example: If both `authors` and a nested `authors.posts` have
  // a `where` variable, we need to rename the `where` variable to
  // `authorsWhere` and `authorsPostsWhere`.
  return `${field.name}${
    currentQueryParams.length > 0
      ? `(${currentQueryParams
          .map(
            ({ name, path }) => `${name}: $${camelizeDotNotation(path, name)}`,
          )
          .join(', ')})`
      : ''
  } { ${returnFields.join(' ')} }`
}
