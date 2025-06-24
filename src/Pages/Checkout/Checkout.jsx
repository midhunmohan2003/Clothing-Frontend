import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";

function Checkout() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showDeliveryDate, setShowDeliveryDate] = useState(false);

  const [estimatedDelivery] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 5); // 5 days from now
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Check if pincode is valid (6 digits)
    if (e.target.name === "pincode") {
      const isValidPincode = /^\d{6}$/.test(e.target.value);
      setShowDeliveryDate(isValidPincode);
    }
  };

  const handlePaymentChange = (e) => {
    setPaymentDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (items.length === 0) {
      const singleItem = JSON.parse(localStorage.getItem("checkoutProduct"));
      if (singleItem) {
        items = [singleItem];
      }
    }

    setCartItems(items);

    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total.toFixed(2));

    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setFormData((prev) => ({
        ...prev,
        fullName: userData.username || "",
        email: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
        city: userData.city || "",
        pincode: userData.pincode || "",
      }));
    }
  }, []);

  const handlePlaceOrder = () => {
    const isFormFilled = Object.values(formData).every(
      (val) => val.trim() !== ""
    );

    if (!isFormFilled) {
      alert("Please fill in all address fields.");
      return;
    }

    if (paymentMethod !== "cod") {
      const isPaymentFilled = paymentMethod === "card" 
        ? paymentDetails.cardNumber && paymentDetails.expiryDate && paymentDetails.cvv
        : paymentDetails.upiId;

      if (!isPaymentFilled) {
        alert("Please fill in all payment details.");
        return;
      }
    }

    const orderData = {
      items: cartItems,
      totalPrice,
      date: new Date().toLocaleDateString(),
      shippingAddress: formData,
      paymentMethod,
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    setShowSuccess(true);
    
    // Navigate after animation
    setTimeout(() => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("checkoutProduct");
      navigate("/home");
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div className="mt-14 px-4 md:px-10 mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-center mb-6"
        >
          Checkout
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cart Items Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Your Items</h3>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 border p-4 rounded shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      Size: {item.selectedSize}
                    </p>
                    <p className="text-sm text-gray-600">
                      Color: {item.selectedColor}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-800 font-bold">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-right text-xl font-bold text-green-600"
            >
              Total: ${totalPrice}
            </motion.div>
          </motion.div>

          {/* Shipping Address Form and Payment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="PIN Code"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                fullWidth
                inputProps={{ maxLength: 6 }}
                helperText="Enter 6-digit PIN code"
              />
            </div>

            {/* Delivery Date Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <BsBoxSeam className={`text-xl ${showDeliveryDate ? 'text-deeppink' : 'text-gray-400'}`} />
                <div>
                  {showDeliveryDate ? (
                    <>
                      <p className="text-sm text-gray-600">Estimated Delivery Date</p>
                      <p className="font-medium text-gray-800">{estimatedDelivery}</p>
                    </>
                  ) : (
                    <p className="text-sm text-gray-600">
                      Please enter a valid 6-digit PIN code to see estimated delivery date
                    </p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Payment Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
              <FormControl component="fieldset" className="mb-6">
                <RadioGroup
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <FormControlLabel
                      value="card"
                      control={<Radio />}
                      label="Credit/Debit Card"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <FormControlLabel
                      value="upi"
                      control={<Radio />}
                      label="UPI Payment"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <FormControlLabel
                      value="cod"
                      control={<Radio />}
                      label="Cash on Delivery"
                    />
                  </motion.div>
                </RadioGroup>
              </FormControl>

              <AnimatePresence mode="wait">
                {paymentMethod === "card" && (
                  <motion.div
                    key="card"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-1 gap-4"
                  >
                    <TextField
                      label="Card Number"
                      name="cardNumber"
                      value={paymentDetails.cardNumber}
                      onChange={handlePaymentChange}
                      placeholder="1234 5678 9012 3456"
                      fullWidth
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <TextField
                        label="Expiry Date"
                        name="expiryDate"
                        value={paymentDetails.expiryDate}
                        onChange={handlePaymentChange}
                        placeholder="MM/YY"
                        fullWidth
                      />
                      <TextField
                        label="CVV"
                        name="cvv"
                        value={paymentDetails.cvv}
                        onChange={handlePaymentChange}
                        placeholder="123"
                        fullWidth
                      />
                    </div>
                  </motion.div>
                )}

                {paymentMethod === "upi" && (
                  <motion.div
                    key="upi"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <TextField
                      label="UPI ID"
                      name="upiId"
                      value={paymentDetails.upiId}
                      onChange={handlePaymentChange}
                      placeholder="example@upi"
                      fullWidth
                    />
                  </motion.div>
                )}

                {paymentMethod === "cod" && (
                  <motion.div
                    key="cod"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <p className="text-gray-600">
                      Pay with cash upon delivery
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Place Order Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  fullWidth
                  sx={{
                    backgroundColor: "deeppink",
                    color: "white",
                    fontWeight: "bold",
                    mt: 4,
                    "&:hover": {
                      backgroundColor: "#c2185b",
                    },
                  }}
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-800 mb-4"
              >
                Order Placed Successfully!
              </motion.h2>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <BsBoxSeam className="text-4xl text-deeppink mx-auto mb-4" />
                <p className="text-gray-600">
                  Thank you for your purchase. Your order has been confirmed.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-2 text-sm text-gray-500"
              >
                <p>Order Total: ${totalPrice}</p>
                <p>Payment Method: {paymentMethod.toUpperCase()}</p>
                <p className="text-deeppink font-medium">
                  Estimated Delivery: {estimatedDelivery}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6"
              >
                <div className="w-16 h-16 border-4 border-deeppink border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-sm text-gray-500 mt-4">
                  Redirecting to home page...
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Checkout;
