import { Elements } from '@stripe/react-stripe-js';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function StripeProvider(): JSX.Element {
    
    const [stripePromise, setStripePromise] = useState<Stripe | PromiseLike<Stripe | null> | null>(null);
    const [clientSecret, setClientSecret] = useState<string>("");

    // Publish key
    const getPublishKey = async () => {
        try {
            await axios.get(`${import.meta.env.VITE_URL_BASE}/publish`).then( async (res) => {
                const publishKey = await res.data.key;
                setStripePromise(loadStripe(publishKey));
            });
        } catch (error) {
            return 'XXX';
        }
    };

    // Client Secret
    const getClientSecret = async () => {
        try {
            await axios.post(`${import.meta.env.VITE_URL_BASE}/create-payment-intend`).then( async (res) => {
                const clientSecret = await res.data.secret;
                setClientSecret(clientSecret);
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
            {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            )}
        </React.Fragment>
    );
};