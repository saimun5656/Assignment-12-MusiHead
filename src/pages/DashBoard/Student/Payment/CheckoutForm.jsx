import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const CheckoutForm = () => {
    const axiosSecure = useAxiosSecure()
    const stripe = useStripe()
    const elements = useElements()
    const amount
    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{amount})
    },[])
    return (
        <div>
             <form onSubmit={this.handleSubmit}>
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
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
        </div>
    );
};

export default CheckoutForm;