import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imgIco from "../../assets/r5.jpeg"
const Installation = () => {
  const [uninstalled, setUninstalled] = useState(false);

  const handleUninstall = () => {
    setUninstalled(true);
    toast.success("App Uninstalled Successfully!");
  };

  return (
    <div className="bg-base-200 py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Your Installed Apps</h1>
          <p className="mt-4 text-gray-500 font-light">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
{/* ami ai ta valo kore bujhte parini tai degin kore rakhichi r parini */}
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
          <h1>1 Apps Found</h1>

          {/* Theme Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort by size
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl"
            >
              <li>
                <input
                  type="radio"
                  name="Low-High"
                  className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Default"
                  value="default"
                />
              </li>

              <li>
                <input
                  type="radio"
                  name="High-Low"
                  className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="High-Low"
                  value="High-Low"
                />
              </li>

            </ul>
          </div>
        </div>

        {/* Installed App Card */}
        <div className="mt-8 w-full bg-base-100 shadow-md rounded-xl px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">

          {/* Left Side */}
          <div className="flex gap-4">
            <img
              src={imgIco}
              alt="App Icon"
              className="w-20 h-16 rounded-xl object-cover"
            />

            <div>
              <h2 className="text-xl font-bold">
                Forest: Focus for Productivity
              </h2>

              <div className="flex items-center gap-6 mt-2">
                <p className="flex items-center text-emerald-600 text-sm font-semibold gap-1">
                  <MdOutlineFileDownload /> 9M
                </p>

                <p className="flex items-center text-amber-400 text-sm font-semibold gap-1">
                  <FaStar /> 5
                </p>

                <h5 className="text-gray-400 text-sm font-semibold">
                  233MB
                </h5>
              </div>
            </div>
          </div>

          {/* Right Side Button */}
          <button
            onClick={handleUninstall}
            disabled={uninstalled}
            className={`w-full sm:w-auto px-6 py-2 rounded-lg font-semibold text-white transition ${
              uninstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {uninstalled ? "Uninstalled" : "Uninstall"}
          </button>
        </div>

        {/* Toast */}
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default Installation;
