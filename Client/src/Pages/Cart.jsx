import React from "react";
import { useCart } from "../Context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CartPage = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, total } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-5 text-gray-800 text-center hover:animate-bounce">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-700 text-lg text-center hover:animate-bounce  hover:font-extrabold">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 max-h-[70vh] overflow-y-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 w-full md:w-1/2">
                <img
                  src={item.images?.[0] || item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-lg border border-gray-200"
                />
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                  <p className="text-gray-600">Rs {item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded"
                >
                  <FaMinus />
                </button>
                <span className="px-4 font-medium">{item.qty}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Item Total */}
              <div className="mt-4 md:mt-0 md:ml-6 flex items-center gap-4">
                <h3 className="text-green-600 font-semibold text-lg">
                  Rs {item.price * item.qty}
                </h3>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600 p-2 rounded"
                  title="Remove Item"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Total Section */}
      {cart.length > 0 && (
        <div className="mt-8 flex justify-end items-center gap-6">
          <h2 className="text-xl font-bold text-gray-800">Total:</h2>
          <p className="text-2xl font-extrabold text-green-600">Rs {total}</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
