import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = ({ onFavorite, favorites }) => {
    const [items, setItems]=useState([]);

    useEffect(() =>{
        fetch('bid.json')
        .then(res=> res.json())
        .then(data => setItems(data))
    },[])

    return (
        <div>
           
            <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-left text-xl">Items</th>
            <th className="text-left text-xl">Current Bid</th>
            <th className="text-left text-xl">Time Left</th>
            <th className="text-left text-xl">Bid Now</th>
          </tr>
        </thead>
        <tbody>
            {
             items.map(item=><Item 
                key={item.id} 
                item={item} 
                onFavorite={onFavorite} 
                isFavorited={favorites.some((fav) => fav.id === item.id)}></Item>)
            }
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default Items;