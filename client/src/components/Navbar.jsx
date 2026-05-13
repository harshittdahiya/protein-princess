import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full px-6 lg:px-12 py-5 flex items-center justify-between">
      <Link
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
      >
        Protein Princess
      </Link>

      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="text-gray-700 hover:text-pink-500 transition"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="bg-pink-400 hover:bg-pink-500 text-white px-5 py-2 rounded-full transition shadow-lg shadow-pink-200"
        >
          Join Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;