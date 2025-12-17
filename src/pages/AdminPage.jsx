import React from "react";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-8 bg-white p-10 rounded-xl shadow-xl border border-gray-100 max-w-md w-full">
        {/* --- Header --- */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-2">
            Welcome To Admin Dashboard
          </h1>
          <p className="text-gray-500">Manage your inventory efficiently</p>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <Link
            to="/admin/addproduct"
            className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 w-full"
          >
            <span className="text-lg">Add Product</span>
            {/* Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>

          <Link
            to="/admin/allproducts"
            className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1 w-full"
          >
            <span className="text-lg">All Products</span>
            {/* List Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
