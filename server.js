import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import colors from 'colors';
import { connectDB } from './Config/db.js';
import teamRouter from './Routes/TeamRoutes.js';
import playerRouter from './Routes/PlayerRoutes.js';
import cors from 'cors';

const app = express();

/**
 * CONFIGARATION FOR DOTENV VARIABLE
 */
dotenv.config();
const PORT = process.env.PORT;

/**
 * MONGODB CONNECT
 */
connectDB();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

/**
 * CONFIGURE THE CORS
 */
app.use(cors());

/**GET HOEM API */
app.get('/', (req, res) => {
    res.status(200).json({
        message: "API RUNNING SUCCESSFULLY"
    });
});

/**
 * APP USE THE ALL MAIN ROUTERS
 */
app.use('/teams', teamRouter);
app.use('/players', playerRouter);

/**SERRVER LISTEN THE WITH PORT */
app.listen(PORT, () => {
    console.log(`SERVER STARTED : ${PORT}`.bold.yellow);
});