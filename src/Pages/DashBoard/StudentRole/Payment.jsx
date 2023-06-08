import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOurForm from './CheckOurForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../Hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h1>Payments</h1>
            <div>
            <Elements stripe={stripePromise}>
                <CheckOurForm cart={cart} price={price}></CheckOurForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;