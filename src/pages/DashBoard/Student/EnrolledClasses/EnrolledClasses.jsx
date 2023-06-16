import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const EnrolledClasses = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: enrolledClasses } = useQuery({
        queryKey: ['enrolledClasses', user?.eamil],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/enrolled/${user?.email}`)
            return res.data
        }
    })
    console.log(enrolledClasses);
   if(enrolledClasses){
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
                            <th>Payment Date</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            enrolledClasses?.map((cls, idx) => <tr key={cls._id}>
                                <th>{idx + 1}</th>
                                <td>{cls.class_name}</td>
                                <td>{cls.instructor_name}</td>
                                <td >{cls.paymentDate}</td>
                               
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
   }
   return(
    <div className="text-center">
    <span className="loading loading-ball loading-xs"></span>
    <span className="loading loading-ball loading-sm"></span>
    <span className="loading loading-ball loading-md"></span>
    <span className="loading loading-ball loading-lg"></span>
  </div>
   )
   
};

export default EnrolledClasses;