import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hook/useAdmin';
import useAuth from '../../Hook/useAuth';
import useInstructor from '../../Hook/useInstructor';
import useStudent from '../../Hook/useStudent';

const PrivateDashboard = ({children}) => {
    const {user , loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const [isInstructor, isInstructorLoading] =useInstructor()
    const [isStudent, isStudentLoading] = useStudent()
    const location = useLocation()

    if(loading || isAdminLoading || isInstructorLoading || isStudentLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin || user && isInstructor || user && isStudent){
        return children
    }

    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateDashboard;