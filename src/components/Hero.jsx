export default function Hero() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto text-center">
      <div className="flex flex-col items-center">
        {/* Headline dengan Avatar Inline */}
        <h1 className="montserrat text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-[1.1] tracking-tight text-black dark:text-white">
          Butuh Website? <br />
          Saya Bantu dari Nol <br className="hidden md:block" />
          Sampai{" "}
          {/* whitespace-nowrap akan mengunci 'Online', 'Avatar', dan '.' agar selalu dalam 1 baris */}
          <span className="whitespace-nowrap">
            Online
            <span className="inline-flex items-center align-middle mx-2 md:ml-4 md:mr-1">
              {/* Ukuran avatar diperkecil di mobile (w-12 h-12) agar tidak merusak jarak baris */}
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

        {/* Sub-headline */}
        <p className="mt-8 text-lg md:text-xl text-black/70 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Membangun web modern, cepat, dan fungsional untuk UMKM & Bisnis.
          Selesai dalam hitungan hari, bukan bulan.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/6282279773535?text=Halo%20Kak%20Sajid,%20saya%20tertarik%20dengan%20paket%20pembuatan%20web%20*.%20Bisa%20minta%20info%20lebih%20lanjut?`}
            className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl shadow-2xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all transform hover:-translate-y-1"
          >
            Mulai Konsultasi
          </a>
          <a
            href="#portfolio"
            className="px-10 py-4 border-2 border-gray-200 dark:border-gray-700 text-black dark:text-white font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            Lihat Project
          </a>
        </div>
      </div>
    </section>
  );
}
