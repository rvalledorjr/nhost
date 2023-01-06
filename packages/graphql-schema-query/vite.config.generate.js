import { defineConfig } from 'vite'

import baseConfig from '../../config/vite.lib.config'

// TODO bundle the graphql generator libraries
export default defineConfig({
  ...baseConfig,
  plugins: [],
  build: {
    ...baseConfig.build,
    lib: {
      entry: ['src/generator/generate.ts', 'src/generator/plugin.ts'],
      formats: ['cjs']
    },
    ssr: true
  }
})
