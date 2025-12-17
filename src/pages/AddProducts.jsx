// src/pages/AddProducts.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const navigate = useNavigate();

  // ইনপুট স্টেট
  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  // input Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // addproduct handler
  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!newProduct.title || !newProduct.price) {
      alert("Please fill Title and Price");
      return;
    }
    const productTosend = {
      ...newProduct,
      price: `$${newProduct.price}`, // Price => string
    };

    try {
      const res = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productTosend),
      });

      if (res.ok) {
        alert("Product Added Successfully!");
        //success auto all product page e navigate hoye jabe
        navigate("/admin/allproducts");
      }
    } catch (error) {
      console.log("Adding product failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add New Product
        </h2>

        <form className="space-y-4">
          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
              placeholder="Product Name"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category & Price (দুইটি পাশাপাশি) */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
                placeholder="Category"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                placeholder="2000"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              rows="3"
              placeholder="Product details..."
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleAddProduct}
            type="button"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
