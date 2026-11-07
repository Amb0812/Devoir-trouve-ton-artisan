//Importations
import sequelize from './config/database.js';
import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';


//Initialisation d'express et des middlewares
const app = express();
const PORT = process.env.PORT || 3001;

// On autorise seulement le front à appeler l'API
app.use(cors({origin: process.env.CORS_ORIGIN}));

// Va permettre de lire le JSON envoyé dans les requêtes
app.use(express.json());


app.get('/', (req, res) => {
   res.json({ message: 'API en marche'});
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