import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    
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
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
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
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/login" className="btn">
            Login
          </NavLink>
          <NavLink to="/register" className="btn">
            Register
          </NavLink>
        </div>
      </div>
    );
};

export default NavBar;