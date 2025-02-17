import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Footer/Navbar';

const MainLayout = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("register")
    

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter ||<Footer></Footer> }
        </div>
    );
};

export default MainLayout;