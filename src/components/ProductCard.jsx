import React from "react";

function ProductCard({
  image,
  title,
  description,
  price,
  HandleClick,
  isAdded,
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
      <div className="h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <button
            disabled={isAdded}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${
              isAdded
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
            }`}
            onClick={HandleClick}
          >
            {isAdded ? <>✅ Added</> : <>🛒 Add to Cart</>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
