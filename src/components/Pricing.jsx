export default function Pricing() {
  const plans = [
    {
      name: "Landing Page",
      price: "1.500.000",
      description:
        "Cocok untuk promosi produk tunggal atau profil bisnis UMKM.",
      features: [
        "Desain 1 Halaman Premium",
        "Responsif (Tampil rapi di HP/Laptop)",
        "Tombol Chat WhatsApp Langsung",
        "Optimasi Kecepatan Muat",
        "Gratis Hosting & Subdomain 1 Tahun",
      ],
      isPopular: false,
    },
    {
      name: "Business System",
      price: "2.500.000",
      description:
        "Sistem custom untuk manajemen operasional, kasir, atau absensi.",
      features: [
        "Semua fitur Landing Page",
        "Dashboard Admin Panel",
        "Manajemen Data Real-time (CRUD)",
        "Keamanan Database Terjamin",
        "Gratis Revisi Desain 3x",
        "Gratis Maintenance 1 Bulan",
      ],
      isPopular: true, // Ini akan kita jadikan pusat perhatian
    },
    {
      name: "E-Commerce",
      price: "3.500.000",
      description:
        "Toko online lengkap untuk meningkatkan penjualan digital Anda.",
      features: [
        "Semua fitur Business System",
        "Katalog Produk Tanpa Batas",
        "Sistem Keranjang Belanja",
        "Checkout Otomatis ke WhatsApp",
        "Optimasi Pencarian (SEO) Dasar",
        "Video Tutorial Cara Penggunaan",
      ],
      isPopular: false,
    },
  ];

  return (
    // Section ini pakai background hitam murni agar kontras dengan section lain
    <section id="pricing" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Investasi Bisnis Digital
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Harga transparan, hasil profesional, dan tanpa biaya tersembunyi.
            Pilih paket yang paling sesuai dengan skala bisnis Anda.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 md:p-10 rounded-3xl transition-all duration-500 ${
                plan.isPopular
                  ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-2xl scale-100 md:scale-105 z-10 border-4 border-white dark:border-zinc-700"
                  : "bg-zinc-900 text-white border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {/* Badge Rekomendasi untuk Paket Tengah */}
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">
                  Rekomendasi
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <p
                  className={`text-sm leading-relaxed ${plan.isPopular ? "text-gray-600 dark:text-gray-300" : "text-gray-400"}`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={`text-sm font-semibold ${plan.isPopular ? "text-gray-500 dark:text-gray-400" : "text-gray-400"}`}
                >
                  Mulai dari
                </span>
                <div className="text-4xl md:text-5xl font-bold mt-1 tracking-tight">
                  <span className="text-2xl align-top">Rp</span> {plan.price}
                </div>
              </div>

              {/* List Fitur dengan Icon Checklist SVG */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className={`w-6 h-6 shrink-0 ${plan.isPopular ? "text-black dark:text-white" : "text-gray-400"}`}
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
                      className={`text-sm md:text-base ${plan.isPopular ? "text-gray-700 dark:text-gray-200" : "text-gray-300"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tombol CTA */}
              <a
                href={`https://wa.me/6282279773535?text=Halo%20Kak%20Sajid,%20saya%20tertarik%20dengan%20paket%20pembuatan%20web%20*${plan.name}*.%20Bisa%20minta%20info%20lebih%20lanjut?`}
                target="_blank" // Agar membuka tab baru / aplikasi WA
                rel="noopener noreferrer" // Standar keamanan React
                className={`block text-center py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 ${
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
