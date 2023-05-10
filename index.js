// variables

const startStop = document.getElementById("play");
const reset = document.getElementById("reset");
const vid = document.getElementById('vid');
// variables for time values
let sec = 0;
let min = 0;
let hrs = 0;
//vars for leading 0

let leadingsec = 0;
let leadingmin = 0;
let leadinghrs = 0;
// vars for setinterval and timerstatus
let timeInt = null;
let timerstatus = 'stopped';

// stopwatch fun
function stopwatch() {
    sec++
    if (sec / 60 === 1) {
        sec = 0;
        min++
        if (min / 60 === 1) {
            min = 0
            hrs++

        }
    }
    if (sec < 10) {
        leadingsec = '0' + sec.toString();
    }
    else {
        leadingsec = sec;
    }

    if (min < 10) {
        leadingmin = '0' + min.toString();
    }
    else {
        leadingmin = min;
    }

    if (hrs < 10) {
        leadinghrs = '0' + hrs.toString();
    }
    else {
        leadinghrs = hrs;
    }
    let displayTimer = document.getElementById("timer").innerText = leadinghrs + ":" + leadingmin + ":" + leadingsec;
}
startStop.addEventListener('click', () => {
    if (timerstatus === 'stopped') {
        timeInt = window.setInterval(stopwatch, 1000);
        document.getElementById("play").innerText = 'Pause'
        timerstatus = 'started';
        vid.play()
    } else {
        window.clearInterval(timeInt);
        document.getElementById("play").innerText = 'Play'
        vid.pause()
        timerstatus = 'stopped'
    }
});
reset.addEventListener('click', () => {

    if (timerstatus === 'started') {
        window.clearInterval(timeInt)
        sec = 0
        min = 0
        hrs = 0
        document.getElementById("timer").innerText = '00:00:00'
        timeInt = window.setInterval(stopwatch, 1000);
        vid.load();
        vid.play();

    }
    else {
        window.clearInterval(timeInt)
        sec = 0
        min = 0
        hrs = 0
        document.getElementById("timer").innerText = '00:00:00'
        vid.load();
    }

})
