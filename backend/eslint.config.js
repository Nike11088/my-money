import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Базовые правила
      'no-unused-vars': 'warn',
      'no-debugger': 'error',

      // Стилистические правила
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],

      // Современные правила ES6+
      'prefer-const': 'error',
      'arrow-spacing': 'error',
      'no-var': 'error',
    },
  },
  {
    // Игнорируемые файлы
    ignores: ['node_modules/', 'dist/', 'coverage/'],
  },
]
