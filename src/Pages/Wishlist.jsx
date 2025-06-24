import React, { useEffect, useState } from 'react';
// import Navbar from '../../Components/Navbar';
// import Footer from '../../Components/Footer';
import { Button } from '@mui/material';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    setWishlistItems(items);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedItems = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedItems);
    localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
    toast.info('Item removed from wishlist');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className='mt-20 px-4 flex-grow'>
        {wishlistItems.length === 0 ? (
          <h1 className='text-center font-bold text-2xl text-red-500'>
            Your Wishlist is Empty....
          </h1>
        ) : (
          <>
            <h1 className='text-center font-bold text-3xl text-black mb-6'>Your Wishlist</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8'>
              {wishlistItems.map((item, index) => (
                <div key={index} className='border rounded shadow p-4 flex flex-col'>
                  <img src={item.image} alt={item.name} className='w-full h-60 object-cover rounded' />
                  <h2 className='text-xl font-semibold mt-3 text-center'>{item.name}</h2>
                  <p className='text-center text-gray-600 mt-1'>${item.price}</p>

                  <div className='flex justify-between items-center mt-4'>
                    <Button
                      variant="outlined"
                      sx={{
                        color: 'deeppink',
                        borderColor: 'deeppink',
                        '&:hover': { borderColor: 'deeppink', color: 'deeppink' }
                      }}
                      onClick={() => navigate('/view', { state: item })}
                    >
                      View
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: 'red',
                        borderColor: 'red',
                        '&:hover': { borderColor: 'red', color: 'red' }
                      }}
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Footer />
    </div>
  );
}

export default Wishlist;
