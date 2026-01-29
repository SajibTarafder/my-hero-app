import React, { Suspense,   } from 'react';
import Book from '../Book/Book';
import { Link } from 'react-router-dom';
const Hero = ({data}) => {


    return (
        <div className='bg-base-200'>
            <div className='text-center  '>
                <h1 className='text-5xl font-bold mt-10'>Trending Apps</h1>
                <p className='m-3 font-light'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* ai khnae card e clik korle singlebook e niye jabe */}
            <div className='max-w-6xl mx-auto gap-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-14'>
            <Suspense fallback={<span>Loading...</span>}>
          {
            data.map((singleBook)=><Book key={singleBook.id} singleBook={singleBook}></Book>)
          }

            </Suspense>
 </div>
 {/* ai khane theke all app e cole jabe show all button e click korle */}
 <div className='text-center items-center m-10'>
   <Link to='/app'>
    <button className='btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>Show All</button>
    </Link>
 </div>
        </div>
    );
};

export default Hero;