import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='bg-[#EEE2DE]  p-5 flex justify-between items-center'>
            <div>
                <h1>Musica Academy</h1>
            </div>
            <div className='flex gap-3'>
                <p>Home</p>
                <p>Instructors</p>
                <p>Dashboard</p>
            </div>
            <div>
                <FaUserCircle/>
            </div>
        </div>
    );
};

export default Navbar;