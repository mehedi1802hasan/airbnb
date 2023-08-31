import React from 'react';
import Navbar from '../SharedComponent/Navbar';
import Footer from '../SharedComponent/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='p-10'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;