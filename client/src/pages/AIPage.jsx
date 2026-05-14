import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";
import axios from "axios";

function AIPage() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hey princess 💖 Ask me anything about fitness, nutrition, gym, wellness, hydration, recovery, or healthy habits.",
    },
  ]);

  const [loading, setLoading] = useState(false);


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

      // AI RESPONSE
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
    <div className="min-h-screen bg-blush-light dark:bg-[#05060a] text-gray-900 dark:text-white px-4 sm:px-6 lg:px-10 py-6 transition-all duration-300 relative">

      {/* THEME TOGGLE */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Princess AI ✨
        </h1>

        <p className="text-gray-500 dark:text-zinc-400 mt-3">
          Your wellness bestie for fitness, motivation, and consistency.
        </p>

      </div>

      {/* CHAT CONTAINER */}
      <div className="bg-white/70 dark:bg-[#111827] backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] shadow-2xl shadow-pink-100 dark:shadow-[0_30px_60px_rgba(168,85,247,0.08)] h-[75vh] flex flex-col overflow-hidden">

        {/* CHAT AREA */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {messages.map((msg, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={
                msg.sender === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >

              <div
                className={
                  msg.sender === "user"
                    ? "bg-pink-400 text-white px-5 py-4 rounded-[2rem] max-w-[80%]"
                    : "bg-pink-50 dark:bg-pink-500/10 border border-pink-100 dark:border-white/10 text-gray-700 dark:text-zinc-200 px-5 py-4 rounded-[2rem] max-w-[80%]"
                }
              >
                {msg.text}
              </div>

            </motion.div>

          ))}

          {/* LOADING */}
          {loading && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >

              <div className="bg-pink-50 dark:bg-pink-500/10 border border-pink-100 dark:border-white/10 text-gray-700 dark:text-zinc-200 px-5 py-4 rounded-[2rem] max-w-[80%]">
                Princess AI is typing...
              </div>

            </motion.div>

          )}

        </div>

        {/* INPUT AREA */}
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
            placeholder="Ask Princess AI anything..."
            className="flex-1 px-5 py-4 rounded-full border border-pink-100 dark:border-white/10 bg-white dark:bg-[#111827] text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-500"
          />

          <button
            onClick={sendMessage}
            className="bg-pink-400 hover:bg-pink-500 text-white px-6 rounded-full shadow-lg shadow-pink-200 transition"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

export default AIPage;