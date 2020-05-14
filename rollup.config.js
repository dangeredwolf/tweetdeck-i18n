import resolve from "@rollup/plugin-node-resolve";

export default {
	input: "./I18n.js",
	preserveModules: false,
	output: {
		file: "./I18nModule.js",
		format: "es",
		sourcemap: true,
		banner: `/**\n* tweetdeck-i18n ${require("./package.json").version}\n* @license MIT\n* https://github.com/dangeredwolf/tweetdeck-i18n \n**/`,
		hoistTransitiveImports: true
	},
	plugins: [
		resolve()
	]
};
