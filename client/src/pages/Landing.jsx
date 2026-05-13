import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Landing() {
  return (
    <div className="min-h-screen bg-blush-light">
      <Navbar />

      {/* HERO SECTION */}
      <div className="px-6 lg:px-12 py-20 flex flex-col items-center text-center">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight max-w-4xl">
          Fitness Made{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Softer
          </span>{" "}
          💖
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          A beginner-friendly wellness platform helping women start their
          fitness journey with confidence, consistency, and support.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full text-lg transition shadow-xl shadow-pink-200">
            Start Your Journey
          </button>

          <button className="bg-white border border-pink-200 text-pink-500 px-8 py-4 rounded-full text-lg hover:bg-pink-50 transition">
            Explore Products
          </button>
        </div>
      </div>

      {/* PRODUCT SHOWCASE */}
      <div className="px-6 lg:px-12 pb-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Princess Protein Collection ✨
          </h2>

          <p className="text-gray-600 mt-4">
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
    </div>
  );
}

export default Landing;