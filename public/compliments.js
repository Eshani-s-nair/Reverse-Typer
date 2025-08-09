const compliments = {
  tier1: {
    texts: ["That reverse typing… 🫠 was more like a U-turn in slow traffic.", "Mirror says: ‘Please, never do that again.’ 🪞"],
    audio: "audio/audio1.mp3"
  },
  tier2: {
    texts: ["You’re getting there… slowly… like a Windows update 🙂", "🚴‍♀️ That was a pleasant cycling pace — uphill though."],
    audio: "audio/audio1.mp3"
  },
  tier3: {
    texts: ["Now we’re cooking with gas 🔥", "🚀 That speed? Certified caffeine-powered."],
    audio: "audio/audio3.mp3"
  },
  tier4: {
    texts: ["Reverse Royalty 👑 — the mirror bows to you.", "🌌 That was interstellar. Elon wants your fingers."],
    audio: "audio/audio4.mp3"
  }
};

function getCompliment(score) {
  let tier;
  if (score <= 25) tier = "tier1";
  else if (score <= 50) tier = "tier1";
  else if (score <= 75) tier = "tier3";
  else tier = "tier4";

  const list = compliments[tier].texts;
  const randomIndex = Math.floor(Math.random() * list.length);
  return { text: list[randomIndex], audio: compliments[tier].audio };
}

// Usage example:
var score = Math.floor(Math.random() * 100) + 1; // 1 to 100
const result = getCompliment(score);
console.log(score, result.text);

// Play audio (in browser environment)
if (result.audio) {
  const audio = new Audio(result.audio);
  audio.play();
}
