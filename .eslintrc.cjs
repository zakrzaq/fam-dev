module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'vue/no-multiple-template-root': 'off',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'tailwindcss/no-custom-classname': ['off'],
  },
};
