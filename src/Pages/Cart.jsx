import React, { useContext } from "react";
import { CartContext } from "../Components/Context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    // Remove $ sign and convert to number
    const price = parseFloat(item.price.replace("$", ""));
    return total + price;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-4xl font-bold text-gray-700">
          Your Cart is Empty
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Your Cart</h2>
        <p className="text-xl font-semibold">
          {cartItems.length} item{cartItems.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 font-semibold text-lg">{item.name}</h3>
            <p className="text-orange-500 font-bold">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="text-right text-2xl font-bold">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;