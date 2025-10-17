"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Create a copy so we don’t modify the original array
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <section className="flex flex-col items-center">
      {/* Sorting Buttons */}
      <div className="mb-4 flex gap-3">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* Render Items */}
      {sortedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
}
