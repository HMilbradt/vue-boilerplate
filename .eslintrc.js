module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  "globals": {
    "expect": true
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    "import/extensions": "off",
    "import/no-unresolved": "off",
    'import/no-extraneous-dependencies': "off",
    "no-shadow": "off",
    "no-param-reassign": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

  }
}
