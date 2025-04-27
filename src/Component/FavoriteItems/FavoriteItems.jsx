import React from 'react';
import { FaHeart } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';

const FavoriteItems = ({ favoriteItems, totalBidsAmount, onRemoveFavorite }) => {
    return (
      <div className="card bg-base-100 shadow-md rounded-xl p-4 w-full max-w-sm mx-auto">
        <div className="flex justify-center items-center gap-2 mb-4">
          <FaHeart className="text-3xl text-blue-600" />
          <h2 className="font-semibold text-3xl text-blue-900">Favorite Items</h2>
        </div>
  
        <div className="py-6 border-y border-gray-200">
          {favoriteItems.length > 0 ? (
            <ul className="space-y-4">
              {favoriteItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between text-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        {item.title.length > 20
                          ? `${item.title.substring(0, 20)}...`
                          : item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        ${item.currentBidPrice.toLocaleString()} • Bids:{' '}
                        {item.bidsCount}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveFavorite(item, false)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <IoClose size={20} />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center">
              <p className="text-lg font-medium text-gray-700">No favorites yet</p>
              <p className="text-sm text-gray-500 mt-1">
                Click the heart icon on any item
                <br />
                to add it to your favorites
              </p>
            </div>
          )}
        </div>
  
        <div className="flex justify-between items-center mt-4 text-xl font-medium text-gray-700">
          <span>Total bids Amount</span>
          <span className="font-bold text-lg text-black">
            ${totalBidsAmount.toLocaleString()}
          </span>
        </div>
      </div>
    );
  };

export default FavoriteItems;