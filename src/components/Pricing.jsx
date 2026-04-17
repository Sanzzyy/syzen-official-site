import { useState } from "react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("Company Profile");

  const pricingData = {
    "Company Profile": [
      {
        name: "Basic",
        originalPrice: "1.800.000",
        price: "800.000",
        description: "Landing page tunggal untuk profil bisnis ringkas.",
        features: [
          "Desain Maksimal 4 Halaman",
          "Responsif di Semua Perangkat",
          "Form Kontak Langsung ke WhatsApp",
          "Gratis Hosting & Subdomain 1 Tahun",
          "Garansi Maintenance 15 Hari",
          "Panduan Akses Website",
        ],
        isPopular: false,
      },
      {
        name: "Profesional",
        originalPrice: "2.800.000",
        price: "1.500.000",
        description: "Website multi-halaman untuk perusahaan menengah.",
        features: [
          "Free Domain (.com)",
          "Desain Maksimal 5-6 Halaman",
          "Desain Web Premium dan Clean",
          "Formulir Kontak Otomatis",
          "Gratis Revisi 3x",
          "Gratis Maintenance 1 Bulan",
        ],
        isPopular: true,
      },
      {
        name: "Enterprise",
        originalPrice: "6.500.000",
        price: "4.500.000",
        description: "Custom web dengan CMS khusus untuk corporate.",
        features: [
          "Free Domain (.com)",
          "Desain Halaman 5-6 (Bisa Request)",
          "Optimization Web (Lazy Load)",
          "Desain Interaktif",
          "Gratis Revisi 5x",
          "Gratis Maintenance 2 Bulan",
        ],
        isPopular: false,
      },
    ],

    "Toko Online": [
      {
        name: "Starter Store",
        originalPrice: "3.800.000",
        price: "2.500.000",
        description: "Katalog online simpel dengan checkout via WA.",
        features: [
          "Free Domain (.com)",
          "Responsif di Semua Perangkat",
          "Gambar Produk, Harga, Deskripsi",
          "Tombol Keranjang dan Checkout ke WhatsApp",
          "Gratis Hosting",
          "Garansi Maintenance 15 Hari",
          "Video Panduan Akses Website",
        ],
        isPopular: false,
      },
      {
        name: "Pro Store",
        originalPrice: "7.500.000",
        price: "5.000.000",
        description: "Toko online otomatis dengan integrasi kurir & bayar.",
        features: [
          "Website Bisa di Kelola Sendiri",
          "Fitur Search dan Filter",
          "Tombol Keranjang dan Checkout ke WhatsApp",
          "Desain Premium dan Clean",
          "Laporan Penjualan Excel/PDF",
          "Sistem Manajemen Stok",
        ],
        isPopular: true,
      },
    ],

    "Website Custom": [
      {
        name: "Custom Development",
        originalPrice: "15.000.000",
        price: "10.000.000",
        description:
          "Solusi website kompleks (Sistem Booking, Portal Berita, Web App Khusus).",
        features: [
          "Desain UI/UX Eksklusif",
          "Sistem Database ",
          "Dashboard Admin Panel Khusus",
          "Keamanan Tingkat Lanjut (SSL Pro)",
          "Priority Maintenance & Support 3 Bulan",
          "Penyerahan Source Code Penuh",
        ],
        isPopular: true,
      },
    ],
  };

  return (
    <section id="pricing" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block bg-red-500/10 border border-red-500/50 text-red-500 px-5 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest mb-6 animate-pulse">
            🔥 DISKON SPESIAL BERLAKU 3 HARI
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Harga Layanan
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Pilih kategori layanan, lalu temukan paket yang paling sesuai
            sebelum promo berakhir.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 bg-zinc-900 p-2 rounded-full w-fit mx-auto border border-zinc-800">
          {Object.keys(pricingData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                activeTab === category
                  ? "bg-white text-black shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div
          key={activeTab}
          className={`grid gap-8 items-center animate-fade-in-up mx-auto ${
            pricingData[activeTab].length === 1
              ? "md:grid-cols-1 max-w-md"
              : pricingData[activeTab].length === 2
                ? "md:grid-cols-2 max-w-4xl"
                : "md:grid-cols-3 max-w-6xl"
          }`}
        >
          {pricingData[activeTab].map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col h-full p-8 md:p-10 rounded-3xl transition-all duration-500 ${
                plan.isPopular
                  ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-2xl scale-100 md:scale-105 z-10 border-4 border-white dark:border-zinc-700"
                  : "bg-zinc-900 text-white border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg z-20">
                  Rekomendasi
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <p
                  className={`text-sm leading-relaxed min-h-[40px] ${
                    plan.isPopular
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-400"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Tampilan Harga & Kupon yang Jauh Lebih Jelas */}
              <div className="mb-8 flex flex-col">
                <span
                  className={`text-sm font-semibold mb-3 ${
                    plan.isPopular
                      ? "text-gray-500 dark:text-gray-400"
                      : "text-gray-400"
                  }`}
                >
                  Mulai dari
                </span>

                {/* Kotak Kupon & Harga Coret */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <div className="bg-red-500/20 border border-dashed border-red-500 text-red-500 px-2 py-1 rounded-md text-xs font-bold tracking-wider">
                    🎟️ PROMO
                  </div>
                  <span
                    className={`text-lg font-semibold line-through ${
                      plan.isPopular
                        ? "text-gray-500 dark:text-gray-400"
                        : "text-gray-400"
                    }`}
                  >
                    Rp {plan.originalPrice}
                  </span>
                </div>

                <div className="text-4xl lg:text-5xl font-bold mt-1 tracking-tight">
                  <span className="text-2xl align-top">Rp</span> {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className={`w-6 h-6 shrink-0 ${
                        plan.isPopular
                          ? "text-black dark:text-white"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm md:text-base ${
                        plan.isPopular
                          ? "text-gray-700 dark:text-gray-200"
                          : "text-gray-300"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/6282279773535?text=Halo%20Kak%20Sajid,%20saya%20tertarik%20dengan%20Promo%20Jasa%20Pembuatan%20*${activeTab}%20-%20Paket%20${plan.name}*.%20Bisa%20minta%20info%20lebih%20lanjut?`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 mt-auto ${
                  plan.isPopular
                    ? "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-xl"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
