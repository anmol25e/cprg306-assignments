// /app/week-3/item.js
export default function Item({ item }) {
  return (
    <div className="border p-3 m-2 rounded shadow-md w-60 text-center">
      <h2 className="font-bold">{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p className="text-sm text-gray-600 capitalize">{item.category}</p>
    </div>
  );
}
