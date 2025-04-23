import { state } from './state.js';
import { isLetter, addLetter, removeLetter } from './letter.js';
import { showMessage } from './message.js';

function restartGame() {
    location.reload();
};

export function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        };
    };
};

export function handleKey(key) {
    if (key === 'enter' || key === 'entrer') {
        if (state.currentCol === 5) {
            const word = getCurrentWord();
            if (state.dictionary.isValid(word)) {
                revealWord(word);
                state.currentRow++;
                state.currentCol = 0;
            } else {
                showMessage('Mot non valide.', {
                    closable: true,
                    image: '/img/invalideMessage.jpg'
                });
            };
        };
    }
    else if (key === 'backspace' || key === '⌫') {
        removeLetter();
    }
    else if (isLetter(key)) {
        addLetter(key);
    };
    updateGrid();
};

function getCurrentWord() {
    return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
};

function revealWord(guess) {
    const row = state.currentRow;

    for (let i = 0; i < 5; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;

        if (letter === state.secret[i]) {
            box.classList.add('box__right');
        }
        else if (state.secret.includes(letter)) {
            box.classList.add('box__wrong');
        }
        else {
            box.classList.add('box__empty');
        };
    };

    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 5;

    if (isWinner) {
        setTimeout(() => {
            showMessage('Félicitations !', {
                reload: true,
                image: '/img/victoryMessage.jpg'
            });
        }, 100);
    }
    else if (isGameOver) {
        setTimeout(() => {
            showMessage(`Défaite ! Le mot était ${state.secret}.`, {
                reload: true,
                image: '/img/failMessage.webp'
            });
        }, 100);
    };
};



