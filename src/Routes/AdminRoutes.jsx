/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
const AdminRoutes = ({children}) => {
    const [isAdmin,isAdminLoading]= useAdmin()
    if(isAdminLoading)
    return(
        <div className="text-center"><span className="loading loading-ball loading-xs"></span>
       <span className="loading loading-ball loading-sm"></span>
       <span className="loading loading-ball loading-md"></span>
       <span className="loading loading-ball loading-lg"></span></div>
    );
    if(isAdmin)
    return children;
    return <Navigate to='/'></Navigate>
};

export default AdminRoutes;