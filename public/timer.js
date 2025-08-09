window.addEventListener('DOMContentLoaded', () => {
  const timerDisplay = document.getElementById('timer');
  const typingBox = document.getElementById('typingBox');

  let seconds = 0;
  let intervalId = null;
  let started = false;

  // Format seconds into MM:SS
  function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  // Initialize timer display
  timerDisplay.textContent = formatTime(0);

  typingBox.addEventListener('input', () => {
    if (!started) {
      started = true;
      intervalId = setInterval(() => {
        seconds++;
        timerDisplay.textContent = formatTime(seconds);

        if (seconds >= 60) {
          clearInterval(intervalId);
          typingBox.disabled = true; // Optional: disable input after 1 min
        }
      }, 1000);
    }
  });
});
