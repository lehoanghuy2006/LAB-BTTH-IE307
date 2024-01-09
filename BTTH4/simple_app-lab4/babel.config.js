// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-classname-to-style',
      ['react-native-platform-specific-extensions', {extensions: ['css']}],
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          alias: {
            '@src': './src',
            '@config': './src/config',
            '@pages': './src/pages',
            '@context': './src/context',
            '@img': './src/img',
            '@utils': './src/utils',
            '@data': './src/data',
          },
        },
      ],
    ]
  };
};