// script.js

// Gera um número aleatório entre 1 e 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

// Carrega os sons
const successSound = new Audio('sounds/anime-wow-sound-effect.mp3');
const errorSound = new Audio('sounds/error_CDOxCYm.mp3');
const gameOverSound = new Audio('sounds/12322.mp3');


// Carrega o botão de reset
const resetBtn = document.getElementById('resetBtn');

document.getElementById('guessBtn').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guessInput').value);
    const resultMessage = document.getElementById('resultMessage');
    const attemptsSpan = document.getElementById('attemptsLeft');

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        resultMessage.textContent = 'Por favor, insira um número entre 1 e 100.';
        resultMessage.className = 'incorrect';
        errorSound.play(); // Reproduz o som de erro
        return;
    }

    attemptsLeft--;
    attemptsSpan.textContent = attemptsLeft;

    if (userGuess === randomNumber) {
        resultMessage.textContent = `Parabéns! Você acertou o número ${randomNumber}.`;
        resultMessage.className = 'correct';
        successSound.play(); // Reproduz o som de sucesso
        document.getElementById('guessBtn').disabled = true; // Desabilita o botão após acertar
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Errado! O número é maior.';
        resultMessage.className = 'incorrect';
        errorSound.play(); // Reproduz o som de erro
    } else {
        resultMessage.textContent = 'Errado! O número é menor.';
        resultMessage.className = 'incorrect';
        errorSound.play(); // Reproduz o som de erro
    }

    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        resultMessage.textContent = `Game Over! O número correto era ${randomNumber}.`;
        resultMessage.className = 'incorrect';
        gameOverSound.play(); // Reproduz o som de game over
        document.getElementById('guessBtn').disabled = true; // Desabilita o botão ao acabar as tentativas
    }

    // Mostra o botão de reset se o jogo terminou
    if (userGuess === randomNumber || (attemptsLeft === 0 && userGuess !== randomNumber)) {
        resetBtn.style.display = 'inline-block';
    }
});

resetBtn.addEventListener('click', function() {
    // Reinicia os valores do jogo
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    document.getElementById('attemptsLeft').textContent = attemptsLeft;
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('resultMessage').className = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessBtn').disabled = false;
    resetBtn.style.display = 'none';
});



