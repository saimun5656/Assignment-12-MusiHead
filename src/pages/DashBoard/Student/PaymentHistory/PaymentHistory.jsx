import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

const PaymentHistory = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: paiedClasses } = useQuery({
        queryKey: ['enrolledClasses', user?.eamil],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/enrolled/${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
             <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-11/12  mx-auto">
                    {/* head */}
                    <thead className="bg-[#4cc66e] py-2 rounded-t-lg text-white">
                        <tr  >
                            <th></th>
                            <th>Payment Id</th>
                            <th>Payment Date</th>
                            <th>Paid For</th>
                            <th>Amount</th>
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            paiedClasses?.map((cls, idx) => <tr key={cls._id}>
                                <th>{idx + 1}</th>
                                <td>{cls.paymentID}</td>
                                <td>{cls.paymentDate}</td>
                                <td>{cls.class_name}</td>
                                <td >${cls.amount}</td>
                               
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;