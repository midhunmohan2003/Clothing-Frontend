import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar'

function History() {

 const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <>
      <Navbar/>
       <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Order History</h2>
        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className="border rounded p-4 mb-4 shadow-sm">
              <h3 className="font-semibold mb-2">Order Date: {order.date}</h3>
              <p className="mb-2 font-medium text-green-600">Total: ${order.totalPrice}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>
                      <p className="text-sm text-gray-600">Color: {item.selectedColor}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-sm text-gray-700">
                <p><strong>Shipping Address:</strong> {order.shippingAddress.fullName}, {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state}, {order.shippingAddress.zip}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default History
