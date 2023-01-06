import type { CodegenPlugin } from '@graphql-codegen/plugin-helpers'

const transformUnderScored = (str: string) => {
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

    for (const operation of ['Query', 'Mutation']) {
      const factoryName = `${operation}Factory`
      const config = schema.getType(`${operation.toLowerCase()}_root`)?.toConfig()
      if (config && 'fields' in config) {
        const mapping = Object.entries(config.fields)
          .map(([name, field]) => `  ${name}: ${typeName(field.type)}`)
          .join(',\n')
        result += `export const ${factoryName}: Record<string, { name: string }> = {\n${mapping}\n}\n\n`
      }
    }

    return result
  }
}
export default plugin
