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
import Student from './../Pages/Dashboard/Student/Student';
import Instructor from './../Pages/Dashboard/Instructor/Instructor';
import PrivateRoute from './PrivateRoute';

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
        element: (
          <PrivateRoute>
            <Instructors></Instructors>
          </PrivateRoute>
        ),
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
        path: "student",
        element: <Student></Student>,
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
