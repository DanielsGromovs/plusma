export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      // Add your rules here, e.g.:
      "no-console": "warn",
      "no-debugger": "error",
    },
  },
  {
    files: ["backend/**/*.js"],
    env: { node: true },
  },
  {
    files: ["frontend/**/*.js", "frontend/**/*.jsx"],
    env: { browser: true, es2021: true },
  },
];

