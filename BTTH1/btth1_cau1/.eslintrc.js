module.exports = {
  root: true,
  extends: ['@react-native', 'eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'prettier/prettier': [
      'off',
      {
        endOfLine: 'auto',
      },
    ],
    'no-unused-vars': 'warn',
    'react-native/no-unused-styles': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};