import { parse, print } from 'graphql/language'
import pascalCase from 'just-pascal-case'

export interface GenerateGraphQlQueryOptions {
  name: string
  args?: Record<string, string>
  returnFields: string[]
}

export default function generateGraphQlQuery({
  name,
  args,
  returnFields
}: GenerateGraphQlQueryOptions) {
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
