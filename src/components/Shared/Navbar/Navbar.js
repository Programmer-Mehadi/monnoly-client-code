import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const liList = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Reading history</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </>


    return (

        <div className="navbar bg-blue-900 shadow-sm text-white px-10">
            <div className="navbar-start">

                <Link to='/' className=" normal-case text-xl font-bold">Monnoly</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {liList}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 ml-[-170px] bg-blue-900 ">
                        {liList}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;