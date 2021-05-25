module.exports = {
	extends: [
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
	],
	plugins: [
		"import",
	],
	rules: {
		"linebreak-style": [
			"error",
			"windows",
		],
		"eol-last": [
			"error",
			"always",
		],
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
			},
		],
		"import/newline-after-import": [
			"error",
			{
				count: 1,
			},
		],
		quotes: [
			"error",
			"double",
			{
				allowTemplateLiterals: true,
			},
		],
		"quote-props": ["error", "as-needed"],
		semi: [
			"error",
			"always",
		],
		"comma-dangle": [
			"error",
			"only-multiline",
		],
		indent: [
			"error",
			"tab",
		],
		"object-curly-spacing": [
			"error",
			"always",
		],
		"import/order": [
			"error",
			{
				groups: [
					"builtin", 
					"external", 
					"parent", 
					"internal", 
					"object",
					"sibling", 
					"index", 
				],
				"newlines-between": "always",
			},
		],
	},
	overrides: [
		{
			files: [
				"**/*.ts?(x)",
			],
			rules: {
				"@typescript-eslint/indent": [
					"error",
					"tab",
				],
			},
		},
	],
};
