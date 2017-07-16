module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jest",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": ["error", {"singleQuote": true, "semi": false, "trailingComma": "none", "parser": "flow"}]
  }
};