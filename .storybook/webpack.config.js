const webpack = require('webpack');

module.exports = async ({ config }) => {
  config.module.rules = config.module.rules.filter(f => f.test.toString() !== '/\\.css$/');

  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: { sourceMap: true },
      },
      {
        loader: 'postcss-loader',
        options: { sourceMap: true },
      },
    ],
  });
  return config;
};