// Copyright (c) 2018 dangered wolf

"use strict";

function waitForHead() {
	if (document.head !== null) {

		var scr2 = document.createElement("script");
		scr2.src = chrome.extension.getURL("moduleraid.min.js");;
		scr2.type = "text/javascript";
		document.head.appendChild(scr2);

		var scr1 = document.createElement("script");
		scr1.src = chrome.extension.getURL("tweetdecki18n.js");;
		scr1.type = "text/javascript";
		document.head.appendChild(scr1);

		var scr3 = document.createElement("script");
		scr3.src = chrome.extension.getURL("papaparse.min.js");;
		scr3.type = "text/javascript";
		document.head.appendChild(scr3);

	} else {
		setTimeout(waitForHead,0);
		console.log("Waiting for document.head...");
		return;
	}
}
waitForHead();