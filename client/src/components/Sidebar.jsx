import {
  Home,
  Flame,
  Sparkles,
  User,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden lg:block bg-white/70 dark:bg-[#07101f] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)] h-fit">

      {/* LOGO */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Protein Princess
        </h1>
      </div>

      {/* NAVIGATION */}
      <div className="space-y-4">

        {/* HOME */}
        <Link
          to="/dashboard"
          className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-medium transition ${
            location.pathname === "/dashboard"
              ? "bg-pink-100 dark:bg-pink-500/15 text-pink-600 dark:text-pink-300"
              : "hover:bg-pink-50 dark:hover:bg-pink-500/10 text-gray-700 dark:text-zinc-200"
          }`}
        >
          <Home size={22} />
          Home
        </Link>

        {/* PROGRESS */}
        <Link
          to="/progress"
          className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-medium transition ${
            location.pathname === "/progress"
              ? "bg-pink-100 dark:bg-pink-500/15 text-pink-600 dark:text-pink-300"
              : "hover:bg-pink-50 dark:hover:bg-pink-500/10 text-gray-700 dark:text-zinc-200"
          }`}
        >
          <Flame size={22} />
          Progress
        </Link>

        {/* AI */}
        <Link
          to="/ai"
          className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-medium transition ${
            location.pathname === "/ai"
              ? "bg-pink-100 dark:bg-pink-500/15 text-pink-600 dark:text-pink-300"
              : "hover:bg-pink-50 dark:hover:bg-pink-500/10 text-gray-700 dark:text-zinc-200"
          }`}
        >
          <Sparkles size={22} />
          AI Assistant
        </Link>

        {/* PROFILE */}
        <Link
          to="/profile"
          className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-medium transition ${
            location.pathname === "/profile"
              ? "bg-pink-100 dark:bg-pink-500/15 text-pink-600 dark:text-pink-300"
              : "hover:bg-pink-50 dark:hover:bg-pink-500/10 text-gray-700 dark:text-zinc-200"
          }`}
        >
          <User size={22} />
          Profile
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;