import useClasses from "../../../../Hooks/useClasses";

const ManageClasses = () => {
    const [classes] = useClasses()
    console.log(classes);
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
                                <td >{cls.status}</td>
                                <td className="space-y-2">
                                    <p><button className="text-white bg-[#4cc66e] px-4 py-2 rounded-md w-20">Approve</button></p>
                                    <p><button className="text-white bg-[#c05151] px-4 py-2 rounded-md w-20">Deny</button></p>
                                    <p><button className="text-white bg-[#b4bbb4] px-4 py-2 rounded-md w-20">Feedback</button></p>
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