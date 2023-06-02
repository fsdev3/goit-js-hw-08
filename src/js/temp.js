import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

window.addEventListener('load', onLoad);

function onLoad() {
  let lastTime = localStorage.getItem(CURRENT_TIME) || 0;
  player.setCurrentTime(lastTime);
  // if (lastTime) {
  //     player.setCurrentTime(lastTime);
  // }

  //   if (lastTime === null) {
  //     lastTime = 0;
  //   }

  //   player.setCurrentTime(lastTime);
}

player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem(CURRENT_TIME, time.seconds);
  }, 1000)
);

// hw 9 - t1
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
startBtnEl.addEventListener('click', startColorChange);
stopBtnEl.addEventListener('click', stopColorChange);
let intervalId = null;

function startColorChange() {
  if (intervalId) {
    return;
  }
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChange() {
  clearInterval(intervalId);
  intervalId = null;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
