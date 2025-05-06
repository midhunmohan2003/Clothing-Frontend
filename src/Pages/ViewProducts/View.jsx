import React from 'react'
import Navbar from '../../Components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

function View() {

  const { state } = useLocation()
  const navigate = useNavigate()
  const [selectedSize, setSelectedSize] = React.useState("")


  if (!state) {
    return (
      <div className='text-center mt-10'>
        <p>Item not found. Please go back to <Button onClick={() => navigate(-1)} className='text-blue-500 underline'>Home</Button>.</p>
      </div>
    )
  }
  

  return (
    <>
    <Navbar/>
      
    <div className='flex justify-center mt-10 px-4'>
  <div className='flex flex-col md:flex-row w-full max-w-5xl gap-8'>

    {/* Left side */}
    <div className='w-full md:w-1/2 p-4 shadow-md rounded'>
      <img src={state.image} alt={state.name} className='w-full h-100 rounded' />
      <h2 className='text-2xl text-center mt-4'>{state.name}</h2>
      <h3 className='text-xl text-center text-gray-700'>${state.price}</h3>

      <div className='flex justify-center gap-4 mt-4'>
        <Button
          variant="outlined"
          sx={{
            color: 'deeppink',
            borderColor: 'deeppink',
            '&:hover': { borderColor: 'deeppink', color: 'deeppink' }
          }}
        >
          <i className="fa-solid fa-cart-shopping text-pink text-lg me-2"></i> Add to Cart
        </Button>

        <Button
          sx={{
            color: 'white',
            backgroundColor: 'deeppink',
            '&:hover': { backgroundColor: 'deeppink' }
          }}
        >
          <i className="fa-solid fa-angles-right me-2"></i> Buy Now
        </Button>
      </div>
    </div>

{/* Right side */}
<div className='w-full md:w-1/2 p-4 rounded bg-gray-50 shadow-sm'>
  <h2 className='text-2xl font-bold mb-4'>Product Details</h2>
  <p className='text-gray-700 mb-4'>{state.description}</p>

  <h3 className='text-lg font-semibold mb-2'>Highlights</h3>
  <ul className='list-disc list-inside text-gray-600 space-y-1'>
    {state.highlights?.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
  <h4 className="text-lg font-semibold mb-2">Select Size:</h4>
  <div className="flex gap-4 flex-wrap">
    {state.size?.map((sz, index) => (
      <label key={index} className="flex items-center gap-2 text-gray-700">
        <input
          type="radio"
          name="size"
          value={sz}
          className="accent-pink-500"
          checked={selectedSize === sz}
          onChange={() => setSelectedSize(sz)}
        />
        {sz}
      </label>
    ))}
  </div>
</div>
  </div>
</div>


    </>
  )
}

export default View
