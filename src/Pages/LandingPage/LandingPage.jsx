import React from 'react'
import logo from '../../assets/images/shopnow.default.svg'
import { Link } from 'react-router-dom'
import img2 from '../../assets/images/bannerImg.png'
import Carousel from '../../Components/Carousels'


function LandingPage() {
  return (
    <>
<div className="w-full min-h-[70vh] bg-gray-200 rounded mt-10 home-banner">
  <div className="flex flex-col md:flex-row items-center justify-center px-4 py-10 md:py-16 h-full max-w-screen-xl mx-auto">

    {/* Left Section */}
    <div className="w-full md:w-1/2 flex flex-col items-start">
      <img src={logo} alt="Logo" className="w-[200px] sm:w-[250px] md:w-[300px] h-auto mt-2" />

      <p className="text-black text-justify mt-6 text-sm sm:text-base">
      Welcome to ShopNow, your ultimate destination for trendy and stylish clothing for all ages and occasions. Whether you're looking for the perfect t-shirt, a flattering pair of jeans, or cozy jackets to keep you warm, we've got you covered. Our curated collection offers a wide variety of clothing options, including casual wear, activewear, and elegant ethnic wear, all carefully selected to ensure top-notch quality and comfort. With easy size selection, user-friendly design, and a seamless shopping experience, ShopNow makes it easy to find and order your favorite outfits. Explore our latest collection, pick your perfect fit, and enjoy the best deals on fashion, all in one place.
      </p>

      <Link
        to="/login"
        className="inline-block mt-6 px-6 py-2 border border-black text-black rounded hover:bg-black hover:text-pink-400 transition duration-300 text-sm sm:text-base"
      >
        Start to Explore
      </Link>
    </div>

    {/* Right Section - CONTAINED image with overlay */}
    <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <div className="relative w-full max-w-[550px] rounded-xl overflow-hidden">
        <img
          src={img2}
          alt="T-shirt design"
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-4 sm:px-6 md:px-8 py-6">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-extrabold mb-2">
            Design Your Own Clothes
          </h2>
          <p className="text-white text-sm sm:text-base">
            Create custom t-shirts, hoodies, and more. No minimums, fast turnaround, and premium quality guaranteed.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* card section */}
<div class="flex justify-center items-center">

  <div class="flex gap-6 flex-wrap">
    
    {/* <!-- Card 1 --> */}
    <div class="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-64 mt-5">
    <i class="fa-solid fa-truck-fast text-3xl text-pink-900"></i>
      <p class="text-center text-gray-700 text-lg font-medium">Free Shipping On All Orders</p>
    </div>

    {/* <!-- Card 2 --> */}
    <div class="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-64 mt-5">
    <i class="fa-solid fa-repeat text-3xl text-pink-900"></i>
      <p class="text-center text-gray-700 text-lg font-medium">Easy Return On 14 Days Of Recieving Your Order</p>
    </div>

    {/* <!-- Card 3 --> */}
    <div class="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-64 mt-5">
    <i class="fa-solid fa-medal text-3xl text-pink-900"></i>
      <p class="text-center text-gray-700 text-lg font-medium">Assured Quality On All Products</p>
    </div>
  </div>
</div>

<div className='mt-14'>
<Carousel/>
</div>
<br />
<br />

 

    </>
  )
}

export default LandingPage
