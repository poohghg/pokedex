module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb', // or airbnb-base
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { yandOfLine: 'auto' }],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', 'tsx'] },
    ],
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'react/no-array-index-key': 'off',
    'no-alert': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
