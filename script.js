const audioButton = document.getElementById('audioButton');
const specialAudio = document.getElementById('specialAudio');

audioButton.textContent = '▶ PLAY MY SPECIAL MESSAGE';

audioButton.addEventListener('click', () => {
  if (specialAudio.paused) {
    specialAudio.play();
    audioButton.textContent = '❚❚ PAUSE MY SPECIAL MESSAGE';
  } else {
    specialAudio.pause();
    audioButton.textContent = '▶ PLAY MY SPECIAL MESSAGE';
  }
});

// When audio finishes, reset text
specialAudio.addEventListener('ended', () => {
  audioButton.textContent = '▶ PLAY MY SPECIAL MESSAGE';
});