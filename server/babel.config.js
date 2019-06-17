const presets = [
  ['@babel/env',
    {
      targets: {
        node: '8',
      },
    },
  ],
];

const plugins = [
  ['babel-plugin-root-import',
    {
      rootPathSuffix: './src',
      rootPathPrefix: '~',
    },
  ],
  '@babel/plugin-proposal-class-properties',
];

module.exports = {
  presets,
  plugins,
};
