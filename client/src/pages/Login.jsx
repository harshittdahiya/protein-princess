import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";

function Login() {
  return (
    <div className="relative min-h-screen bg-blush-light dark:bg-[#05060a] flex items-center justify-center px-6 overflow-hidden transition-all duration-300">

      {/* THEME TOGGLE */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/30 dark:bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md bg-white/80 dark:bg-[#0d0f14] backdrop-blur-2xl border border-pink-100 dark:border-white/5 rounded-[2rem] p-8 shadow-2xl shadow-pink-100 dark:shadow-[0_20px_50px_rgba(168,85,247,0.08)] transition-all duration-300"
      >

        {/* HEADER */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Welcome Back 💖
          </h1>

          <p className="text-gray-500 dark:text-zinc-400 mt-3">
            Continue your wellness journey
          </p>

        </div>

        {/* FORM */}
        <form className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-5 py-4 rounded-2xl border border-pink-100 dark:border-white/5 bg-white dark:bg-[#111827] text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-500 transition-all duration-300"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-4 rounded-2xl border border-pink-100 dark:border-white/5 bg-white dark:bg-[#111827] text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-500 transition-all duration-300"
          />

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-[1.02] text-white py-4 rounded-2xl transition-all duration-300 shadow-[0_0_18px_rgba(236,72,153,0.25)] font-semibold"
          >
            Login
          </button>

        </form>

        {/* FOOTER */}
        <p className="text-center text-gray-500 dark:text-zinc-400 mt-6">

          Don’t have an account?{" "}

          <Link
            to="/signup"
            className="text-pink-500 font-semibold hover:text-pink-600 transition"
          >
            Sign Up
          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Login;