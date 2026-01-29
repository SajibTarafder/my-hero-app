import React from 'react';
import { BsDownload } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const Book = ({ singleBook }) => {
    const { image,id, ratingAvg, title, downloads } = singleBook
    return (

      <Link to={`/bookDetails/${id}`}>
        <div className="card bg-base-100 shadow-sm  flex flex-col overflow-hidden">
            <figure className="p-4">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-full h-48 object-cover" />
            </figure>
            <div className="card-body flex-1 flex flex-col justify-between items-center text-center ">
                <h2 className="card-title">{title}</h2>
                <div className="flex  justify-between w-full mt-2">
                    <button className="btn btn-xs rounded-3xl text-green-400 font-bold"><BsDownload />{downloads}</button>
                    <button className="btn btn-xs rounded-3xl text-fuchsia-800 font-bold"><FaStar />{ratingAvg}</button>
                </div>

            </div>
        </div>
      </Link>


    );
};

export default Book;