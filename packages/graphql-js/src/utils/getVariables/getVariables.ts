import type { BaseGeneratedSchema, QueryArgs, QueryField } from '../../client/client.types'

export interface GetVariablesOptions {
  /**
   * The generated schema.
   */
  generatedSchema: BaseGeneratedSchema
  /**
   * The query arguments.
   */
  args?: QueryArgs
  /**
   * The field to get the variables for.
   */
  field?: QueryField
}

export default function getVariables({ generatedSchema, args, field }: GetVariablesOptions) {
  if (!args?.variables) {
    return {}
  }

  if (args?.select) {
    return {}
  }

  return {}
}
