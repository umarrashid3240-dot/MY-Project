

// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom"
// // import SubNavbar from "../Components/SubNavbar";
// // import SearchBar from "../Components/SearchBar"; // ✅ import

// // function Home() {
// //   const images = [
// //     "/MY-Project/shoes1.jpg",
// //     "/MY-Project/shoes2.jpg",
// //     "/MY-Project/shoes11.jpg",
// //     "/MY-Project/shoes12.jpg",
// //     "/MY-Project/shoes13.jpg",  
// //     "/MY-Project/shoes14.jpg",
// //     "/MY-Project/shoes15.jpg",
// //     "/MY-Project/shoes16.jpg",
// //     "/MY-Project/shoes17.jpg",
// //     "/MY-Project/shoes18.jpg",
// //      "/MY-Project/shoes19.jpg",
// //       "/MY-Project/shoes20.jpg",
      
// //   ];

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
// //       );
// //     }, 2000);
// //     return () => clearInterval(interval);
// //   }, [images.length]);
  
// //   // 👈 Prev Slide
// //   const prevSlide = () => {
// //     setCurrentIndex((prev) =>
// //       prev === 0 ? images.length - 1 : prev - 1
// //     );
// //   };

// //   // 👉 Next Slide
// //   const nextSlide = () => {
// //     setCurrentIndex((prev) =>
// //       prev === images.length - 1 ? 0 : prev + 1
// //     );
// //   };

// //   return (
// //     <div className="p-4">
// //       <div className="items-center mb-4">
// //         <h1 className="text-3xl font-bold hover:animate-bounce text-center mt-3">
// //           WELCOME TO AURA SHOES
// //         </h1>
// //       </div>


// //       <div>
// //         <h1 className="text-lg text-gray-700 font-semibold hover:animate-bounce mb-2 text-center">
// //           Browse our products and start shopping now!
// //         </h1>
// //         <h2 className="hover:animate-bounce text-center font-bold">
// //           Our Products 🛍️
// //         </h2>
// //       </div>
      
// //       {/* ✅ Add Search Bar just below heading */}
// //       <SearchBar />

// //       <SubNavbar />

// //       <div className="w-full h-[400px] my-6 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 flex items-center justify-center">
// //         <img
// //           src={images[currentIndex]}
// //           alt="Shoe Slider"
// //           className="w-full h-full object-contain transition-all duration-700"
// //         />
        

// //         {/* Prev Button */}
// //         <button
// //           onClick={prevSlide}
// //           className=" ml-3 absolute left-4 bg-white bg-opacity-70 text-black text-xl p-2 rounded-full hover:bg-opacity-100 transition"
// //         >
// //           ❮
// //         </button>

// //         {/* Next Button */}
// //         <button
// //           onClick={nextSlide}
// //           className="mr-3 absolute right-4 bg-white bg-opacity-70 text-black text-xl p-2 rounded-full hover:bg-opacity-100 transition"
// //         >
// //           ❯
// //         </button>
// //       </div>

// //      {/* Product Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
// //         {products.map((item) => (
// //           <div
// //             key={item.id}
// //             onClick={() => navigate(`/product/${item.id}`)}
// //             className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden flex flex-col"
// //           >
// //             {/* Images with hover effect */}
// //             <div className="relative w-full h-[300px] flex items-center justify-center bg-gray-100 overflow-hidden group">
// //               <img
// //                 src={item.images[0]}
// //                 alt={item.name}
// //                 className="max-h-full max-w-full object-contain absolute inset-0 mx-auto transition-opacity duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-105"
// //               />
// //               <img
// //                 src={item.images[1] || item.images[0]}
// //                 alt={`${item.name} hover`}
// //                 className="max-h-full max-w-full object-contain absolute inset-0 mx-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
// //               />
// //             </div>

// //             {/* Product Info */}
// //             <div className="p-4 flex flex-col flex-grow justify-between text-center">
// //               <h3 className="font-semibold text-gray-800 text-lg line-clamp-2">
// //                 {item.name}
// //               </h3>
// //               <p className="text-green-600 font-bold mt-2">Rs {item.price}</p>
// //               <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
// //                 View Details
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import SearchBar from "../Components/SearchBar";
// // import SubNavbar from "../Components/SubNavbar";
// // import { products } from "../Pages/products"; // ✅ import your products array

// // const Home = () => {
// //   const navigate = useNavigate();

