import { parse, print } from 'graphql/language'
import pascalCase from 'just-pascal-case'
import { QueryParam } from '../../client/client.types'
import camelizeDotNotation from '../camelizeDotNotation'

export interface GetGraphqlMutationStringOptions {
  /**
   * The name of the query.
   */
  name: string
  /**
   * The fields to return.
   */
  returnableFields: string
  /**
   * The mutation parameters.
   */
  mutationParams?: QueryParam[]
}

/**
 * Generates a GraphQL mutation string.
 *
 * @param args - The arguments to generate the mutation string.
 * @returns The GraphQL mutation string.
 */
export default function getGraphqlMutationString({
  name,
  returnableFields,
  mutationParams,
}: GetGraphqlMutationStringOptions) {
  const mappedMutationParams = mutationParams?.filter(({ type }) =>
    Boolean(type),
  )
  const allParamPaths = new Set(
    mappedMutationParams?.map(({ path }) => path) || [],
  )

  return print(
    parse(
      `mutation ${pascalCase(name)}${
        mappedMutationParams?.length
          ? `(${mappedMutationParams
              .map(({ name, path, type }) => {
                if (allParamPaths.size === 1) {
                  return `$${name}: ${type}`
                }

                return `$${camelizeDotNotation(path, name)}: ${type}`
              })
              .join(', ')})`
          : ''
      } { ${returnableFields} }`,
    ),
  )
}
