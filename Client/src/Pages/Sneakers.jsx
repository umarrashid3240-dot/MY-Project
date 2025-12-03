import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import SubNavbar from "../Components/SubNavbar";
import { sneakersProducts } from "./Products1";

const Sneakers = () => {
  const navigate = useNavigate();

  // Slider Images
  const images = [
    "/images/S-1.jpg",
    "/images/S-2.jpg",
    "/images/S3.jpg",
    "/images/S4.jpg",
    "/images/S5.jpg",
    "/images/S6.jpg",
    "/images/S7.jpg",
    "/images/S8.jpg",
    "/images/S9.jpg",
    "/images/S10.jpg",
    "/images/S11.jpg",
    "/images/S12.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-black mt-6">
        Sneakers Collection 👟
      </h2>

      {/* Search & SubNavbar */}
      <SearchBar />
      <SubNavbar />

      {/* Slider */}
      <div className="relative w-full h-[400px] my-6 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt="Sneaker Slider"
          className="w-full h-full object-contain transition-all duration-700"
        />
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-white bg-opacity-70 text-black text-xl p-2 rounded-full hover:bg-opacity-100 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 bg-white bg-opacity-70 text-black text-xl p-2 rounded-full hover:bg-opacity-100 transition"
        >
          ❯
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
        {sneakersProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/sneaker/${item.id}`)}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden flex flex-col"
          >
            {/* Images with hover effect */}
            <div className="relative w-full h-[300px] flex items-center justify-center bg-gray-100 overflow-hidden group">
              <img
                src={item.images[0]}
                alt={item.name}
                className="max-h-full max-w-full object-contain absolute inset-0 mx-auto transition-opacity duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-105"
              />
              <img
                src={item.images[1] || item.images[0]}
                alt={`${item.name} hover`}
                className="max-h-full max-w-full object-contain absolute inset-0 mx-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col flex-grow justify-between text-center">
              <h3 className="font-semibold text-gray-800 text-lg line-clamp-2">
                {item.name}
              </h3>
              <p className="text-green-600 font-bold mt-2">Rs {item.price}</p>
              <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sneakers;
