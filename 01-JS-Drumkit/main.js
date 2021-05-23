window.addEventListener("keydown", playSound);

function playSound(event) {
  const keyCode = event.key.charCodeAt(0);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}
