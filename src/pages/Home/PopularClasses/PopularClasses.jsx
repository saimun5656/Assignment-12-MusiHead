
import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ClassesCard from "../../Classes/ClassCard/ClassesCard";

const PopularClasses = () => {
    const axiosSecure = useAxiosSecure()
    const [populerClasses, setPopulerClasses] = useState()
   useEffect(()=>{
      axiosSecure.get('classes?limit=6')
      .then(res=>{
        setPopulerClasses(res.data)
      })
   },[])
  
    return (
        <div className="w-11/12 mx-auto max-w-screen-xl mt-10">
          <Slide duration={1500}> <h1 className="text-3xl uppercase border-s-[16px] font-semibold rounded-s-sm border-green-500 py-1 ps-3 text-gray-700">Top Enrolled Classes</h1></Slide>
         
          <div className="mt-10  grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {
                populerClasses?.map(cls=><Fade duration={3000} key={cls._id}><ClassesCard  cls={cls}></ClassesCard></Fade>)
            }
          </div>
         
        </div>
    );
};

export default PopularClasses;