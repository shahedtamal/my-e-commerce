import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
function CartPage() {
  const [cartData, setCartData] = useState([]);
  const [isFlag, setIsFlag] = useState(false);
  function fetchCartItems() {
    fetch(import.meta.env.VITE_CART_API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
      })
      .catch((error) => console.log("Fetching failed"));
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Static totals
  const itemCount = 5;
  const subtotal = 5795;
  const shipping = 0;
  const total = 5795;
  let cartTotal = 0;
  for (const item of cartData) {
    const price = Number(item.price.replace("$", ""));
    cartTotal = cartTotal + price;
  }
  async function Delete(item) {
    let choice = window.confirm("are you ok?");
    if (choice) {
      await fetch(`${import.meta.env.VITE_CART_API_URL}/${item.id}`, {
        method: "DELETE",
      });
      setIsFlag((prev) => !prev);
      console.log({ isFlag });
      setCartData(cartData.filter((data) => data.id !== item.id));
    } else {
      return;
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <Navbar isUpdated={isFlag} />

      <HeroSection
        title="Your Shopping Cart"
        subtitle={`You have ${itemCount} items in your cart`}
        bgImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop"
      />

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Cart Items ({itemCount})
              </h2>

              <div className="space-y-6">
                {cartData.map((item) => (
                  <div key={item.id} className="flex border-b pb-6">
                    {/* Product Image */}
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="ml-6 flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-blue-600 font-bold text-lg mt-2">
                            {item.price}
                          </p>
                          <p className="text-gray-500 mt-2">
                            Quantity: {item.quantity}
                          </p>
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => Delete(item)}
                          className="text-red-500 hover:text-red-700 h-8"
                        >
                          Delete
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-gray-700">
                          Item Total:{" "}
                          <span className="font-bold">
                            $
                            {parseInt(item.price.replace("$", "")) *
                              item.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-8 pt-6 border-t">
                <a
                  href="/products"
                  className="text-blue-600 hover:text-blue-800"
                >
                  ← Continue Shopping
                </a>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${cartTotal}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">FREE</span>
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${cartTotal}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700">
                Proceed to Checkout
              </button>

              {/* Simple Note */}
              <p className="mt-6 text-sm text-gray-500 text-center">
                Secure checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
