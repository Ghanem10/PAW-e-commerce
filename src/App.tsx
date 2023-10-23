import React from 'react';
import StripeProvider from '../project/component/payment/stripe';
import './App.scss';
import Introduction from '../project/pages/landing';

export default function App() {
    return (
        <div>
            <Introduction />
        </div>
    );
}