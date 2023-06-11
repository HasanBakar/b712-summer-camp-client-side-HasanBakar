import { NavLink,Link } from "react-router-dom";
import "./NavBar.css"
import { toast } from "react-toastify";
import { useContext } from 'react';
import { AuthContext } from './../../../Providers/AuthProviders';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
toast("You are successfully LogOut!", {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});
    })
    .catch(error=>{
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    })
  }
    
    return (
      <div className="navbar text-2xl font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/instructors">Instructors</NavLink>
              </li>
              <li>{user && <NavLink to="/dashboard">Dashboard</NavLink>}</li>
              <li>
                <NavLink to="/classes">Classes</NavLink>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-xl">
            <img
              className="h-10 rounded px-2 py-1 w-10"
              src="/dancing.png"
              alt=""
            />
            <NavLink className="rounded px-2 py-1" to="/">
              DanceScape
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>
            <li>{user && <NavLink to="/dashboard">Dashboard</NavLink>}</li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link>
                <img
                  className="btn btn-circle btn-outline"
                  src={user?.photoURL || ""}
                  alt=""
                />
              </Link>
              <Link onClick={handleLogOut} className="btn">
                LogOut
              </Link>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn">
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    );
};

export default NavBar;