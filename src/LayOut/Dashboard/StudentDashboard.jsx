import React from 'react';
import { FaHistory, FaHome, FaPlus, FaStoreAlt, FaThList, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AllCreatedClass from '../../api/AllCreatedClass';

const StudentDashboard = () => {
    const [AllClasses] = AllCreatedClass()
    return (
        <div>
            <li><Link to={'/'}><FaHome></FaHome> Student Home</Link></li>
            <li><Link to={'/dashboard/selectedClass'}><FaPlus></FaPlus> My class</Link></li>
            <li><Link to={'/dashboard/paySuccessClass'}><FaThList></FaThList>Enrolled Class</Link></li>
            <li><Link to={`/dashboard/payment/${AllClasses._id}`}><FaWallet></FaWallet> Payment</Link></li>
            <li><Link to={'/dashboard/paymentHistory'}><FaHistory></FaHistory> Payment History</Link></li>
            <div className="divider">OR</div>
            <li><Link><FaHome></FaHome> User Home</Link></li>
            <li><Link><FaHome></FaHome> User Home</Link></li>
            <li><Link><FaHome></FaHome> User Home</Link></li>
        </div>
    );
};

export default StudentDashboard;