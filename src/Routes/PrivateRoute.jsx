/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from './../Providers/AuthProviders';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading){
        return <progress className="progress w-64"></progress>;
    }
      if (user) {
        return children;
      }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;