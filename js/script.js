import { drawGrid } from './grid.js';
import { createVirtualKeyboard } from './keyboard.js';
import { handleKey } from './game.js';

const game = document.getElementById('game');
const keyboardContainer = document.getElementById('virtual-keyboard');

drawGrid(game);
createVirtualKeyboard(keyboardContainer, key => {
    handleKey(key);
});

document.body.onkeydown = e => {
    handleKey(e.key.toLowerCase());
};
