import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/shopnow.default.svg'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <p className="text-gray-600">
              Create custom clothing that speaks your language. From trendy t-shirts to elegant hoodies, 
              bring your designs to life with our premium printing service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="text-gray-600 hover:text-pink-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-pink-600 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-pink-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-pink-600 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-pink-600 transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-pink-600 transition-colors">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-pink-600 transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get special offers and updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">&copy; 2024 Cloth Printing. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="text-gray-600 hover:text-pink-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-pink-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 