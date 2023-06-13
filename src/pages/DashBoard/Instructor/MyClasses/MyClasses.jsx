import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
const MyClasses = () => {
    const{user,loading}=useAuth()
    const axiosSecure = useAxiosSecure()
    const{data:classes}=useQuery({
        queryKey:['classes',user?.eamil],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async ()=>{
            const res= await axiosSecure.get(`http://localhost:5000/classes/${user?.email}`)
            return res.data
        }
    })
    console.log(classes);
    return (
        <div className="">
           <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-11/12  mx-auto">
                    {/* head */}
                    <thead  className="bg-[#4cc66e] py-2 rounded-t-lg text-white">
                        <tr  >
                            <th></th>
                            <th>Image</th>
                            <th>class Name</th>
                            <th>Enrolled</th>
                            <th>Status</th>
                            <th>FeedBack</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            classes?.map((cls, idx) => <tr key={cls._id}>
                                <th>{idx + 1}</th>
                                <th><img className="w-20 h-16" src={cls.image} alt="" /></th>
                                <td>{cls.class_name}</td>
                                <td>{cls.enrolled}</td>
                                <td >{cls.status}</td>
                                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                                <td><button className="btn  text-xl border-none   text-black"><FaRegEdit /></button></td>
                          
                            </tr>)
                        }
                    </tbody>
                </table>
            </div> 
        </div>
    );
};

export default MyClasses;