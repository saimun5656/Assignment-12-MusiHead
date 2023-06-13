import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider/AuthProvider"

const useAuth =()=>{
   const {
    user,
    loading,
    signUpWithEmail,
    emailLogin,
    logOut
    } = useContext(AuthContext)
    return{
    user,
    loading,
    signUpWithEmail,
    emailLogin,
    logOut
    }
}
export default useAuth