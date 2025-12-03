import React from "react";

const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <img
        src="/MY-Project/green-shoes-logo.png"
        alt="Aura Shoes Logo"
        className="w-40 h-40 mb-6 animate-pulse"
      />
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to <span className="text-green-600">Aura Shoes</span>
      </h1>
    </div>
  );
};

export default SplashScreen;
