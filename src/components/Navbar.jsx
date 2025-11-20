import React from "react";
import { Link } from "react-router-dom";
const CartIcon = () => <span className="text-2xl">🛒</span>;

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div
        className="relative h-12 w-40 rounded-lg overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop&q=60")', // ব্যাকগ্রাউন্ড ইমেজ
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <span className="relative text-white font-bold text-lg z-10 uppercase tracking-wider">
          My E-Com
        </span>
      </div>

      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-gray-700 font-semibold hover:text-blue-600 transition"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="text-gray-700 font-semibold hover:text-purple-600 transition"
        >
          Products
        </Link>

        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition relative">
          <CartIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
