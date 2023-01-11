import type {
  BaseGeneratedSchema,
  OperationArgs,
  OperationField,
  OperationParam,
} from '../../client/client.types'
import camelizeDotNotation from '../camelizeDotNotation'
import getOperationParams from '../getOperationParams'
import normalizeType from '../normalizeType'

export interface GetReturnableFieldsOptions {
  /**
   * Generated schema.
   */
  generatedSchema: BaseGeneratedSchema
  /**
   * The field to get the return fields for.
   */
  field: OperationField
  /**
   * Type of the operation.
   */
  operationType: 'query' | 'mutation'
  /**
   * The query arguments.
   */
  args?: OperationArgs
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
  previousOperationParams?: OperationParam[]
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
  previousOperationParams,
  operationType,
}: GetReturnableFieldsOptions): string {
  const generatedFields = generatedSchema[field.type]
  const OperationParams =
    previousOperationParams ||
    getOperationParams({ generatedSchema, args, field, operationType })

  const currentOperationParams = OperationParams?.filter(({ path }) => {
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
      scalar: [] as OperationField[],
      nonScalar: [] as OperationField[],
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
            args: args.select?.[nonScalarField.name] as OperationArgs,
            operationType,
            previousPath: previousPath
              ? `${previousPath}.${field.name}`
              : field.name,
            previousOperationParams: OperationParams,
          }),
        ),
      ]

  // We are not manipulating the name of the variable if we have all
  // the query params passed to the current field.
  if (currentOperationParams.length === OperationParams.length) {
    return `${field.name}${
      currentOperationParams.length > 0
        ? `(${currentOperationParams
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
    currentOperationParams.length > 0
      ? `(${currentOperationParams
          .map(
            ({ name, path }) => `${name}: $${camelizeDotNotation(path, name)}`,
          )
          .join(', ')})`
      : ''
  } { ${returnFields.join(' ')} }`
}
