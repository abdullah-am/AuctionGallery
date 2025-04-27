import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-around">
                <div className="flex">
                    <a className=" text-5xl font-extrabold">
                        <span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337]' >Gallery</span>
                    </a>
                </div>
                <div className="flex gap-10 text-3xl">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Auctions</a>
                    <a className="link link-hover">Categories</a>
                    <a className="link link-hover">How to works</a>
                </div>
                <div>
                    <div className="indicator btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                    <div className="btn btn-ghost btn-circle avatar w-10 rounded-full">
                        <img className='rounded-full'
                            alt="Tailwind CSS Navbar component"
                            src="https://i.ibb.co.com/2YhjBn7Q/editedmyphoto.png" />
                    </div>
                </div>
  
            </div>
        </div>
    );
};

export default Navbar;