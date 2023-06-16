import { createBrowserRouter } from "react-router-dom";
import MainLayouts from './../Layouts/MainLayouts';
import Home from './../Pages/Home/Home/Home';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import DashboardLayouts from './../Layouts/DashboardLayouts';
import Instructors from './../Pages/Instructors/Instructors';
import Register from './../Pages/Register/Register';
import Login from './../Pages/Login/Login';
import Classes from './../Pages/Classes/Classes';
import DashboardHome from "./../Pages/Shared/DashboardHome/DashboardHome";
import MySelectedClasses from './../Pages/Dashboard/Student/MySelectedClasses';
import MyEnrolledClasses from './../Pages/Dashboard/Student/MyEnrolledClasses';
import PaymentHistory from './../Pages/Dashboard/Student/PaymentHistory';
import MyClasses from './../Pages/Dashboard/Instructor/MyClasses';
import AddAClass from './../Pages/Dashboard/Instructor/AddAClass';
import ManageClasses from './../Pages/Dashboard/Admin/ManageClasses';
import ManageUsers from './../Pages/Dashboard/Admin/ManageUsers';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayouts></DashboardLayouts>,
    children: [
      {
        path: "adminHome",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "studentHome",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "selectedClasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "enrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "instructorHome",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "MyClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "AddAClass",
        element: <AddAClass></AddAClass>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
