const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Débloque totalement la sécurité réseau locale
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

// ROUTE 1 : Affiche le lecteur SHDW
app.get('/embed/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ROUTE 2 : Envoie la vidéo brute sans laisser OneDrive bloquer le streaming
app.get('/video-stream', (req, res) => {
    res.sendFile(path.join(__dirname, 'anime_1080p.mp4'));
});

// ROUTE 3 : Envoie les sous-titres VOSTFR
app.get('/subtitles.vtt', (req, res) => {
    res.sendFile(path.join(__dirname, 'subtitles.vtt'));
});

app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`🚀 LECTEUR SHDW PARFAITEMENT DÉBLOQUÉ !`);
    console.log(`🔗 Lien : http://localhost:${PORT}/embed/vostfr-01`);
    console.log(`==================================================`);
});
