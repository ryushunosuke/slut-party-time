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

async function sluts(){
  var thread = document.getElementById('thread-container');
  var last = thread.lastElementChild;
  while (last.nextSibling == null){
    await sleep(20);
    if(last.innerHTML.search('a href="/assets/')!=-1){
      var lastpostHTML;
      lastpostHTML = last.innerHTML.slice(last.innerHTML.search('a href="/assets/'),last.innerHTML.length);
      lastpostHTML = lastpostHTML.slice(8,lastpostHTML.search('" download='));
      if(lastpostHTML.search('.webm')!=-1){
      userbackground = document.getElementById('user-background');
      userbackground.firstChild.replaceWith(`<div id="user-background"><video autoplay="" loop=""><source src="$LINK" type="video/webm"></video></div>`.replace("$LINK", lastpostHTML));
      userbackground.firstChild.load();
      }
      else{ //Means last post has media inside of it and it is not a webm
        var userbackground = document.getElementById('user-background-style'); //uses the meguca custom background option
        if (userbackground.childNodes !== undefined || userbackground.childElementNodes != 0){ 
          userbackground.removeChild(userbackground.firstChild); //Removes the webm container which seems to have a priority over images/gifs
        }
        userbackground.firstChild.replaceWith(`#user-background {background: url($LINK) no-repeat fixed center; background-size:cover;background-size: cover;}`.replace("$LINK",lastpostHTML));

      }
    }
    if(last.nextSibling != null){
      last = last.nextSibling;
    }
  }
}

sluts();