
import { Outlet, NavLink } from "react-router-dom";
import NavBar from './../Pages/Shared/NavBar/NavBar';
import Footer from './../Pages/Shared/Footer/Footer';
import { HiAcademicCap, HiOutlineWallet, HiHome } from "react-icons/hi2";


const DashboardLayouts = () => {
  const admin = false;
  const instructor = false;
  const student = true;
  
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
              {/* Admin */}
              {admin && (
                <>
                  <li>
                    <NavLink to="/dashboard/adminHome">
                      <HiHome></HiHome> Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageClasses">
                      <HiAcademicCap></HiAcademicCap>Manage Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageUsers">
                      <HiAcademicCap></HiAcademicCap>Manage Users
                    </NavLink>
                  </li>
                </>
              )}

              {/* Student */}
              {
               student && <>
                  <li>
                    <NavLink to="/dashboard/studentHome">
                      <HiHome></HiHome> Student Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/selectedClasses">
                      <HiAcademicCap></HiAcademicCap>My Selected Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/enrolledClasses">
                      <HiAcademicCap></HiAcademicCap>My Enrolled Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/paymentHistory">
                      <HiOutlineWallet></HiOutlineWallet>My Payment History
                    </NavLink>
                  </li>
                </>
              }
              {/* Instructors */}
              {instructor && (
                <>
                  <li>
                    <NavLink to="/dashboard/instructorHome">
                      <HiHome></HiHome> Instructor Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/MyClasses">
                      <HiAcademicCap></HiAcademicCap>My Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/AddAClass">
                      <HiAcademicCap></HiAcademicCap>Add a Class
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default DashboardLayouts;