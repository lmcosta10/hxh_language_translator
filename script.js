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
    // Clear the display
    sentenceDisplay.innerHTML = '';

    if (currentSentence.length === 0) {
        sentenceDisplay.textContent = 'Your sentence will appear here...';
    } else {
        currentSentence.forEach((symbol) => {
            const img = document.createElement('img');
            img.src = `symbols/${symbol}.png`;
            sentenceDisplay.appendChild(img);
        });
    }

    console.log(currentSentence);
}

// Simulate a translation process
translateButton.addEventListener('click', () => {
    if (currentSentence.length === 0) {
        alert('Please select some symbols to translate.');
        return;
    }

    alert(`Translation: ${currentSentence.join("")}`);
});
