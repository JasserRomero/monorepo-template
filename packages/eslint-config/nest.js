// packages/eslint-config/nest.js
import base from "./base.js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  ...base,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: { ...globals.node, ...globals.jest },
      parserOptions: {
        // habilita reglas type‑checked con tsconfig del paquete api
        projectService: true,
        tsconfigRootDir: new URL("../../", import.meta.url).pathname,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
    },
  },
];
