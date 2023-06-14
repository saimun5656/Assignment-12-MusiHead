/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";

const ClassesCard = ({cls}) => {
    const[isAdmin] = useAdmin()
    const[isInstructor] = useInstructor()
    console.log(isAdmin||isInstructor);
    const{user}=useAuth()
    const axiosSecure = useAxiosSecure()
    const selecetedClass ={class_id:cls._id,class_name:cls.class_name,email:user?.email}
    const selectClass=()=>{
         axiosSecure.post('/classes/selected',selecetedClass)
         .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `class seleted`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            if(res.data.selected){
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
           <div className="card w-[340px] bg-gray-50 shadow-xl border-t-4 border-green-500 rounded-none">
                <figure className="">
                    <img  src={cls.image} alt="Shoes" className="h-64 w-full" />
                </figure>
                <div className="card-body  space-y-3">
                    <h2 className="card-title">{cls.class_name}</h2>
                    <p><span className="font-semibold">Instructor</span> :{cls.instructor_name}</p>
                    <p><span className="font-semibold">Available Seats</span> : {cls.seats}</p>
                    <p className="text-3xl text-green-500">${cls.price}</p>
                    <div className="card-actions">
                        <button title={`${isAdmin||isInstructor?'admin/instructer can not select classes':''}`} disabled={isAdmin||isInstructor?true:false} onClick={selectClass} className="border-2 font-medium border-green-500 px-4 py-[6px] rounded hover:bg-green-500 hover:text-white disabled:opacity-40">Select Class</button>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ClassesCard;