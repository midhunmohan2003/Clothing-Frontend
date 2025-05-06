import React from 'react'
import Navbar from '../../Components/Navbar'

function wishlist() {
  return (
    <>
      <Navbar/>
      <div className='mt-28 '>
        <h1 className='text-center font-bold text-2xl text-red-500'>Your Wishlist is Empty....</h1>
      </div>
    </>
  )
}

export default wishlist
