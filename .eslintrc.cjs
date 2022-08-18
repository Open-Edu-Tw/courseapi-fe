module.exports = {
	extends: [
		"plugin:jsx-a11y/recommended",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:solid/typescript",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "solid", "jsx-a11y"],
	root: true,
	rules: {
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				prefer: "type-imports",
			},
		],
	},
	settings: {
		"jsx-a11y": {
			components: {
				Button: "button",
			},
		},
	},
};
