import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);

  // ১. ডাটা লোড করা
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Fetching failed", error));
  }, []);

  // ২. ডিলিট ফাংশন (Delete Functionality)
  const handleDelete = async (id) => {
    // কনফার্মেশন ডায়ালগ
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      try {
        // সার্ভার থেকে ডিলিট রিকোয়েস্ট পাঠানো
        const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          // UI থেকে আইটেমটি সরিয়ে ফেলা (পেইজ রিফ্রেশ ছাড়া)
          const remainingProducts = products.filter((item) => item.id !== id);
          setProducts(remainingProducts);
          alert("Product Deleted Successfully!");
        } else {
          alert("Failed to delete product.");
        }
      } catch (error) {
        console.log("Error deleting product:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Products List</h1>
        <Link to="/admin" className="text-blue-600 hover:underline font-medium">
          &larr; Back to Dashboard
        </Link>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4">S/N</th>
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Description</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  {/* Serial Number */}
                  <td className="p-4 font-medium text-gray-600">{index + 1}</td>

                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded border"
                    />
                  </td>
                  <td className="p-4 font-semibold">{item.title}</td>
                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-green-600">{item.price}</td>

                  {/* Description (Shortened) */}
                  <td className="p-4 text-sm text-gray-500 max-w-xs">
                    {item.description
                      ? item.description.slice(0, 30) + "..."
                      : "No Desc"}
                  </td>

                  {/* Action Button */}
                  <td className="p-4">
                    <button
                      // ৩. এখানে অনক্লিক হ্যান্ডলার যোগ করা হয়েছে
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700 font-bold transition duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-10 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProducts;
