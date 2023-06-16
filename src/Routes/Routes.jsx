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
import SelectedClasses from "../pages/DashBoard/Student/SelectedClasses/SelectedClasses";
import Payment from "../pages/DashBoard/Student/Payment/Payment";
import AdminRoutes from "./AdminRoutes";
import EnrolledClasses from "../pages/DashBoard/Student/EnrolledClasses/EnrolledClasses";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<>404 not found</>,
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
                element:<AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
            },
            {
                path:'admin/manage-users',
                element:<AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
            },
            {
                path:'student/selected-classes',
                element:<SelectedClasses></SelectedClasses>
            },
            {
                path:'student/enrolled-classes',
                element:<EnrolledClasses></EnrolledClasses>
            },
            {
                path:'student/payment/:id',
                element:<Payment></Payment>
            },
        ]
    }
])
export default router