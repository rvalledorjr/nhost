import { parse, print } from 'graphql/language'
import pascalCase from 'just-pascal-case'

export interface GenerateGraphqlQueryOptions {
  name: string
  returnFields: string[]
  args?: Record<string, string> | null
}

export default function generateGraphqlQuery({
  name,
  returnFields,
  args
}: GenerateGraphqlQueryOptions) {
  const queryParameters = args
    ? Object.keys(args)
        .map((key) => `$${key}: ${args?.[key]}`)
        .join(', ')
    : ''

  const fieldParameters = args
    ? Object.keys(args)
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
