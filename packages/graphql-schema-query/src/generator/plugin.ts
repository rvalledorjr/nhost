import type { CodegenPlugin } from '@graphql-codegen/plugin-helpers'

function transformUnderScored(str: string) {
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    if (str[i] === '_') {
      result += '_'
      result += str[i + 1].toUpperCase()
      i++
    } else {
      result += str[i]
    }
  }
  return result
}
const typeName = (type: any): string => {
  if ('ofType' in type) {
    return typeName(type.ofType)
  }
  return transformUnderScored(type.name)
}

const plugin: CodegenPlugin = {
  plugin(schema) {
    let result = ''
    const queryConfig = schema.getType('query_root')?.toConfig()
    if (queryConfig && 'fields' in queryConfig) {
      const mapping = Object.entries(queryConfig.fields)
        .map(([name, field]) => `  ${name}: ${typeName(field.type)}`)
        .join(',\n')
      result += `export const Queries: Record<string, { name: string }> = {\n${mapping}\n}`
    }
    return result
  }
}
export default plugin
