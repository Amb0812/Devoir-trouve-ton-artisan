
import { DataTypes } from "sequelize"; //on importe datatypes depuis la biblio sequelize, qui contient les types de données SQL pour définir la structure des colonnes
import sequelize from '../config/database.js'; // on importe les id de connexion a notre base de données, le nom, etc.

// Modèle de la table categorie de ma bd
const Categorie = sequelize.define('Categorie', {
    id_categorie: 
    { type: DataTypes.INTEGER, //c'est un nombre entier
        primaryKey: true,       // c'est la clé primaire de la table
        autoIncrement: true },  // la valeur s'incrémente automatiquement à chaque nouvel enregistrement
    nom: 
    { type: DataTypes.STRING, allowNull: false }, //c'est une chaîne de caractère et les valeurs null non autorisées   
    
},
{ tableName: 'categorie', timestamps: false}); // force sequelize à lier ce modèle à la tab sql categorie +desactive la création automatique des colonnes (createAT et updateAt que sequelize ajoute par défaut.

export default Categorie;