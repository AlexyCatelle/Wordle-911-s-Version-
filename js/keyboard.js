export const AZERTY_KEYS = [
    ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
    ['Entrer', 'W', 'X', 'C', 'V', 'B', 'N', '⌫']
];

export function createVirtualKeyboard(container, onKeyPress) {
    AZERTY_KEYS.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('keyboard-row');

        row.forEach(key => {
            const keyButton = document.createElement('button');
            keyButton.textContent = key;
            keyButton.classList.add('key');
            keyButton.setAttribute('data-key', key);
            rowDiv.appendChild(keyButton);
        });

        container.appendChild(rowDiv);
    });

    container.addEventListener('click', e => {
        if (e.target.matches('button.key')) {
            const key = e.target.getAttribute('data-key');
            onKeyPress(key.toLowerCase());
        }
    });
};