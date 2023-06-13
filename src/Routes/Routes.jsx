import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";

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
            }
        ]
    }
])
export default router