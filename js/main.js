const computerAnswerEl = document.querySelector('.js-computer-answer-el');
const userInput = document.querySelector('.js-user-input');
const checkUserInputBtn = document.querySelector('.check-user-guess-btn');
const computerMessageEl = document.querySelector('.js-computer-message-el');
const resetGameBtn = document.querySelector('.js-reset-game-btn');
const newGameBtn = document.querySelector('.js-new-game-btn');
const attemptsEl = document.querySelector('.js-attempts-el');
const timesPlayedEl = document.querySelector('.js-times-played-el');
const bestScoreEl = document.querySelector('.js-best-score-el');

let generatedNumber;
let attempts = 0;
let timesPlayed = 0;

let score = [];

newGame();
updateGameStats();

checkUserInputBtn.addEventListener('click', () => {
    checkUserGuess();
    updateGameStats();
});
userInput.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        checkUserGuess();
        updateGameStats();
    }
});

newGameBtn.addEventListener('click', newGame);
resetGameBtn.addEventListener('click', resetGame);

function checkUserGuess() {
    const userGuess = Number(userInput.value);

    if (!generatedNumber) {
        computerMessageEl.textContent = 'Generate a number first.';
    } else if (userInput.value === '') {
        computerAnswerEl.textContent = 'Enter a valid number.'
    } else if (userGuess === generatedNumber) {
        computerAnswerEl.textContent = 'Correct Guess!';
        attempts += 1;
        timesPlayed += 1;
        score.push(attempts);
    } else if (userGuess > generatedNumber) {
        computerAnswerEl.textContent = 'LOWER';
        attempts += 1;
    } else if (userGuess < generatedNumber) {
        computerAnswerEl.textContent = 'HIGHER';
        attempts += 1;
    }
    userInput.value = '';
}

function newGame() {
    generatedNumber = Math.floor(Math.random() * 100 + 1);
    computerAnswerEl.textContent = '';
    computerMessageEl.textContent = '';
    attempts = 0;
    updateGameStats();
}

function resetGame() {
    timesPlayed = 0;
    score = [];
    newGame();
}

function updateGameStats() {
    attemptsEl.textContent = `Attempts: ${attempts}`;
    timesPlayedEl.textContent = `Times Played: ${timesPlayed}`;

    const bestScore = score.length < 1 ? 0 : Math.min(...score);
    bestScoreEl.textContent = `Best Score: ${bestScore}`
}