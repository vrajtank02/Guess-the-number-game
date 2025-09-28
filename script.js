const greeting = document.getElementById('greeting');
const leftGuesses = document.getElementById('leftGuesses');
const userInput = document.getElementById('userInput');
const guessBtn = document.getElementById('guessBtn');
const messageEl = document.getElementById('message');
const endGameButtons = document.getElementById('end-game-buttons');
const playAgainBtn = document.getElementById('playAgainBtn');
const exitBtn = document.getElementById('exitBtn');

const MAX_GUESSES = 10;
let secretNumber;
let remainingGuesses;
let username;

function startGame() {
    if (!username) {
        while (!username) {
            username = prompt("Please enter your name:");
        }
        setGreeting();
    }

    secretNumber = Math.floor(Math.random() * 101);
    remainingGuesses = MAX_GUESSES;

    leftGuesses.textContent = `${remainingGuesses}/${MAX_GUESSES} guesses remaining`;
    messageEl.textContent = '';
    userInput.value = '';
    userInput.disabled = false;
    guessBtn.disabled = true;
    endGameButtons.style.display = 'none';
    userInput.focus();
}

function setGreeting() {
    const hour = new Date().getHours();
    let timeGreeting;
    if (hour < 12) {
        timeGreeting = "Morning";
    } else if (hour < 18) {
        timeGreeting = "Afternoon";
    } else {
        timeGreeting = "Evening";
    }
    greeting.textContent = `Hello ${username}! Good ${timeGreeting}!`;
}

function checkGuess() {
    const userGuess = parseInt(userInput.value);

    if (userGuess < 0 || userGuess > 100) {
        messageEl.textContent = "Please enter a number between 0 and 100.";
        userInput.value = '';
        return;
    }

    remainingGuesses--;
    leftGuesses.textContent = `${remainingGuesses}/${MAX_GUESSES} guesses remaining`;

    let messageText = '';
    if (userGuess === secretNumber) {
        let attempts = MAX_GUESSES - remainingGuesses;
        messageText = `🎉 Congratulations, ${username}! You guessed it right in ${attempts} attempts.`;
        endGame();
    }
    else if (remainingGuesses === 0) {
        messageText = `Oops! You lost. The number was ${secretNumber}. Better luck next time!`;
        endGame();
    }
    else {
        if (userGuess < secretNumber) {
            messageText = "Too low! Try a higher number.";
        } else {
            messageText = "Too high! Try a lower number.";
        }
    }

    messageEl.textContent = messageText;
    userInput.value = '';
    userInput.focus();
    guessBtn.disabled = true;
}

function endGame() {
    userInput.disabled = true;
    guessBtn.disabled = true;
    endGameButtons.style.display = 'block';
}

window.onload = startGame;

guessBtn.addEventListener('click', checkGuess);
playAgainBtn.addEventListener('click', startGame);
exitBtn.addEventListener('click', function () {
    window.close();
});

userInput.addEventListener('input', function () {
    const num = parseInt(userInput.value);
    if (userInput.value === '' || num < 0 || num > 100) {
        guessBtn.disabled = true;
    } else {
        guessBtn.disabled = false;
    }
});

userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && !guessBtn.disabled) {
        checkGuess();
    }
});