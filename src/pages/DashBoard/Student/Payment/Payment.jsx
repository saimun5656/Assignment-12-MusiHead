import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const Payment = () => {
    const axiosSecure = useAxiosSecure()
    const {id}= useParams();
    const { data: selectedClass } = useQuery(['class', id], async () => {
        const res = await axiosSecure.get(`/classes/filterbyid/${id}`)
        return res.data

    })
    const amount = selectedClass?.price;
    const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);
    return (
        <div className="min-h-screen py-20 w-11/12 mx-auto">
           <Elements stripe={stripePromise}>
            <CheckoutForm amount={amount} id={id}></CheckoutForm>
           </Elements>
        </div>
    );
};

export default Payment;