import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  // State untuk mengontrol buka/tutup menu mobile
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-black tracking-tighter text-black dark:text-white relative z-10"
        >
          SYZEN<span className="text-gray-400">.WEB</span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <a
            href="#about"
            className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#pricing"
            className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
          >
            Harga
          </a>

          <ThemeToggle />

          <a
            href="https://wa.me/your-number"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Tombol Mobile (Hamburger / Close) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative z-10"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Icon Silang (X) saat menu terbuka
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Icon Hamburger saat menu tertutup
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="flex flex-col items-center py-6 gap-6 font-semibold">
          <a
            href="#about"
            onClick={() => setIsOpen(false)} // Tutup menu setelah diklik
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors w-full text-center"
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={() => setIsOpen(false)}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors w-full text-center"
          >
            Portfolio
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors w-full text-center"
          >
            Harga
          </a>
          <div className="flex justify-center w-full">
            <ThemeToggle />
          </div>
          <a
            href="https://wa.me/your-number"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full shadow-md w-10/12 text-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
