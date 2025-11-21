"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    // Add new item to the start of the list (you can push to end if you prefer)
    setItems((prev) => [item, ...prev]);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>

      {/* New item form */}
      <NewItem onAddItem={handleAddItem} />

      {/* Item list */}
      <ItemList items={items} />
    </main>
  );
}
