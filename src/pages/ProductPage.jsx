import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const productData = [
    {
      id: 1,
      title: "dji mini 5 pro",
      description: "Experience the future with the stunning avoidance system.",
      price: "$1199",
      image: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg",
    },
    {
      id: 2,
      title: "dji mavic",
      description: "Bigger screen, better battery, same stunning performance.",
      price: "$1299",
      image:
        "https://images.pexels.com/photos/13310710/pexels-photo-13310710.jpeg",
    },
    {
      id: 3,
      title: "mavic 2",
      description: "Classic black finish for the professional look.",
      price: "$999",
      image:
        "https://images.pexels.com/photos/18286450/pexels-photo-18286450.jpeg",
    },
  ];
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <Navbar />

      <HeroSection
        title="Our Exclusive Products"
        subtitle="Browse through our wide collection of items."
        bgImage="https://media.istockphoto.com/id/2023247790/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E9%9D%92%E7%A9%BA%E3%82%92%E8%83%8C%E6%99%AF%E3%81%AB%E8%BE%B2%E6%A5%AD%E7%94%A8%E3%83%89%E3%83%AD%E3%83%BC%E3%83%B3.jpg?s=1024x1024&w=is&k=20&c=QJlqAXBZF06yM4dSTNpVMVkDT-97V9KaGouVm2axKWk="
      />

      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
          Latest Arrival
        </h2>

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

export default ProductPage;
