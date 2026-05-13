import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = window.localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-12 h-12 rounded-2xl bg-white/80 dark:bg-zinc-900 border border-white/40 dark:border-zinc-700 shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center justify-center transition-all duration-300"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="text-yellow-300" size={22} />
      ) : (
        <Moon className="text-pink-500" size={22} />
      )}
    </button>
  );
}

export default ThemeToggle;

