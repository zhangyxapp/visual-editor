module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": ["error", 2],
    "camelcase": 2,
    "eqeqeq": 2,
    "semi": ["error", "always"],
    "radix": 2,
    "use-isnan": 2,
    "valid-typeof": 2,
    "prefer-const": 2,
    "newline-after-var": 2,
    "comma-spacing": 2,
    "no-extra-semi": 2,
    "no-console": 2,
    "no-unused-vars": [2, { "vars": "all", "args": "after-used" }],
    "semi-spacing": [2, { "before": false, "after": false }],
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    "no-multiple-empty-lines": [2, { "max": 1 }],
    "no-multi-spaces": 2,
    "no-trailing-spaces": 2,
    "space-infix-ops": 2,
    "no-else-return": 2,
    "space-before-blocks": [2, "always"]
  }
};
