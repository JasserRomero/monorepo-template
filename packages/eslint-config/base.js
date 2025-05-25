import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import prettier from "eslint-plugin-prettier";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: { ...globals.es2021 },
    },
  },
  {
    ignores: [
      "**/dist/**",
      "**/.turbo/**",
      "**/coverage/**",
      "**/test/**",
      "**/*.spec.*",
      "**/*.e2e-spec.*",
    ],
  }
);
