import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useAuth from '../../../Hook/useAuth';
import Swal from 'sweetalert2';

const CheckOutForm = ({favClass, price}) => {

    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const {user} = useAuth()
    const [transactionId, setTransactionId] = useState()
    const [processing, setProcessing] = useState(false)


    useEffect(() => {
        if(price < 1) return
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                // console.log(res.data.clientSecret)
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
        // console.log('card', card)

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
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)
        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName
                    },
                },
            },
        );

        if(confirmError){
            console.log(confirmError)
        }

        console.log(paymentIntent)

        setProcessing(false)

        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id)
            const transactionId = paymentIntent.id;

            const payment = {
                email: user?.email,
                transactionId:paymentIntent.id,
                price,
                date: new Date(),
                quantity: favClass.length,
                favClassId: favClass.map(item=>item._id),
                status:'service pending',
                favClassName: favClass.map(item=>item.class_Name)
            }


            axiosSecure.post('/payments',payment)
            .then(res=>{
                console.log(res.data.insertResult)
                if(res.data.insertResult.insertedId){

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your payment has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })


            const payments = {
                email: user?.email,
                transactionId:paymentIntent.id,
                price,
                date: new Date(),
                quantity: favClass.length,
                favClassId: favClass.map(item=>item._id),
                status:'service_done',
                favClassName: favClass.map(item=>item.class_Name)
            }

            axiosSecure.post('/payments/success',payments)
            .then(res=>{
                console.log(res.data.insertResult)
                if(res.data.insertResult.insertedId){

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your payment has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })


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
                <button className='butn btn-outline px-6 mt-2' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-400'>{cardError}</p> }
            {transactionId && <p className='text-[#d4c5c5]'>Transaction completed with transaction id : {transactionId}</p> }
        </>

    );
};

export default CheckOutForm;