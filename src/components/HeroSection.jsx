import React from "react";
function HeroSection({ title, subtitle, bgImage }) {
  return (
    <div
      className="relative w-full h-80 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 text-center max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
