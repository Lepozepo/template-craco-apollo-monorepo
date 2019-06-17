module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
  ],
  plugins: [
    'jest',
  ],
  rules: {
    'no-underscore-dangle': 0,
  },
  // parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: './src',
        rootPathPrefix: '~',
      },
    },
  },
  env: {
    node: true,
    'jest/globals': true,
  },
};
