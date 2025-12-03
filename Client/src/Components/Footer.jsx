
// import React from 'react'
// import { FaWhatsapp } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer
//       className="relative bg-cover bg-center bg-no-repeat text-white"
//       style={{ backgroundImage: "url('/MY-Project/cropped_shoes.jpg')" }}
//     >

//       <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>


//       <div className="relative z-10 container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">


//         <div>
//           <h2 className="text-3xl font-bold mb-4">Aura Shoes</h2>
//           <p className="text-gray-300">
//             Step into comfort and style with Aura Shoes. Quality footwear that keeps you moving forward.
//           </p>
//         </div>


//         <div>
//           <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-yellow-400">Home</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Men</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Women</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Kids</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Sale</a></li>
//           </ul>
//         </div>


//         <div>
//           <h3 className="text-xl font-semibold mb-4">Quick Information</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
//             <li><a href="#" className="hover:text-yellow-400">Shipment & Return Policy</a></li>
//             <li><a href="#" className="hover:text-yellow-400">FAQs</a></li>
//           </ul>
//         </div>


//         <div>
//           <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
//           <p className="text-gray-300 mb-4">
//             Subscribe to our newsletter for the latest offers & styles.
//           </p>
//           <div className="flex mb-6">
//             <input
//               type="email"
//               placeholder="Enter Your E-mail"
//               className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
//             />
//             <button className="bg-yellow-500 px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-600">
//               Subscribe
//             </button>
//           </div>


//           <div className="space-y-2">
//             <p className="flex items-center gap-2">
//               <FaWhatsapp className="text-green-400 text-xl" />
//               +92 300 1234567
//             </p>
//             <p className="flex items-center gap-2">
//               <FaWhatsapp className="text-green-400 text-xl" />
//               +92 333 9876543
//             </p>
//           </div>
//         </div>
//       </div>


//       <div className="relative z-10 text-center py-4 border-t border-gray-600">
//         <p className="text-sm text-gray-300">
//           &copy; {new Date().getFullYear()} Aura Shoes. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   )
// }

// export default Footer
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [showMenMenu, setShowMenMenu] = useState(false);

  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/MY-Project/cropped_shoes.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ===== BRAND INFO ===== */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Aura Shoes</h2>
          <p className="text-gray-300">
            Step into comfort and style with Aura Shoes. Quality footwear that keeps you moving forward.
          </p>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 relative">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>

            {/* ✅ MEN DROPDOWN MENU */}
            <li
              className="relative"
              onMouseEnter={() => setShowMenMenu(true)}
              onMouseLeave={() => setShowMenMenu(false)}
            >
              <span className="hover:text-yellow-400 cursor-pointer">Men ▾</span>

              {showMenMenu && (
                <ul className="absolute left-0 mt-2 bg-black bg-opacity-80 text-white rounded-md shadow-lg w-40 py-2 z-20">
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black"
                    >
                      Joggers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sneakers"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black"
                    >
                      Sneakers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sandals"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black"
                    >
                      Running Shoes
                    </Link>
                  </li>
                </ul>
              )}
            </li>


 





            <li><a href="#" className="hover:text-yellow-400">Women</a></li>
            <li><a href="#" className="hover:text-yellow-400">Kids</a></li>
            <li><a href="#" className="hover:text-yellow-400">Sale</a></li>
          </ul>



          
        </div>

        {/* ===== QUICK INFO ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-400">Shipment & Return Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">FAQs</a></li>
          </ul>
        </div>

        {/* ===== NEWSLETTER & CONTACT ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-4">
            Subscribe to our newsletter for the latest offers & styles.
          </p>
          <div className="flex mb-6">
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-yellow-500 px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-600">
              Subscribe
            </button>
          </div>

          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400 text-xl" />
              +92 300 1234567
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400 text-xl" />
              +92 333 9876543
            </p>
          </div>
        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="relative z-10 text-center py-4 border-t border-gray-600">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Aura Shoes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
