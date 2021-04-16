module.exports = {
	extends: "stylelint-config-standard",
	rules: {
		indentation: "tab",
		"font-family-no-missing-generic-family-keyword": [true, {
			ignoreFontFamilies: ["Kontur-Iconic"],
		}],
		"color-hex-case": "upper",
		"at-rule-no-unknown": [true, {
			ignoreAtRules: ["use", "mixin", "include"]
		}]
	},
};
