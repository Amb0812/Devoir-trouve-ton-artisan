-- Création de la base de donnée 'trouve_ton_artisan'

CREATE USER 'artisan'@'localhost' IDENTIFIED BY 'ton-mot-de-passe';
GRANT ALL PRIVILEGES ON trouve_ton_artisan.* TO 'artisan'@'localhost';
FLUSH PRIVILEGES;

-- Création des tables 
