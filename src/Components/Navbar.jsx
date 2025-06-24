import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/shopnow.default.svg";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useAuth } from "../context/AuthContext";

function Navbar({ searchTerm, setSearchTerm }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav className="glass-navbar shadow-lg px-4 py-3 flex justify-between items-center rounded-b-2xl fixed top-0 left-0 w-full z-50">
        <Link to="/home" className="flex items-center gap-2 group">
          <img src={logo} className="w-20 md:w-28 transition-transform group-hover:scale-105" alt="Logo" />
        </Link>

        <button
          className="text-gray-700 text-xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="hidden md:flex items-center gap-4 pr-2">
          {/* Search bar */}
          {location.pathname === "/home" && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1.5 bg-white/70 border-none rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-deeppink shadow transition-all w-44"
                style={{ boxShadow: '0 2px 8px 0 rgba(255,64,129,0.08)' }}
              />
              <i className="fa-solid fa-magnifying-glass absolute left-2 top-1/2 transform -translate-y-1/2 text-deeppink text-sm"></i>
            </div>
          )}

          <Tooltip title="Wishlist">
            <Link
              to="/wishlist"
              className="text-lg text-gray-700 hover:text-deeppink transition-colors duration-200"
            >
              <i className="fa-solid fa-heart"></i>
            </Link>
          </Tooltip>

          <Tooltip title="Cart">
            <Link to="/cart" className="text-lg text-gray-700 hover:text-deeppink transition-colors duration-200">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </Tooltip>

          <Tooltip title="Account settings">
            <Link className="text-lg text-gray-700 hover:text-deeppink transition-colors duration-200">
              <div className="flex items-center gap-1 cursor-pointer">
                <i
                  className="fa-solid fa-user-circle"
                  onClick={handleClick}
                ></i>
                <h1 onClick={handleClick} className="font-semibold text-base">{user?.name || 'Guest'}</h1>
              </div>
            </Link>
          </Tooltip>
        </div>

        {menuOpen && (
          <div className="glass-navbar-mobile absolute top-16 left-0 w-full px-6 py-4 flex flex-col gap-4 md:hidden z-50 animate-fade-in-down rounded-b-2xl">
            {/* Search bar in mobile menu */}
            {location.pathname === "/home" && (
              <div className="relative mb-2">
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 bg-white/80 border-none rounded-full text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-deeppink shadow w-full"
                  style={{ boxShadow: '0 2px 8px 0 rgba(255,64,129,0.08)' }}
                />
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-deeppink text-base"></i>
              </div>
            )}
            <div className="flex justify-center gap-10">
              <Tooltip title="Wishlist">
                <Link
                  to="/wishlist"
                  className="text-2xl text-gray-700 hover:text-deeppink transition-colors duration-200"
                >
                  <i className="fa-solid fa-heart"></i>
                </Link>
              </Tooltip>
              <Tooltip title="Cart">
                <Link
                  to="/cart"
                  className="text-2xl text-gray-700 hover:text-deeppink transition-colors duration-200"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </Tooltip>
              <Tooltip title="Account settings">
                <Link className="text-2xl text-gray-700 hover:text-deeppink transition-colors duration-200">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <i
                      className="fa-solid fa-user-circle"
                      onClick={handleClick}
                    ></i>
                    <h1 onClick={handleClick} className="font-semibold">{user?.name || 'Guest'}</h1>
                  </div>
                </Link>
              </Tooltip>
            </div>
          </div>
        )}

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
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/history");
            }}
          >
            Order History
          </MenuItem>
          <Divider />

           <MenuItem
            onClick={() => {
              handleClose();
              navigate("/account");
            }}
          >
            Account Settings
          </MenuItem>
          <Divider />

          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <div className="text-red-600 hover:text-red-900 font-bold">
              Logout
            </div>
          </MenuItem>
        </Menu>
      </nav>
      <style jsx>{`
        .glass-navbar {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1.5px solid rgba(255,64,129,0.10);
        }
        .glass-navbar-mobile {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom-left-radius: 1.5rem;
          border-bottom-right-radius: 1.5rem;
          box-shadow: 0 8px 32px 0 rgba(255,64,129,0.10);
        }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.4s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </>
  );
}

export default Navbar;
