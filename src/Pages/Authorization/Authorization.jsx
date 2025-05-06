import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/shopnow.default.svg'

function Authorization({register}) {

    const isRegisterForm=register?true:false

  return (
    <>
      <div className="flex justify-center items-center mt-10">
  <div className="w-11/12 md:w-3/4 max-w-5xl">
    
    <Link to={'/'} className="text-gray-600 hover:text-black font-bold inline-block mb-4">
      <i className="fa-solid fa-arrow-left mr-2"></i>Back
    </Link>

    <div className="bg-gray-200 shadow-lg rounded-lg p-6">
      <div className="flex justify-center items-center">

        {/* Centered form */}
        <div className="w-full lg:w-2/3 flex flex-col items-center text-center">
         <img src={logo} alt="logo" width={'30%'} />
          <h5 className="text-pink-700 font-bold pt-2">
            {isRegisterForm ? 'Signup to your account' : 'Login to your account'}
          </h5>

          <form className="w-full mt-4 px-4 sm:px-8 text-black">
  {isRegisterForm && (
    <div className="mb-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full p-2 rounded border bg-gray-50 border-gray-300"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="w-full p-2 rounded border bg-gray-50 border-gray-300"
        />
      </div>
    </div>
  )}


            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded border bg-gray-50 border-gray-300"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 rounded border bg-gray-50 border-gray-300"
              />
            </div>

            {isRegisterForm ? (
              <div>
                <button className="btn btn-outline-dark px-6 py-2 border border-black rounded hover:bg-black hover:text-pink-400 transition duration-300">
                  Register
                </button>
                <p className="pt-2 text-gray-600">
                  Already have an account? Click here to{' '}
                  <Link to="/login" className="text-green-600 hover:text-green-800 underline">
                    Login
                  </Link>
                </p>
              </div>
            ) : (
              <div className="mt-3">
                <button
                  className="btn btn-outline-dark px-6 py-2 border border-black rounded hover:bg-black hover:text-pink-400 transition duration-300"
                >
                  Login
                </button>
                {/* when user succesfully gets login and onclicking the button navigate to /home. Only after succesfull login */}
                <p className="text-gray-600 mt-2">
                  New User? Click here to{' '}
                  <Link to="/register" className="text-red-500 hover:text-red-800 underline">
                    Register
                  </Link>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Authorization
