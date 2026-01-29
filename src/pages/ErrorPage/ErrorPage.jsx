import React from 'react';
import { Link } from 'react-router';
import { MdOutlineErrorOutline } from "react-icons/md";

const ErrorPage = () => {
  return (
    // error page
    <div className="hero bg-base-300 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          
          <a className="flex justify-center items-center text-9xl font-bold text-red-500">
            <MdOutlineErrorOutline />
          </a>

          <h1 className="text-4xl font-bold py-4">Oops, page not found!</h1>
             <p className="py-4 font-light">
       The page you are looking for is not available.
      </p>
         <Link to='/'>
          <button className="btn py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white">Go to Home</button>
         </Link>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
