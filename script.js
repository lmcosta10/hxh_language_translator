// Elements
const keyboard = document.querySelector('.keyboard');
const sentenceDisplay = document.getElementById('sentence');
const translateButton = document.getElementById('translate-button');

// Sentence storage
let currentSentence = [];

const symbols = ['a.png', 'ba.png', 'be.png', 'bi.png', 'bo.png', 'bu.png', 'chi.png', 'da.png', 'de.png', 'do.png', 'e.png', 'ga.png', 'ge.png', 'gi.png', 'go.png', 'gu.png', 'ha.png', 'he.png', 'hi.png', 'ho.png', 'hu.png', 'i.png', 'ji.png', 'ka.png', 'ke.png', 'ki.png', 'ko.png', 'ku.png', 'ma.png', 'me.png', 'mi.png', 'mo.png', 'mu.png', 'n.png', 'na.png', 'ne.png', 'ni.png', 'no.png', 'nu.png', 'o.png', 'pa.png', 'pe.png', 'pi.png', 'po.png', 'pu.png', 'ra.png', 're.png', 'ri.png', 'ro.png', 'ru.png', 'sa.png', 'se.png', 'shi.png', 'so.png', 'su.png', 'ta.png', 'te.png', 'to.png', 'tsu.png', 'tzu.png', 'u.png', 'vu.png', 'wa.png', 'wo.png', 'ya.png', 'yo.png', 'yu.png', 'za.png', 'ze.png', 'zi.png', 'zo.png', 'zu.png'];

// Function to generate keyboard dynamically
function createKeyboard() {
    symbols.forEach((fileName) => {
        const symbol = fileName.split('.')[0]; // Extract the name before ".png"
        
        // Create a button element
        const button = document.createElement('button');
        button.classList.add('key');
        button.setAttribute('data-symbol', symbol);

        // Create an img element inside the button
        const img = document.createElement('img');
        img.src = `symbols/${fileName}`;
        img.alt = symbol;

        button.appendChild(img); // Add image to the button
        keyboard.appendChild(button); // Add button to the keyboard

        // Add click event to the button
        button.addEventListener('click', () => {
            currentSentence.push(symbol); // Add the symbol to the sentence array
            updateSentenceDisplay(); // Update the sentence display
        });
    });
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
