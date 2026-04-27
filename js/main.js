const computerAnswerEl = document.querySelector('.js-computer-answer-el');
const userInput = document.querySelector('.js-user-input');
const checkUserInputBtn = document.querySelector('.check-user-guess-btn');
const generateNumberBtn = document.querySelector('.js-generate-number-btn');
const computerMessageEl = document.querySelector('.js-computer-message-el');
const restartGameBtn = document.querySelector('.js-restart-game-btn');
const attemptsEl = document.querySelector('.js-attempts-el');

let generatedNumber;
let attempts = 0;

generateNumberBtn.addEventListener('click', () => {
    generatedNumber = generateNumber();
    computerMessageEl.textContent = 'Generated a new number!';
});

checkUserInputBtn.addEventListener('click', () => {
    checkUserGuess();
    updateAttemptsCount();
});
userInput.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        checkUserGuess();
        updateAttemptsCount();
    }
});



restartGameBtn.addEventListener('click', restartGame);

function generateNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

function checkUserGuess() {
    const userGuess = Number(userInput.value);

    if (!generatedNumber) {
        computerMessageEl.textContent = 'Generate a number first.';
    } else if (userInput.value === '') {
        computerAnswerEl.textContent = 'Enter a valid number.'
    } else if (userGuess === generatedNumber) {
        computerAnswerEl.textContent = 'Correct Guess!';
        attempts += 1;
    } else if (userGuess > generatedNumber) {
        computerAnswerEl.textContent = 'LOWER';
        attempts += 1;
    } else if (userGuess < generatedNumber) {
        computerAnswerEl.textContent = 'HIGHER';
        attempts += 1;
    }
    userInput.value = '';
}

function restartGame() {
    generatedNumber = null;
    computerAnswerEl.textContent = '';
    computerMessageEl.textContent = '';
}

function updateAttemptsCount() {
    attemptsEl.textContent = `Attempts: ${attempts}`;
}

updateAttemptsCount();

//test push for new username #3