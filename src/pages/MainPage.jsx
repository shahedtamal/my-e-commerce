import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        My E-Commerce Project
      </h1>

      <div className="space-y-4 w-full max-w-md px-4">
        {/* Home Page Link */}
        <Link to="/home" className="block w-full">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition duration-300 flex items-center justify-between border-l-4 border-blue-500">
            <span className="text-xl font-semibold text-blue-700">
              🏠 Go to Home Page
            </span>
            <span className="text-gray-400">→</span>
          </div>
        </Link>

        {/* Product Page Link */}
        <Link to="/products" className="block w-full">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-50 transition duration-300 flex items-center justify-between border-l-4 border-purple-500">
            <span className="text-xl font-semibold text-purple-700">
              🛍️ Go to Product Page
            </span>
            <span className="text-gray-400">→</span>
          </div>
        </Link>
      </div>

      <p className="text-gray-500 mt-8 text-sm">Select a page to navigate</p>
    </div>
  );
}
