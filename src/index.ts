import express from 'express';
import 'dotenv/config'
import bodyParser, {urlencoded} from 'body-parser';
import cors from 'cors';
import config from "./config";
import AppRouter from "./routes"
import {sequelize} from "./config/database";
import cookieParser from 'cookie-parser';
import {errorMiddleware} from "./middlewares/error-handler";

const app = express();
const router = new AppRouter(app);

sequelize.sync().then(() => {
    console.log("DB connected!")
}).catch((err) => {
    console.log(err);
})

const PORT = config.server.port;

app.use(bodyParser.json());
app.use(cors());
app.use(urlencoded({ extended: true }))
app.use(cookieParser());
app.use(errorMiddleware);

router.init();


app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));

