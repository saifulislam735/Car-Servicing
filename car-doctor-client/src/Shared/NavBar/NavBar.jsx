// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import avatar from '../../assets/avatar.png'
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut();
    };

    return (
        <div className="md:px-[150px] py-5 mb-10">
            <div className="navbar bg-base-100">
                <a className="btn btn-ghost text-xl">
                    <img
                        className='h-20 object-contain'
                        src={logo}
                        alt="Logo"
                    />
                </a>

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-horizontal px-1 text-[#444] text-[18px] font-semibold w-full ">
                            <li><Link to="/">Home</Link ></li>
                            <li><Link to="/about">About</Link ></li>
                            <li><Link to="/services">Services</Link ></li>
                            <li><Link to="/order">Order</Link ></li>
                            <li><Link to="/contact">Contact</Link ></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end space-x-4">
                    {user ?
                        <Link to='/login' onClick={handleLogout} className="btn text-blue-500 border border-blue-500 font-semibold">Log Out</Link>
                        :
                        <Link to='/login' className="btn text-blue-500 border border-blue-500 font-semibold">Login</Link>
                    }
                    <Link to='/signup' className="btn bg-blue-500 text-slate-100">SignUp</Link>

                    {user &&
                        <Link to='/profile' className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-14 rounded-full ">
                                <img src={avatar} />
                            </div>
                        </Link>
                    }
                </div>
            </div>        </div>
    );
};

export default NavBar;