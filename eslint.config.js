import globals from "globals"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import barrelFiles from "eslint-plugin-barrel-files"

export default tseslint.config(
  { ignores: ["dist", "src/client"] },
  {
    extends: [...tseslint.configs.recommended],
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    }
  },
  {
    plugins: {
      "barrel-files": barrelFiles
    },
    files: ["src/**/*.{js,ts,tsx}"],
    rules: {
      "barrel-files/avoid-barrel-files": 2,
      "barrel-files/avoid-importing-barrel-files": 2,
      "barrel-files/avoid-namespace-import": 2,
      "barrel-files/avoid-re-export-all": 2
    }
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended
)
