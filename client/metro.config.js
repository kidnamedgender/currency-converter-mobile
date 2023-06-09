/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {sourceExts} = require('metro-config/src/defaults/defaults');

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-sass-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: [...sourceExts, 'scss', 'sass'],
  },
};