// //   // Slider Images
// //   const images = [
// //     "/MY-Project/shoes1.jpg",
// //     "/MY-Project/shoes2.jpg",
// //     "/MY-Project/shoes11.jpg",
// //     "/MY-Project/shoes12.jpg",
// //     "/MY-Project/shoes13.jpg",
// //     "/MY-Project/shoes14.jpg",
// //     "/MY-Project/shoes15.jpg",
// //     "/MY-Project/shoes16.jpg",
// //     "/MY-Project/shoes17.jpg",
// //     "/MY-Project/shoes18.jpg",
// //     "/MY-Project/shoes19.jpg",
// //     "/MY-Project/shoes20.jpg",
// //   ];

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
// //       );
// //     }, 2000);
// //     return () => clearInterval(interval);
// //   }, [images.length]);

// //   const prevSlide = () => {
// //     setCurrentIndex((prev) =>
// //       prev === 0 ? images.length - 1 : prev - 1
// //     );
// //   };

// //   const nextSlide = () => {
// //     setCurrentIndex((prev) =>
// //       prev === images.length - 1 ? 0 : prev + 1
// //     );
// //   };

// //   return (

    
// //     <div className="w-full min-h-screen bg-gray-50 p-4">
// //       <h2 className="text-3xl font-bold text-center mb-6 text-black mt-6">
// //         Our Products 🛍️
// //       </h2>

// //       {/* Search & SubNavbar */}
// //       <SearchBar />
// //       <SubNavbar />

// //       {/* Slider */}
// //       <div className="relative w-full h-[400px] my-6 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 flex items-center justify-center">
// //         <img
// //           src={images[currentIndex]}
// //           alt="Product Slider"
// //           className="w-full h-full object-contain transition-all duration-700"
// //         />
// //         <button
// //           onClick={prevSlide}
// //           className="absolute left-4 bg-white bg-opacity-70 text-black text-xl p-2 rounded-full hover:bg-opacity-100 transition"
// //         >
// //           ❮
// //         </button>
// //         <button
// //           onClick={nextSlide}
// //           className="absolute right-4 bg-white bg-opacity-70 text-black text-xl p-2 rounded-full hover:bg-opacity-100 transition"
// //         >
// //           ❯
// //         </button>
// //       </div>

// //       {/* Product Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
// //         {products.map((item) => (
// //           <div
// //             key={item.id}
// //             onClick={() => navigate(`/product/${item.id}`)}
// //             className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden flex flex-col"
// //           >
// //             {/* Images with hover effect */}
// //             <div className="relative w-full h-[300px] flex items-center justify-center bg-gray-100 overflow-hidden group">
// //               <img
// //                 src={item.images[0]}
// //                 alt={item.name}
// //                 className="max-h-full max-w-full object-contain absolute inset-0 mx-auto transition-opacity duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-105"
// //               />
// //               <img
// //                 src={item.images[1] || item.images[0]}
// //                 alt={`${item.name} hover`}
// //                 className="max-h-full max-w-full object-contain absolute inset-0 mx-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
// //               />
// //             </div>

// //             {/* Product Info */}
// //             <div className="p-4 flex flex-col flex-grow justify-between text-center">
// //               <h3 className="font-semibold text-gray-800 text-lg line-clamp-2">
// //                 {item.name}
// //               </h3>
// //               <p className="text-green-600 font-bold mt-2">Rs {item.price}</p>
// //               <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
// //                 View Details
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import SearchBar from "../Components/SearchBar";
// import SubNavbar from "../Components/SubNavbar";
// import { products } from "../Pages/products"; // ✅ import your products array

// const Home = () => {
//   const navigate = useNavigate();

//   // Slider Images
//   const images = [
//     "/MY-Project/shoes1.jpg",
//     "/MY-Project/shoes2.jpg",
//     "/MY-Project/shoes11.jpg",
//     "/MY-Project/shoes12.jpg",
//     "/MY-Project/shoes13.jpg",
//     "/MY-Project/shoes14.jpg",
//     "/MY-Project/shoes15.jpg",
//     "/MY-Project/shoes16.jpg",
//     "/MY-Project/shoes17.jpg",
//     "/MY-Project/shoes18.jpg",
//     "/MY-Project/shoes19.jpg",
//     "/MY-Project/shoes20.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <div className=" p-4">
//       {/* ✅ Welcome Section */}
//       <div className="items-center mb-4">
//         <h1 className="text-3xl font-bold hover:animate-bounce text-center mt-3 mb-2">
//           Welcome to AURA Shoes
//         </h1>
//         <h1 className="text-lg text-gray-800 font-semibold hover:animate-bounce mb-2 text-center">
//           Browse our products and start shopping now!
//         </h1>
//          <h2 className="hover:animate-bounce text-center font-bold">
//         Our Products 🛍️
//       </h2>
//       </div>

