
import { Outlet, NavLink } from "react-router-dom";
import NavBar from './../Pages/Shared/NavBar/NavBar';
import Footer from './../Pages/Shared/Footer/Footer';
import { HiAcademicCap, HiOutlineWallet, HiHome } from "react-icons/hi2";


const DashboardLayouts = () => {
    return (
      <div>
        <NavBar></NavBar>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              <li>
                <NavLink>
                  <HiHome></HiHome> Student Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/selectedClasses">
                  <HiAcademicCap></HiAcademicCap>My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/enrolledClasses">
                  <HiAcademicCap></HiAcademicCap>My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/paymentHistory">
                  <HiOutlineWallet></HiOutlineWallet>My Payment History
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default DashboardLayouts;