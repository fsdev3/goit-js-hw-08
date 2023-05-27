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
