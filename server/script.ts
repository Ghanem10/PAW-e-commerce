import express, { Express } from 'express';
import { routerDB } from './routes/sqlDB';
import { config } from 'dotenv';
import cors from 'cors';
config();

const app: Express = express();
const port: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v12", routerDB);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});