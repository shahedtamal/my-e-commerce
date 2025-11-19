import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        {/* Animation Container */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="text-6xl font-bold text-gray-700">404</div>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Sorry, the page you are looking for has been removed, renamed, or is
          temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
          >
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
