import { useDarkMode } from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black ${
        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
      }`}
      aria-label="Toggle Dark Mode"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
          theme === "dark" ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {theme === "dark" ? (
          <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        ) : (
          <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.366a1 1 0 011.415 0l.707.707a1 1 0 01-1.414 1.414l-.708-.707a1 1 0 010-1.414zM17 10a1 1 0 011 1h1a1 1 0 110-2h-1a1 1 0 01-1 1zm-2.366 4.22a1 1 0 010 1.415l-.707.707a1 1 0 01-1.414-1.414l.707-.708a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-2.366a1 1 0 01-1.415 0l-.707-.707a1 1 0 011.414-1.414l.708.707a1 1 0 010 1.414zM4 10a1 1 0 01-1-1H2a1 1 0 110 2h1a1 1 0 011-1zM6.366 6.586a1 1 0 010-1.415l.707-.707a1 1 0 011.414 1.414l-.707.708a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        )}
      </span>
    </button>
  );
}
