import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: ["cypress.config.js", "cypress/**"]
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn"
    }
  }
];