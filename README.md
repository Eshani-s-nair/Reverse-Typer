# TypeFlip - Reverse Typing Challenge

TypeFlip is a web-based typing challenge, but with a twist: you type sentences in reverse! It features multiple modes, a timer, a live scoreboard, and a performance graph.

## Features

- **Reverse Letters:** Type each word with its letters reversed.
- **Reverse Sentence:** Type the entire sentence in reverse word order.
- **Blind Reverse:** No feedback on correctness; words turn grey as you type.
- **Guess the Sentence:** Try to guess the sentence with minimal hints.
- **Live Timer:** Countdown timer for each session.
- **Scoreboard:** Displays WPM, accuracy, and correct words.
- **Performance Graph:** Visualizes your WPM and errors over time.
- **Responsive Layout:** Works on desktop and mobile.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/yourusername/typeflip.git
    cd typeflip
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Start the server:
    ```
    node server.js
    ```

4. Open your browser and go to:
    ```
    http://localhost:3000
    ```

## Project Structure

```
useless project/
├── public/
│   ├── style.css
│   ├── rev.js
│   ├── timer.js
├── views/
│   ├── index.ejs
│   ├── result.ejs
├── server.js
├── README.md
```

## Usage

1. Choose a mode from the top bar.
2. Start typing the reversed sentence as displayed.
3. The timer starts automatically when you begin typing.
4. When time runs out or you finish, you'll be redirected to the results page.
5. View your WPM, accuracy, and a graph of your performance.

## Customization

- **Sentences:** You can edit or expand the sentence array in `rev.js`.
- **Styling:** Modify `style.css` for custom colors and layout.
- **Modes:** Add or tweak modes in `rev.js` for new challenges.


