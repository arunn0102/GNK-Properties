export default function ServiceCard({ title, desc }) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
