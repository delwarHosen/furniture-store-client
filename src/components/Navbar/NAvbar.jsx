import React from 'react';
import logo from '../../assets/Image/logo.png'
import { NavLink } from 'react-router-dom';
import {  FaShoppingCart } from 'react-icons/fa';
import {  FaBarsStaggered } from 'react-icons/fa6';

const NAvbar = () => {
    const allLinks = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/shop">Shop</NavLink></li>
        <li> <NavLink to="/about">About</NavLink></li>
        <li> <NavLink to="/blog">Blog</NavLink></li>
        <li> <NavLink to="/addProduct">Add Product</NavLink></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBarsStaggered className='w-5 h-5'></FaBarsStaggered>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {allLinks}
                    </ul>
                </div>
                <img className="w-3/5" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {allLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-5">
                <p className='text-2xl text-[#F99E1E]'><FaShoppingCart></FaShoppingCart></p>
                <a href="/">Account</a>
                <a href="/">Logout</a>
            </div>
        </div>
    );
};

export default NAvbar;