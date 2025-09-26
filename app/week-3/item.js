export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded-md shadow-sm mb-2">
      <span className="font-semibold">{name}</span> – {quantity} ({category})
    </li>
  );
}