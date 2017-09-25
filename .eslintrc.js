var path = require('path');

module.exports = {
  "extends": "eslint-config-airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "func-names": 0,
    "import/no-extraneous-dependencies": 0,
    "semi": [1, "never"],
    "eol-last": 0,
    "react/no-unused-prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-no-bind": [ 2, {
      "ignoreRefs": false,
      "allowArrowFunctions": true,
      "allowBind": true
    }]
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ]
}