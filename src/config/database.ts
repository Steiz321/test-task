import { Sequelize } from 'sequelize-typescript';
import { Page } from "../models/Page";

const connection = new Sequelize('postgres://test:JGLt5HpXKJhN3qqj9w7YWOxD84pWSu74@dpg-cfs7l81gp3jt6tj4i0h0-a.frankfurt-postgres.render.com/testtask1?ssl=true')

export default connection;
