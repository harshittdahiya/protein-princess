import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AIWidget() {
const pathname = window.location.pathname;
if (
  pathname === "/login" ||
  pathname === "/signup"
) {
  return null;
}
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hey princess 💖 Ask me anything about fitness, gym, wellness, nutrition, hydration, or recovery.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  // SEND MESSAGE
  const sendMessage = async () => {

    if (!message.trim()) return;

    // USER MESSAGE
    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const currentMessage = message;

    setMessage("");

    try {

      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/ai/chat",
        {
          message: currentMessage,
        }
      );

      // AI MESSAGE
      const aiMessage = {
        sender: "ai",
        text: data.reply,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

    } catch (error) {

      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Something went wrong 😭",
        },
      ]);

    } finally {

      setLoading(false);

    }

  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-2xl shadow-pink-300 flex items-center justify-center text-2xl"
      >
        ✨
      </motion.button>

      {/* CHAT WINDOW */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-28 right-6 z-50 w-[90vw] sm:w-96 bg-white/80 dark:bg-[#0f1720]/95 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2rem] shadow-2xl shadow-pink-200 dark:shadow-[0_30px_60px_rgba(168,85,247,0.12)] overflow-hidden"
          >

            {/* HEADER */}
            <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-5 text-white">

              <h2 className="text-xl font-bold">
                Princess AI ✨
              </h2>

              <p className="text-sm text-white/80 mt-1">
                Your wellness bestie
              </p>

            </div>

            {/* CHAT BODY */}
            <div className="p-5 space-y-4 h-[350px] overflow-y-auto">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={
                    msg.sender === "user"
                      ? "bg-pink-400 text-white rounded-2xl p-4 ml-auto max-w-[80%]"
                      : "bg-white dark:bg-[#111827] border border-purple-100 dark:border-white/10 rounded-2xl p-4 text-gray-700 dark:text-zinc-200 shadow-sm max-w-[80%]"
                  }
                >
                  {msg.text}
                </div>

              ))}

              {loading && (

                <div className="bg-white dark:bg-[#111827] border border-purple-100 dark:border-white/10 rounded-2xl p-4 text-gray-700 dark:text-zinc-200 shadow-sm max-w-[80%]">
                  Princess AI is typing...
                </div>

              )}

            </div>

            {/* INPUT */}
            <div className="border-t border-pink-100 dark:border-white/10 p-4 flex gap-3">

              <input
                type="text"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask Princess AI..."
                className="flex-1 px-4 py-3 rounded-full border border-pink-100 dark:border-white/10 bg-white dark:bg-[#111827] text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-500"
              />

              <button
                onClick={sendMessage}
                className="bg-pink-400 hover:bg-pink-500 text-white px-5 rounded-full transition"
              >
                Send
              </button>

            </div>

            {/* FULL PAGE BUTTON */}
            <div className="p-4 pt-0">

              <button
                onClick={() => navigate("/ai")}
                className="w-full bg-pink-400 hover:bg-pink-500 text-white py-3 rounded-2xl transition shadow-lg shadow-pink-200"
              >
                Open Full AI Chat
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default AIWidget;