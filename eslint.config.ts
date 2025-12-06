// eslint.config.js
const { defineConfig } = require("eslint-define-config");
const tsParser = require("@typescript-eslint/parser");

module.exports = defineConfig({
  ignores: ["node_modules/**", "dist/**", ".husky/**"],

  languageOptions: {
    parser: tsParser, // 🎯 باید خود object parser باشه، نه رشته
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
  },

  plugins: {
    "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
  },

  rules: {
    "no-unused-vars": "warn",
    "no-console": "warn",

    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/consistent-type-imports": "warn",

    semi: ["error", "always"],
    quotes: ["error", "single"],
    "comma-dangle": ["error", "always-multiline"],
  },
});
