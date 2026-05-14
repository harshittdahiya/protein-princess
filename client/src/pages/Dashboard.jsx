import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import CreatePostModal from "../components/CreatePostModal";
import ThemeToggle from "../components/ThemeToggle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";

function Dashboard() {

  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const socket = io("http://localhost:5000");

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("userInfo");

    navigate("/");

  };

  // LIKE POST
  const handleLike = async (postId) => {

    try {

      await axios.put(
        `https://protein-princess.onrender.com/api/posts/${postId}/like`
      );

    } catch (error) {

      console.log(error);

    }

  };

  // FETCH POSTS + SOCKETS
  useEffect(() => {

    const fetchPosts = async () => {

      try {

        const { data } = await axios.get(
          "https://protein-princess.onrender.com/api/posts"
        );

        setPosts(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchPosts();

    // NEW POST
    socket.on("newPost", (newPost) => {

      setPosts((prevPosts) => [
        newPost,
        ...prevPosts,
      ]);

    });

    // LIKE UPDATE
    socket.on("postLiked", (updatedPost) => {

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === updatedPost._id
            ? updatedPost
            : post
        )
      );

    });

    return () => {
      socket.disconnect();
    };

  }, []);

  return (
    <div className="min-h-screen bg-[#fff8fb] dark:bg-[#05060a] text-black dark:text-white px-4 sm:px-6 lg:px-10 py-6 lg:py-8 overflow-hidden relative transition-all duration-300">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-pink-500/5 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/5 blur-[160px] rounded-full"></div>

      {/* MOBILE TOPBAR */}
      <div className="lg:hidden flex items-center justify-between mb-8 relative z-10">

        <div>

          <h1 className="text-3xl font-bold">
            Protein Princess 👑
          </h1>

          <p className="text-gray-500 dark:text-zinc-400 mt-1">
            Wellness dashboard
          </p>

        </div>

        <ThemeToggle />

      </div>

      {/* DESKTOP TOPBAR */}
      <div className="hidden lg:flex items-center justify-between mb-10 relative z-10">

        <div>

          <h1 className="text-4xl xl:text-5xl font-bold tracking-tight">
            Welcome Back 👑
          </h1>

          <p className="text-gray-500 dark:text-zinc-400 mt-3 text-lg">
            Let’s continue your wellness journey today.
          </p>

        </div>

        <div className="flex items-center gap-4">

          <ThemeToggle />

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 text-white px-6 py-3 rounded-[1.3rem] shadow-[0_0_18px_rgba(236,72,153,0.22)] transition-all duration-300 font-semibold"
          >

            <span className="text-lg">
              🚪
            </span>

            Logout

          </button>

        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[290px_1fr_360px] gap-8 relative z-10">

        {/* SIDEBAR */}
        <Sidebar />

        {/* CENTER COLUMN */}
        <div className="space-y-8">

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#0d0f14] border border-pink-100 dark:border-white/5 rounded-[2rem] p-6 transition-all duration-300"
            >

              <p className="text-gray-500 dark:text-zinc-400">
                Workout Streak
              </p>

              <h2 className="text-5xl font-bold text-pink-400 mt-3">
                12
              </h2>

              <p className="text-gray-500 dark:text-zinc-500 mt-3">
                Days consistent ✨
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#0d0f14] border border-pink-100 dark:border-white/5 rounded-[2rem] p-6 transition-all duration-300"
            >

              <p className="text-gray-500 dark:text-zinc-400">
                Water Intake
              </p>

              <h2 className="text-5xl font-bold text-purple-400 mt-3">
                2.1L
              </h2>

              <p className="text-gray-500 dark:text-zinc-500 mt-3">
                Daily average 💧
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#0d0f14] border border-pink-100 dark:border-white/5 rounded-[2rem] p-6 transition-all duration-300"
            >

              <p className="text-gray-500 dark:text-zinc-400">
                Protein Goal
              </p>

              <h2 className="text-5xl font-bold text-orange-400 mt-3">
                82%
              </h2>

              <p className="text-gray-500 dark:text-zinc-500 mt-3">
                Goal completed 🍓
              </p>

            </motion.div>

          </div>

          {/* CREATE POST */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-[#0d0f14] border border-pink-100 dark:border-white/5 rounded-[2rem] p-6 transition-all duration-300"
          >

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

              <div>

                <h2 className="text-3xl xl:text-4xl font-bold">
                  Share Your Progress ✨
                </h2>

                <p className="text-gray-500 dark:text-zinc-400 mt-3 text-lg">
                  Motivate the princess community
                </p>

              </div>

              <button
                onClick={() => setOpenModal(true)}
                className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 text-white px-6 py-4 rounded-[1.3rem] shadow-[0_0_18px_rgba(236,72,153,0.2)] transition-all duration-300 font-medium"
              >

                <span className="text-lg">
                  📝
                </span>

                Create Post

              </button>

            </div>

          </motion.div>

          {/* FEED */}
          {posts.map((post) => (

            <motion.div
              key={post._id}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#0d0f14] border border-pink-100 dark:border-white/5 rounded-[2rem] p-6 transition-all duration-300"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-300 to-purple-300"></div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {post.name} ✨
                    </h3>

                    <p className="text-gray-500 dark:text-zinc-500">
                      {new Date(post.createdAt).toLocaleString()}
                    </p>

                  </div>

                </div>

                <button className="text-gray-500 dark:text-zinc-500 text-2xl">
                  •••
                </button>

              </div>

              <p className="text-gray-700 dark:text-zinc-200 mt-6 text-lg leading-relaxed">
                {post.content}
              </p>

              <div className="flex items-center gap-8 mt-6">

                <button
                  onClick={() => handleLike(post._id)}
                  className="text-pink-400 hover:scale-110 transition"
                >
                  💖 {post.likes}
                </button>

                <button className="text-gray-700 dark:text-zinc-300 hover:text-pink-400 transition">
                  💬 0
                </button>

                <button className="text-gray-700 dark:text-zinc-300 hover:text-pink-400 transition">
                  ✨ Share
                </button>

              </div>

            </motion.div>

          ))}

        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">

          {/* MOTIVATION */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-[#0d0f14] border border-pink-100 dark:border-white/5 rounded-[2rem] p-6 transition-all duration-300"
          >

            <div className="flex items-center justify-between gap-5">

              <div>

                <p className="text-gray-500 dark:text-zinc-400">
                  Today's Motivation 💖
                </p>

                <h2 className="text-3xl xl:text-4xl font-bold mt-4 leading-tight">
                  Small progress
                  <br />
                  is still progress.
                </h2>

              </div>

              <div className="relative w-28 h-28">

                <svg className="w-28 h-28 rotate-[-90deg]">

                  <circle
                    cx="56"
                    cy="56"
                    r="45"
                    stroke="#27272a"
                    strokeWidth="9"
                    fill="transparent"
                  />

                  <circle
                    cx="56"
                    cy="56"
                    r="45"
                    stroke="#f472b6"
                    strokeWidth="9"
                    fill="transparent"
                    strokeDasharray="283"
                    strokeDashoffset="70"
                    strokeLinecap="round"
                  />

                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-pink-400">
                  75%
                </div>

              </div>

            </div>

          </motion.div>

          {/* DAILY GOAL */}
          <motion.div
            whileHover={{ y: -4 }}
            className="relative overflow-hidden bg-gradient-to-br from-pink-400 via-pink-300 to-purple-400 dark:from-[#1a1020] dark:via-[#22122d] dark:to-[#2a1638] text-white rounded-[2rem] p-6 min-h-[260px] shadow-[0_0_20px_rgba(244,114,182,0.18)] dark:shadow-[0_0_30px_rgba(168,85,247,0.12)] transition-all duration-300"
          >

            <div className="relative z-10">

              <h2 className="text-3xl font-bold">
                Daily Goal 💧
              </h2>

              <p className="mt-4 text-zinc-300 text-lg leading-relaxed max-w-[58%]">
                Drink 2L water today and complete a 20 min walk.
              </p>

              <div className="mt-7">

                <div className="flex items-center gap-4 mb-4">

                  <div className="bg-white/20 dark:bg-pink-500/20 border border-pink-400/20 px-4 py-2 rounded-full font-semibold text-white dark:text-pink-300">
                    70%
                  </div>

                  <p className="text-lg font-medium">
                    1.4L / 2L
                  </p>

                </div>

                <div className="w-full h-3 bg-white/30 dark:bg-black/30 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                  />

                </div>

              </div>

            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute right-8 top-20 text-[90px] opacity-70 pointer-events-none"
            >
              🧴
            </motion.div>

          </motion.div>

        </div>

      </div>

      <MobileNav />

      <CreatePostModal
        open={openModal}
        setOpen={setOpenModal}
      />

    </div>
  );
}

export default Dashboard;