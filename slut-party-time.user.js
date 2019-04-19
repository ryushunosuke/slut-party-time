// ==UserScript==
// @name     Slut party time
// @include https://meguca.org/a/*
// @version  0.4.0
// @grant none
// @icon data:image/png;base64,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
// @run-at document-end
// ==/UserScript==

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sluts() {
  console.log("Party is on!")
  var thread = document.getElementById('thread-container');
  var last = thread.lastElementChild;
  while (document.getElementById('partyTime').checked) {
    if (last.innerHTML.search('a href="/assets/') !== -1 && last.innerHTML.search('spoil/default.jpg') === -1){
      var userbackgroundpng = document.getElementById('user-background-style');
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
      //Changing over to an interface
      await sleep(document.getElementById("cycleOverIn").value); // Can be set to a higher value to change the minimum duration of a bg staying the same
      if (last.nextSibling !== null) {
        last = last.nextSibling;
      }
  }
}
function callSluts(){
  try{
  sluts();
}
catch(err){
  console.log(err.message);
}
}
//Sets up a new options tab for party time
    var options = document.getElementById("options");
    var tab_butts = options.getElementsByClassName("tab-butts")[0];
    var tab_cont = options.getElementsByClassName("tab-cont")[0];
    tab_butts.appendChild(document.createElement('a'));
    let slut_tab = tab_butts.lastChild;
    slut_tab.setAttribute('class','tab-link');
    slut_tab.setAttribute('data-id','7');
    slut_tab.innerHTML = "Slut party time";
    tab_cont.appendChild(document.createElement('div'));
    var slut_cont = tab_cont.lastChild;
    slut_cont.setAttribute('data-id',7);
    let cycleOver = 40;
    slut_cont.innerHTML = '<input type="checkbox" class="checkbox" id="partyTime" checked="true"> Enable party time.<br><input type="text" value=1000 class="form-control" id="cycleOverIn"> Set the time spent on each post in ms.';
    document.getElementById("partyTime").onclick = function() {
        if(this.checked){//Starts background changing.
            callSluts();
        }
        else{
            console.log("Party is over");
        }
    }; 
console.log("Loaded");

callSluts();
