import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaMoneyCheckAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const SelectedClasses = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: classes } = useQuery({
        queryKey: ['classes', user?.eamil],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/selected/${user?.email}`)
            return res.data
        }
    })
    console.log(classes);
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-11/12  mx-auto">
                    {/* head */}
                    <thead className="bg-[#4cc66e] py-2 rounded-t-lg text-white">
                        <tr  >
                            <th></th>
                            <th>class Name</th>
                            <th>seats remaing</th>
                            <th>price</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            classes?.map((cls, idx) => <tr key={cls._id}>
                                <th>{idx + 1}</th>
                                <td>{cls.class_name}</td>
                                <td>{cls.enrolled}</td>
                                <td >{cls.price}</td>
                                <td className="text-2xl"><Link to={`/dashboard/student/payment/${cls._id}`}><FaMoneyCheckAlt /></Link></td>
                                <td className="text-2xl"><FaTrashAlt /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;