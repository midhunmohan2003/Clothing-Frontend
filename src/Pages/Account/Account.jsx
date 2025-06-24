import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Account() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    state: "",
    district: "",
    city: "",
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Load user data when available
  useEffect(() => {
    if (user) {
      setUserDetails(prev => ({
        ...prev,
        username: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  // Handle field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save updated data
  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(userDetails)
      });

      if (response.ok) {
        alert("Account details saved successfully!");
      } else {
        alert("Failed to save account details");
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      alert("An error occurred while saving");
    }
  };

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Account Details</h2>
        <div className="space-y-4 text-gray-700">
          {[
            { label: "Username", key: "username", readOnly: true },
            { label: "Email", key: "email", readOnly: true },
            { label: "Phone Number", key: "phone" },
            { label: "Address", key: "address" },
            { label: "Pincode", key: "pincode" },
            { label: "State", key: "state" },
            { label: "District", key: "district" },
            { label: "City", key: "city" },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                {field.label}
              </label>
              <input
                type="text"
                name={field.key}
                value={userDetails[field.key]}
                onChange={handleChange}
                readOnly={field.readOnly}
                className={`w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                  field.readOnly ? 'bg-gray-50' : ''
                }`}
              />
            </div>
          ))}
          <button
            onClick={handleSave}
            className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

export default Account;
