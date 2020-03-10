module.exports = {
  env: {
    es6: true,
    node: true,
    quotes: [2, "backtick", "single"]
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    cammelcase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    quotes: [2, "single", "avoid-escape"]
  }
};
