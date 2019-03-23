// ==UserScript==
// @name     Slut party time
// @include https://meguca.org/a/*
// @version  0.1
// @grant    none
// @run-at document-end
// ==/UserScript==


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sluts(){
  var userbackground = document.getElementById('user-background-style');
  var thread = document.getElementById('thread-container');
  var last = thread.lastChild;
  while (last.nextSibling == null){
    await sleep(20);
    if(last.innerHTML.search('a href="/assets/')!=-1){
      var lastpostHTML;
      lastpostHTML = last.innerHTML.slice(last.innerHTML.search('a href="/assets/'),last.innerHTML.length);
      lastpostHTML = lastpostHTML.slice(8,lastpostHTML.search('" download='));
      userbackground.firstChild.replaceWith(`#user-background {background: url($LINK) no-repeat fixed center; background-size:cover;background-size: cover;}`.replace("$LINK",lastpostHTML))
    }
    if(last.nextSibling != null){
      last = last.nextSibling;
    }
  }
}

sluts();