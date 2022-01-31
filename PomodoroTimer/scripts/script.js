const startStop = document.querySelector("#startstop");
let minutes = document.querySelector("#minutes").innerHTML;
let seconds = document.querySelector("#seconds").innerHTML;

startStop.onclick = function () {
    timerOn();
}

function timerOn() {  
    if (startStop.innerHTML === "START") {
        startStop.innerHTML = "STOP";
        //TODO: start the timer!
    } else {
        startStop.innerHTML = "START";
        //TODO: stop the timer!
    }
}  
