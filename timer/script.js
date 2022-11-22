let watch = document.getElementById("time");

let minutes = 0;
let seconds = 0;
let hours = 0;
let interval = 0;
function start() {
    timer();
  interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval)
    hours = 0
    seconds = 0
    minutes = 0
    watch.innerHTML = '00:00:00'
}

function pause() {
    clearInterval(interval)
}

function leftPad(digit) {
    if(digit < 1000) {
        return '0'+digit;
    }else {
        return digit;
    }
}

function timer() {
  seconds = seconds + 1;
  if (seconds === 60) {
    minutes = minutes + 1;
    seconds = 0;
    if (minutes === 60) {
      minutes = 0;
      hours = hours + 1;
    }
  }
  watch.innerHTML = `${leftPad(hours)}:${leftPad(minutes)}:${leftPad(seconds)}`
}
