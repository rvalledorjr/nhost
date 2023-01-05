import { parse, print } from 'graphql/language'
import pascalCase from 'just-pascal-case'

export interface GenerateGraphqlQueryOptions {
  name: string
  args?: Record<string, string>
  returnFields: string[]
}

export default function generateGraphqlQuery({
  name,
  args,
  returnFields
}: GenerateGraphqlQueryOptions) {
  return print(
    parse(
      `query ${pascalCase(name)}${
        args
          ? `(${Object.keys(args)
              .map((key) => `$${key}: ${args[key]}`)
              .join(', ')})`
          : ''
      } { ${name}${
        args
          ? `(${Object.keys(args)
              .map((key) => `${key}: $${key}`)
              .join(', ')})`
          : ''
      } { ${returnFields.join(' ')} }}`
    )
  )
}
