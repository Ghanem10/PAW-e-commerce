import { PaymentElement } from '@stripe/react-stripe-js';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { Stripe, StripeError } from '@stripe/stripe-js';
import { StripeElements } from '@stripe/stripe-js';
import { ChangeEvent, useState } from 'react';

export default function CheckoutForm(): React.JSX.Element {
    
    const elements: StripeElements | null = useElements();
    const stripe: Stripe | null = useStripe();

    const [message, setMessage] = useState<string | undefined>("");
    const [processing, setProcessing] = useState<boolean>(false);

    const handleFromSubmition = async (e: ChangeEvent<HTMLFormElement>): Promise<void> => {
        
        e.preventDefault();

        /** If stripe hasn't loaded yet return */
        if (!stripe || !elements) {
            return;
        }

        setProcessing(true);
        
        const { error }: { error: StripeError } = await stripe.confirmPayment({
            elements,
            redirect: 'always',
            confirmParams: {
                return_url: `${window.location.href}/success`
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occured.");
        }

        setProcessing(false);
    };

    return (
        <form className='form-checkout-stripe' onSubmit={handleFromSubmition}>
            <PaymentElement className='form-checkout-paymentel'/>
            <button className='form-checkout-submit'>
                <span className='form-checkout-span'>
                    {processing ? "Processing..." : "Pay now"}
                </span>
            </button>
            {message && <div className='form-checkout-message'>{message}</div>}
        </form>
    );
};