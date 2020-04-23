const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = ({ config, mode }) => {
  //babel-loader@8 installed and @babel/core@7
  config.module.rules[0].use[0].loader = require.resolve(
    'babel-loader',
  );

  config.module.rules[0].use[0].options.plugins = [
    require.resolve('babel-plugin-react-docgen'),
  ]

  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-env'),
          ],
        },
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      { loader: 'react-docgen-typescript-loader' },
      {
        loader: require.resolve(
          '@storybook/addon-storysource/loader',
        ),
        options: {
          parser: 'typescript',
        },
      },
    ],
  });
  config.resolve.plugins = [
    new TsconfigPathsPlugin({
      configFile: 'tsconfig.storybook.json',
    }),
  ];
  config.resolve.extensions.push('.ts', '.tsx', '.json');
  return config;
};