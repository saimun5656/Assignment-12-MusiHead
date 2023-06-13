import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const {loading} = useAuth()
    const {user}= useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructors/${user?.email}`)
            return res.data.admin
        } 
    })
    return [isInstructor,isInstructorLoading]
};

export default useInstructor;