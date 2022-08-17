module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:solid/typescript",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "solid"],
	root: true,
	rules: {
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				prefer: "type-imports",
			},
		],
	},
};
