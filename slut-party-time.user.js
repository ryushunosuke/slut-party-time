// ==UserScript==
// @name     Slut party time
// @include https://megu.ca/*/*
// @version  0.5.0.1
// @grant none
// @icon data:image/png;base64,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
// @run-at document-end
// ==/UserScript==

var currentname;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sluts() {
    console.log("Party is on!")
    var thread = document.getElementById('thread-container');
    var last = thread.lastElementChild;
    while (document.getElementById('partyTime').checked) { //>>>>>while true
        if (last.innerHTML.search('a href="/assets/') !== -1 && last.innerHTML.search('/assets/spoil/') === -1 && !(last.classList.contains("deleted"))) {
            let url, filename;
            url = last.innerHTML.slice(last.innerHTML.search('a href="/assets/'), last.innerHTML.length);
            url = url.slice(8, url.search('" download='));
            filename = last.innerHTML.slice(last.innerHTML.search('download='));
            filename = filename.slice(filename.search(">") + 1, filename.search("<"));
            currentname = filename;
            setBackground(url)
        }
        await sleep(document.getElementById("cycleOverIn").value); // Changes the duration of using a post for the background. Do not set to something too low.
        if (last.nextSibling !== null) { //If the duration is shorter than 20 it will be reset to 20 on page refresh.
            last = last.nextSibling;
        }
    }
}

function setBackground(backurl) { // Sets the background using the user-background-style if it's an image, and user-background if it is a video
    var userbackgroundpng = document.getElementById('user-background-style');
    var userbackgroundwebm = document.getElementById('user-background');
    if (backurl.includes('.webm') || backurl.includes('.mp4')) {
        if (userbackgroundwebm.firstChild === null) {
            userbackgroundwebm.appendChild(document.createElement("video"));
            userbackgroundwebm.firstChild.setAttribute("id", "slutvideo");
            userbackgroundpng.innerHTML = ''; //Removes the background image that was set by a previous post. You can comment this out if you don't mind seeing the image behind the webm.
        }
        //If the background has a changed attribute (src or muted) then reloads it.
        if (!userbackgroundwebm.firstChild.src.includes(backurl) || (userbackgroundwebm.firstChild.muted != document.getElementById("partymute").checked)) {
            document.getElementById("partymute").checked === true ? userbackgroundwebm.firstChild.muted = true : userbackgroundwebm.firstChild.muted = false;
            userbackgroundwebm.firstChild.src = backurl;
            userbackgroundwebm.firstChild.autoplay = true;
            userbackgroundwebm.firstChild.loop = true;
            userbackgroundwebm.firstChild.load();
        }
    }
    //Checks if it's an image
    if (backurl.includes(".gif") || backurl.includes(".png") || backurl.includes(".jpg")) {
        if (!userbackgroundpng.innerHTML.includes(backurl)) {
            userbackgroundpng.innerHTML = `#user-background {background: url(${backurl}) no-repeat fixed center; background-size:cover;background-size: cover;}`;
        }
        if (userbackgroundwebm.lastChild !== null) {
            userbackgroundwebm.removeChild(userbackgroundwebm.firstChild); //Removes the webm container which seems to have a priority over images/gifs
        }
    }

}

var tablelink = { //The struct used to save files into the localstorage. 
    name: "",
    link: ""
}

function appendToTable(table, filelink, filename, instorage) {
    document.getElementById("slut.tablediv").style = "height:300px; overflow:auto;" //Expands the table if no values were currently in it.
    let url = filelink.slice(filelink.lastIndexOf("/") + 1),
        tr = document.createElement("tr"),
        td = document.createElement("td");
    td.textContent = filename;
    tr.appendChild(td);
    tr.onclick = function() {
        setBackground(filelink);
        document.getElementById("partyTime").checked = false; //Stops background changing
    }
    table.append(tr);
    if (!instorage) { //If it's not in storage then add it.
        tablelink.name = filename;
        tablelink.link = filelink;
        let tablearray = JSON.parse(localStorage.getItem("slut.imagelist") === "" ? null : localStorage.getItem("slut.imagelist"));
        if (tablearray === null) tablearray = []; //Local storage is an array of tablelink objects.
        tablearray.push(tablelink);
        localStorage.setItem("slut.imagelist", JSON.stringify(tablearray)); //Writes the array back to the localstorage after adding the new added tablelink to it.
    }

}

