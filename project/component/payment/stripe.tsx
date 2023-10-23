import { Elements } from '@stripe/react-stripe-js';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './form';

const stripePromise: Promise<Stripe | null> = loadStripe('pk_test_51O3lVwBYTF8QnfucZdwKPJzZVuYy8jH94nFS7ql1KV5riF7A8Nx8IxymEhvUvKvU4pkaKkcZ6EKecaAmjmUXcJce00IgZ6z6f0');

export default function StripeProvider(): JSX.Element {
    const options: { clientSecret: string } = {
        clientSecret: ``,
    };

    
    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    );
};