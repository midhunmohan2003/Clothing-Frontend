import React from 'react'
import Navbar from '../../Components/Navbar'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


function Cart() {


  return (
    <>
    <Navbar/>
    <div className="mt-28 flex flex-col md:flex-row justify-center items-center gap-6 px-4">
  <img
    src="https://krosfitsports.com/public/empty-cart.gif"
    alt="Empty Cart"
    className="w-64 md:w-80"
  />
  <h1 className="text-center font-bold text-xl md:text-2xl text-red-500">
    Your Cart is Empty...
  </h1>
</div>
<div className='flex flex-col items-center mt-4'>
  <p className='text-gray-500 mb-4 text-center'>
    Just relax, let us help you find some products
  </p>
 <Link to={'/home'} >
 <Button
    variant="outlined"
    sx={{
      color: 'deeppink',
      borderColor: 'deeppink',
      '&:hover': {  color: 'white', backgroundColor: 'deeppink' }
    }}
  >
    <i className="fa-solid fa-cart-shopping text-pink text-lg me-2"></i> Start Shopping
  </Button>
 </Link>
</div>


    </>
  )
}

export default Cart
