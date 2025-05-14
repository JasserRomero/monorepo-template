import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import prettier from "eslint-plugin-prettier";

export default tseslint.config(
  { ignores: ["**/dist/**", "**/.turbo/**", "**/coverage/**"] },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  /* Prettier ⇒ una única regla */
  {
    plugins: { prettier },
    rules: { "prettier/prettier": "error" },
  },

  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: { ...globals.es2021 },
    },
  }
);
