import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useIsStudent = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure()
    const{data:isStudent, isLoading:isStudentLoading}= useQuery(['isStudent'], async()=>{
      const res = await axiosSecure.get(`/users/students/${user?.email}`)
      return res.data.student
    });
    return [isStudent,isStudentLoading]
};

export default useIsStudent;