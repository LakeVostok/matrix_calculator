module.exports = {
	extends: [
		"react-app",
		"react-app/jest",
		"./eslint/common.js",
	],
	plugins: [
		"import",
	],
	rules: {
		"react/jsx-curly-spacing": [
			"error",
			"always",
		],
		"react/jsx-indent": [
			"error",
			"tab",
		],
	},
	overrides: [
		{
			files: [
				"**/*.stories.*",
			],
			rules: {
				"import/no-anonymous-default-export": "off",
			},
		},
	],
};
