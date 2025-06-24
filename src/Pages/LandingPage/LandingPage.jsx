import React from 'react'
import logo from '../../assets/images/shopnow.default.svg'
import { Link, useNavigate } from 'react-router-dom'
import img2 from '../../assets/images/bannerImg.png'
import Carousel from '../../Components/Carousels'
import Footer from '../../Components/Footer'
import { useAuth } from '../../context/AuthContext'
import './LandingPage.css'

function LandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <>
      <style>
        {`
          a:hover {
            text-decoration: none !important;
          }
        `}
      </style>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section with Gradient Background */}
        <div className="w-full min-h-[80vh] bg-gradient-to-r from-pink-50 to-purple-50 rounded-b-[50px] shadow-lg mt-8">
          <div className="flex flex-col md:flex-row items-center justify-center px-4 py-10 md:py-16 h-full max-w-screen-xl mx-auto">
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
              <img src={logo} alt="Logo" className="w-[200px] sm:w-[250px] md:w-[300px] h-auto" />
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Design Your Style, <br />
                <span className="text-pink-600">Print Your Story</span>
              </h1>

              <p className="text-gray-600 text-lg">
                Create custom clothing that speaks your language. From trendy t-shirts to elegant hoodies, 
                bring your designs to life with our premium printing service.
              </p>

              <div className="flex gap-4">
                {isAuthenticated ? (
                  <button
                    onClick={() => navigate('/home')}
                    className="px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Explore Collection
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('/login')}
                    className="px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get Started
                  </button>
                )}
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
              <div className="relative w-full max-w-[550px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                <img
                  src={img2}
                  alt="T-shirt design"
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
                    Custom Designs, Premium Quality
                  </h2>
                  <p className="text-white/90 text-lg">
                    Express yourself with unique clothing that stands out
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="fa-solid fa-truck-fast text-3xl text-pink-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Free Shipping</h3>
                <p className="text-gray-600 text-center">Enjoy free shipping on all orders nationwide</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="fa-solid fa-repeat text-3xl text-pink-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Easy Returns</h3>
                <p className="text-gray-600 text-center">14-day hassle-free return policy</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="fa-solid fa-medal text-3xl text-pink-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">Premium Quality</h3>
                <p className="text-gray-600 text-center">High-quality materials and printing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Collection Section */}
        <div className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Featured Collections
            </h2>
            <Carousel />
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 bg-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Custom Design?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Start designing your unique clothing pieces today
            </p>
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-3 bg-white text-pink-600 rounded-full hover:bg-pink-50 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Designing Now
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default LandingPage
