import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    const stripePromise = loadStripe();
    return (
        <div className="min-h-screen py-20 w-11/12 mx-auto">
           <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
           </Elements>
        </div>
    );
};

export default Payment;