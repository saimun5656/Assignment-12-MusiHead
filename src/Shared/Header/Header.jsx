import { Link } from "react-router-dom";

const Header = () => {
  const navitems =<>
   <li><a>Item 1</a></li>
   <li><a>Item 3</a></li>
  </>
    return (
        <div className="navbar md:w-11/12 mx-auto max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-52">
       {navitems}
      </ul>
    </div>
    <span><img className="w-14 me-2" src="https://i.ibb.co/wCKTC4F/image-removebg-preview.png" alt="" /></span>
    <Link className="normal-case font-semibold text-2xl">Musi<span className="text-green-600">Head</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 ">
      {navitems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Header;