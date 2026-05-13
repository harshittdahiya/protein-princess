import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="w-full px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Link
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
      >
        Protein Princess
      </Link>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <Link
          to="/login"
          className="text-gray-700 dark:text-zinc-200 hover:text-pink-500 dark:hover:text-pink-300 transition"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="bg-pink-400 hover:bg-pink-500 dark:bg-pink-500 dark:hover:bg-pink-600 text-white px-5 py-2 rounded-full transition shadow-lg shadow-pink-200 dark:shadow-[0_20px_50px_rgba(168,85,247,0.18)]"
        >
          Join Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;