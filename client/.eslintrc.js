module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',
  rules: {
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'global-require': 'off',
    'react/function-component-definition': 'off',
  },
};
