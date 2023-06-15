import { Link, Outlet } from "react-router-dom";
import { AiFillFolderAdd, AiFillDatabase } from "react-icons/ai";
import useInstructor from "../Hooks/useInstructor";
import useAdmin from "../Hooks/useAdmin";
import useIsStudent from "../Hooks/useIsStudent";
const DashBoard = () => {
    const [isInstructor] = useInstructor()
    const [isAdmin] = useAdmin()
    const [isStudent]= useIsStudent()
    console.log(isAdmin);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center bg-[#f7f7ff] ">
                <div className="w-full">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 h-full bg-base-100 text-base-content text-lg">
                    {/* Sidebar content here */}
                    <li>
                        <span><img className="w-10 me-1 inline" src="https://i.ibb.co/wCKTC4F/image-removebg-preview.png" alt="" /> <Link to={'/'} className="normal-case font-semibold text-2xl">Musi<span className="text-green-600">Head</span></Link> </span>
                    </li>
                    {isInstructor ?
                        <>
                            <li><Link to='/dashboard/instructor/addclasses'><AiFillFolderAdd className="text-3xl me-3" /> Add Classes</Link></li>
                            <li><Link to='/dashboard/instructor/my-classes'><AiFillDatabase className="text-3xl me-3" /> My Classes</Link></li>
                        </> : ''
                    }
                    {
                        isAdmin ? <>
                            <li><Link to='/dashboard/admin/manage-classes'><AiFillDatabase className="text-3xl me-3" /> Manage Classes</Link></li>
                            <li><Link to='/dashboard/admin/manage-users'><AiFillDatabase className="text-3xl me-3" /> Manage Users</Link></li>
                        </> : ''
                    }
                    {
                        isStudent?<>
                         <li><Link to='/dashboard/student/selected-classes'><AiFillDatabase className="text-3xl me-3" /> Selected Classes</Link></li>
                            <li><Link to='/dashboard/student/enrolled-classes'><AiFillDatabase className="text-3xl me-3" />Enrolled Classes</Link></li>
                        </>:''
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;