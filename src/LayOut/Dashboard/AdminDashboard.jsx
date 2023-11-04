import React from 'react';
import { FaHome, FaStoreAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className='text-[#1c3a45]'>
            <li className='text-xl font-bold'><Link to={'/'}><FaHome></FaHome> Admin Home</Link></li>
            <li className='text-xl font-bold'><Link to={'/dashboard/allUser'}><FaStoreAlt></FaStoreAlt> Manage users</Link></li>
            <li className='text-xl font-bold'><Link to={'/dashboard/allClass'}><FaStoreAlt></FaStoreAlt> Manage class</Link></li>
        </div>
    );
};

export default AdminDashboard;