import React from 'react';
import heroIcon from '../../assets/logo.png'
import {FaTwitter,FaLinkedin,FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
  
        <footer className="bg-neutral text-neutral-content p-6  ">
<div className='max-w-6xl mx-auto'>
    <div className='flex justify-between '>
    <a className="flex justify-center items-center text-xl font-normal gap-4  ">
      <img src={heroIcon} alt="Hero Logo" className="w-8 h-8" />
      HERO.IO
    </a>
    <div>
      <h3 className='text-xl font-normal'>Social Links</h3>
      <div className='flex gap-4 mt-4 justify-center sm:justify-start '>
        <a href="#" className="hover:text-blue-600 transition-colors text-xl rounded-4xl"><FaLinkedin /></a>
         <a href="#" className="hover:text-blue-400 transition-colors text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-800 transition-colors text-xl"><FaFacebook /></a>
      
      </div>
    </div>
  </div>
  <div>
    <hr className='mt-4 ' />
    <h1 className='text-center mt-4'>Copyright © 2025 - All right reserved</h1>
  </div>
</div>
</footer>
       

    );
};

export default Footer;