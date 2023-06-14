import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import DashBoard from "../Layouts/DashBoard";
import AddClasses from "../pages/DashBoard/Instructor/AddClasses/AddClasses";
import MyClasses from "../pages/DashBoard/Instructor/MyClasses/MyClasses";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../pages/DashBoard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/DashBoard/Admin/ManageUsers/ManageUsers";
import Classes from "../pages/Classes/Classes/Classes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/user/register',
                element:<Register></Register>
            },
            {
                path:'/user/login',
                element:<Login></Login>
            },
            {
                path:'/instructors',
                element:<Instructors></Instructors>
            },
            {
                path:'/classes',
                element:<Classes></Classes>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children:[
            {
                path:'instructor/addclasses',
                element:<AddClasses></AddClasses>
            },
            {
                path:'instructor/my-classes',
                element:<MyClasses></MyClasses>
            },
            {
                path:'admin/manage-classes',
                element:<ManageClasses></ManageClasses>
            },
            {
                path:'admin/manage-users',
                element:<ManageUsers></ManageUsers>
            },
        ]
    }
])
export default router