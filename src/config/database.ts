import { Sequelize } from 'sequelize-typescript';
import { Page } from "../models/Page";

const connection = new Sequelize({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [Page]
})

export default connection;
