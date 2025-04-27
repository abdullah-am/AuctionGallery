import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-white text-black rounded p-10">
                <div>
                    <h1 className='text-4xl font-bold'>
                    <span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337]' >Gallery</span>
                    </h1>
                    <p className='text-2xl'>Bid.   Win.   Own.</p>
                </div>
                <div className="grid grid-flow-col gap-4 text-xl">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Auctions</a>
                    <a className="link link-hover">Categories</a>
                    <a className="link link-hover">How to works</a>
                </div>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;