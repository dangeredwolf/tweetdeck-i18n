/*
	Copyright (c) 2018-2020 dangered wolf, et al.
	Released under the MIT license
*/

"use strict";

function waitForHead() {
	if (document.head !== null) {

		var scr2 = document.createElement("script");
		scr2.src = chrome.extension.getURL("moduleraid.js");
		scr2.type = "text/javascript";
		document.head.appendChild(scr2);

		var scr1 = document.createElement("script");
		scr1.src = chrome.extension.getURL("I18n.js");
		scr1.type = "module";
		document.head.appendChild(scr1);

	} else {
		setTimeout(waitForHead,0);
		console.log("Waiting for document.head...");
		return;
	}
}

waitForHead();
