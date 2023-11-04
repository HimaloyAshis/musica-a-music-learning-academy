import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import { toast } from 'react-toastify';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const { user, logOut } = useAuth()
    const [Open, setOpen] = useState(false)



    const handleLogout = () => {

        logOut()
            .then(() => { })
            .catch(error => toast.error(error.message))
    }

    return (

        <div>
            <div className=''>
                <span onClick={() => setOpen(!Open)} className='md:hidden'>

                    {
                        Open === true ? < XMarkIcon className="h-6 w-6 text-blue-500 cursor-wait" />
                            : <Bars3Icon className="h-6 w-6 text-blue-500 cursor-pointer" />
                    }
                </span>
            </div>
            <div className='bg-[#164863]  p-5 gap-2  lg:flex lg:justify-between items-center'>
                <div className='sm:my-2'>
                    <h1 className='text-2xl font-bold  text-[#bdcfcd]'>Musica</h1>
                </div>
                <div className='lg:flex  my-2 gap-3'>
                    <Link className='butn '>Home</Link>
                    <Link to={'/instructors'} className='butn'>Instructors</Link>
                    <Link className='butn' to={'/class'}>Class</Link>
                    {user ?
                        <><Link className='butn' to={'/dashboard/instructor'}>Dashboard</Link>
                            <Link className='butn' onClick={handleLogout}>Logout</Link>
                            <div className="w-24 sm:mt-2 rounded-full">
                                <img className='w-10 h-8  rounded-full' src={user.photoURL} />
                            </div></>
                        :
                        <Link className='butn' to={'/login'}>Login</Link>}

                </div>

            </div>
        </div>

    );
};

export default Navbar;