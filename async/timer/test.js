// function displayTime() {
//   const date = new Date();
//   const time = date.toLocaleTimeString();
//   document.getElementById('demo').textContent = time;
// }
//
// setInterval(displayTime, 1000);

let secondCount = 0;
let stopWatch;
const clock = document.querySelector('.clock');

function displayCount(){
  let hours = Math.floor(secondCount / 3600);
  let minutes = Math.floor((secondCount % 3600) / 60 );
  let seconds = Math.floor(secondCount % 60);

  let zeroHours = (hours < 10) ? '0' + hours : hours;
  let zeroMinutes = (minutes < 10) ? '0' + minutes : minutes;
  let zeroSeconds = (seconds < 10) ? '0' + seconds : seconds;

  clock.textContent = `${zeroHours}:${zeroMinutes}:${zeroSeconds}`;

  secondCount++;
}

let buttonStart = document.querySelector('.start');
let buttonStop = document.querySelector('.stop');
let buttonReset = document.querySelector('.reset');

buttonStart.addEventListener('click', () => {
  stopWatch = setInterval(displayCount, 1000);
  buttonStart.disabled = false;
});

buttonStop.addEventListener('click', () =>{
  clearInterval(stopWatch);
  buttonStop.disabled = false;
});

buttonReset.addEventListener('click', () => {
  clearInterval(stopWatch);
  secondCount = 0;
  buttonReset.disabled = false;
  displayCount()
})

displayCount();
