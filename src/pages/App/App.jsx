
import React, { Suspense, useState,   } from 'react';
import Book from '../Book/Book';
import { useLoaderData } from 'react-router-dom';

const App = () => {
  const data = useLoaderData();  // loader data
  const [search,setSearch] =useState('');

  const filteredData =data.filter(app => app.title.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
    <div className="bg-base-200 py-12">
  <div className="max-w-6xl mx-auto px-4">
    
    <div className="text-center">
      <h1 className="text-4xl font-bold">
       Our All Applications
      </h1>

      <p className="mt-4 text-gray-500 font-light">
        Explore All Trending Apps on the Market developed by us
      </p>
    </div>

    <div className='flex justify-between items-center mt-6'>
        <h1 className='font-semibold text-xl'>({filteredData.length}) App{filteredData.length !==1 ? 's':''} Found</h1>
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search Apps"  value={search} onChange={(e) => setSearch(e.target.value)}/>
</label>
       
    </div>
    {/* all app card  */}
        <div className='max-w-6xl mx-auto gap-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-14'>
               <Suspense fallback={<span>Loading...</span>}>
             {filteredData.length > 0 ? (
            filteredData.map(app => (
              <Book key={app.id} singleBook={app} />
            ))
          ) : (
            <p className="text-center font-bold col-span-full text-gray-500 mt-10">
              No App Found
            </p>
          )}
   
               </Suspense>
    </div>
  </div>
</div>

    );
};

export default App;