import React from 'react';
import heroIcon from '../../assets/logo.png'
import { FaGithub,} from "react-icons/fa";
import { Link } from 'react-router';

const Navbar = () => {
    const links =<>
    
       <Link to='/'><li className=' link link-hover text-black active:text-[#632EE3] items-center justify-center font-semibold m-4'>Home</li></Link>
       <Link to='/app'> <li className=' link link-hover text-black active:text-[#632EE3] items-center justify-center font-semibold m-4'>App</li></Link>
       <Link to ='/installation'> <li className=' link link-hover text-black active:text-[#632EE3] items-center justify-center font-semibold m-4'>Installation</li></Link>
    </>
    return (
     <div className='bg-base-100 shadow-sm'>
         <div className="max-w-6xl mx-auto navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
 <Link to='/'>
  <a className="flex justify-center items-center text-xl font-semibold gap-2  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
  <img src={heroIcon} alt="Hero Logo" className="w-8 h-8" />
  HERO.IO
</a>
 </Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><FaGithub />Contribute</a>
  </div>
</div>
     </div>
    );
};

export default Navbar;