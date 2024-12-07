'use strict';


const sentenceDisplay = document.getElementById('sentence');
const translateButton = document.getElementById('translate-button');
const keys = document.querySelectorAll('.key');

let currentSentence = [];

// Event listeners
keys.forEach((key) => {
    key.addEventListener('click', () => {
        const symbol = key.getAttribute('data-symbol');
        currentSentence.push(symbol);
        updateSentenceDisplay();
    });
});

// Update the sentence display
function updateSentenceDisplay() {
    if (currentSentence.length === 0) {
        sentenceDisplay.textContent = 'Your sentence will appear here...';
    } else {
        sentenceDisplay.textContent = currentSentence.join(' ');
    }
}

// Simulate a translation process
translateButton.addEventListener('click', () => {
    if (currentSentence.length === 0) {
        alert('Please select some symbols to translate.');
        return;
    }

    const translation = translateSentence(currentSentence);
    alert(`Translation: ${translation}`);
});

// Translation function (mock implementation)
function translateSentence(sentenceArray) {
    const symbolDictionary = {
        symbol1: 'Hello',
        symbol2: 'World',
        symbol3: '!',
    };

    return sentenceArray.map((symbol) => symbolDictionary[symbol] || '[Unknown]').join(' ');
}