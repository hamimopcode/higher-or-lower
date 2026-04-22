const computerAnswerEl = document.querySelector('.js-computer-answer-el');
const userInput = document.querySelector('.js-user-input');
const checkUserInputBtn = document.querySelector('.check-user-guess-btn');
const generateNumberBtn = document.querySelector('.js-generate-number-btn');
const computerMessage = document.querySelector('.js-computer-message-el');

let generatedNumber;

generateNumberBtn.addEventListener('click', () => {
    generatedNumber = generateNumber();
    computerMessage.textContent = 'Generated a new number!';
});

checkUserInputBtn.addEventListener('click', checkUserGuess);

function generateNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

function checkUserGuess() {
    const userGuess = Number(userInput.value);

    if (!generatedNumber) {
        computerMessage.textContent = 'Generate a number first';
    } 

    if (userGuess === generatedNumber) {
        computerAnswerEl.textContent = 'Correct Guess!';
    } else if (userGuess > generatedNumber) {
        computerAnswerEl.textContent = 'LOWER';
    } else if (userGuess < generatedNumber) {
        computerAnswerEl.textContent = 'HIGHER';
    }

    userInput.value = '';
}