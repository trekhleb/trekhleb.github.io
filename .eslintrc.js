module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'react/require-default-props': 'off',
    'no-useless-return': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    camelcase: 'off',
    'no-empty': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.d.ts'],
      },
    },
  },
};
