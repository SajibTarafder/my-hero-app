import React from 'react';
import phone from '../../assets/image.png'
const Banner = () => {
    return (
       <div className='bg-base-200 '>
        <div>
         <div className="hero mt-0.5 ">
  <div className="hero-content text-center mt-10 ">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold">We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>Productive </span>Apps</h1>
      <p className="py-6 font-normal text-sm">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br />
         exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className='flex gap-5 justify-center'>
     <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
   Google Play
</button>
           <button className="btn bg-white text-black border-[#e5e5e5] 
                   flex items-center gap-2">
  <svg aria-label="Apple logo" width="16" height="16"
       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1195 1195">
    <path fill="black"
      d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z" />
  </svg>
  Apple Store
</button>
      </div>
    </div>

  </div>
   
</div>
<div className='flex justify-center items-center mt-4 '>
   
<img className=' w-96 object-contain' src={phone} alt="" />



</div>
{/* stats  */}
{/* Stats Card */}
 <div>
     <div className="w-full  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  shadow-lg  p-10 z-0">
    <h2 className="text-4xl font-bold text-center mb-6 mt-4">Trusted By Millions, Built For You</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-6">
      <div className=''>
                <div className='text-sm mt-2 font-light'>Total Downloads</div>
        <div className="text-5xl font-bold mt-2">29.6M</div>

        <div className="text-sm mt-2 font-light">21% More Than Last Month</div>
      </div>
      <div>
         <div className='text-sm mt-2 font-light' >Total Reviews</div>
        <div className="text-5xl font-bold mt-2">906K</div>
       
        <div className="text-sm font-light mt-2">46% More Than Last Month</div>
      </div>
      <div>
        <div className='text-sm mt-2 font-light'>Active Apps</div>
        <div className="text-5xl font-bold mt-2">132+</div>
        
        <div className="text-sm font-light mt-2">31 More Will Launch</div>
      </div>
    </div>
  </div>
 </div>

</div>
       </div>
    );
};

export default Banner;