// Importations
import sequelize from './config/database.js';
import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';
import path from 'path';
import categorieRoute from './routes/rtcategorie.js';
import artisanRoute from './routes/rtartisan.js';

// Initialisation d'express et des middlewares
const app = express();
const PORT = process.env.PORT || 3001;

// On autorise seulement le front à appeler l'API
app.use(cors({origin: process.env.CORS_ORIGIN}));

// Va permettre de lire le JSON envoyé dans les requêtes
app.use(express.json());

// Brancher les routes de l'API
app.use('/api/categories', categorieRoute);
app.use('/api/artisans', artisanRoute);

// Route de test pour l'API (optionnel, déplacée pour ne pas bloquer le front)
app.get('/api/status', (req, res) => {
   res.json({ message: 'API en marche'});
}); 

// Servir le dossier build de React en production
app.use(express.static('dist'));

// Route "catch-all" : renvoie l'application React pour n'importe quelle autre URL
app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

// On se connecte à la base, puis on démarre le serveur
async function demarrer() {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie');

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
  } catch (error) {
    console.error('Connexion à la base impossible :', error.message);
  }
}

demarrer();