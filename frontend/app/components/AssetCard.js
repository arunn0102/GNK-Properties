export default function AssetCard({ image, title, location, type }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm mt-1 text-slate-700">{type}</p>
      </div>
    </div>
  );
}
