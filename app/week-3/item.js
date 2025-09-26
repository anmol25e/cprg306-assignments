// /app/week-3/item.js
export default function Item({ item }) {
  return (
    <div className="bg-slate-800 text-white rounded p-4 m-2 w-full max-w-md">
      <h2 className="font-bold">{item.name}</h2>
      <p>Buy {item.quantity} in {item.category}</p>
    </div>
  );
}
