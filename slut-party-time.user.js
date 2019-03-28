// ==UserScript==
// @name     Slut party time
// @include https://meguca.org/a/*
// @version  0.3.1
// @grant    none
// @run-at document-end
// ==/UserScript==


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sluts() {
    var thread = document.getElementById('thread-container');
    var last = thread.lastElementChild;
  while (true) {
    if (last.innerHTML.search('a href="/assets/') != -1){
      var userbackgroundpng = document.getElementById('user-background-style'); //uses the meguca custom background option
      var userbackgroundwebm = document.getElementById('user-background');
      var lastpostHTML;
      lastpostHTML = last.innerHTML.slice(last.innerHTML.search('a href="/assets/'), last.innerHTML.length);
      lastpostHTML = lastpostHTML.slice(8, lastpostHTML.search('" download='));
      if (lastpostHTML.includes('.webm')|| lastpostHTML.includes('.mp4')) {
        if (userbackgroundwebm.firstChild === null) {
          userbackgroundwebm.appendChild(document.createElement("video"));
          userbackgroundpng.firstChild.replaceWith(``);//Removes the background image that was set by a previous post. You can comment this out if you don't mind seeing the image behind the webm.
        }
        //If the background is not the same, replaces it.
        if (!userbackgroundwebm.firstChild.src.includes(lastpostHTML)) {
          userbackgroundwebm.firstChild.muted = true;
          userbackgroundwebm.firstChild.src = lastpostHTML;
          userbackgroundwebm.firstChild.autoplay = true;
          userbackgroundwebm.firstChild.loop = true;
          userbackgroundwebm.firstChild.load();
        }
      }
      //Checks if it's an image
      if (lastpostHTML.includes(".gif") || lastpostHTML.includes(".png") || lastpostHTML.includes(".jpg")){
        if (!userbackgroundpng.firstChild.wholeText.includes(lastpostHTML)) {
          userbackgroundpng.firstChild.replaceWith(`#user-background {background: url($LINK) no-repeat fixed center; background-size:cover;background-size: cover;}`.replace("$LINK", lastpostHTML));
        }
        if (userbackgroundwebm.lastChild !== null) {
          userbackgroundwebm.removeChild(userbackgroundwebm.firstChild); //Removes the webm container which seems to have a priority over images/gifs
        }
      }
    }
      await sleep(40); // Can be set to a higher value to change the minimum duration of a bg staying the same
      if (last.nextSibling !== null) {
        last = last.nextSibling;
      }
  }
}

try{
  sluts();
}
catch(err){
  console.log(err.message);
}