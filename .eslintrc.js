module.exports = {
  env: { node: true, browser: true },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@', './src'],
      ],
    },
  },
};
