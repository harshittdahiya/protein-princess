import { motion } from "framer-motion";

const posts = [
  {
    name: "Aarohi",
    text: "Completed my first workout today 😭💖",
  },
  {
    name: "Riya",
    text: "Hit my hydration goal for 7 days straight ✨",
  },
  {
    name: "Ananya",
    text: "Finally started going to the gym consistently 👑",
  },
];

function ProgressFeed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-purple-300"></div>

            <div>
              <h3 className="font-semibold text-gray-800 dark:text-zinc-100">
                {post.name}
              </h3>

              <p className="text-sm text-gray-500 dark:text-zinc-400">
                Princess Progress ✨
              </p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
            {post.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default ProgressFeed;