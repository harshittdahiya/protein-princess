import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ProgressFeed from "../components/ProgressFeed";
import BlendRecipeModal from "../components/BlendRecipeModal";
import AIWidget from "../components/AIWidget";
import strawberryImg from "../assets/strawberry-shawty.jpg";

import { motion } from "framer-motion";
import { useState } from "react";

function Landing() {

  const [openModal, setOpenModal] = useState(false);

  const [selectedBlend, setSelectedBlend] = useState(null);

  const blends = [

    {
      name: "Strawberry Shawty",
      flavor: "Strawberry Cream",
      description:
        "Sweet, smooth, and perfect for your post-workout glow-up.",

      image: strawberryImg,

      ingredients: [
        "1 scoop vanilla protein powder",
        "1 cup frozen strawberries",
        "1/2 banana",
        "1 tbsp chia seeds",
        "1/2 cup greek yogurt",
        "1 cup almond milk",
        "1 tsp honey",
      ],

      steps: [
        "Add all ingredients into a blender.",
        "Blend until smooth and creamy.",
        "Serve cold and enjoy your protein glow-up.",
      ],

      benefits: [
        "High Protein",
        "Recovery",
        "Skin Glow",
        "Antioxidants",
      ],
    },

    {
      name: "Matcha Mommy",
      flavor: "Matcha Vanilla",
      description:
        "Clean energy and wellness vibes in every sip.",

      image:
        "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200&auto=format&fit=crop",

      ingredients: [
        "1 scoop vanilla protein powder",
        "1 tsp ceremonial matcha",
        "1 banana",
        "1 cup oat milk",
        "1 tbsp flax seeds",
        "Handful spinach",
      ],

      steps: [
        "Blend all ingredients together.",
        "Adjust thickness with oat milk.",
        "Serve chilled.",
      ],

      benefits: [
        "Clean Energy",
        "Focus",
        "Metabolism",
        "Wellness",
      ],
    },

    {
      name: "Cocoa Cutie",
      flavor: "Chocolate Cocoa",
      description:
        "Rich chocolate flavor made for recovery and comfort.",

      image:
        "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1200&auto=format&fit=crop",

      ingredients: [
        "1 scoop chocolate protein powder",
        "1 tbsp cocoa powder",
        "1 banana",
        "1 tbsp peanut butter",
        "1/2 cup oats",
        "1 cup milk",
      ],

      steps: [
        "Blend oats first.",
        "Add remaining ingredients.",
        "Blend until thick and creamy.",
      ],

      benefits: [
        "Muscle Recovery",
        "Energy",
        "Protein Rich",
        "Craving Friendly",
      ],
    },

    {
      name: "Banana Baddie",
      flavor: "Banana Shake",
      description:
        "Creamy banana protein built for beginner fitness journeys.",

      image:
        "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?q=80&w=1200&auto=format&fit=crop",

      ingredients: [
        "1 scoop vanilla protein powder",
        "1 banana",
        "1/2 cup oats",
        "1 cup milk",
        "1/2 cup greek yogurt",
        "Dash cinnamon",
      ],

      steps: [
        "Add everything into blender.",
        "Blend until creamy.",
        "Top with cinnamon and enjoy.",
      ],

      benefits: [
        "Beginner Friendly",
        "Muscle Support",
        "Energy",
        "Filling",
      ],
    },

  ];

  return (
    <div className="min-h-screen bg-blush-light dark:bg-[#05060a] text-gray-900 dark:text-white relative overflow-hidden transition-all duration-300">

      <Navbar />

      {/* FLOATING BLOBS */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="pointer-events-none absolute top-20 left-10 w-72 h-72 bg-pink-300/30 dark:bg-pink-400/15 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"
      />

      {/* HERO */}
      <div className="relative z-10 px-6 lg:px-12 py-24 lg:py-36 flex items-center justify-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl"
        >

          {/* TAG */}
          <p className="text-pink-500 font-semibold mb-6 tracking-[0.25em] uppercase text-sm sm:text-base">
            Wellness • Confidence • Consistency
          </p>

          {/* HEADING */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.95]">

            <span className="text-gray-900 dark:text-white">
              Fitness
            </span>

            <br />

            <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              Made Softer 💖
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-10 text-lg sm:text-xl text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">

            A beginner-friendly wellness platform helping women start their
            fitness journey with confidence, consistency, and support.

          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">

            <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 text-white px-10 py-5 rounded-full text-lg transition-all duration-300 shadow-[0_0_40px_rgba(236,72,153,0.45)] font-semibold">

              Start Your Journey

            </button>

            <button className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-pink-100 dark:border-white/10 text-pink-500 dark:text-pink-300 px-10 py-5 rounded-full text-lg hover:bg-pink-50 dark:hover:bg-white/10 transition-all duration-300">

              Explore Products

            </button>

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

          {blends.map((blend, index) => (

            <ProductCard
              key={index}
              title={blend.name}
              flavor={blend.flavor}
              description={blend.description}
              image={blend.image}
              onClick={() => {

                setSelectedBlend(blend);

                setOpenModal(true);

              }}
            />

          ))}

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

      {/* AI */}
      <AIWidget />

      {/* MODAL */}
      <BlendRecipeModal
        open={openModal}
        setOpen={setOpenModal}
        blend={selectedBlend}
      />

    </div>
  );
}

export default Landing;