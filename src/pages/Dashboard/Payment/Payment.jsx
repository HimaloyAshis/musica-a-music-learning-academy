import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import useSelectedClass from '../../../Hook/useSelectedClass';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);


const Payment = () => {

    // const [favClass] = useSelectedClass()
    // console.log(favClass)
    const favClass = useLoaderData()
   
    // const total = favClass.reduce((sum , item)=> sum + parseInt(item.price), 0)

    // const price = parseFloat(total.toFixed(2))



    return (
        <div>
            <h1 className='text-center font-extrabold text-4xl text-[#606C5D] py-6'>please process your payment: {favClass.price} </h1>
            <Elements stripe={stripePromise}>
                <CheckOutForm favClass={favClass} price={parseInt(favClass.price)}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;
// cart={cart} price={price}