// ==UserScript==
// @name          Fix LinkedIn message box
// @namespace     linkedin-message-box-fix
// @require       https://gist.github.com/raw/2625891/waitForKeyElements.js
// @include       https://www.linkedin.com/messaging/*
// @version       0.1
// @description   Fix LinkedIn message box
// @author        Hugo Arregui
// @grant         none
// ==/UserScript==

function addCustomSearchResult (jNode) {
  $('.mirror').remove();
}

waitForKeyElements(".mirror", addCustomSearchResult);
