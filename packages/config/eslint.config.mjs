import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...next,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd()
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  },
  prettier
);
