export default class Dictionary {
    constructor() {
        this.words = [
            'eddie', 'blaze', 'crash', 'avion', 'panic', 'alert',
            'bobby', 'chris', 'grant', 'harry', 'karen',
            'susan', 'linda', 'quiet', 'alarm', 'moira'
        ];
    };

    getRandomWord() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    };

    isValid(word) {
        return this.words.includes(word.toLowerCase());
    };
};
