const express = require('express');
const path = require('path');
const app = express();

// CORRECTION : Utilise le port de Render en ligne, ou le port 3000 sur votre PC local
const PORT = process.env.PORT || 3000;

// Autoriser la sécurité
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

// ROUTE 1 : Pour afficher le lecteur SHDW
app.get('/embed/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Lancement du serveur (S'adapte automatiquement à 0.0.0.0 sur Render)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`==================================================`);
    console.log(`🚀 SERVEUR SHDW COMPATIBLE CLOUD ACTIF !`);
    console.log(`🔗 Port utilisé : ${PORT}`);
    console.log(`==================================================`);
});
