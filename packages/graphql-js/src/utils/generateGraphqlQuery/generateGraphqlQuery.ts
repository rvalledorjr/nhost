import { parse, print } from 'graphql/language'
import pascalCase from 'just-pascal-case'

export interface GenerateGraphqlQueryOptions {
  name: string
  returnFields: string[]
  variables?: Record<string, string> | null
}

export default function generateGraphqlQuery({
  name,
  returnFields,
  variables
}: GenerateGraphqlQueryOptions) {
  const queryParameters = variables
    ? Object.keys(variables)
        .map((key) => `$${key}: ${variables?.[key]}`)
        .join(', ')
    : ''

  const fieldParameters = variables
    ? Object.keys(variables)
        .map((key) => `${key}: $${key}`)
        .join(', ')
    : ''

  return print(
    parse(
      `query ${pascalCase(name)}${queryParameters ? `(${queryParameters})` : ''} { ${name}${
        fieldParameters ? `(${fieldParameters})` : ''
      } { ${returnFields.join(' ')} }}`
    )
  )
}
