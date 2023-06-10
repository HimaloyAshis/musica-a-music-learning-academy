import React from 'react';
import { FaHome, FaPlus, FaStoreAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InstructorDashboard = () => {
    return (
        <div>
            <li><Link to={'/'}><FaHome></FaHome> Instructor Home</Link></li>
            <li><Link to={'/dashboard/instructors'}><FaPlus></FaPlus> Add class</Link></li>
            <li><Link><FaStoreAlt></FaStoreAlt> My class</Link></li>
            <div className="divider">OR</div>
            <li><Link><FaHome></FaHome> User Home</Link></li>
            <li><Link><FaHome></FaHome> User Home</Link></li>
            <li><Link><FaHome></FaHome> User Home</Link></li>
        </div>
    );
};

export default InstructorDashboard;