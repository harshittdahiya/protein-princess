import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ProgressFeed from "../components/ProgressFeed";
import { motion } from "framer-motion";
import AIWidget from "../components/AIWidget";

function Landing() {
  return (
    <div className="min-h-screen bg-blush-light dark:bg-[#05060a] text-gray-900 dark:text-white relative overflow-hidden transition-all duration-300">
      <Navbar />

      {/* FLOATING BACKGROUND BLOBS */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-pink-300/30 dark:bg-pink-400/15 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"
      />

      {/* HERO SECTION */}
      <div className="relative z-10 px-6 lg:px-12 py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-pink-500 font-semibold mb-4 tracking-wide uppercase">
            Wellness • Confidence • Consistency
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight max-w-3xl">
            Fitness Made{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Softer
            </span>{" "}
            💖
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed">
            A beginner-friendly wellness platform helping women start their
            fitness journey with confidence, consistency, and support.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full text-lg transition shadow-xl shadow-pink-200">
              Start Your Journey
            </button>

            <button className="bg-white dark:bg-[#111827] dark:border-white/10 border border-pink-200 text-pink-500 dark:text-pink-300 px-8 py-4 rounded-full text-lg hover:bg-pink-50 dark:hover:bg-white/5 transition">
              Explore Products
            </button>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-[3rem] bg-gradient-to-br from-pink-300 via-pink-200 to-purple-300 shadow-2xl shadow-pink-200 flex items-center justify-center">

            <div className="absolute inset-6 rounded-[2.5rem] bg-white/30 backdrop-blur-xl border border-white/40"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">
                Strawberry
              </h2>

              <p className="text-white/90 text-lg mt-2">
                Shawty 🍓
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* PRODUCT SHOWCASE */}
      <div className="relative z-10 px-6 lg:px-12 pb-28">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-zinc-100">
            Princess Protein Collection ✨
          </h2>

          <p className="text-gray-600 dark:text-zinc-400 mt-4">
            Beginner-friendly protein blends designed for confidence,
            wellness, and consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            title="Strawberry Shawty"
            flavor="Strawberry Cream"
            description="Sweet, smooth, and perfect for your post-workout glow-up."
          />

          <ProductCard
            title="Matcha Mommy"
            flavor="Matcha Vanilla"
            description="Clean energy and wellness vibes in every sip."
          />

          <ProductCard
            title="Cocoa Cutie"
            flavor="Chocolate Cocoa"
            description="Rich chocolate flavor made for recovery and comfort."
          />

          <ProductCard
            title="Banana Baddie"
            flavor="Banana Shake"
            description="Creamy banana protein built for beginner fitness journeys."
          />
        </div>
      </div>

      {/* COMMUNITY PREVIEW */}
      <div className="relative z-10 px-6 lg:px-12 pb-32">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-zinc-100">
            Princess Progress Feed 💕
          </h2>

          <p className="text-gray-600 dark:text-zinc-400 mt-4">
            Celebrate small wins, consistency, and confidence together.
          </p>
        </div>

        <ProgressFeed />
      </div>


        <AIWidget />
      </div>
  );
}

export default Landing;