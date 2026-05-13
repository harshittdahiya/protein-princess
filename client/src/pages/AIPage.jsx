import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";

function AIPage() {
  return (
    <div className="min-h-screen bg-blush-light dark:bg-[#05060a] text-gray-900 dark:text-white px-4 sm:px-6 lg:px-10 py-6 transition-all duration-300 relative">
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold text-gray-800">
          Princess AI ✨
        </h1>

        <p className="text-gray-500 mt-3">
          Your wellness bestie for fitness, motivation, and consistency.
        </p>

      </div>

      {/* CHAT CONTAINER */}
      <div className="bg-white/70 dark:bg-[#111827] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] shadow-2xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)] h-[75vh] flex flex-col overflow-hidden">

        {/* CHAT AREA */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* USER MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end"
          >
            <div className="bg-pink-400 text-white px-5 py-4 rounded-[2rem] max-w-[80%]">
              How do I stay consistent with workouts?
            </div>
          </motion.div>

          {/* AI MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-pink-50 dark:bg-pink-500/10 border border-pink-100 dark:border-white/10 text-gray-700 dark:text-zinc-200 px-5 py-4 rounded-[2rem] max-w-[80%]">
              Focus on consistency over perfection 💖
              Start with small achievable goals and build habits slowly.
            </div>
          </motion.div>

        </div>

        {/* INPUT AREA */}
        <div className="border-t border-pink-100 dark:border-white/10 p-4 flex gap-3">

          <input
            type="text"
            placeholder="Ask Princess AI anything..."
            className="flex-1 px-5 py-4 rounded-full border border-pink-100 dark:border-white/10 bg-white dark:bg-[#111827] text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-500"
          />

          <button className="bg-pink-400 hover:bg-pink-500 text-white px-6 rounded-full shadow-lg shadow-pink-200 transition">
            Send
          </button>

        </div>

      </div>
    </div>
  );
}

export default AIPage;