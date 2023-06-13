/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location = useLocation()
    const from =location.pathname
    console.log(from);
    if(loading){
        return(
       <div className="text-center"><span className="loading loading-ball loading-xs"></span>
       <span className="loading loading-ball loading-sm"></span>
       <span className="loading loading-ball loading-md"></span>
       <span className="loading loading-ball loading-lg"></span></div>
        )
    }
    if(user){
        return children
    }
    return (
       <Navigate to='/user/login' state={{from:from}}></Navigate>
    );
};

export default PrivateRoute;