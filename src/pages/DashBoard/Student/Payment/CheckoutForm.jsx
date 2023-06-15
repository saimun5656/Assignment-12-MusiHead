/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";


const CheckoutForm = ({ amount, id }) => {
    const { user } = useAuth()
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const axiosSecure = useAxiosSecure()
    const stripe = useStripe()
    const elements = useElements()

    //requesting the payment intent to get the clientsecreate
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { amount })
            .then(res => setClientSecret(res.data.clientSecret))
    }, [amount])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("")
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        setIsLoading(true)
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        setIsLoading(false);
        const { paymentIntent, error: confirmPaymentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (paymentIntent) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Payment successful you Enrolled this class`,
                showConfirmButton: false,
                timer: 2500
            })
            console.log(paymentIntent);
        }

        if (confirmPaymentError)
            console.log(confirmPaymentError);
    };


    return (
        <div>
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
                <button type="submit" disabled={isLoading || !stripe || !elements}>
                    Pay
                </button>
                <h1 className="text-red-400 text-xl mt-5">{error}</h1>
            </form>
        </div>
    );
};

export default CheckoutForm;