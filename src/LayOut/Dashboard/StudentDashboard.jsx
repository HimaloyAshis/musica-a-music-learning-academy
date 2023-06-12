import React from 'react';
import { FaHome, FaPlus, FaStoreAlt, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div>
        <li><Link to={'/'}><FaHome></FaHome> Student Home</Link></li>
        <li><Link to={'/dashboard/selectedClass'}><FaPlus></FaPlus> My class</Link></li>
        <li><Link><FaStoreAlt></FaStoreAlt> My class</Link></li>
        <li><Link to={'/dashboard/payment'}><FaWallet></FaWallet> My payment</Link></li>
        <div className="divider">OR</div>
        <li><Link><FaHome></FaHome> User Home</Link></li>
        <li><Link><FaHome></FaHome> User Home</Link></li>
        <li><Link><FaHome></FaHome> User Home</Link></li>
    </div>
    );
};

export default StudentDashboard;