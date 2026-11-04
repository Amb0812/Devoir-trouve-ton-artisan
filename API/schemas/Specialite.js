import { DataTypes } from "sequelize";
import sequelize from '../config/database.js';

// Modèle de la table specialite
const Specialite = sequelize.define('Specialite', {
    id_specialite: 
        { type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
    nom: 
        { type: DataTypes.STRING, allowNull: false },  
    id_categorie: 
        { type: DataTypes.INTEGER,
          allowNull: false  
            
        }      
}, {tableName: 'specialite', timestamps: false});

export default Specialite;