import { Sequelize } from 'sequelize';
import PageModel from "../models/Page";

export const sequelize = new Sequelize(`${process.env.DB_URL}`);

export const Page = PageModel(sequelize);
