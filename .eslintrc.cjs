require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        node: true,
      },
    },
  ],
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/eslint-config-typescript/recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  ignorePatterns: ['*.config.cjs', '**/public/firebase-messaging-sw.js'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // https://eslint.vuejs.org/rules/component-name-in-template-casing.html
    // always use kebab case for html tag.
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
      },
    ],

    // https://eslint.vuejs.org/rules/html-self-closing.html
    // never use /> for html tag and vue component, leave void self closing to prettier.
    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'never',
          component: 'never',
          void: 'any',
        },
      },
    ],

    'prefer-const': 'error',

    // waiting for @vue/eslint-config-typescript to support @typescript-eslint@v6 [DONE]
    // https://typescript-eslint.io/blog/consistent-type-imports-and-exports-why-and-how
    // disabled again because of error:
    // You have used a rule which requires parserServices to be generated.
    // You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
    // '@typescript-eslint/consistent-type-exports': 'error',
    // '@typescript-eslint/consistent-type-imports': 'error',
  },
}
