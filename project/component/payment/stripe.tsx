import { Elements } from '@stripe/react-stripe-js';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './form';
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

export default function StripeProvider(): JSX.Element {
    
    const [stripePromise, setStripePromise] = useState<Stripe | PromiseLike<Stripe | null> | null>(null);
    const [clientSecret, setClientSecret] = useState<string>("");

    // Publish key
    const getPublishKey = async () => {
        try {
            await axios.get('/publish').then( async (res) => {
                const { publishKey } = await res.data;
                setStripePromise(loadStripe(publishKey));
            });
        } catch (error) {
            return 'XXX';
        }
    };

    // Client Secret
    const getClientSecret = async () => {
        try {
            await axios.get('/client').then( async (res) => {
                const { resClientSecret } = await res.data;
                setClientSecret(resClientSecret);
            });
        } catch (error) {
            return 'XXX';
        }
    };

    useEffect(() => {
        getPublishKey();
        getClientSecret();
    }, []);

    return (
        <React.Fragment>
            <h1>Stipe API Getaway</h1>
            {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            )}
        </React.Fragment>
    );
};