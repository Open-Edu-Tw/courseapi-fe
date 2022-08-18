const sortImport = require("@trivago/prettier-plugin-sort-imports");

module.exports = {
	useTabs: true,
	trailingComma: "all",
	bracketSameLine: true,
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	plugins: [sortImport],
};