function setup() { //Sets up the Options tab and start background changing if Party time checkbox is enabled.
    if (localStorage.getItem("slut.imagelist") == null) localStorage.setItem("slut.imagelist", ""); //Sets slut.imagelist to a an empty string for easier checking later in the code
    //Options HTML codes
    var options = document.getElementById("options");
    var tab_butts = options.getElementsByClassName("tab-butts")[0];
    var tab_cont = options.getElementsByClassName("tab-cont")[0];
    tab_butts.appendChild(document.createElement('a'));
    let slut_tab = tab_butts.lastChild;
    slut_tab.setAttribute('class', 'tab-link');
    slut_tab.setAttribute('data-id', tab_butts.childNodes.length - 1);
    slut_tab.innerHTML = "Slut party time";
    tab_cont.appendChild(document.createElement('div'));
    var slut_cont = tab_cont.lastChild;
    slut_cont.setAttribute('data-id', tab_butts.childNodes.length - 1);
    slut_cont.innerHTML = `<input type="checkbox" id="partyTime" ${localStorage.getItem("slut.party") == "true" ? "checked":"defaultChecked='false'"}> Enable party time<br> <input type="checkbox" id="partymute" ${localStorage.getItem("slut.mute") == "true"?"checked":"defaultChecked='false'"}> Mute background webm<br>${(document.getElementById("userBG").outerHTML)} Custom background (Meguca)<br><input type="checkbox" id="slut.remember" ${localStorage.getItem("slut.remind") == "true" ? "checked":"defaultChecked='false'"}> Remember the current background (<a id="slut.resetremind">Try again</a>)<br><input type="text" value="${localStorage.getItem("slut.duration") == null? 200:localStorage.getItem("slut.duration")}" class="form-control" id="cycleOverIn"> Set the time spent on each post in ms.<br><input type="button" id="partyaddlast"> Save current background image.<br><div id="slut.tablediv"><table id="slut.table"><tbody id="slut.tablebody"></tbody></table></div><br><br><a id="slut.clearlist">Clear list<a>`;
    //^^ Has all the information for the options tab
    if (document.getElementById("partyTime").checked == true) callSluts();
    if (document.getElementsByName("userBG")[0].checked == true) document.getElementsByName("userBG")[1].checked = true; // If Meguca's custom background is enabled in the original tab, checks it again in the party time tab

    document.getElementById("partyTime").onclick = function() {
        if (this.checked) {
            localStorage.setItem("slut.party", true);
            callSluts(); //Starts background changing.
        } else {
            console.log("Party is over");
            localStorage.setItem("slut.party", false);
        }
    };

    document.getElementById("partymute").onclick = function() { //Mute background.
        if (this.checked) {
            localStorage.setItem("slut.mute", true);
        } else localStorage.setItem("slut.mute", false);
    };

    document.getElementById("partyaddlast").onclick = function() {
        let medialink; // The current background is not stored anywhere to be easily grabbed, finds if the current background is a video or an image by checking both and finding the url accordingly
        if (document.getElementById('user-background-style').childNodes.length != 0 && document.getElementById('user-background-style').childNodes[0].data != "") {
            medialink = document.getElementById('user-background-style').childNodes[0].data;
            medialink = medialink.slice(medialink.search("[(]") + 1, medialink.search("[)]"));
        } else if (document.getElementById('slutvideo') != null) {
            medialink = document.getElementById('slutvideo').src;
        }
        appendToTable(document.getElementById("slut.tablebody"), medialink, currentname, false); //Appends to the filelist table, also adds it to the local storage according to the last argument.
    };

    if (localStorage.getItem("slut.imagelist") != "") { //Loads the file(url)s saved to the localstorage
        let images = JSON.parse(localStorage.getItem("slut.imagelist"));
        for (let i in images) {
            appendToTable(document.getElementById("slut.tablebody"), images[i].link, images[i].name, true);
        }
    }

    document.getElementById("slut.remember").onclick = function() {
        if (this.checked) {
            let medialink;
            if (document.getElementById('user-background-style').innerHTML != "") { //Take image url from image background
                medialink = document.getElementById('user-background-style').childNodes[0].data;
                medialink = medialink.slice(medialink.search("[(]") + 1, medialink.search("[)]"));
            } else if (document.getElementById('slutvideo') != null) {
                medialink = document.getElementById('slutvideo').src;
            }
            tablelink.name = currentname;
            tablelink.link = medialink;
            localStorage.setItem("slut.remember", JSON.stringify(tablelink)) //Tries to change the background to the remembered image 
            localStorage.setItem("slut.remind", true) //when loading a new page but something from Meguca is removing it after loading it
        } else if (!this.checked) {
            localStorage.setItem("slut.remind", false)
        }
    }
    document.getElementById("slut.resetremind").onclick = function() { //This is the "Try Again" button which sets the background to the remembered image.
        tablelink = JSON.parse(localStorage.getItem("slut.remember"));
        setBackground(tablelink.link);
        currentname = tablelink.name;
    };

    if (document.getElementById("slut.remember").checked) { //If remember is checked on page load then set the background as the remembered image.
        tablelink = JSON.parse(localStorage.getItem("slut.remember"));
        setBackground(tablelink.link);
        currentname = tablelink.name;
    }

    document.getElementById("slut.clearlist").onclick = function() { //Clears the table, and the localstorage.
        document.getElementById("slut.tablebody").innerHTML = "";
        document.getElementById("slut.tablediv").style = "";
        localStorage.setItem("slut.imagelist", "");
    }

    document.getElementById("cycleOverIn").onchange = function() {
        localStorage.setItem("slut.duration", this.value > 20 ? this.value : 20);
    }
}

function callSluts() { // Used to call the main loop that does the main work
    try {
        sluts();
    } catch (err) {
        console.log(err.message);
    }
}

setup();
