import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);


const Payment = () => {
    return (
        <div>
            <h1 className='text-center font-extrabold text-4xl text-[#606C5D] py-6'>please process your payment</h1>
            <Elements stripe={stripePromise}>
                <CheckOutForm ></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;
// cart={cart} price={price}