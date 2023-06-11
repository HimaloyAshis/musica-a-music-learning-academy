import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import { toast } from 'react-toastify';

const Navbar = () => {

    const {logOut} = useAuth()


    const handleLogout = ( ) =>{

        logOut()
        .then(()=>{})
        .catch(error=>toast.error(error.message))
    }

    return (
        <div className='bg-[#EEE2DE]  p-5 flex justify-between items-center'>
            <div>
                <h1>Musica Academy</h1>
            </div>
            <div className='flex gap-3'>
                <Link className='butn'>Home</Link>
                <Link to={'/instructors'} className='butn'>Instructors</Link>
                <Link className='butn' to={'/dashboard/instructors'}>Dashboard</Link>
                <Link className='butn' onClick={handleLogout}>Logout</Link>
                <Link className='butn' to={'/class'}>Class</Link>
                <Link className='butn' to={'/login'}>Login</Link>
            </div>
            <div>
                <FaUserCircle/>
            </div>
        </div>
    );
};

export default Navbar;