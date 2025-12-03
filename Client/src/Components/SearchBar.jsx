

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
// import { MdCategory } from "react-icons/md";
// import { FiShoppingCart } from "react-icons/fi";
// import { useCart } from "../Context/CartContext"; // path correct ho

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const [showMenu, setShowMenu] = useState(false);
//   const navigate = useNavigate();
//   const { cart } = useCart(); // Cart ka data

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const term = query.toLowerCase().trim();

//     if (term.includes("sneaker")) navigate("/sneakers");
//     else if (term.includes("jogger")) navigate("/joggers");
//     else if (term.includes("women")) navigate("/women");
//     else if (term.includes("kidz")) navigate("/kidz");
//     else navigate("/");

//     setQuery("");
//   };

//   const handleCategoryClick = (path) => {
//     navigate(path);
//     setShowMenu(false);
//   };

//   return (
//     <div className="flex justify-center items-center my-4 ml-9 relative">
//       {/* 🔍 Search Bar */}
//       <form
//         onSubmit={handleSearch}
//         className="flex w-1/2 shadow-md rounded-lg overflow-hidden border border-gray-300"
//       >
//         <input
//           type="text"
//           placeholder="Search for sneakers, joggers, women shoes, kids shoes..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="flex-1 px-4 py-2 focus:outline-none"
//         />
//       </form>

//       {/* Search Button */}
//       <button
//         type="submit"
//         onClick={handleSearch}
//         className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-900 ml-3"
//       >
//         <FaSearch /> Search
//       </button>

//       {/* Categories Button */}
//       <div
//         className="ml-3 relative flex flex-col items-center"
//         onMouseEnter={() => setShowMenu(true)}
//         onMouseLeave={() => setShowMenu(false)}
//       >
//         <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-900">
//           <MdCategory size={18} /> Categories
//         </button>

//         {/* Dropdown Menu */}
//         {showMenu && (
//           <div
//             className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
//             style={{ left: "50%", transform: "translateX(-50%)" }}
//           >
//             <ul className="flex flex-col text-gray-800 font-medium">
//               <li
//                 onClick={() => handleCategoryClick("/sneakers")}
//                 className="px-4 py-2 hover:font-extrabold cursor-pointer"
//               >
//                 Sneakers
//               </li>
//               <li
//                 onClick={() => handleCategoryClick("/joggers")}
//                 className="px-4 py-2 hover:font-extrabold cursor-pointer"
//               >
//                 Joggers
//               </li>
//               <li
//                 onClick={() => handleCategoryClick("/women")}
//                 className="px-4 py-2 hover:font-extrabold cursor-pointer"
//               >
//                 Women Shoes
//               </li>
//               <li
//                 onClick={() => handleCategoryClick("/kidz")}
//                 className="px-4 py-2 hover:font-extrabold cursor-pointer"
//               >
//                 Kids Shoes
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* 🛒 Cart Icon */}
//       <Link to="/cart" className="ml-4 relative">
//         <FiShoppingCart className="text-2xl text-gray-800 hover:text-gray-600" />
//         {cart.length > 0 && (
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//             {cart.length}
//           </span>
//         )}
//       </Link>
//     </div>
//   );
// };

// export default SearchBar;


// src/Components/SearchBar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Search icon
import { MdCategory } from "react-icons/md"; // Category icon
import { FaCartPlus } from "react-icons/fa6"; // Cart icon
import { useCart } from "../Context/CartContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart(); // Cart context

  // Search function
  const handleSearch = (e) => {
    e.preventDefault();
    const term = query.toLowerCase().trim();

    if (term.includes("sneaker")) navigate("/sneakers");
    else if (term.includes("jogger")) navigate("/joggers");
    else if (term.includes("women")) navigate("/women");
    else if (term.includes("kidz")) navigate("/kidz");
    else navigate("/");

    setQuery("");
  };

  // Category click
  const handleCategoryClick = (path) => {
    navigate(path);
    setShowMenu(false);
  };

  return (
    <div className="flex justify-center items-center my-4 ml-9 relative">

      {/* 🔍 Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex w-1/2 shadow-md rounded-lg overflow-hidden border border-gray-300"
      >
        <input
          type="text"
          placeholder="Search for sneakers, joggers, women shoes, kids shoes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center pl-5 gl-3  hover:bg-gray-900"
        >
          <FaSearch size={16} /> Search
        </button>
      </form>

      {/* 🏷️ Categories Button */}
      <div
        className="ml-3 relative flex flex-col items-center"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-900">
          <MdCategory size={18} /> Categories
        </button>

        {/* 🔽 Dropdown Menu */}
        {showMenu && (
          <div
            className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <ul className="flex flex-col text-gray-800 font-medium">
              <li
                onClick={() => handleCategoryClick("/sneakers")}
                className="px-4 py-2 hover:font-extrabold cursor-pointer"
              >
                Sneakers
              </li>
              <li
                onClick={() => handleCategoryClick("/joggers")}
                className="px-4 py-2 hover:font-extrabold cursor-pointer"
              >
                Joggers
              </li>
              <li
                onClick={() => handleCategoryClick("/women")}
                className="px-4 py-2 hover:font-extrabold cursor-pointer"
              >
                Women Shoes
              </li>
              <li
                onClick={() => handleCategoryClick("/kidz")}
                className="px-4 py-2 hover:font-extrabold cursor-pointer"
              >
                Kids Shoes
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* 🛒 Cart Icon */}
      <div className="ml-6 relative">
      <FaCartPlus 
          size={24}
          className="text-gray-800 hover:text-gray-600 cursor-pointer"
          onClick={() => navigate("/cart")}
        />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
