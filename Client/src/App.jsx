// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import SplashScreen from "./Components/SplashScreen";

// import Home from "./Pages/Home";
// import Cart from "./Pages/Cart";
// import Checkout from "./Pages/Checkout";
// import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
// import AdminDashboard from "./Pages/AdminDashboard";
// import ProductDetail from "./Pages/ProductDetails";
// import Sneakers from "./Pages/Sneakers";
// import SneakerDetails from "./Pages/SneakerDetails";
// import Women from "./Pages/Women";
// import WomenDetails from "./Pages/WomenDetails";
// import Kidz from "./Pages/Kidz";
// import KidzDetails from "./Pages/KidzDetails";

// // ✅ Cart Context
// import { CartProvider } from "./Context/CartContext";

// // ✅ Toastify
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     document.title = "AURA SHOES";
//     const timer = setTimeout(() => setShowSplash(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   // 🔥 Splash Screen
//   if (showSplash) return <SplashScreen />;

//   return (
//     <CartProvider>
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           {/* Navbar */}
//           <Navbar />

//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/home" element={<Home />} />

//               <Route path="/kidz" element={<Kidz />} />
//               <Route path="/kidz/:id" element={<KidzDetails />} />

//               <Route path="/women" element={<Women />} />
//               <Route path="/women/:id" element={<WomenDetails />} />

//               <Route path="/sneakers" element={<Sneakers />} />
//               <Route path="/sneaker/:id" element={<SneakerDetails />} />

//               <Route path="/product/:id" element={<ProductDetail />} />

//               <Route path="/cart" element={<Cart />} />
//               <Route path="/checkout" element={<Checkout />} />

//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />

//               <Route path="/admin" element={<AdminDashboard />} />
//             </Routes>
//           </main>

//           {/* Footer */}
//           <Footer />

//           {/* 🔔 Toast notifications */}
//           <ToastContainer 
//             position="top-right"
//             autoClose={4000}
//             hideProgressBar={false}
//             newestOnTop={true}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//           />
//         </div>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;



import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SplashScreen from "./Components/SplashScreen";

// Pages
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AdminDashboard from "./Pages/AdminDashboard";
import ProductDetail from "./Pages/ProductDetails";
import Sneakers from "./Pages/Sneakers";
import SneakerDetails from "./Pages/SneakerDetails";
import Women from "./Pages/Women";
import WomenDetails from "./Pages/WomenDetails";
import Kidz from "./Pages/Kidz";
import KidzDetails from "./Pages/KidzDetails";

// Cart Context
import { CartProvider } from "./Context/CartContext";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    document.title = "AURA SHOES";
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // 🔥 Splash Screen
  if (showSplash) return <SplashScreen />;

  return (
    <CartProvider>
      {/* ✅ GitHub Pages compatible Router */}
      <Router basename="/MY-Project">
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="/kidz" element={<Kidz />} />
              <Route path="/kidz/:id" element={<KidzDetails />} />

              <Route path="/women" element={<Women />} />
              <Route path="/women/:id" element={<WomenDetails />} />

              <Route path="/sneakers" element={<Sneakers />} />
              <Route path="/sneaker/:id" element={<SneakerDetails />} />

              <Route path="/product/:id" element={<ProductDetail />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* 🔔 Toast notifications */}
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
