import { motion, AnimatePresence } from "framer-motion";

function CreatePostModal({ open, setOpen }) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
        >

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-2xl bg-white dark:bg-[#0f1720] rounded-[2rem] p-6 sm:p-8 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Share Progress ✨
                </h2>

                <p className="text-gray-500 dark:text-zinc-400 mt-2">
                  Inspire the princess community
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-gray-400 hover:text-pink-500 dark:hover:text-pink-300 transition"
              >
                ✕
              </button>

            </div>

            {/* TEXTAREA */}
            <textarea
              placeholder="Tell everyone about your progress..."
              className="w-full h-40 rounded-[2rem] border border-pink-100 dark:border-white/10 bg-white dark:bg-[#111827] text-gray-900 dark:text-white p-5 outline-none resize-none focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-500"
            />

            {/* IMAGE PLACEHOLDER */}
            <div className="mt-6 border-2 border-dashed border-pink-200 dark:border-white/10 rounded-[2rem] h-48 flex items-center justify-center text-gray-400 dark:text-zinc-500 bg-pink-50 dark:bg-white/5">
              Upload Progress Picture 📸
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button
                onClick={() => setOpen(false)}
                className="flex-1 border border-pink-100 dark:border-white/10 text-gray-600 dark:text-zinc-300 py-4 rounded-2xl hover:bg-pink-50 dark:hover:bg-white/5 transition"
              >
                Cancel
              </button>

              <button className="flex-1 bg-pink-400 hover:bg-pink-500 text-white py-4 rounded-2xl shadow-lg shadow-pink-200 transition">
                Post Update
              </button>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default CreatePostModal;