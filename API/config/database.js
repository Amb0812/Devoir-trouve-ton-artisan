// Créer la connexion avec la base de donnée mySQL
import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.database_NAME,
    process.env.database_USER,
    process.env.database_PASSWORD,
    {
        host: process.env.database_HOST,
        port: process.env.database_PORT || 3306,
        dialect: 'mysql',
        logging: false
    }
);

export default sequelize;