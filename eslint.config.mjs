import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Load your tsconfig path
const tsconfigPath = "./tsconfig.json";

// Define the ESLint config
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // TypeScript-ESLint with type-aware rules
  ...tseslint.config(
    {
      files: ["**/*.ts", "**/*.tsx"],
      languageOptions: {
        parserOptions: {
          project: tsconfigPath,
          tsconfigRootDir: __dirname,
        },
      },
    },
    tseslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked
  ),

  // Simple Import Sort
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^\\u0000", "^@?\\w", "^[^.]", "^\\."]],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
];

export default eslintConfig;
