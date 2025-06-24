import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
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
        <div className="flex flex-col items-center mt-4 mb-20">
          <p className="text-gray-500 mb-4 text-center">
            Just relax, let us help you find some products
          </p>
          <Link to={"/home"}>
            <Button
              variant="outlined"
              sx={{
                color: "deeppink",
                borderColor: "deeppink",
                "&:hover": { color: "white", backgroundColor: "deeppink" },
              }}
            >
              <i className="fa-solid fa-cart-shopping text-pink text-lg me-2"></i>{" "}
              Start Shopping
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="mt-10 flex flex-col justify-center px-4 items-center">
        <h2 className="text-2xl font-bold mb-4">
          Your Cart ({cartItems.length})
        </h2>
        <div className="w-full max-w-4xl space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex gap-4 p-4 shadow rounded">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">Size: {item.selectedSize}</p>
                <p className="text-gray-600">Color: {item.selectedColor}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-800 font-bold mt-2">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 mb-8">
            <Button
              variant="outlined"
              onClick={handleClearCart}
              sx={{
                color: "red",
                borderColor: "red",
                "&:hover": { color: "white", backgroundColor: "red" },
              }}
            >
              Clear Cart
            </Button>

            <Button
              sx={{
                color: "white",
                backgroundColor: "deeppink",
                "&:hover": { backgroundColor: "deeppink" },
              }}
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
