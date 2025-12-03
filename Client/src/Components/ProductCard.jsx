import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="shadow p-4 rounded">
      <Link to={`/product/${product.id}`}>
        <img src={product.images?.[0]} alt={product.title} className="w-full h-40 object-cover"/>
      </Link>
      <h3>{product.title}</h3>
      <p>{product.brand}</p>
      <p>Rs {product.price}</p>

      <button
        onClick={() => addToCart(product, 1)}
        className="bg-black text-white py-2 px-4 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>  
  );
};

export default ProductCard;
