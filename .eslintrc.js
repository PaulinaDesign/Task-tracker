module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ["error", "always"],
    indent: ["error", 2],
    "no-multi-spaces": ["error"],
    "linebreak-style": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "max-len": "off",
    "no-unused-vars": 1,
    "consistent-return": 0,
    "no-alert": 1,
    "react/forbid-prop-types": 0,
    "import/no-cycle": 0,
  },
};
