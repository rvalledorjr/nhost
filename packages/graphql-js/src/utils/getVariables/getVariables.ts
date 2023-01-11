import type { OperationArgs, OperationField } from '../../client/client.types'
import camelizeDotNotation from '../camelizeDotNotation'

export interface GetVariablesOptions {
  /**
   * The query arguments.
   */
  args?: OperationArgs
  /**
   * The field to get the variables for.
   */
  field: OperationField
  /**
   * The previous path.
   */
  previousPath?: string
}

function countFieldsWithVariables(args: OperationArgs): number {
  if (!args) {
    return 0
  }

  return Object.keys(args).reduce((count, key) => {
    if (key === 'variables' && Object.keys(args.variables || {}).length > 0) {
      return count + 1
    }

    if (typeof args[key as keyof OperationArgs] === 'object') {
      return (
        count +
        countFieldsWithVariables(
          args[key as keyof OperationArgs] as OperationArgs,
        )
      )
    }

    return count
  }, 0)
}

export default function getVariables({
  args,
  field,
  previousPath,
}: GetVariablesOptions): Record<string, any> {
  if (!args) {
    return {}
  }

  if (!args.select) {
    if (previousPath) {
      return Object.keys(args.variables || {}).reduce(
        (variables, key) => ({
          ...variables,
          [camelizeDotNotation(previousPath, field.name, key)]:
            args.variables![key],
        }),
        {},
      )
    }

    return args.variables || {}
  }

  const selectedObjects = Object.keys(args.select).filter((key) => {
    const nestedArguments = args.select![key]

    return (
      nestedArguments &&
      typeof nestedArguments === 'object' &&
      ('variables' in nestedArguments || 'select' in nestedArguments)
    )
  })

  const nestedVariables = selectedObjects.reduce((selectedVariables, key) => {
    const nestedArguments = args.select![key] as OperationArgs

    return {
      ...selectedVariables,
      ...getVariables({
        args: nestedArguments,
        field: { name: key, type: '' },
        previousPath: previousPath
          ? `${previousPath}.${field.name}`
          : field.name,
      }),
    }
  }, {})

  const numberOfFieldsWithVariables = countFieldsWithVariables(args)

  return {
    ...Object.keys(args.variables || {}).reduce((variables, key) => {
      const variableName =
        numberOfFieldsWithVariables === 1
          ? key
          : camelizeDotNotation(
              previousPath ? `${previousPath}.${field.name}` : field.name,
              key,
            )

      return {
        ...variables,
        [variableName]: args.variables![key],
      }
    }, {}),
    ...nestedVariables,
  }
}
