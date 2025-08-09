const sentences = [
  "lift a rock only to drop it on your own foot",
  "draw a snake and add legs to it",
  "ride a donkey while looking for a horse",
  "use a chicken feather as an arrow",
  "throw a meat bun at a dog and never get it back",
  "a clay bodhisattva crossing the river struggles to save itself",
  "draw a cake to satisfy your hunger",
  "guard a tree stump waiting for a rabbit",
  "pull seedlings up to help them grow",
  "the mantis stalks the cicada unaware of the oriole behind",
    "burning the house to get rid of the fleas",
  "use a pole to fish for the moon in the water",
  "ride a tiger and find it hard to get off",
  "open the door to let the thief in",
  "paint a dragon and dot its eyes",
  "chase two rabbits and catch neither",
  "the fox exploits the tiger's might",
  "play the lute to a cow",
  "plug your ears while stealing a bell",
  "pull the rug from under your own feet",
  "break the wok after crossing the river",
  "catch a turtle in a jar",
  "the rabbit dies and the fox grieves",
  "an ant tries to shake a tree",
  "drinking poison to quench thirst",
  "borrowing flowers to offer to Buddha",
  "pretend to be a pig to eat the tiger",
  "ride the wind and break the waves",
  "throwing a sprat to catch a herring",
  "the weasel pays New Year’s visit to the chicken",
  "watch the fire from across the river",
  "point at a deer and call it a horse",
  "the frog at the bottom of the well",
  "beat the grass to scare the snake",
  "catching a fish while the water is muddy",
  "pull the bow without an arrow",
  "close the door and beat the dog",
  "saving a drop in the ocean",
  "the praying mantis trying to stop a chariot"
];

function getRandomSentence() {
  return sentences[Math.floor(Math.random() * sentences.length)];
}

let currentReversed = "";
let startTime = null;
let userWords = [];
let mode = "letters"; // Default mode

// Reverse letters in each word
function reverseLetters(sentence) {
  return sentence
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

// Reverse the entire sentence (word order)
function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

// Master reverseText function
function reverseText(sentence, mode = "letters") {
  if (mode === "letters") {
    return reverseLetters(sentence);
  } else if (mode === "sentence") {
    return reverseSentence(sentence);
  } else {
    return sentence;
  }
}

// Display sentence with colors
function displaySentenceColored(words, colors) {
  document.getElementById("display-box").innerHTML = words
    .map((word, i) => {
      if (colors[i] === "green") {
        return `<span class="correct-word">${word}</span>`;
      } else if (colors[i] === "red") {
        return `<span class="incorrect-word">${word}</span>`;
      } else {
        return `<span>${word}</span>`;
      }
    })
    .join(" ");
}

// ...existing code...

function getRandomSentences(n = 5) {
  // Shuffle and pick n sentences
  const shuffled = sentences.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

function generateSentence(modeParam = "letters") {
  mode = modeParam;
  let randomSentence;
  if (mode === "guess") {
    randomSentence = getRandomSentence(); 
  } else {
    randomSentence = getRandomSentences().join(" ");
  }
  document.getElementById("display-box").textContent = randomSentence;
  currentReversed = reverseText(randomSentence, mode);
  userWords = [];
  startTime = null;
  document.getElementById("user-input").value = "";
  window.currentOriginal = randomSentence;
}

// Display sentence with colors
function displaySentenceColored(words, colors) {
  document.getElementById("display-box").innerHTML = words
    .map((word, i) => {
      if (mode === "blind") {
        // Blind mode: typed words grey, current word normal, rest faded
        if (i < userWords.length) {
          return `<span style="color:#888">${word}</span>`;
        } else if (i === userWords.length) {
          return `<span style="color:#eee">${word}</span>`;
        } else {
          return `<span style="color:#444">${word}</span>`;
        }
      } else if (mode === "guess") {
        return `<span style="color:#eee">${"_".repeat(word.length)}</span>`;
      } else {
        if (colors[i] === "green") {
          return `<span class="correct-word">${word}</span>`;
        } else if (colors[i] === "red") {
          return `<span class="incorrect-word">${word}</span>`;
        } else {
          return `<span>${word}</span>`;
        }
      }
    })
    .join(" ");
}

// Typing listener
document.getElementById("user-input").addEventListener("keydown", function(e) {
  if (!startTime) startTime = Date.now();

  if (e.key === " ") {
    e.preventDefault();
    let input = this.value.trim();
    userWords.push(input);

    let reversedWords = currentReversed.split(" ");
    let originalWords = window.currentOriginal.split(" ");
    let colors = [];

    for (let i = 0; i < reversedWords.length; i++) {
      if (mode === "blind") {
        colors.push(i === userWords.length - 1 ? "current" : null);
      } else if (mode === "guess") {
        colors.push(null);
      } else {
        if (userWords[i] === undefined) {
          colors.push(null);
        } else if (userWords[i] === reversedWords[i]) {
          colors.push("green");
        } else {
          colors.push("red");
        }
      }
    }

    displaySentenceColored(originalWords, colors);
    this.value = "";

    if (userWords.length === reversedWords.length) {
      let elapsed = (Date.now() - startTime) / 60000;
      let correct = colors.filter(c => c === "green").length;
      let wpm = Math.round(correct / elapsed);
      setTimeout(() => {
        alert("WPM: " + wpm);
      }, 100);
    }
  }
});

// ...existing code...

document.addEventListener("DOMContentLoaded", () => {
  generateSentence();

  document.getElementById("letters-btn").addEventListener("click", function() {
    setMode("letters");
  });
  document.getElementById("sentence-btn").addEventListener("click", function() {
    setMode("sentence");
  });
  document.getElementById("blind-btn").addEventListener("click", function() {
    setMode("blind");
  });
  document.getElementById("guess-btn").addEventListener("click", function() {
    setMode("guess");
  });
});

function setMode(selectedMode) {
  mode = selectedMode;
  document.getElementById("letters-btn").classList.toggle("active", selectedMode === "letters");
  document.getElementById("sentence-btn").classList.toggle("active", selectedMode === "sentence");
  document.getElementById("blind-btn").classList.toggle("active", selectedMode === "blind");
  document.getElementById("guess-btn").classList.toggle("active", selectedMode === "guess");
  generateSentence(selectedMode);
}

// ...existing code...
