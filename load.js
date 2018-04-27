// Copyright (c) 2018 dangered wolf

"use strict";

function waitForHead() {
	if (document.head !== null) {

		var InjectScript4 = document.createElement("script");
		InjectScript4.src = chrome.extension.getURL("tweetdecki18n.js");;
		InjectScript4.type = "text/javascript";
		document.head.appendChild(InjectScript4);

		var InjectScript3 = document.createElement("script");
		InjectScript3.src = chrome.extension.getURL("moduleraid.min.js");;
		InjectScript3.type = "text/javascript";
		document.head.appendChild(InjectScript3);

	} else {
		setTimeout(waitForHead,0);
		console.log("Waiting for document.head...");
		return;
	}
}
waitForHead();