import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import InstructorCard from "../../Instructors/InstructorCard/InstructorCard";
const PopularInstructors = () => {
    const axiosSecure = useAxiosSecure()
    const [populerInstructors, setPopulerClasses] = useState()
   useEffect(()=>{
      axiosSecure.get('/users/allinstructors?limit=6')
      .then(res=>{
        setPopulerClasses(res.data)
      })
   },[])
   console.log(populerInstructors);
    return (
        <div className="w-11/12 mx-auto max-w-screen-xl mt-10">
            <Slide duration={1500}> <h1 className="text-3xl uppercase border-s-[16px] font-semibold rounded-s-sm border-green-500 py-1 ps-3 text-gray-700">Our Top Instructors</h1></Slide>

            <div className="mt-10  grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {
                populerInstructors?.map(cls=><Fade duration={2000} key={cls._id}><InstructorCard  instructor={cls}></InstructorCard></Fade>)
            }
          </div>
        </div>
    );
};

export default PopularInstructors;