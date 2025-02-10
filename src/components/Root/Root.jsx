import React from 'react';
import NAvbar from '../Navbar/NAvbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='container mx-auto p-2 bg-[#EFFAFA]'>
           <NAvbar></NAvbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;