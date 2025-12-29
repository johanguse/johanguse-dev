const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const path = require('path')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

module.exports = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'public/**'],
  },
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('prettier'),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'off',
      'react/no-unescaped-entities': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
]
