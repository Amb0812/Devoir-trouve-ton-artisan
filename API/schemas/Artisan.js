import { DataTypes } from "sequelize";
import sequelize from '../config/database.js';

//Modèle de la tab artisan

const Artisan = sequelize.define('Artisan', {
    id_artisan: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true, },

    nom: {
        type: DataTypes.STRING,
        allowNull: false,},

    note: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: false,
        //MySQL renvoie la note en texte: on va la convertir en nombre:
        get() {return parseFloat(this.getDataValue('note'));},
    },    

    ville: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },

    a_propos: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false},

    site_web: {
        type: DataTypes.STRING,
        allowNull: true, //certains artisans n'ont pas de site
    },

    top: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,

    },

    id_specialite: {
        type:  DataTypes.INTEGER,
        allowNull: false,
    },

    }, {tableName:'artisan', timestamps: false,});

    export default Artisan;