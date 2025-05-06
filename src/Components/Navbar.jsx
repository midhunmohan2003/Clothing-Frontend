import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/shopnow.default.svg'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';


function Navbar({ searchTerm, setSearchTerm }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    // logout
    const handleLogout=()=>{
      // localStorage.removeItem('username')
      // localStorage.removeItem('email')
      navigate('/');
      window.location.reload()
      
    }

  return (
    <>
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Left Logo */}
      <Link to="/home">
        <img src={logo} className="w-18 md:w-28" alt="Logo" />
      </Link>

      {/* Hamburger Button (Mobile) */}
      <button
        className="text-gray-700 text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Right Menu (Desktop) */}
      <div className="hidden md:flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
        <input
  type="text"
  placeholder="Search"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="pl-10 pr-4 py-1 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
/>

          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"></i>
        </div>

        <button className="text-gray-700 font-medium hover:text-black hover:cursor-pointer">MEN</button>
        <button className="text-gray-700 font-medium hover:text-black hover:cursor-pointer">WOMEN</button>
        <button className="text-gray-700 font-medium hover:text-black hover:cursor-pointer">KIDS</button>
        {/* wishlist */}
        <Tooltip title="Wishlsit">
          <Link to="/wishlist" className="text-xl text-gray-700 hover:text-pink-700">
          <i class="fa-solid fa-heart"></i>
          </Link>
          </Tooltip>

        {/* Cart Icon */}
        <Tooltip title="Cart">
        <Link to="/cart" className="text-xl text-gray-700 hover:text-black">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        </Tooltip>

        {/* User Icon */}
        <Tooltip title="Account settings">
          <Link className="text-xl text-gray-700 hover:text-black">
            <i className="fa-solid fa-user-circle" onClick={handleClick}></i>
          </Link>
        </Tooltip>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 md:hidden z-50">
          {/* Search Bar */}
          <div className="relative">
            <input
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-1 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"></i>
          </div>

          <button className="text-gray-700 font-medium hover:text-black">MEN</button>
          <button className="text-gray-700 font-medium hover:text-black">WOMEN</button>
          <button className="text-gray-700 font-medium hover:text-black">KIDS</button>
          <div className='flex justify-center gap-10'>
         <Tooltip title="Wishlsit">
          <Link to="/wishlist" className="text-xl text-gray-700 hover:text-black">
          <i class="fa-solid fa-heart"></i>
          </Link>
          </Tooltip>

         <Tooltip title="Cart">
          <Link to="/cart" className="text-xl text-gray-700 hover:text-black">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          </Tooltip>

          <Tooltip title="Account settings">
            <Link className="text-xl text-gray-700 hover:text-black">
              <i className="fa-solid fa-user-circle" onClick={handleClick}></i>
            </Link>
          </Tooltip>
          </div>
        </div>
      )}

      {/* MUI Menu */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> username
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem> */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
         <div className='text-red-600 hover:text-red-900 font-bold' onClick={handleLogout}> Logout </div>
        </MenuItem>
      </Menu>
    </nav>
  
    </>
  )
}

export default Navbar
