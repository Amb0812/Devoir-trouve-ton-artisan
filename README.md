# Trouve ton artisan
Projet composé d'une API (Node.js, Express, Sequelize),
d'une base MySQL/MariaDB et d'un front-end (React, Bootstrap, Sass, Vite).

Site en ligne : https://trouveartisan2028.alwaysdata.net

## Prérequis

- Node.js v24.16.0 (version utilisée pour le projet)
- npm 11.13.0
- MariaDB 10.4.32 en local via XAMPP (le site en ligne utilise MariaDB 11.8.9)
- Git 2.53.0.windows.2

## Installation

### 1. Récupérer le projet

--
git clone https://github.com/Amb0812/Devoir-trouve-ton-artisan.git
cd Devoir-trouve-ton-artisan
--

### 2. Créer la base de données

1. Créer une base nommée `trouve_ton_artisan` (phpMyAdmin).
2. Importer `Database/createtable.sql` (création des tables).
3. Importer `Database/insertdata.sql` (insertion des données).

### 3. Configurer l'API

--
cd API
npm install 
--

Créer un fichier `API/.env` en copiant `API/.env.example`, puis renseigner :


PORT=3001
database_HOST=127.0.0.1
database_PORT=3306
database_NAME=trouve_ton_artisan
database_USER=votre_utilisateur
database_PASSWORD=votre_mot_de_passe
CORS_ORIGIN=http://localhost:5173


### 4. Configurer le front-end
--
cd ../Client
npm install 
--
Créer un fichier `Client/.env` en copiant `Client/.env.example` :


VITE_API_URL=http://localhost:3001

## Lancement

Dans deux terminaux séparés :


Terminal 1 : API
--
cd API
npm start
--

Terminal 2 : front-end
--
cd Client
npm run dev
--

Le site est alors disponible sur http://localhost:5173.

## Mise en production

--
cd Client
npm run build
--

Le dossier `dist` généré contient le site à déposer sur le serveur.

## Structure du projet

- `API/` : API Express (configuration, schémas Sequelize, routes)
- `Client/` : application React (pages, composants, logique, services, styles)
- `Database/` : scripts SQL de création et d'alimentation