import React, { useContext } from 'react';
import useAuth from '../../Hook/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {loading , user} = useContext(AuthContext)
    const location =  useLocation()


    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }

    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;