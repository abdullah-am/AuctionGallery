import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
      className="relative w-full h-[700px] bg-center bg-cover   flex items-center justify-start mt-2.5"
      style={{
        backgroundImage: `url("https://i.ibb.co/N5vMBt3/Banner-min.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative z-10 pl-10 text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Bid on Unique Items from <br /> Around the World
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-80">
          Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
        </p>
        <button className="btn btn-primary bg-white text-black text-xl rounded-full p-8 mt-6">
          Explore Auctions
        </button>
      </div>
    </div>
        </div>
    );
};

export default Banner;