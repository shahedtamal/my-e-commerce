import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);

  // State for Editing
  const [editId, setEditId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });
  function getProducts() {
    return fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Fetching failed", error));
  }

  // 1. Fetch Data
  useEffect(() => {
    getProducts();
  }, []);

  // 2. Input Handler
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // 3. Edit Click Handler
  const handleEditClick = (item) => {
    setEditId(item.id);
    setEditFormData(item);
  };

  // 4. Cancel Handler
  const handleCancelClick = () => {
    setEditId(null);
  };

  // 5. Update Function
  const handleUpdate = async () => {
    const productTosend = {
      ...editFormData,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productTosend),
      });

      if (res.ok) {
        const updatedProduct = await res.json();
        setProducts(
          products.map((item) => (item.id === editId ? updatedProduct : item))
        );
        setEditId(null); // Stop editing
        alert("Updated Successfully!");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // 6. Delete Function
  async function Delete(id) {
    let choice = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (choice) {
      await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((item) => item.id !== id));
      alert("Product Deleted Successfully!");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Products List</h1>
        <Link to="/admin" className="text-blue-600 hover:underline font-medium">
          &larr; Back to Dashboard
        </Link>
      </div>

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
                <React.Fragment key={item.id}>
                  {/* --- শর্ত: যদি এই আইটেমটাই এডিট করা হচ্ছে --- */}
                  {editId === item.id ? (
                    <tr className="bg-blue-50 border-b">
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">
                        <input
                          type="text"
                          name="image"
                          value={editFormData.image}
                          onChange={handleEditChange}
                          className="w-full border p-1 rounded"
                          placeholder="Img URL"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          type="text"
                          name="title"
                          value={editFormData.title}
                          onChange={handleEditChange}
                          className="w-full border p-1 rounded"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          type="text"
                          name="category"
                          value={editFormData.category}
                          onChange={handleEditChange}
                          className="w-full border p-1 rounded"
                        />
                      </td>
                      <td className="p-4">
                        <input
                          type="number"
                          name="price"
                          value={editFormData.price}
                          onChange={handleEditChange}
                          className="w-full border p-1 rounded"
                        />
                      </td>
                      <td className="p-4">
                        <textarea
                          name="description"
                          value={editFormData.description}
                          onChange={handleEditChange}
                          className="w-full border p-1 rounded"
                          rows="1"
                        />
                      </td>
                      <td className="p-4 flex gap-2">
                        <button
                          onClick={handleUpdate}
                          className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelClick}
                          className="bg-gray-500 text-white px-2 py-1 rounded text-sm font-bold"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ) : (
                    /* --- শর্ত না মিললে: নরমাল ভিউ --- */
                    <tr className="border-b bg-white hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-600">
                        {index + 1}
                      </td>
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
                      <td className="p-4 font-bold text-green-600">
                        ${item.price}
                      </td>
                      <td className="p-4 text-sm text-gray-500 max-w-xs">
                        {item.description
                          ? item.description.slice(0, 30) + "..."
                          : "No Desc"}
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditClick(item)}
                            className="px-3 py-1 text-sm font-bold text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => Delete(item.id)}
                            className="px-3 py-1 text-sm font-bold text-red-600 border border-red-600 rounded hover:bg-red-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
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
