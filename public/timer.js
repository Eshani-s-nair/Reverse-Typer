let seconds = 0;
let intervalId = null;
let started = false;

window.addEventListener('DOMContentLoaded', () => {
  const timerDisplay = document.getElementById('timer');
  const typingBox = document.getElementById('user-input');

  function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  timerDisplay.textContent = formatTime(0);

  typingBox.addEventListener('input', () => {
    if (!started) {
      started = true;
      clearInterval(intervalId); // stop any old clock just in case
      intervalId = setInterval(() => {
        seconds++;
        timerDisplay.textContent = formatTime(seconds);

        if (seconds >= 60) {
          clearInterval(intervalId);
          intervalId = null;
          typingBox.disabled = true;
          if (typeof finishTest === "function") {
            finishTest();
          }
        }
      }, 1000);
    }
  });
});

window.resetTimer = function () {
  const timerDisplay = document.getElementById('timer');
  const typingBox = document.getElementById('user-input');

  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  started = false;
  timerDisplay.textContent = "00:00";
  typingBox.disabled = false;
};
