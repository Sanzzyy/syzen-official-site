import { useState } from "react";

export default function About() {
  // State untuk melacak dropdown mana yang sedang terbuka
  // Nilai 0 berarti elemen pertama (Siapa Saya?) akan terbuka secara default
  const [openIndex, setOpenIndex] = useState(0);

  const aboutData = [
    {
      title: "Siapa Saya?",
      // Menambahkan icon SVG inline agar tidak perlu install library tambahan
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      content:
        "Halo, saya Muhammad Sajid Izzulhaq. Saat ini saya adalah mahasiswa Teknik Informatika di Universitas Teknokrat Indonesia. Saya memiliki passion besar dalam membangun website modern yang tidak hanya estetik, tapi juga memberikan solusi nyata untuk efisiensi bisnis Anda.",
    },
    {
      title: "Aktivitas & Peran",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      content:
        "Di luar pengerjaan proyek klien, saya aktif sebagai Tutor di organisasi Protek Web, di mana saya membimbing rekan-rekan mahasiswa dalam praktik pengembangan web. Saya juga rutin membagikan tips coding dan edukasi teknologi kepada ribuan pengikut di TikTok (@syzen.web).",
    },
    {
      title: "Workflow & Teknologi",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      content:
        "Saya berfokus pada ekosistem modern seperti React, Next.js, Tailwind CSS, dan Laravel. Untuk memastikan pengerjaan aplikasi Anda selesai lebih cepat dengan kualitas enterprise, saya mengadopsi alur kerja berbasis AI terkini.",
    },
  ];

  const toggleDropdown = (index) => {
    // Jika yang diklik sudah terbuka, maka tutup. Jika belum, buka yang diklik.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
            Kenapa Harus Syzen.web?
          </h2>
          <div className="h-1 w-20 bg-black dark:bg-white mt-4"></div>
        </div>

        {/* Layout 2 Kolom */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Kolom Kiri: Gambar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative aspect-[4/5] rounded-2xl bg-gray-100 dark:bg-gray-900 overflow-hidden border border-gray-200 dark:border-gray-800">
              <img
                src="/img/foto_saya.jpeg" // Pastikan path ini sesuai dengan foto aslimu
                alt="Muhammad Sajid Izzulhaq"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          {/* Kolom Kanan: Accordion / Dropdown */}
          <div className="flex flex-col justify-center h-full">
            <div className="space-y-2">
              {aboutData.map((item, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${openIndex === index ? "pb-6" : "pb-2"}`}
                >
                  {/* Tombol Header Dropdown */}
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2 rounded-lg transition-colors duration-300 ${openIndex === index ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white" : "text-gray-400 group-hover:text-black dark:group-hover:text-white"}`}
                      >
                        {item.icon}
                      </div>
                      <h3
                        className={`text-xl font-bold transition-colors ${openIndex === index ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"}`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`text-3xl font-light transition-transform duration-500 flex items-center justify-center w-8 h-8 ${openIndex === index ? "rotate-45 text-black dark:text-white" : "text-gray-300 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white"}`}
                    >
                      +
                    </span>
                  </button>

                  {/* Konten Dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed pr-4 pb-4 pl-14 text-lg">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
