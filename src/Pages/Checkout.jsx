import React, { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    postalCode: "",
    paymentMethod: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Done! Your clothing order has been placed");
      } else {
        setMessage("❌ Order failed");
      }
    } catch (error) {
      setMessage("❌ Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Clothing Order – Delivery Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="firstName" placeholder="First Name" onChange={handleChange}
            className="border rounded-lg px-4 py-2" />
          <input name="lastName" placeholder="Last Name" onChange={handleChange}
            className="border rounded-lg px-4 py-2" />
        </div>

        <input name="phone" placeholder="Phone Number" onChange={handleChange}
          className="mt-4 w-full border rounded-lg px-4 py-2" />

        <input name="address" placeholder="Delivery Address" onChange={handleChange}
          className="mt-4 w-full border rounded-lg px-4 py-2" />

        <input name="postalCode" placeholder="Postal Code" onChange={handleChange}
          className="mt-4 w-full border rounded-lg px-4 py-2" />

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Payment Method</h3>

          <label className="flex items-center gap-2">
            <input type="radio" name="paymentMethod" value="Cash"
              onChange={handleChange} />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2 mt-2">
            <input type="radio" name="paymentMethod" value="Card"
              onChange={handleChange} />
            Credit Card
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-black text-white py-3 rounded-xl"
        >
          Confirm Order
        </button>

        {message && (
          <p className="mt-4 text-center font-semibold text-green-600">
            {message}
          </p>
        )}

      </div>
    </div>
  );
};

export default Checkout;