import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useInstructors = () => {
    const axiosSecure = useAxiosSecure()
    const{data:instructors ,refetch}= useQuery(['instructors'], async()=>{
      const res = await axiosSecure.get('/users/allinstructors')
      return res.data
    });
    return [instructors,refetch]
};

export default useInstructors;