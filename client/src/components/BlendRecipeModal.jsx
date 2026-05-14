import { AnimatePresence, motion } from "framer-motion";

function BlendRecipeModal({
  open,
  setOpen,
  blend,
}) {

  if (!blend) return null;

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
            initial={{
              scale: 0.9,
              opacity: 0,
              y: 40,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
              y: 40,
            }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0f1720] rounded-[2rem] p-6 sm:p-8 shadow-2xl"
          >

            {/* HEADER */}
            <div className="flex items-start justify-between gap-4">

              <div>

                <h2 className="text-4xl font-bold text-pink-500">
                  {blend.name}
                </h2>

                <p className="text-xl text-gray-500 dark:text-zinc-400 mt-2">
                  {blend.flavor}
                </p>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-3xl text-gray-400 hover:text-pink-500 transition"
              >
                ✕
              </button>

            </div>

            {/* IMAGE */}
            <img
              src={blend.image}
              alt={blend.name}
              className="w-full h-64 object-cover rounded-[2rem] mt-6"
            />

            {/* DESCRIPTION */}
            <p className="text-lg text-gray-600 dark:text-zinc-300 mt-6 leading-relaxed">
              {blend.description}
            </p>

            {/* INGREDIENTS */}
            <div className="mt-8">

              <h3 className="text-2xl font-bold text-pink-500 mb-4">
                Ingredients 🍓
              </h3>

              <ul className="space-y-3">

                {blend.ingredients.map((item, index) => (

                  <li
                    key={index}
                    className="bg-pink-50 dark:bg-white/5 px-4 py-3 rounded-2xl text-gray-700 dark:text-zinc-200"
                  >
                    • {item}
                  </li>

                ))}

              </ul>

            </div>

            {/* STEPS */}
            <div className="mt-8">

              <h3 className="text-2xl font-bold text-purple-500 mb-4">
                Recipe ✨
              </h3>

              <ol className="space-y-4">

                {blend.steps.map((step, index) => (

                  <li
                    key={index}
                    className="bg-purple-50 dark:bg-white/5 px-4 py-4 rounded-2xl text-gray-700 dark:text-zinc-200"
                  >
                    {index + 1}. {step}
                  </li>

                ))}

              </ol>

            </div>

            {/* BENEFITS */}
            <div className="mt-8">

              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                Why It’s Good 💖
              </h3>

              <div className="flex flex-wrap gap-3">

                {blend.benefits.map((benefit, index) => (

                  <span
                    key={index}
                    className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-full"
                  >
                    {benefit}
                  </span>

                ))}

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default BlendRecipeModal;