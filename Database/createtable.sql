-- CREATION DES TABLES 
-- Table categorie
CREATE TABLE categorie (
    id_categorie INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(150)
);

CREATE TABLE specialite (
    id_specialite INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(150),
    id_categorie INT NOT NULL,
    FOREIGN KEY(id_categorie) REFERENCES categorie(id_categorie)
);

-- Table artisan
CREATE TABLE artisan (
    id_artisan INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    ville VARCHAR(150) NOT NULL,
    a_propos TEXT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    site_web VARCHAR(255),
    top BOOLEAN NOT NULL DEFAULT FALSE,
    id_specialite INT NOT NULL,
    FOREIGN KEY(id_specialite) REFERENCES specialite(id_specialite)    
);