//       {/* Search & SubNavbar */}
//       <SearchBar />
//       <SubNavbar />

//       {/* Slider */}
//       <div className="relative w-full h-[400px] my-6 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 flex items-center justify-center">
//         <img
//           src={images[currentIndex]}
//           alt="Product Slider"
//           className="w-full h-full object-contain transition-all duration-700"
//         />
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 bg-white bg-opacity-70 text-black text-xl p-2 rounded-full hover:bg-opacity-100 transition"
//         >
//           ❮
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 bg-white bg-opacity-70 text-black text-xl p-2 rounded-full hover:bg-opacity-100 transition"
//         >
//           ❯
//         </button>
//       </div>

//       {/* Our Products Section Heading */}
     

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
//         {products.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => navigate(`/product/${item.id}`)}
//             className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden flex flex-col"
//           >
//             {/* Images with hover effect */}
//             <div className="relative w-full h-[300px] flex items-center justify-center bg-gray-100 overflow-hidden group">
//               <img
//                 src={item.images[0]}
//                 alt={item.name}
//                 className="max-h-full max-w-full object-contain absolute inset-0 mx-auto transition-opacity duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-105"
//               />
//               <img
//                 src={item.images[1] || item.images[0]}
//                 alt={`${item.name} hover`}
//                 className="max-h-full max-w-full object-contain absolute inset-0 mx-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
//               />
//             </div>

//             {/* Product Info */}
//             <div className="p-4 flex flex-col flex-grow justify-between text-center">
//               <h3 className="font-semibold text-gray-800 text-lg line-clamp-2">
//                 {item.name}
//               </h3>
//               <p className="text-green-600 font-bold mt-2">Rs {item.price}</p>
//               <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import SubNavbar from "../Components/SubNavbar";
import { products } from "../Pages/products"; 

const Home = () => {
  const navigate = useNavigate();

  const images = [
    "/MY-Project/shoes1.jpg",
    "/MY-Project/shoes2.jpg",
    "/MY-Project/shoes11.jpg",
    "/MY-Project/shoes12.jpg",
    "/MY-Project/shoes13.jpg",
    "/MY-Project/shoes14.jpg",
    "/MY-Project/shoes15.jpg",
    "/MY-Project/shoes16.jpg",
    "/MY-Project/shoes17.jpg", 
    "/MY-Project/shoes18.jpg",
    "/MY-Project/shoes19.jpg",
    "/MY-Project/shoes20.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
      
      {/* Top Heading */}
      <div className="text-center mt-6 mb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Welcome to AURA Shoes 
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2 hover:animate-bounce">
          Browse our products and start shopping now!
        </p>
         {/* Our Products */}
      <h2 className="text-2xl sm:text-2xl font-bold text-center mb-6 text-black">
        Our Products 🛍️
      </h2>
      </div>

      {/* Search Bar & Sub Navbar */}
      <SearchBar />
      <SubNavbar />   

      {/* Slider Section */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] my-6 rounded-2xl shadow-lg overflow-hidden 
                      bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 flex items-center justify-center">

        <img
          src={images[currentIndex]}
          alt="Product Slider"
          className="w-full h-full object-contain transition-all duration-700"
        />

        {/* Slider Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-4 bg-white bg-opacity-70 text-black text-lg sm:text-xl p-1 sm:p-2 
                     rounded-full hover:bg-opacity-100 transition"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-4 bg-white bg-opacity-70 text-black text-lg sm:text-xl p-1 sm:p-2 
                     rounded-full hover:bg-opacity-100 transition"
        >
          ❯
        </button>
      </div>

     

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 sm:px-4 md:px-6 pb-10">

        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer 
                       overflow-hidden flex flex-col"
          >
            {/* Product Image with Hover Change */}
            <div className="relative w-full h-[260px] sm:h-[280px] md:h-[300px] flex items-center justify-center 
                            bg-gray-100 overflow-hidden group">
              
              <img
                src={item.images[0]}
                alt={item.name}
                className="max-h-full max-w-full object-contain absolute inset-0 mx-auto  
                           transition-opacity duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-105"
              />

              <img
                src={item.images[1] || item.images[0]}
                alt={`${item.name} hover`}
                className="max-h-full max-w-full object-contain absolute inset-0 mx-auto 
                           transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between text-center">
              <h3 className="font-semibold text-gray-800 text-base sm:text-lg line-clamp-2">
                {item.name}
              </h3>

              <p className="text-green-600 font-bold mt-2">Rs {item.price}</p>

              <button className="mt-3 px-3 py-2 sm:px-4 sm:py-2 bg-green-600 text-white rounded-lg 
                                 hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Home; 
