import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import ThemeToggle from "../components/ThemeToggle";

function Profile() {
  return (
    <div className="min-h-screen bg-blush-light dark:bg-[#05060a] text-gray-900 dark:text-white px-4 sm:px-6 lg:px-10 py-6 lg:py-8 transition-all duration-300 relative">
      <div className="absolute top-6 right-6 z-10 lg:hidden">
        <ThemeToggle />
      </div>

      {/* MOBILE TOPBAR */}
      <div className="lg:hidden flex items-center justify-between mb-8">

        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Profile 👑
        </h1>

        <button className="bg-pink-400 text-white px-5 py-2 rounded-full shadow-lg shadow-pink-200">
          Edit
        </button>

      </div>

      {/* DESKTOP TOPBAR */}
      <div className="hidden lg:flex items-center justify-between mb-10">

        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Your Profile 👑
          </h1>

          <p className="text-gray-500 dark:text-zinc-400 mt-2">
            Track your journey and celebrate your growth.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg shadow-pink-200 transition">
            Edit Profile
          </button>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-8">

          {/* PROFILE CARD */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-8 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
          >

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

              {/* AVATAR */}
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-pink-300 to-purple-300"></div>

              {/* INFO */}
              <div className="flex-1 text-center md:text-left">

                <h2 className="text-4xl font-bold text-gray-800">
                  Princess User ✨
                </h2>

                <p className="text-gray-500 dark:text-zinc-400 mt-3">
                  Beginner fitness enthusiast focused on consistency,
                  confidence, and wellness 💖
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">

                  <div className="bg-pink-50 dark:bg-pink-500/10 px-5 py-3 rounded-2xl text-gray-700 dark:text-zinc-200">
                    🔥 12 Day Streak
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-500/10 px-5 py-3 rounded-2xl text-gray-700 dark:text-zinc-200">
                    💧 Hydration Queen
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-500/10 px-5 py-3 rounded-2xl text-gray-700 dark:text-zinc-200">
                    🍓 Protein Princess
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* PERSONAL STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
            >
              <p className="text-gray-500 dark:text-zinc-400">
                Workouts
              </p>

              <h2 className="text-4xl font-bold text-pink-500 mt-3">
                48
              </h2>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
            >
              <p className="text-gray-500 dark:text-zinc-400">
                Protein Avg
              </p>

              <h2 className="text-4xl font-bold text-purple-500 mt-3">
                96g
              </h2>
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
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
            >
              <p className="text-gray-500 dark:text-zinc-400">
                Posts Shared
              </p>

              <h2 className="text-4xl font-bold text-orange-400 mt-3">
                24
              </h2>
            </motion.div>

          </div>

          {/* RECENT POSTS */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/70 dark:bg-[#0d1118] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)]"
          >

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Recent Progress Posts ✨
            </h2>

            <div className="space-y-5">

              <div className="bg-pink-50 dark:bg-pink-500/10 rounded-[2rem] p-5 text-gray-900 dark:text-zinc-200">
                Completed my first full workout week 😭💖
              </div>

              <div className="bg-purple-50 dark:bg-purple-500/10 rounded-[2rem] p-5 text-gray-900 dark:text-zinc-200">
                Finally staying consistent with hydration ✨
              </div>

              <div className="bg-orange-50 dark:bg-orange-500/10 rounded-[2rem] p-5 text-gray-900 dark:text-zinc-200">
                Hit my protein goal for 5 days straight 🍓
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

export default Profile;