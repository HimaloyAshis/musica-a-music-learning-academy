import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';

const CheckOutForm = ({price}) => {

    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')


    useEffect(() => {
        if(price < 1) return
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })

    }, [price, axiosSecure])



    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }


        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log('card', card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })


        if (error) {
            setCardError(error.message)
            console.log(error.message)
        }
        else {
            setCardError('')
            console.log('payment method', paymentMethod)
        }





    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='butn btn-outline px-6 mt-2' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-400'>{cardError}</p> }
        </>

    );
};

export default CheckOutForm;