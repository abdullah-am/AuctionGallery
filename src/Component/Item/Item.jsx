import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { MdOutlineDoDisturbAlt } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';


const Item = ({item, onFavorite, isFavorited}) => {

    const {id,title,description,currentBidPrice,timeLeft,bidsCount,image}=item;
   

    const handleFavoriteClick = () => {
        if (!isFavorited) {
          onFavorite(item, true);
          toast.success(`${item.title} added to favorites! ❤️`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'light',
          });
        }
      };


    return (
    
    <tr className="hover">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>${currentBidPrice.toLocaleString()}</td>
      <td>{timeLeft}</td>
      <td>
        <button className={`btn btn-ghost btn-sm ${
            isFavorited
              ? 'cursor-not-allowed text-red-500'
              : 'cursor-pointer text-blue-500'
          }`}
          onClick={handleFavoriteClick}
          disabled={isFavorited}
          title={isFavorited ? 'Already in Favorites' : 'Add to Favorites'}
        >
          <FaHeart size={20} />
        </button>
      </td>
    </tr>


    );
};

export default Item;