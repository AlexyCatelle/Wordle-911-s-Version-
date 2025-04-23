import Dictionary from './dictionary.js';
const dict = new Dictionary();

export const state = {
  secret: dict.getRandomWord(),
  grid: Array(6).fill().map(() => Array(5).fill('')),
  currentRow: 0,
  currentCol: 0,
  dictionary: dict
};

export function resetState() {
  state.secret = dict.getRandomWord();
  state.grid = Array(6).fill().map(() => Array(5).fill(''));
  state.currentRow = 0;
  state.currentCol = 0;
};