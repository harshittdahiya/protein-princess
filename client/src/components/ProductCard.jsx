import { motion } from "framer-motion";

function ProductCard({
  title,
  flavor,
  description,
  image,
  onClick,
}) {

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)] cursor-pointer"
    >

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover rounded-3xl mb-5"
      />

      <h2 className="text-2xl font-bold text-gray-800 dark:text-zinc-100">
        {title}
      </h2>

      <p className="text-pink-500 font-medium mt-1">
        {flavor}
      </p>

      <p className="text-gray-600 dark:text-zinc-300 mt-4 leading-relaxed">
        {description}
      </p>

    </motion.div>
  );
}

export default ProductCard;