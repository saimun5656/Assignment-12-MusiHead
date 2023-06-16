import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const Payment = () => {
    const axiosSecure = useAxiosSecure()
    const {id}= useParams();
    const { data: selectedClass ,isLoading} = useQuery(['class', id], async () => {
        const res = await axiosSecure.get(`/classes/selected/filterbyid/${id}`)
        return res.data
    })
    //console.log(selectedClass);
    const amount = selectedClass?.price;
    const mainClassId = selectedClass?.class_id
    const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);
    return (
        <div className="min-h-screen py-20 w-11/12 mx-auto">
           <Elements stripe={stripePromise}>
            {isLoading?<>Loading</>:<CheckoutForm amount={amount} instructor_name={selectedClass.instructor_name} class_name={selectedClass.class_name} id={id} mainClassId={mainClassId}></CheckoutForm>
            }
           </Elements>
        </div>
    );
};

export default Payment;