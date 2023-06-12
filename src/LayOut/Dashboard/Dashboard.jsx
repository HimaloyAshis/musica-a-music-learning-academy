import React from 'react';
import { Outlet } from 'react-router-dom';
import './Dashboard.css'
import useAdmin from '../../Hook/useAdmin';
import AdminDashboard from './AdminDashboard';
import InstructorDashboard from './InstructorDashboard';
import StudentDashboard from './StudentDashboard';
import useInstructor from '../../Hook/useInstructor';
import useStudent from '../../Hook/useStudent';

const Dashboard = () => {


    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [isStudent] = useStudent()
    // console.log(isAdmin)
    // const isAdmin = true

    // {isAdmin && <AdminDashboard/>}
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
                <ul className="menu p-4 w-80 h-full bg-[#8dac83] ">
                    {/* Sidebar content here */}



                    {
                        isAdmin && <AdminDashboard></AdminDashboard>
                    }

                    {isInstructor && <InstructorDashboard></InstructorDashboard>}

                    {isStudent ? <StudentDashboard></StudentDashboard> : <InstructorDashboard></InstructorDashboard>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;