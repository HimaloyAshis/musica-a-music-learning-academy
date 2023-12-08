import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {

    const noFooter = location.pathname.includes('login') || location.pathname.includes('logout')

    return (
        <div>
            {noFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;