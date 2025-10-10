"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-black pt-10">
      <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-md">
        
        <span className="text-lg font-extrabold text-gray-900 border border-gray-400 rounded-md px-3 py-1">
          {quantity}
        </span>

        
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-md text-white font-bold ${
            quantity === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-400 hover:bg-gray-500"
          }`}
        >
          -
        </button>


        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-md text-white font-bold ${
            quantity === 20
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
