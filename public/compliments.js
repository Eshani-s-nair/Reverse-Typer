// compliments.js
const compliments = {
  tier1: {
    texts: [
      "That reverse typing… 🫠 was more like a U-turn in slow traffic.",
      "Mirror says: ‘Please, never do that again.’ 🪞",
      "Wow… a true keyboard warrior… in slow motion.",
      "My grandma types faster, and she’s been gone for years.",
      "Are you typing with your elbows?",
      "You broke the sound barrier… in reverse.",
      "Your WPM is measured in geological time.",
      "Blink twice if you’re still alive, because your typing speed says otherwise.",
      "I’ve seen glaciers move with more urgency.",
      "You type like your keyboard owes you money, but you’re too polite to ask."
    ],
    audio: "audio/audio1.mp3"
  },
  tier2: {
    texts: [
      "You’re getting there… slowly… like a Windows update 🙂",
      "🚴‍♀️ That was a pleasant cycling pace — uphill though.",
      "Congratulations, you’re now slightly faster than a snail.",
      "Almost respectable… for a toddler.",
      "I’ve seen dial-up connections respond quicker.",
      "At this speed, you’ll finish War and Peace by 2050.",
      "Your typing is the cinematic equivalent of buffering.",
      "Not bad… for someone typing with oven mitts on.",
      "You’re basically a speed bump in the information highway.",
      "Halfway to average — keep it up, champ."
    ],
    audio: "audio/audio1.mp3"
  },
  tier3: {
    texts: [
      "Now we’re cooking with gas 🔥",
      "🚀 That speed? Certified caffeine-powered.",
      "Decent… but don’t quit your day job.",
      "You type like someone who *just* discovered the spacebar.",
      "Fast enough to get a coffee order wrong in under a minute.",
      "You’re the Toyota Corolla of typing — not exciting, but it works.",
      "Mildly impressive… if this was 1998.",
      "You’re in the typing sweet spot — too good to mock, too slow to brag.",
      "One day you’ll be fast enough to make typos in real time.",
      "Solid effort, but autocorrect still has job security."
    ],
    audio: "audio/audio3.mp3"
  },
  tier4: {
    texts: [
      "Reverse Royalty 👑 — the mirror bows to you.",
      "🌌 That was interstellar. Elon wants your fingers.",
      "Wow, speed demon… still gonna lose to autocorrect though.",
      "So fast… too bad accuracy exists.",
      "Careful, you might start a fire — oh wait, never mind.",
      "Congrats, you’ve reached ‘nerd flex’ level typing speed.",
      "Impressive… but when’s the last time you touched grass?",
      "You’re typing like you’re trying to hack the Pentagon.",
      "Slow down, Sonic, the keyboard isn’t going anywhere.",
      "Are you training for the Spacebar Olympics?"
    ],
    audio: "audio/audio4.mp3"
  }
};

document.getElementById("get-compliment").addEventListener("click", function () {
  const score = parseInt(document.getElementById("score").value);

  let tier;
  if (score >= 1 && score <= 25) tier = compliments.tier1;
  else if (score > 25 && score <= 50) tier = compliments.tier2;
  else if (score > 50 && score <= 75) tier = compliments.tier3;
  else if (score > 75 && score <= 100) tier = compliments.tier4;

  if (!tier) {
    document.getElementById("compliment-text").textContent = "Invalid score.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * tier.texts.length);
  const text = tier.texts[randomIndex];
  const audioSrc = tier.audio;

  document.getElementById("compliment-text").textContent = text;

  const audioEl = document.getElementById("compliment-audio");
  audioEl.src = audioSrc;
  audioEl.play();
});
