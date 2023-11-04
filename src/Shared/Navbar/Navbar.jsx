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
                <span onClick={() => setOpen(!Open)} className='md:hidden '>

                    {
                        Open === true ? < XMarkIcon className="h-6 w-6 text-blue-500 cursor-wait" />
                            : <Bars3Icon className="h-6 w-6 text-blue-500 cursor-pointer" />
                    }
                </span>
            </div>
            <div className={` md:flex z-10 justify-between hover: bg-[#164863] py-4 px-4 rounded-md mt duration-500 text-white font-bold absolute md:static   ${Open ? 'top-6' : "-top-96"} `}>
                <div className='sm:my-2'>
                    <h1 className='text-2xl font-bold  text-[#bdcfcd]'>Musica</h1>
                </div>
                
                <ul className='md:flex gap-3'>
                    <li className='mb-1 tex-2xl font-bold px-3 py-2 rounded-md hover:bg-[#1450A3]'><Link>Home</Link></li>
                    <li className='mb-1 tex-2xl px-3 py-2 rounded-md hover:bg-[#1450A3]'><Link>Instructors</Link></li>
                    <li className='mb-1 tex-2xl px-3 py-2 rounded-md hover:bg-[#1450A3]'><Link>Class</Link></li>
                    {
                        user ? <li className=''>
                            <div className='md:flex  items-center  gap-2'>
                                <div>
                                    <Link className='mr-3 mb-1 px-3 py-2 rounded-md hover:bg-[#1450A3]' to={'/dashboard/instructor'}>Dashboard</Link>
                                    <Link className=' mb-1 px-3 py-2 rounded-md hover:bg-[#1450A3]' onClick={handleLogout}>Logout</Link>
                                </div>
                                <div className="w-24 sm:mt-2 rounded-full">
                                    <img className='w-10 h-8  rounded-full' src={user.photoURL} />
                                </div>
                            </div>
                        </li> :
                            <li className='mb-1 px-3 py-2 rounded-md hover:bg-[#1450A3]'>
                                <Link className=' ' to={'/login'}>Login</Link>
                            </li>
                    }
                </ul>

            </div>
        </div>

    );
};

export default Navbar;