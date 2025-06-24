import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Tooltip, Accordion } from "@mui/material";
import "./view.css";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Customize from '../../Pages/Customize/Customize';

function View() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedColor, setSelectedColor] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const [quantityError, setQuantityError] = React.useState("");
  const [liked, setLiked] = React.useState(false);
  const [showCustomizeAccordion, setShowCustomizeAccordion] =
    React.useState(false);

  React.useEffect(() => {
    const wishlistItems =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const isLiked = wishlistItems.some((item) => item.id === state.id);
    setLiked(isLiked);
  }, [state.id]);     

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="text-center mt-10">
          <p>
            Item not found. Please go back to{" "}
            <Button
              onClick={() => navigate(-1)}
              className="text-blue-500 underline"
            >
              Home
            </Button>
            .
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex justify-center mt-22 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8">
          {/* Left side */}
          <div className="w-full md:w-1/2 p-4 shadow-md rounded">
            <img
              src={state.image}
              alt={state.name}
              className="w-full h-100 rounded"
            />
            <h2 className="text-2xl text-center mt-4">{state.name}</h2>
            <h3 className="text-xl text-center text-gray-700">
              {" "}
              ${(state.price * quantity).toFixed(2)}{" "}
            </h3>

            <div className="flex justify-center gap-4 mt-4">
              <Button
                variant="outlined"
                sx={{
                  color: "deeppink",
                  borderColor: "deeppink",
                  "&:hover": { borderColor: "deeppink", color: "deeppink" },
                }}
                onClick={() => {
                  if (!selectedSize) {
                    toast.error("Please select a size.");
                    return;
                  }
                  if (!selectedColor) {
                    toast.error("Please select a color.");
                    return;
                  }
                  if (quantity <= 0) {
                    toast.error("Please enter a valid quantity.");
                    return;
                  }

                  const cartItems =
                    JSON.parse(localStorage.getItem("cartItems")) || [];

                  const productToAdd = {
                    ...state,
                    selectedSize,
                    selectedColor,
                    quantity,
                  };

                  cartItems.push(productToAdd);
                  localStorage.setItem("cartItems", JSON.stringify(cartItems));
                  navigate("/cart");
                }}
              >
                <i className="fa-solid fa-cart-shopping text-pink text-lg me-2"></i>{" "}
                Add to Cart
              </Button>
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "deeppink",
                  border: "solid 1px deeppink",
                  "&:hover": { backgroundColor: "deeppink", color: "white" },
                }}
                onClick={() => {
                  if (!selectedSize) {
                    toast.error("Please select a size.");
                    return;
                  }
                  if (!selectedColor) {
                    toast.error("Please select a color.");
                    return;
                  }
                  if (quantity <= 0) {
                    toast.error("Please enter a valid quantity.");
                    return;
                  }

                  const selectedProduct = {
                    ...state,
                    selectedSize,
                    selectedColor,
                    quantity,
                  };

                  localStorage.setItem(
                    "checkoutProduct",
                    JSON.stringify(selectedProduct)
                  );
                  navigate("/checkout");
                }}
              >
                <i className="fa-solid fa-angles-right fa-fade me-2 text-lg"></i>{" "}
                Buy Now
              </Button>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 p-4 rounded bg-gray-50 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-bold mb-4">Product Details</h2>

              {/* ❤️ Wishlist button */}
              <Tooltip
                title={liked ? "Remove from Wishlist" : "Add to Wishlist"}
                placement="top"
              >
                <Button
                  onClick={() => {
                    const wishlistItems =
                      JSON.parse(localStorage.getItem("wishlistItems")) || [];

                    if (liked) {
                      const updatedWishlist = wishlistItems.filter(
                        (item) => item.id !== state.id
                      );
                      localStorage.setItem(
                        "wishlistItems",
                        JSON.stringify(updatedWishlist)
                      );
                      setLiked(false);
                      toast.info("Removed from Wishlist");
                    } else {
                      wishlistItems.push(state);
                      localStorage.setItem(
                        "wishlistItems",
                        JSON.stringify(wishlistItems)
                      );
                      setLiked(true);
                      toast.success("Added to Wishlist");
                    }
                  }}
                  sx={{
                    borderRadius: "50%",
                    padding: "8px",
                    minWidth: "auto",
                  }}
                >
                  <i
                    className={`text-lg ${
                      liked
                        ? "fa-solid fa-heart text-red-500"
                        : "fa-regular fa-heart text-black"
                    }`}
                  ></i>
                </Button>
              </Tooltip>
            </div>

            <p className="text-gray-700 mb-4">{state.description}</p>

            <h3 className="text-lg font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {state.highlights?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {/* Size selection */}
            <h4 className="text-lg font-semibold mt-4 mb-2">Select Size:</h4>
            <div className="flex gap-4 flex-wrap">
              {state.size?.map((sz, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
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

            {/* Color selection */}
            <h4 className="text-lg font-semibold mt-4 mb-2">Select Color:</h4>
            <div className="flex gap-4 flex-wrap">
              {state.color?.map((clr, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <input
                    type="radio"
                    name="color"
                    value={clr}
                    className="accent-pink-500"
                    checked={selectedColor === clr}
                    onChange={() => setSelectedColor(clr)}
                  />
                  <span
                    className="w-6 h-6 rounded-full border"
                    style={{
                      backgroundColor: clr.toLowerCase(),
                      borderColor:
                        clr.toLowerCase() === "white"
                          ? "#ccc"
                          : clr.toLowerCase(),
                    }}
                  ></span>
                  {clr}
                </label>
              ))}
            </div>

            {/* Quantity input */}
            <div className="mt-4">
              <label className="text-lg font-semibold mb-2 block">
                Quantity:
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => {
                  const value = e.target.value;
                  setQuantity(value);

                  if (!value || value <= 0) {
                    setQuantityError("Quantity cannot be empty or zero!");
                  } else {
                    setQuantityError("");
                  }
                }}
                className="w-20 border rounded px-2 py-1 text-center focus:outline-pink-500"
              />

              {quantityError && (
                <p className="text-red-500 text-sm mt-1">{quantityError}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Centered Customize Design Section */}
      <div className="mt-8 flex justify-center px-4 mb-10">
        <div className="w-full md:w-2/3">
          <Button
            onClick={() => setShowCustomizeAccordion(!showCustomizeAccordion)}
            variant="outlined"
            sx={{
              color: "deeppink",
              borderColor: "deeppink",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              "&:hover": { borderColor: "deeppink", color: "deeppink" },
            }}
            fullWidth
          >
            <i className="fa-solid fa-pen-ruler"></i>
            <span>Customize Your Design</span>
            <i
              className={`fa-solid ${
                showCustomizeAccordion ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </Button>

          {showCustomizeAccordion && (
            <Accordion defaultExpanded className="mt-4">
              <Customize productImage={state.image} />
            </Accordion>
          )}  
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Footer />
    </div>
  );
}

export default View;
