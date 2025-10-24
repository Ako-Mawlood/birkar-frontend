// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt([
  {
    plugins: {
      prettier,
    },
    rules: {
      // Vue
      'vue/multi-word-component-names': 'off',

      // TypeScript
      semi: ['error', 'always'],
      '@typescript-eslint/semi': ['error', 'always'],
      'prettier/prettier': 'error',
    },
  },
])
