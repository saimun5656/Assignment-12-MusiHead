import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useClasses from "../../../../Hooks/useClasses";

const ManageClasses = () => {
    const [classes, refetch] = useClasses()
    const axiosSecure = useAxiosSecure()
    console.log(classes);
    const approve = (id) => {
        axiosSecure.patch(`/classes/approve/${id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `this class is Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }
    const deny = (id) => {
        axiosSecure.patch(`/classes/deny/${id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `this class is Denied`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
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
                            <th>Image</th>
                            <th>class </th>
                            <th>details</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            classes?.map((cls, idx) => <tr key={cls._id}>
                                <th>{idx + 1}</th>
                                <th><img className="w-20 h-16" src={cls.image} alt="" /></th>
                                <td>
                                    <p><span className="font-semibold">Course:</span></p>
                                    <p><span className="font-semibold">Name:</span></p>
                                    <p><span className="font-semibold">Email:</span></p>
                                </td>
                                <td>
                                    <p> {cls.class_name}</p>
                                    <p>{cls.instructor_name}</p>
                                    <p>{cls.instructor_email}</p>
                                </td>
                                <td>{cls.seats}</td>
                                <td>${cls.price}</td>
                                <td >{cls.status}</td>
                                <td className="space-y-2">
                                    <p><button disabled={cls.status==='approved'||cls.status==='denied'?true:false} onClick={()=>{approve(cls._id)}} className="text-white bg-[#4cc66e] px-4 py-2 rounded-md w-20 disabled:bg-gray-300">Approve</button></p>
                                    <p><button disabled={cls.status==='approved'||cls.status==='denied'?true:false} onClick={()=>{deny(cls._id)}} className="text-white bg-[#c05151] px-4 py-2 rounded-md w-20  disabled:bg-gray-300">Deny</button></p>
                                    <p><button className="text-white bg-[#8c918c] px-4 py-2 rounded-md w-20">Feedback</button></p>
                                </td>


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;