import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import bgImage from "../../public/images/homebg.avif";

const HomePage = () => {
  const productData = [
    {
      id: 1,
      title: "iPhone 17 Pro - Silver",
      description:
        "Experience the future with the stunning Silver Titanium finish.",
      price: "$1199",
      image:
        "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1480&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "iPhone 17 Pro - Max",
      description: "Bigger screen, better battery, same stunning performance.",
      price: "$1299",
      image:
        "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "iPhone 17 - Black",
      description: "Classic black finish for the professional look.",
      price: "$999",
      image:
        "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?q=80&w=1534&auto=format&fit=crop",
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-3 ">
          {productData.map((data) => (
            <ProductCard
              key={data.id}
              image={data.image}
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
