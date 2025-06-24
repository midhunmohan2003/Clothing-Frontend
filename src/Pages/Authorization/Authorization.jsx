import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import logo from '../../assets/images/shopnow.default.svg'
import './auth.css'

function Authorization({ register }) {
  const navigate = useNavigate();
  const { login, signup } = useAuth();
  const isRegisterForm = register ? true : false;
  const [isExiting, setIsExiting] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    setIsExiting(false);
  }, [register]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegisterForm) {
        // Signup
        const result = await signup(formData.email, formData.password, formData.username, formData.phone);
        if (result.success) {
          navigate('/login');
        } else {
          setError(result.message);
        }
      } else {
        // Login
        const result = await login(formData.email, formData.password);
        if (result.success) {
          navigate('/');
        } else {
          setError(result.message);
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigation = (e) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      navigate(isRegisterForm ? '/login' : '/register');
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Link to="/" className="auth-link inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back to Home
          </Link>
          <img src={logo} alt="logo" className="h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">
            {isRegisterForm ? 'Create your account' : 'Welcome back'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isRegisterForm 
              ? 'Join us to start creating your custom designs'
              : 'Sign in to continue your creative journey'
            }
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {isRegisterForm && (
              <>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-user text-gray-400"></i>
                    </div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={formData.username}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-phone text-gray-400"></i>
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-envelope text-gray-400"></i>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-lock text-gray-400"></i>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading 
                  ? (isRegisterForm ? 'Creating Account...' : 'Signing In...')
                  : (isRegisterForm ? 'Create Account' : 'Sign In')
                }
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isRegisterForm ? 'Already have an account?' : "Don't have an account?"}{' '}
              <Link
                to={isRegisterForm ? '/login' : '/register'}
                className="auth-link font-medium text-pink-600 hover:text-pink-500"
              >
                {isRegisterForm ? 'Sign in' : 'Create one'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authorization
