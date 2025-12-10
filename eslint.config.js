import js from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import erasableSyntaxOnly from "eslint-plugin-erasable-syntax-only";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: ["coverage", "dist"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      erasableSyntaxOnly.configs.recommended,
    ],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
    linterOptions: { reportUnusedDisableDirectives: "off" },
  },
  prettier,
);
