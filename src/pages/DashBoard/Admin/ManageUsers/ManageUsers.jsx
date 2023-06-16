import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

import useUsers from "../../../../Hooks/useUsers";
import { BsCheck2Square } from "react-icons/bs";
const ManageUsers = () => {
    const [users, refetch] = useUsers()
    const axiosSecure = useAxiosSecure()
    const makeAdmin = (id, name) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${name} is Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }
    const makeInstructor = (id, name) => {
        axiosSecure.patch(`/users/instructors/${id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${name} is instructor Now`,
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
                <table className="table table-zebra w-11/12  mx-auto bg-white rounded">
                    {/* head */}
                    <thead className="bg-[#4dbb6c] py-4 rounded-t-lg text-white">
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name </th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            users?.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <th><img className="w-16 h-16 rounded-md" src={user.image} alt="" /></th>
                                <td>
                                    <p>{user.name}</p>
                                </td>
                                <td>
                                    <p> {user.email}</p>
                                </td>
                                <td>{user.role}</td>

                                <td className="space-y-2">
                                    <p><button onClick={() => { makeAdmin(user._id, user.name) }} disabled={user.role === 'admin' ? true : false} className="text-2xl font-bold px-4 py-2 rounded-md w-20 text-green-500 disabled:text-gray-300"><BsCheck2Square /></button></p>
                                </td>
                                <td className="space-y-2">
                                    <p><button onClick={() => { makeInstructor(user._id, user.name) }} disabled={user.role === 'instructor' ? true : false} className="text-2xl font-bold px-4 py-2 rounded-md w-20 text-green-500 disabled:text-gray-300"><BsCheck2Square /></button></p>
                                </td>


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;