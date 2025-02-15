import React from 'react';
import NAvbar from '../Navbar/NAvbar';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='container mx-auto p-2 bg-[#EFFAFA]'>
            <NAvbar></NAvbar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;