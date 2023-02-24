import { Sequelize } from 'sequelize-typescript';

// @ts-ignore
const connection = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});


export default connection;
