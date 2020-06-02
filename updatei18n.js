/*
	Copyright (c) 2018-2020 dangered wolf, et al.
	Released under the MIT license
*/

const fs = require("fs");
const path = require("path");

let i18n = path.format({
	dir:__dirname,
	base:"tweetdeck-i18n.csv"
});

let i18nCustom = path.format({
	dir:__dirname,
	base:"custom.csv"
});

let results = path.format({
	dir:__dirname,
	base:"DataI18n.js"
});

let buildFile = fs.readFileSync(i18n) + "\n" + fs.readFileSync(i18nCustom) + "";
let newObj = {};

let langMap = ["src","af","bg","ca","zh_CN","zh_TW","hr","cs","da","nl","en","en_CA","en_GB","en_US","et","fi","fr","fr_CA","de","el","hi","hu","it","ja","ko","mi","no","pl","pt","pt_BR","ro","ru","sr","es","es_AR","es_419","es_US","sv","tr","uk","vi","eo"];

buildFile.split("\n").forEach((a, j) => {
	if (a.substr(0,1) === "#" || a.length <= 1) {
		return;
	}
	let arr = a.replace(/\"\,\"/g,"\"=,=\"").replace(/\=\"\"/g,"=\"").replace(/\"\" /g,"\" ").replace(/\"\"\>/g,"\">").replace(/ \"\"/g," \"").replace(/\"\" /g,"\" ").split("=,=");
	if (arr[0]) {
		let key = arr[0].substr(1, arr[0].length-2);
		newObj[key] = {};
		for (let i = 1; i < langMap.length; i++) {
			if (arr[i]) {
				newObj[key][langMap[i]] = arr[i].substr(1, arr[i].length-2).replace(/\"\"/g,"\"");
			} else {
				console.log("Language array missing items: Line " + j + " Column " + i + "\nSource string: " + arr[0] + "\nThe language data may be corrupted. This can be caused by unescaped newlines.")
			}
		}
	}
});



fs.writeFileSync(results,"export default " + JSON.stringify(newObj))
