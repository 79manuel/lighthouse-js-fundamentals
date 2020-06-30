// function displayTime() {
//   const date = new Date();
//   const time = date.toLocaleTimeString();
//   document.getElementById('demo').textContent = time;
// }
//
// setInterval(displayTime, 1000);

let secondCount = 0;
let stopWatch;
let clock = document.querySelector('.clock');

function displayTime() {
  let hours = Math.floor(secondCount/3600);
  let minutes = Math.floor((secondCount % 3600)/60);
  let seconds = Math.floor(secondCount % 60);

  let displayHours = (hours < 10) ? '0' + hours : hours;
  let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
  let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

  clock.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
  secondCount++;
}

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

startBtn.addEventListener('click', () => {
  stopWatch = setInterval(displayTime, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(stopWatch);
  startBtn.disabled = false;
})

resetBtn.addEventListener('click', () => {
  clearInterval(stopWatch);
  secondCount = 0;
  startBtn.disabled = false;
  displayTime();
})

displayTime();