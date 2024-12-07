const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/symbols', express.static(path.join(__dirname, 'symbols')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API to get symbol filenames
app.get('/api/symbols', (req, res) => {
    const symbolsDir = path.join(__dirname, 'symbols');
    fs.readdir(symbolsDir, (err, files) => {
        if (err) {
            console.error('Error reading symbols folder:', err);
            return res.status(500).json({ error: 'Unable to read symbols folder.' });
        }

        // Filter for .png files only
        const pngFiles = files.filter((file) => path.extname(file) === '.png');
        res.json(pngFiles);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});