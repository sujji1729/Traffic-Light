let stopButtonn = document.getElementById("stopButton");
let readyButtonn = document.getElementById("readyButton");
let goButtonn = document.getElementById("goButton");

let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function onRed() {
    
    stopButtonn.style.backgroundColor = "#cf1124";
    stopLight.style.backgroundColor = "#cf1124";

    readyButtonn.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";

    goButtonn.style.backgroundColor = "#1f1d41";
    goLight.style.backgroundColor = "#4b5069";

}

function onYellow() {

    stopButtonn.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";

    readyButtonn.style.backgroundColor = "#f7c948";
    readyLight.style.backgroundColor = "#f7c948";

    goButtonn.style.backgroundColor = "#1f1d41";
    goLight.style.backgroundColor = "#4b5069";

}

function onGreen() {

    stopButtonn.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";

    readyButtonn.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";

    goButtonn.style.backgroundColor = "#199473";
    goLight.style.backgroundColor = "#199473";

}