import {
  Home,
  Flame,
  Sparkles,
  User,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function MobileNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[92%] bg-white/80 dark:bg-[#07101f]/95 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2rem] shadow-2xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)] px-6 py-4">

      <div className="flex items-center justify-between">

        {/* HOME */}
        <Link
          to="/dashboard"
          className={`flex flex-col items-center transition ${
            location.pathname === "/dashboard"
              ? "text-pink-500"
              : "text-gray-500"
          }`}
        >
          <Home size={24} />

          <span className="text-xs mt-1">
            Home
          </span>
        </Link>

        {/* PROGRESS */}
        <Link
          to="/progress"
          className={`flex flex-col items-center transition ${
            location.pathname === "/progress"
              ? "text-pink-500 dark:text-pink-300"
              : "text-gray-500 dark:text-zinc-400 hover:text-pink-500 dark:hover:text-pink-300"
          }`}
        >
          <Flame size={24} />

          <span className="text-xs mt-1">
            Progress
          </span>
        </Link>

        {/* AI */}
        <Link
          to="/ai"
          className={`flex flex-col items-center transition ${
            location.pathname === "/ai"
              ? "text-pink-500"
              : "text-gray-500"
          }`}
        >
          <Sparkles size={24} />

          <span className="text-xs mt-1">
            AI
          </span>
        </Link>

        {/* PROFILE */}
        <Link
          to="/profile"
          className={`flex flex-col items-center transition ${
            location.pathname === "/profile"
              ? "text-pink-500 dark:text-pink-300"
              : "text-gray-500 dark:text-zinc-400 hover:text-pink-500 dark:hover:text-pink-300"
          }`}
        >
          <User size={24} />

          <span className="text-xs mt-1">
            Profile
          </span>
        </Link>

      </div>
    </div>
  );
}

export default MobileNav;