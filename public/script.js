// Elements
const keyboard = document.querySelector('.keyboard');
const sentenceDisplay = document.getElementById('sentence');
const translateButton = document.getElementById('translate-button');

// Sentence storage
let currentSentence = [];

// Function to generate keyboard dynamically
async function createKeyboard() {
    try {
        const response = await fetch('http://localhost:3000/api/symbols');
        const symbols = await response.json();

        symbols.forEach((fileName) => {
            const symbol = fileName.split('.')[0]; // Extract the name before ".png"
            
            // Create a button element
            const button = document.createElement('button');
            button.classList.add('key');
            button.setAttribute('data-symbol', symbol);

            // Create an img element inside the button
            const img = document.createElement('img');
            img.src = `http://localhost:3000/symbols/${fileName}`;

            button.appendChild(img); // Add image to the button
            keyboard.appendChild(button); // Add button to the keyboard

            // Add click event to the button
            button.addEventListener('click', () => {
                currentSentence.push(symbol); // Add the symbol to the sentence array
                updateSentenceDisplay(); // Update the sentence display
            });
        });
    } catch (error) {
        console.error('Error fetching symbols:', error);
    }
}

// Update the sentence display with images
function updateSentenceDisplay() {
    sentenceDisplay.innerHTML = '';

    if (currentSentence.length === 0) {
        sentenceDisplay.textContent = 'Your sentence will appear here...';
    } else {
        currentSentence.forEach((symbol) => {
            const img = document.createElement('img');
            img.src = `symbols/${symbol}.png`; // Path to the symbol image
            img.classList.add('symbol-image'); // Optional: Add a class for styling
            sentenceDisplay.appendChild(img);
        });
    }
}

// Simulate a translation process
translateButton.addEventListener('click', () => {
    if (currentSentence.length === 0) {
        alert('Please select some symbols to translate.');
        return;
    }

    alert(`Translation: ${currentSentence.join("")}`);
});

createKeyboard();
