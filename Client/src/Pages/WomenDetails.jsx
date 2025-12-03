

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { WomenProducts } from "./WomenProducts";
// import SearchBar from "../Components/SearchBar";
// import SubNavbar from "../Components/SubNavbar"; // ✅ import subnavbar

// const WomenDetails = () => {
//   const { id } = useParams();
//   const product = WomenProducts.find((item) => item.id === parseInt(id));

//   if (!product) {
//     return (
//       <h2 className="text-center mt-10 text-red-500">Product not found</h2>
//     );
//   }

//   const [mainImage, setMainImage] = useState(product.images[0]);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* ✅ 1. SearchBar First */}
//       <div className="px-6 lg:px-20 pt-6 mb-9">
//         <SearchBar />
//       </div>

//       {/* ✅ 2. Then SubNavbar */}
//       <SubNavbar />

//       {/* ✅ 3. Then Product Details Section */}
//       <div className="py-10 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
//         {/* LEFT SIDE - Image Gallery */}
//         <div className="flex-1 w-full">
//           <div className="border-4 border-green-500 rounded-2xl overflow-hidden bg-white shadow-lg p-4">
//             <img
//               src={mainImage}
//               alt={product.name}
//               className="w-full h-[450px] object-contain"
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex justify-center gap-4 mt-5 flex-wrap border border-green-400 rounded-xl p-3 bg-white shadow-sm">
//             {product.images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`thumb-${i}`}
//                 onClick={() => setMainImage(img)}
//                 className={`w-24 h-24 object-contain rounded-lg cursor-pointer border-2 transition-all duration-300 ${
//                   mainImage === img
//                     ? "border-green-500 scale-105"
//                     : "border-transparent hover:border-green-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE - Product Details */}
//         <div className="flex-1 bg-white rounded-2xl shadow-lg border border-green-300 p-8 mb-60 mt-9 size-fit">
//           <h1 className="text-3xl font-bold text-green-700 mb-6">
//             {product.name}
//           </h1>

//           <p className="text-gray-700 mb-6 leading-relaxed">
//             {product.description ||
//               "A beautiful pair of women’s shoes designed for comfort and style."}
//           </p>

//           <p className="text-2xl font-semibold text-green-600 mb-6">
//             Rs {product.price}
//           </p>

//           {/* Sizes */}
//           <div className="mb-8">
//             <h4 className="text-gray-800 font-semibold mb-3">
//               Available Sizes:
//             </h4>
//             <div className="flex gap-4 flex-wrap mt-7">
//               {["36", "37", "38"].map((size) => (
//                 <span
//                   key={size}
//                   className="w-12 h-12 flex items-center justify-center border-2 border-green-500 rounded-full cursor-pointer text-lg font-medium hover:bg-green-100 hover:scale-105 transition"
//                 >
//                   {size}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//           <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-md">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WomenDetails;


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { WomenProducts } from "./WomenProducts";
import SearchBar from "../Components/SearchBar";
import SubNavbar from "../Components/SubNavbar";
import { useCart } from "../Context/CartContext"; // ✅ CartContext import

const WomenDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // ✅ Add to Cart function

  const product = WomenProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <h2 className="text-center mt-10 text-red-500">Product not found</h2>
    );
  }

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* SearchBar */}
      <div className="px-6 lg:px-20 pt-6 mb-9">
        <SearchBar />
      </div>

      {/* SubNavbar */}
      <SubNavbar />

      {/* Product Details Section */}
      <div className="py-10 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT SIDE - Image Gallery */}
        <div className="flex-1 w-full">
          <div className="border-4 border-green-500 rounded-2xl overflow-hidden bg-white shadow-lg p-4">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[450px] object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 mt-5 flex-wrap border border-green-400 rounded-xl p-3 bg-white shadow-sm">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setMainImage(img)}
                className={`w-24 h-24 object-contain rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                  mainImage === img
                    ? "border-green-500 scale-105"
                    : "border-transparent hover:border-green-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Product Details */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg border border-green-300 p-8 mb-60 mt-9">
          <h1 className="text-3xl font-bold text-green-700 mb-6">
            {product.name}
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description ||
              "A beautiful pair of women’s shoes designed for comfort and style."}
          </p>

          <p className="text-2xl font-semibold text-green-600 mb-6">
            Rs {product.price}
          </p>

          {/* Sizes */}
          <div className="mb-8">
            <h4 className="text-gray-800 font-semibold mb-3">
              Available Sizes:
            </h4>
            <div className="flex gap-4 flex-wrap mt-7">
              {["36", "37", "38"].map((size) => (
                <span
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center border-2 rounded-full cursor-pointer text-lg font-medium transition-all duration-300 ${
                    selectedSize === size
                      ? "bg-green-600 text-white border-green-700 scale-105"
                      : "border-green-500 hover:bg-green-100 hover:scale-105"
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart({ ...product, size: selectedSize }, 1)}
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WomenDetails;
