import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user,logOut } = useAuth()



    const handleLogout = () => {

        logOut()
            .then(() => { })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='bg-[#EEE2DE]  p-5 flex-col lg:flex lg:justify-between items-center'>
            <div>
                <h1 className='text-xl font-bold text-[#5C8984]'>Musica</h1>
            </div>
            <div className='flex gap-3'>
                <Link className='butn'>Home</Link>
                <Link to={'/instructors'} className='butn'>Instructors</Link>
                <Link className='butn' to={'/dashboard/instructor'}>Dashboard</Link>
                <Link className='butn' to={'/class'}>Class</Link>
                { user ? 
                <><Link className='butn' onClick={handleLogout}>Logout</Link>
                <div className="w-24 rounded-full">
                    <img className='w-10 h-8 rounded-full' src={user.photoURL} />
                </div></>
                :
                <Link className='butn' to={'/login'}>Login</Link>}

            </div>

        </div>
    );
};

export default Navbar;