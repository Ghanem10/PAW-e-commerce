import express, { Express, Request, Response } from 'express';
import { routerDB } from './routes/sqlDB';
import { config } from 'dotenv';
import Stripe from 'stripe';
import cors from 'cors';
config();

const app: Express = express();
const port: string | number = process.env.PORT || 4000;

const stripe: Stripe = new Stripe(`${process.env.STRIPE_CLIENT_SECRET}`, {
    apiVersion: "2023-10-16",
});


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v12", routerDB);

app.get('/publish', (req: Request, res: Response) => {
    res.json({
        key: process.env.STRIPE_KEY
    });
});

// to kick server
app.get('/test', (req, res) => { console.log('testing....'); res.send({ X: '/'}) });

app.post('/create-payment-intend', async (req: Request, res: Response) => {
    try {
        const paymentIntend = await stripe.paymentIntents.create({
            amount: 1000,
            currency: "USD",
            automatic_payment_methods: { enabled: true },
        });
    
        res.json({
            secret: paymentIntend.client_secret
        });
    
    } catch (error) {
        return res.status(400).send({ mes: error });
    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});