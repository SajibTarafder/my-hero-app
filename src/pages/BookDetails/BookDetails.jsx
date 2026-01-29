import React, { useState } from 'react';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from 'react-router';
import { MdOutlineFileDownload ,MdOutlineInstallDesktop} from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
const BookDetails = () => {
    const {id} =useParams()
    const bookId =parseInt(id)
    const data =useLoaderData()
 const singleBook =data.find(book =>book.id ===bookId);
 const {image,title,companyName,ratings,description} =singleBook;


//  button install
const [installed,setInstalled] =useState(false);
const handleInstall =() =>{
  setInstalled(true);
  toast.success('App Installed Successfully!')
}
    return (
    <div className="hero bg-base-200 mt-0.5">
  <div className="max-w-6xl mx-4 sm:mx-auto my-10">
    
    {/* Main content: image + details */}
    <div className="flex flex-col lg:flex-row gap-8">
     
      <img
        src={image}
        className="w-full lg:max-w-sm rounded-lg shadow-xl p-8 bg-white"
      />

      {/* App Details npm run devls */}
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 mb-2">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        </p>
        <p className="py-2">
          <span className="text-gray-500">Developed by :</span>
          
          <span className="text-fuchsia-800 font-semibold ml-1">{companyName}</span>
        </p>
        <hr className="my-2" />

        {/* Stats */}
        <div className="grid grid-cols-3">
          <div className="stat">
            <div className="stat-value text-emerald-500 py-1"><MdOutlineFileDownload /></div>
            <div className="stat-title">Download</div>
            <div className="text-3xl sm:text-4xl font-bold">8M</div>
          </div>

          <div className="stat">
            <div className="stat-value text-amber-500 py-1"><FaStar /></div>
            <div className="stat-title">Average Ratings</div>
            <div className="text-3xl sm:text-4xl font-bold">4.9</div>
          </div>

          <div className="stat">
            <div className="stat-value text-purple-600 py-1"><BiSolidLike /></div>
            <div className="stat-title">Total Reviews</div>
            <div className="text-3xl sm:text-4xl font-bold">54K</div>
          </div>
        </div>

        {/* Install Button */}
        <button
  disabled={installed}
  onClick={handleInstall}
  className={`btn mt-4 w-full lg:w-auto text-white ${
    installed ? "btn-disabled bg-gray-400 cursor-not-allowed" : "btn-success"
  }`}
>
  <MdOutlineInstallDesktop className="mr-1" /> {installed ? "Installed" : "Install Now"}
</button>

{/* toast */}
<ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>

    {/* Divider */}
    <hr className="my-8" />

    {/* Review Chart */}
    <div className="card bg-base-100 p-4 mt-8">
      <h3 className="text-xl font-semibold mb-4">User Reviews</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ratings}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
<hr className='mt-8'/>
    {/* App Description */}
    <div className="card bg-base-100 p-4 mt-8">
      <h3 className="text-xl font-semibold mb-3">Description</h3>
      <h1>dgj</h1>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
</div>

    );
};

export default BookDetails;