const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const config = {
    transformer: {
      // Add the SVG transformer
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      // Exclude 'svg' from the asset extensions list
      assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
      // Add 'svg' to the source extensions list
      sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
    },
  };

  return mergeConfig(defaultConfig, config);
})();
