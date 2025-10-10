"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-2xl w-full max-w-md flex flex-col gap-6
                   border-2 border-gray-700 transition-all duration-300"
      >
        <div className="flex flex-col">
          <label className="text-sm mb-1 text-white">Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 rounded-md text-white border border-gray-600 outline-none focus:border-gray-400"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decrement}
              className="w-8 h-8 bg-gray-700 text-white rounded-l-md font-bold"
            >
              -
            </button>

            <div className="w-12 h-8 flex items-center justify-center bg-gray-800 text-white font-medium">
              {quantity}
            </div>

            <button
              type="button"
              onClick={increment}
              className="w-8 h-8 bg-gray-700 text-white rounded-r-md font-bold"
            >
              +
            </button>
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-md text-white outline-none bg-gray-900 border border-gray-600"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
