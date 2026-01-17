/* eslint-env node */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@assets': './assets',
            '@navigation': './src/navigation',
            '@constants': './src/constants',
          },
        },
      ],
    ],
  };
};
