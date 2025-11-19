import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  // সেইম প্রোডাক্ট ডাটা
  const product = {
    title: "iPhone 17 Pro - Silver",
    description:
      "Experience the future with the stunning Silver Titanium finish and A19 Pro chip.",
    price: "$1199",
    image:
      "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?q=80&w=1534&auto=format&fit=crop",
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <Navbar />

      <HeroSection
        title="Our Exclusive Products"
        subtitle="Browse through our wide collection of items."
        bgImage="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1480&auto=format&fit=crop"
      />

      {/* বাম পাশে এলাইনমেন্ট সেকশন */}
      <div className="container mx-auto p-8">
        {/* টাইটেল: বাম পাশে */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
          Latest Arrival
        </h2>

        {/* কার্ড কন্টেইনার: বাম পাশে */}
        <div className="flex justify-start">
          <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
