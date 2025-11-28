import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import bgImage from "../../public/images/homebg.avif";

function HomePage() {
  const API_URL = "http://localhost:5000/products";
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.category === "phone");
        setHomeData(filteredData);
      })
      .catch((error) => console.log("Fetching failed"));
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <Navbar />

      <HeroSection
        title="Welcome to Home"
        subtitle="Discover our latest flagship device."
        bgImage={bgImage}
      />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
          Featured Product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-3 ">
          {homeData.map((data) => (
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
}

export default HomePage;
