

// import React from "react";
// import { Link } from "react-router-dom";


// function Navbar() {
//   return (
//     // <nav style ={{
//     //   // background: "#0f172a",
//     //   background:""
//     // }}
//     <header className="shadow-md">

//     <nav 
//     className="bg-orange-700 text-white p-4 flex justify-between items-center shadow-md">
//       <div className="flex items-center gap-2">
//         {/* Text aur logo ek line me */}
//         <span className="text-3xl font-bold text-gray-800 flex items-center pl-8 ">
//           Aura Shoes  <img
//         className=""
//           src="/MY-Project/green shoes-logo.png"
//           alt="Aura Shoes Logo"
//           style={{ width: "110px", height: "110px" }} 


//         />
//         </span>

//       </div>
//       {/* Buttons */}
//       {/* <div className="space-x-3">
//         <Link
//           to="/"
//           className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100  hover:animate-bounce"
//         >
//           Home
//         </Link>
//         <Link
//           to="/cart"
//           className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100  hover:animate-bounce"
//         >
//           Cart
//         </Link>
//         <Link
//           to="/login"
//           className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100  hover:animate-bounce"
//         >
//           Login
//         </Link>
//       </div> */}
//     </nav>
//     <nav className="bg-slate-800 text-white">
//         <ul className="flex justify-center space-x-8 py-3 font-medium">
//           <li className="cursor-pointer hover:text-yellow-400">Home</li>
//           <li className="cursor-pointer hover:text-yellow-400">Men</li>
//           <li className="cursor-pointer hover:text-yellow-400">Women</li>
//           <li className="cursor-pointer hover:text-yellow-400">Kids</li>
//           <li className="cursor-pointer hover:text-yellow-400">Sale</li>
//         </ul>
//       </nav>
//     </header>

//   );
// }

// export default Navbar;
// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <header className="shadow-md">

//       <nav className="bg-gradient-to-r from-gray-900 via-green-600 to-gray-900
//                        p-4 flex justify-center items-center shadow-md">
//         <div className="flex items-center gap-2">
//           <span className="text-3xl font-bold text-gray-800 flex items-center">
//             Aura Shoes
//             <img
//               src="/MY-Project/green-shoes-logo.png"
//               alt="Aura Shoes Logo"

//               className="w-[80px] h-[80px] ml-2"
//             />
//           </span>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="shadow-md">
      <nav className="bg-gradient-to-r from-gray-900 via-green-600 to-gray-900
                       p-4 flex justify-center items-center shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-gray-800 flex items-center">
            Aura Shoes
            <img
              src="/MY-Project/green-shoes-logo.png"
              alt="Aura Shoes Logo"
              className="w-[80px] h-[80px] ml-2"
            />
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
