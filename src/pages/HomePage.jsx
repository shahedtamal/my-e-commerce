import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import bgImage from "../../public/images/homebg.avif";

const HomePage = () => {
  // iPhone 17 Pro ডাটা
  const product = {
    title: "iPhone 17 Pro - Silver",
    description:
      "Experience the future with the stunning Silver Titanium finish and A19 Pro chip.",
    price: "$1199",
    image:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1480&auto=format&fit=crop",
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <Navbar />

      <HeroSection
        title="Welcome to Home"
        subtitle="Discover our latest flagship device."
        bgImage={bgImage}
      />

      {/* বাম পাশে এলাইনমেন্ট সেকশন */}
      <div className="container mx-auto p-8">
        {/* টাইটেল: বাম পাশে */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
          Featured Product
        </h2>

        {/* কার্ড কন্টেইনার: বাম পাশে (justify-start) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
          <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
          <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
          <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
          <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
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

export default HomePage;
