import React, { useContext } from 'react';
import logo from '../../assets/Image/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { AuthContext } from '../../Provider/AuthPRovider';

const NAvbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("user logout");
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const allLinks = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/shop">Shop</NavLink></li>
        <li> <NavLink to="/about">About</NavLink></li>
        <li> <NavLink to="/blog">Blog</NavLink></li>
        <li> <NavLink to="/addProduct">Add Product</NavLink></li>
        <li> <NavLink to="dashboard/allProduct">All Product</NavLink></li>
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
                {
                    user ?
                        <>
                            <button onClick={handleLogout}>Logout</button>
                        </> :

                        <>
                            <Link to='/signup'>Signup</Link>
                            <Link to='/login'>Login</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default NAvbar;