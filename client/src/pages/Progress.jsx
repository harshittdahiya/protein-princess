import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import ProgressChart from "../components/ProgressChart";
import ThemeToggle from "../components/ThemeToggle";

function Progress() {
  return (
    <div className="min-h-screen bg-blush-light dark:bg-[#05060a] text-gray-900 dark:text-white px-4 sm:px-6 lg:px-10 py-6 lg:py-8 transition-all duration-300 relative">
      <div className="absolute top-6 right-6 z-10 lg:hidden">
        <ThemeToggle />
      </div>

      {/* MOBILE TOPBAR */}
      <div className="lg:hidden flex items-center justify-between mb-8">

        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Progress ✨
        </h1>

<button className="bg-pink-400 text-white px-5 py-2 rounded-full shadow-lg shadow-pink-200 transition hover:bg-pink-500">
          Profile
        </button>

      </div>

      {/* DESKTOP TOPBAR */}
      <div className="hidden lg:flex items-center justify-between mb-10">

        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Your Progress 📈
          </h1>

          <p className="text-gray-500 dark:text-zinc-400 mt-2">
            Track consistency, wellness, and fitness growth.
          </p>
        </div>

        <ThemeToggle />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-8">

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
            >
              <p className="text-gray-500 dark:text-zinc-400">
                Workout Streak
              </p>

              <h2 className="text-4xl font-bold text-pink-500 mt-3">
                12
              </h2>

              <p className="text-sm text-gray-400 dark:text-zinc-500 mt-2">
                Days consistent ✨
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
            >
              <p className="text-gray-500 dark:text-zinc-400">
                Calories Burned
              </p>

              <h2 className="text-4xl font-bold text-orange-400 mt-3">
                1,240
              </h2>

              <p className="text-sm text-gray-400 dark:text-zinc-500 mt-2">
                This week 🔥
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
            >
              <p className="text-gray-500 dark:text-zinc-400">
                Protein Goal
              </p>

              <h2 className="text-4xl font-bold text-purple-500 mt-3">
                82%
              </h2>

              <p className="text-sm text-gray-400 dark:text-zinc-500 mt-2">
                Goal completed 💖
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
            >
              <p className="text-gray-500 dark:text-zinc-400">
                Water Intake
              </p>

              <h2 className="text-4xl font-bold text-sky-400 mt-3">
                2.1L
              </h2>

              <p className="text-sm text-gray-400 dark:text-zinc-500 mt-2">
                Daily average 💧
              </p>
            </motion.div>

          </div>

          {/* CHART PLACEHOLDER */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
          >

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Weekly Activity 📊
            </h2>

            <ProgressChart />

          </motion.div>

          {/* ACHIEVEMENTS */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
          >

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Achievements 🏆
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-pink-50 dark:bg-pink-500/10 rounded-[2rem] p-6 text-center">
                <div className="text-5xl mb-4">
                  🔥
                </div>

                <h3 className="font-bold text-gray-800 dark:text-white">
                  7 Day Streak
                </h3>
              </div>

              <div className="bg-purple-50 dark:bg-purple-500/10 rounded-[2rem] p-6 text-center">
                <div className="text-5xl mb-4">
                  💧
                </div>

                <h3 className="font-bold text-gray-800 dark:text-white">
                  Hydration Queen
                </h3>
              </div>

              <div className="bg-orange-50 dark:bg-orange-500/10 rounded-[2rem] p-6 text-center">
                <div className="text-5xl mb-4">
                  🍓
                </div>

                <h3 className="font-bold text-gray-800 dark:text-white">
                  Protein Princess
                </h3>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* MOBILE NAV */}
      <MobileNav />

    </div>
  );
}

export default Progress;