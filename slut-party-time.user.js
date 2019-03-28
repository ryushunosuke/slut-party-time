// ==UserScript==
// @name     Slut party time
// @include https://meguca.org/a/*
// @version  0.2
// @grant    none
// @run-at document-end
// ==/UserScript==


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sluts() {
  var userbackgroundpng = document.getElementById('user-background-style'); //uses the meguca custom background option
  var userbackgroundwebm = document.getElementById('user-background');
  var thread = document.getElementById('thread-container');
  var last = thread.lastElementChild;
  while (true) {

    
    if (last.innerHTML.search('a href="/assets/') != -1) {
      var lastpostHTML;
      lastpostHTML = last.innerHTML.slice(last.innerHTML.search('a href="/assets/'), last.innerHTML.length);
      lastpostHTML = lastpostHTML.slice(8, lastpostHTML.search('" download='));
      if (lastpostHTML.search('.webm') != -1 || lastpostHTML.search('.mp4') != -1) { //Changes the background to the webm every sleep cycle, Needs a check to stop setting it
        if (userbackgroundwebm.firstChild === null) {
          userbackgroundwebm.appendChild(document.createElement("video"));
          userbackgroundpng.firstChild.replaceWith(``);
        }
        //If the background is not the same, replaces it.
        if (userbackgroundwebm.firstChild.src.search(lastpostHTML) == -1) {
          userbackgroundwebm.firstChild.defaultmuted = true;
          userbackgroundwebm.firstChild.src = lastpostHTML;
          userbackgroundwebm.firstChild.autoplay = true;
          userbackgroundwebm.firstChild.loop = true;
          userbackgroundwebm.firstChild.load();
        }
      }
      else { //Means last post has media inside of it and it is not a webm
        if (userbackgroundpng.firstChild.wholeText.search(lastpostHTML) == -1) {
          userbackgroundpng.firstChild.replaceWith(`#user-background {background: url($LINK) no-repeat fixed center; background-size:cover;background-size: cover;}`.replace("$LINK", lastpostHTML));
        }
        if (userbackgroundwebm.lastChild !== null) {
          userbackgroundwebm.removeChild(userbackgroundwebm.firstChild); //Removes the webm container which seems to have a priority over images/gifs
        }
      }
    }
      await sleep(40);
      if (last.nextSibling !== null) {
        last = last.nextSibling;
      }
  }
}

sluts();