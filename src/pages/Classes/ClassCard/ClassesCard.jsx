/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import { useLocation, useNavigate } from "react-router-dom";

const ClassesCard = ({ cls }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    console.log(pathname);
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    console.log(isAdmin || isInstructor);
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const selecetedClass = { instructor_name: cls.instructor_name, class_id: cls._id, class_name: cls.class_name, price: cls.price, email: user?.email }
    const selectClass = () => {
        if (!user) {
            navigate('/user/login', { state: { from: pathname } })
            return;
        }
        axiosSecure.post('/classes/selected', selecetedClass)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `class seleted`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                if (res.data.selected) {
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: `class already selected`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <div className=" hover:scale-[105%] ease-in duration-300 card w-[320px] bg-slate-50 hover:shadow-2xl shadow-md border-t-4 border-green-500 rounded-none">
                <figure className="p-2">
                    <img src={cls.image} alt="Shoes" className="h-64 w-full rounded-md" />
                </figure>
                <div className="card-body  space-y-3">
                    <h2 className="card-title">{cls.class_name}</h2>
                    <p><span className="font-semibold">Instructor</span> :{cls.instructor_name}</p>
                    <p><span className="font-semibold">Available Seats</span> : {cls.seats}</p>
                    <p><span className="font-semibold">Enrolled</span> : {cls.enrolled}</p>
                    <p className="text-3xl text-green-500">${cls.price}</p>
                    <div className="card-actions">
                        <button title={`${isAdmin || isInstructor ? 'admin/instructer can not select classes' : ''}`} disabled={isAdmin || isInstructor ? true : false} onClick={selectClass} className="border-2 font-medium border-green-500 px-4 py-[6px] rounded hover:bg-green-500 hover:text-white disabled:opacity-40">Select Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;