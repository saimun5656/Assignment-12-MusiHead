import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import './Header.css'
import useInstructor from "../../Hooks/useInstructor";
import useAdmin from "../../Hooks/useAdmin";
import { RiDashboardFill } from "react-icons/ri";
import useIsStudent from "../../Hooks/useIsStudent";
const Header = () => {
  const { user, logOut ,loading} = useAuth();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const [isStudent] = useIsStudent();
  const navitems = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><Link to='/instructors'>Instructors</Link></li>
    <li><Link to='/classes'>Classes</Link></li>
  </>
  if (user||!loading) {
    return (
      <div data-theme="light">
        <div className="w-11/12 mx-auto max-w-screen-xl flex justify-between my-2">
          <div>
            {
              isInstructor ? <Link to='/dashboard/instructor/my-classes'><RiDashboardFill className="inline" /> DashBoard</Link> : ''
            }
            {
              isAdmin ? <Link className="text-xl flex items-center gap-2" to='/dashboard/admin/manage-users'><RiDashboardFill className=" text-green-600" />DashBoard</Link> : ''
            }
            {
              isStudent ? <Link className="text-xl flex items-center gap-2" to='/dashboard/student/selected-classes'><RiDashboardFill className="text-xl " /> DashBoard</Link> : ''
            }
          </div>
          <div>
            {
              !user ? <NavLink to='/user/login'>login</NavLink> : <button onClick={logOut}>LogOut</button>
            }
          </div>
        </div>
        <hr className="border" />
        <div className="navbar md:w-11/12 mx-auto max-w-screen-xl">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-sm w-52">
                {navitems}
              </ul>
            </div>
            <span><img className="w-14 me-2" src="https://i.ibb.co/wCKTC4F/image-removebg-preview.png" alt="" /></span>
            <Link to={'/'} className="normal-case font-semibold text-2xl">Musi<span className="text-green-600">Head</span></Link>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 font-semibold text-lg">
              {navitems}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? <img className="w-12 h-12 me-1 md:-me-2 rounded-full border-2 border-green-500" src={user.photoURL} alt="" /> : ''
            }
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="text-center">
      <span className="loading loading-ball loading-xs"></span>
      <span className="loading loading-ball loading-sm"></span>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span>
    </div>
  )
};

export default Header;