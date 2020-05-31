module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'flowtype',
  ],
  rules: {
    // @see: https://stackoverflow.com/questions/43031126/jsx-not-allowed-in-files-with-extension-js-with-eslint-config-airbnb
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],

    // @see: https://github.com/gajus/eslint-plugin-flowtype/issues/225#issuecomment-373562581
    'flowtype/no-types-missing-file-annotation': 0,

    'arrow-body-style': 0,

    //I want to be able to have just one named constant per file and export it.
    'import/prefer-default-export': 0,
  },
};
