// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.status(200).send('Le serveur de test fonctionne parfaitement !');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`--> Serveur de test Express démarré sur le port ${port}`);
});