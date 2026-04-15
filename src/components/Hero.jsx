import { useState, useEffect } from "react";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // State baru untuk mengontrol opacity dan posisi (animasi)
  const [isFading, setIsFading] = useState(false);

  const subHeadlines = [
    "Membangun web modern, cepat, dan fungsional untuk UMKM & Bisnis. Selesai dalam hitungan hari, bukan bulan.",
    "Solusi digital hemat biaya tanpa mengorbankan kualitas. Bantu bisnis lokal Anda menjangkau lebih banyak pelanggan.",
    "Desain responsif, mudah dikelola, dan dioptimalkan untuk performa tinggi. Fokus jalankan bisnis, biar saya urus teknisnya.",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 1. Mulai animasi menghilang (Fade Out)
      setIsFading(true);

      // 2. Tunggu 500ms (waktu yang sama dengan duration animasi Tailwind)
      setTimeout(() => {
        // Ganti teks saat layar sedang kosong/transparan
        setCurrentTextIndex((prevIndex) =>
          prevIndex === subHeadlines.length - 1 ? 0 : prevIndex + 1,
        );

        // 3. Munculkan kembali teksnya (Fade In)
        setIsFading(false);
      }, 500);
    }, 5000); // Teks berganti setiap 5 detik

    return () => clearInterval(intervalId);
  }, [subHeadlines.length]);

  return (
    <section className="py-28 px-6 max-w-5xl mx-auto text-center">
      <div className="flex flex-col items-center">
        {/* Headline dengan Avatar Inline */}
        <h1 className="montserrat text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-[1.1] tracking-tight text-black dark:text-white">
          Butuh Website? <br />
          Saya Bantu dari Nol <br className="hidden md:block" />
          Sampai{" "}
          <span className="whitespace-nowrap">
            Online
            <span className="inline-flex items-center align-middle mx-2 md:ml-4 md:mr-1">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-24 md:h-24 rounded-full border-2 md:border-4 border-white shadow-xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/img/foto_saya.jpeg"
                  alt="Muhammad Sajid Izzulhaq"
                  className="w-full h-full object-cover"
                />
              </div>
            </span>
            .
          </span>
        </h1>

        {/* Sub-headline dengan Animasi Transisi Halus */}
        <div className="h-28 md:h-16 mt-8 flex items-center justify-center px-4">
          <p
            className={`text-lg md:text-xl text-black/70 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transform transition-all duration-500 ease-in-out ${
              isFading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {subHeadlines[currentTextIndex]}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            {/* Primary Button */}
            <a
              href={`https://wa.me/6282279773535?text=Halo%20Kak%20Sajid,%20saya%20tertarik%20dengan%20paket%20pembuatan%20web%20*.%20Bisa%20minta%20info%20lebih%20lanjut?`}
              className="group px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative"
            >
              <span className="relative z-10">Mulai Konsultasi</span>
              <svg
                className="w-5 h-5 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            {/* Secondary Button */}
            <a
              href="#portfolio"
              className="group px-10 py-4 border-2 border-gray-200 dark:border-gray-800 text-black dark:text-white font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-[#111111] transition-all duration-300 flex items-center justify-center gap-3"
            >
              Lihat Project
              <svg
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-y-1 text-gray-400 group-hover:text-black dark:group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Konsultasi Gratis
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Respon Cepat
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
