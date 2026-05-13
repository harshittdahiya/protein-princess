function ProductCard({ title, flavor, description }) {
  return (
    <div className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl p-6 shadow-xl shadow-pink-100 hover:scale-105 transition duration-300">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-300 mb-5"></div>

      <h2 className="text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="text-pink-500 font-medium mt-1">
        {flavor}
      </p>

      <p className="text-gray-600 mt-4 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ProductCard;