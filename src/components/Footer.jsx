export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-5xl mx-auto px-6">
        {/* Layout Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Kolom 1: Identitas Brand */}
          <div className="md:col-span-1">
            <a
              href="#"
              className="text-2xl font-black tracking-tighter text-black dark:text-white"
            >
              SYZEN<span className="text-gray-400">.WEB</span>
            </a>
            <p className="mt-4 text-gray-500 leading-relaxed text-sm">
              Mitra digital terpercaya untuk membangun website bisnis yang
              modern, cepat, dan dirancang khusus untuk meningkatkan konversi
              pelanggan Anda.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-4">
              Jelajahi
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="#about"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Tentang Saya
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Portfolio Karya
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Paket & Harga
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Sosial Media */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-4">
              Mari Terhubung
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href={`https://wa.me/6282279773535?text=Halo%20Kak%20Sajid,%20saya%20tertarik%20dengan%20paket%20pembuatan%20web%20*.%20Bisa%20minta%20info%20lebih%20lanjut?`}
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  WhatsApp Consultation
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@syzen.web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  TikTok Edukasi (@syzen.web)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/muhammad-sajid-izzulhaq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bagian Bawah: Copyright & Lokasi */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 SYZEN.WEB. All rights reserved.</p>
          <p className="font-medium">Bandar Lampung, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
