const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks')
const { makeMetroConfig } = require('@rnx-kit/metro-config')

module.exports = makeMetroConfig({
  resolver: {
    resolveRequest: MetroSymlinksResolver({
      remapModule: (_context, moduleName) => {
        if (moduleName.startsWith('metro') || moduleName.startsWith('@babel')) {
          return require.resolve(moduleName)
        }

        return moduleName
      }
    }),
    useWatchman: false
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true
      }
    })
  }
})
