module.exports = {
  env: {
    browser: true
  },
  plugins: ['prettier', 'jest'],
  extends: ['airbnb', 'plugin:jest/recommended', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [0, { extension: ['.js', '.jsx'] }],
    'prettier/prettier': ['error', { singleQuote: true }]
  }
};
