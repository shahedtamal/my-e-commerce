import React, { useState, useEffect } from "react";

function AdminPage() {
  const [products, setProducts] = useState([]);

  // নতুন প্রোডাক্ট আপলোড করার জন্য স্টেট
  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  // ১. সব প্রোডাক্ট ফেচ করা (GET Method)
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Fetching failed", error));
  }, []);

  // ২. ইনপুট ফিল্ডে ভ্যালু চেঞ্জ হ্যান্ডেল করা
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // ৩. নতুন প্রোডাক্ট অ্যাড করা (POST Method)
  async function handleAddProduct() {
    // ভ্যালিডেশন: টাইটেল বা প্রাইস না থাকলে অ্যালার্ট দেবে
    if (!newProduct.title || !newProduct.price) {
      alert("Please fill Title and Price");
      return;
    }

    try {
      const res = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const savedData = await res.json();

      // UI আপডেট করা (পুরো পেজ রিফ্রেশ না করে)
      setProducts([...products, savedData]);

      // ইনপুট ফিল্ড ক্লিয়ার করা
      setNewProduct({
        title: "",
        category: "",
        price: "",
        description: "",
        image: "",
      });
    } catch (error) {
      console.log("Adding product failed", error);
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>

      {/* সিম্পল টেবিল */}
      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr className="bg-gray-200">
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* সব প্রোডাক্ট দেখানোর জন্য লুপ */}
          {products.map((item) => (
            <tr key={item.id} className="text-center">
              <td>{item.id}</td>
              <td>
                <img
                  src={item.image}
                  alt=""
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td style={{ fontSize: "12px" }}>
                {item.description.slice(0, 30)}...
              </td>
              <td>Existing Item</td>
            </tr>
          ))}

          {/* --- ইনপুট রো (নতুন প্রোডাক্ট অ্যাড করার জন্য) --- */}
          <tr className="bg-blue-50">
            <td>Auto</td>
            <td>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={handleInputChange}
                style={{ width: "100%" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newProduct.title}
                onChange={handleInputChange}
                style={{ width: "100%" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newProduct.category}
                onChange={handleInputChange}
                style={{ width: "100%" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleInputChange}
                style={{ width: "100%" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newProduct.description}
                onChange={handleInputChange}
                style={{ width: "100%" }}
              />
            </td>
            <td>
              <button
                onClick={handleAddProduct}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Add Product
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
