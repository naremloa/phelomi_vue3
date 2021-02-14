module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
  },
};
