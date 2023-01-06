import { CodegenConfig, generate } from '@graphql-codegen/cli'
import path from 'path'
const config: CodegenConfig = {
  schema: [
    {
      'http://localhost:1337/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'nhost-admin-secret',
          'x-hasura-role': 'user'
        }
      }
    }
  ],
  generates: {
    './tests/schema.ts': {
      plugins: [
        'typescript',
        path.join(__dirname, 'plugin.js'),
        { add: { content: '// @ts-nocheck' } }
      ],
      config: {
        scalars: {
          uuid: 'string',
          bigint: 'number',
          citext: 'string',
          timestamptz: 'string'
        },
        declarationKind: 'class'
      }
    }
  }
}

generate(config, true)
