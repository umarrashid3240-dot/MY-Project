// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product, qty = 1) => {
//     const existing = cart.find((item) => item.id === product.id);
//     if (existing) {
//       setCart(cart.map((item) => item.id === product.id ? { ...item, qty: item.qty + qty } : item));
//     } else {
//       setCart([...cart, { ...product, qty }]);
//     }
//   };

//   const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
//   const increaseQty = (id) => setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
//   const decreaseQty = (id) => setCart(cart.map(item => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item));
//   const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, total }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, qty = 1) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      toast.warning("Item already in cart!");
    } else {
      setCart([...cart, { ...product, qty }]);
      toast.success("Item added to cart!");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.info("Item removed from cart");
  };

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, total }}>
      {children}
    </CartContext.Provider>
  );
};
