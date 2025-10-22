import js from '@eslint/js';
import globals from 'globals';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ...eslintPluginPrettierRecommended,
    rules: {
      'prettier/prettier': 'warn',
      'prefer-const': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      quotes: ['warn', 'single'],
      'max-len': ['warn', { code: 100 }],
      'max-lines': ['warn', { max: 400, skipComments: true }],
      'react-x/no-class-component': 'warn',
      'react-dom/no-dangerously-set-innerhtml': 'warn',
    },
  },
]);
