import { useState } from "react";

export default function About() {
  // State untuk melacak dropdown mana yang sedang terbuka
  // Nilai 0 berarti elemen pertama (Siapa Saya?) akan terbuka secara default
  const [openIndex, setOpenIndex] = useState(0);

  const aboutData = [
    {
      title: "Siapa Saya?",
      content:
        "Halo, saya Muhammad Sajid Izzulhaq. Saat ini saya adalah mahasiswa Teknik Informatika di Universitas Teknokrat Indonesia. Saya memiliki passion besar dalam membangun website modern yang tidak hanya estetik, tapi juga memberikan solusi nyata untuk efisiensi bisnis Anda.",
    },
    {
      title: "Aktivitas & Peran",
      content:
        "Di luar pengerjaan proyek klien, saya aktif sebagai Tutor di organisasi Protek Web, di mana saya membimbing rekan-rekan mahasiswa dalam praktik pengembangan web. Saya juga rutin membagikan tips coding dan edukasi teknologi kepada ribuan pengikut di TikTok (@syzen.web).",
    },
    {
      title: "Workflow & Teknologi",
      content:
        "Saya berfokus pada ekosistem modern seperti React, Next.js, dan Tailwind CSS. Untuk memastikan pengerjaan aplikasi Anda selesai lebih cepat dengan kualitas enterprise, saya mengadopsi alur kerja 'Vibe Coding' dengan bantuan teknologi AI terkini.",
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
            <div className="space-y-4">
              {aboutData.map((item, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-4">
                  {/* Tombol Header Dropdown */}
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                  >
                    <h3
                      className={`text-xl font-bold transition-colors ${openIndex === index ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"}`}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={`text-2xl font-light transition-transform duration-300 ${openIndex === index ? "rotate-45 text-black dark:text-white" : "text-gray-400 dark:text-gray-600"}`}
                    >
                      +
                    </span>
                  </button>

                  {/* Konten Dropdown (dengan animasi transisi tinggi) */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-60 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed pr-4 pb-4">
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
