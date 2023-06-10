import React from 'react';
import { FaHome, FaPlus, FaStoreAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'
import useAdmin from '../../Hook/useAdmin';

const Dashboard = () => {


    const [isAdmin] = useAdmin()
    console.log(isAdmin)
    // const isAdmin = true

//     {isAdmin && <AdminDashboard/>}
// {isInstructor && <InstructorDashboard/>}
// {isStudent && <StudentDashboard/>}

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
                    {
                        isAdmin ?
                            <>
                                <li><Link to={'/'}><FaHome></FaHome> Admin Home</Link></li>
                                <li><Link to={'/dashboard/allUser'}><FaStoreAlt></FaStoreAlt> Manage users</Link></li>
                                <li><Link to={'/dashboard/allClass'}><FaStoreAlt></FaStoreAlt> Manage class</Link></li>
                                <div className="divider">OR</div>
                                <li><Link><FaHome></FaHome> User Home</Link></li>
                                <li><Link><FaHome></FaHome> User Home</Link></li>
                                <li><Link><FaHome></FaHome> User Home</Link></li>
                            </>
                            :
                            <>
                                <li><Link to={'/'}><FaHome></FaHome> Instructor Home</Link></li>
                                <li><Link to={'/dashboard/instructors'}><FaPlus></FaPlus> Add class</Link></li>
                                <li><Link><FaStoreAlt></FaStoreAlt> My class</Link></li>
                                <div className="divider">OR</div>
                                <li><Link><FaHome></FaHome> User Home</Link></li>
                                <li><Link><FaHome></FaHome> User Home</Link></li>
                                <li><Link><FaHome></FaHome> User Home</Link></li>
                            </>
                    }

                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;