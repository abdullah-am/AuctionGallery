import { ToastContainer} from 'react-toastify';
import './App.css'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import Items from './Component/Items/Items'
import Navbar from './Component/Navbar/Navbar'
import FavoriteItems from './Component/FavoriteItems/FavoriteItems'
import { useState } from 'react'

function App() {

  const [favorites, setFavorites] = useState([]);
  const [totalBidsAmount, setTotalBidsAmount] = useState(0);

  const handleFavorite = (item, isAdding) => {
    if (isAdding) {
      setFavorites([...favorites, item]);
      setTotalBidsAmount(totalBidsAmount + item.currentBidPrice);
    }
     else {
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
      setTotalBidsAmount(totalBidsAmount - item.currentBidPrice);
    }
  };
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <div className="main-container p-12">

      <div>
        <h1 className='text-4xl font-bold mb-2'>Active Auctions</h1>
        <p className='text-2xl'>Discover and bid on extraordinary items</p>
      </div>

      <div className='flex mt-10'>

        <div className="left-container w-[70%] rounded-2xl shadow-md">
          <Items 
          onFavorite={handleFavorite} 
          favorites={favorites} ></Items>
        </div>

        <div className="right-container w-[30%]">

        <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              closeOnClick={true}
              pauseOnHover={true}
              draggable={true}
              theme="light"
            />

          <FavoriteItems 
              favoriteItems={favorites}
              totalBidsAmount={totalBidsAmount}
              onRemoveFavorite={handleFavorite} ></FavoriteItems>

        </div>

      </div>

    </div>


    <Footer></Footer>  
    </>
  )
}

export default App

