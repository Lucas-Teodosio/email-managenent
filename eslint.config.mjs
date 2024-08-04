import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{
		languageOptions: {
			globals: globals.browser,
			parser: tsparser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: "module",
			},
		},
	},
	pluginJs.configs.recommended,
	tseslint.configs.recommended,
	{
		plugins: {
			prettier,
		},
		rules: {
			...prettierConfig.rules,
			"prettier/prettier": "error",
		},
	},
];
