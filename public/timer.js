window.addEventListener('DOMContentLoaded', () => {
  const timerDisplay = document.getElementById('timer');
  const typingBox = document.getElementById('user-input');

  let seconds = 0;
  let intervalId = null;
  let started = false;

  function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  timerDisplay.textContent = formatTime(0);

  typingBox.addEventListener('input', () => {
    if (!started) {
      started = true;
      intervalId = setInterval(() => {
        seconds++;
        timerDisplay.textContent = formatTime(seconds);

        if (seconds >= 60) {
          clearInterval(intervalId);
          typingBox.disabled = true;
          if (typeof finishTest === "function") finishTest(); // End session if timer runs out
        }
      }, 1000);
    }
  });
});