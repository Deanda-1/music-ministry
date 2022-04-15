const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('client'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'))
})

app.get('/song1', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/songsPage.html'))
})

app.listen(port, () => console.log(`Server app listening at http://localhost:${port}`));