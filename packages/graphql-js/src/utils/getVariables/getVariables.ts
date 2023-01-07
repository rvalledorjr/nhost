import type { QueryArgs, QueryField } from '../../client/client.types'
import camelizeDotNotation from '../camelizeDotNotation'

export interface GetVariablesOptions {
  /**
   * The query arguments.
   */
  args?: QueryArgs
  /**
   * The field to get the variables for.
   */
  field: QueryField
  /**
   * The previous path.
   */
  previousPath?: string
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
    const nestedArguments = args.select![key] as QueryArgs

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

  return {
    ...Object.keys(args.variables || {}).reduce((variables, key) => {
      return {
        ...variables,
        [`${camelizeDotNotation(
          previousPath ? `${previousPath}.${field.name}` : field.name,
          key,
        )}`]: args.variables![key],
      }
    }, {}),
    ...nestedVariables,
  }
}
