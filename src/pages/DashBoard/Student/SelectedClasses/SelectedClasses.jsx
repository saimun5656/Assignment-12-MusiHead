import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaMoneyCheckAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const SelectedClasses = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: classes , refetch} = useQuery({
        queryKey: ['classes', user?.eamil],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/selected/${user?.email}`)
            return res.data
        }
    })
   const removeSelected = (id)=>{
    axiosSecure.delete(`/classes/remove-selected/${id}`)
            .then(res =>{ 
                console.log(res.data)
                refetch()
            })
   }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-11/12  mx-auto">
                    {/* head */}
                    <thead className="bg-[#4cc66e] py-2 rounded-t-lg text-white">
                        <tr  >
                            <th></th>
                            <th>class Name</th>
                            <th>Instructor Name</th>
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
                                <td>{cls.instructor_name}</td>
                                <td >${cls.price}</td>
                                <td className="text-2xl"><Link to={`/dashboard/student/payment/${cls._id}`}><FaMoneyCheckAlt /></Link></td>
                                <td className="text-2xl"><button onClick={()=>{removeSelected(cls._id)}}><FaTrashAlt /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;