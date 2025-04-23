export function showMessage(text, options = { reload: false, closable: false, image: null }) {
    const container = document.getElementById('message-container');

    let content = '';

    if (options.image) {
        content += `<img src="${options.image}" alt="Message" class="message-image" aria-hidden="true">`;
    };

    content += `<p>${text}</p>`;

    if (options.reload) {
        content += `<button id="restart-btn">Rejouer</button>`;
    } else if (options.closable) {
        content += `<button id="close-btn" class="close-button">&times;</button>`;
    };

    container.innerHTML = content;
    container.style.display = 'block';

    if (options.reload) {
        document.getElementById('restart-btn').addEventListener('click', () => {
            location.reload();
        });
    } else if (options.closable) {
        document.getElementById('close-btn').addEventListener('click', () => {
            container.style.display = 'none';
        });
    }
};



