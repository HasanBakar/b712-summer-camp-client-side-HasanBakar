import { createBrowserRouter } from "react-router-dom";
import MainLayouts from './../Layouts/MainLayouts';
import Home from './../Pages/Home/Home/Home';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import DashboardLayouts from './../Layouts/DashboardLayouts';
import Instructors from './../Pages/Instructors/Instructors';
import Register from './../Pages/Register/Register';
import Login from './../Pages/Login/Login';
import Classes from './../Pages/Classes/Classes';
import Admin from './../Pages/Dashboard/Admin/Admin';
import Instructor from './../Pages/Dashboard/Instructor/Instructor';
import StudentHome from './../Pages/Dashboard/Student/StudentHome';
import MySelectedClasses from './../Pages/Dashboard/Student/MySelectedClasses';
import MyEnrolledClasses from './../Pages/Dashboard/Student/MyEnrolledClasses';


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
        path: "admin",
        element: <Admin></Admin>,
      },
      {
        path: "studentHome",
        element: <StudentHome></StudentHome>,
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
        path: "instructor",
        element: <Instructor></Instructor>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
