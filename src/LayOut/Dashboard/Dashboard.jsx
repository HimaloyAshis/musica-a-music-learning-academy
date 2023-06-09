import React from 'react';
import { FaHome, FaPlus } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#FFCDA8] ">
                    {/* Sidebar content here */}
                    <li><Link><FaHome></FaHome> Instructor Home</Link></li>
                    <li><Link to={'/dashboard/instructors'}><FaPlus></FaPlus> Add class</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;