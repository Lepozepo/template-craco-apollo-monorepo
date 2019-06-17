module.exports = {
  babel: {
    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'src',
        },
      ],
      '@babel/plugin-proposal-export-default-from',
      'babel-plugin-styled-components',
    ],
  },
  jest: {
    babel: {
      addPresets: true,
      addPlugins: true,
    },
  },
};
