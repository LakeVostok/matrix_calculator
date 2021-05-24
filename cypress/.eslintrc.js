module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"plugin:cypress/recommended",
		"../eslint/common.js",
	],
	plugins: [
		"@typescript-eslint",
		"cypress",
		"chai-friendly",
	],
	overrides: [
		{
			files: [ "*.spec.js" ],
			rules: {
		  		"no-unused-expressions": 0,
			},
		},
	],
};
