import { useState } from "react";

export default function Portfolio() {
  // 1. State untuk mengatur filter kategori (Default: "Semua")
  const [activeCategory, setActiveCategory] = useState("Semua");

  // State untuk mengatur jumlah project yang tampil
  const [showAll, setShowAll] = useState(false);

  // 2. Daftar Kategori (Menu Filter)
  const categories = [
    "Semua",
    "Company Profile",
    "Toko Online",
    "Sistem Custom",
  ];

  // 3. Tambahkan properti "category" di setiap objek project
  const projects = [
    {
      title: "Sistem Absensi Organisasi",
      desc: "Sistem manajemen kehadiran modern yang dirancang untuk melacak dan mengelola kehadiran anggota organisasi secara real-time dengan mudah.",
      image: "/img/projects/project_1.png",
      category: "Sistem Custom",
    },
    {
      title: "Web Hotel Profesional",
      desc: "Website hotel modern dengan tampilan elegan yang dirancang untuk meningkatkan kepercayaan pelanggan, menampilkan informasi kamar, fasilitas, serta sistem reservasi yang mudah digunakan.",
      image: "/img/projects/project_7.png",
      category: "Company Profile",
    },
    {
      title: "Web Taman Satwa",
      desc: "Website Taman Satwa profesional dengan desain modern yang menampilkan produk secara menarik, dilengkapi fitur katalog, detail produk, dan pengalaman belanja yang responsif.",
      image: "/img/projects/project_9.png",
      category: "Toko Online",
    },
    {
      title: "Web E-Commerce",
      desc: "Platform toko online dengan desain modern yang menampilkan produk secara menarik, dilengkapi fitur katalog, detail produk, dan pengalaman belanja yang responsif.",
      image: "/img/projects/project_8.png",
      category: "Toko Online",
    },
    {
      title: "Remake Aplikasi Mengelola Keuangan",
      desc: "Remake aplikasi pencatat keuangan pribadi yang cerdas, ditingkatkan dengan Supabase untuk manajemen data yang andal dan antarmuka pengguna yang sangat responsif.",
      image: "/img/projects/project_2.png",
      category: "Sistem Custom",
    },
    {
      title: "Sistem Input Matakuliah",
      desc: "Aplikasi web dinamis yang dirancang untuk membantu saya memasukkan, mengelola, dan mengatur jadwal kuliah saya secara efisien.",
      image: "/img/projects/project_3.png",
      category: "Sistem Custom",
    },
    {
      title: "Aplikasi Mengelola Keuangan",
      desc: "Sistem aplikasi pencatat keuangan saya, yang menggunakan Firebase untuk manajemen basis data waktu nyata dan otentikasi pengguna.",
      image: "/img/projects/project_4.png",
      category: "Sistem Custom",
    },
    {
      title: "Remake Portfolio",
      desc: "Web Portofolio pribadi yang telah ditingkatkan, menampilkan UI/UX interaktif dan animasi yang mulus untuk memamerkan perjalanan pengembangan saya.",
      image: "/img/projects/project_5.png",
      category: "Company Profile",
    },
    {
      title: "Portfolio",
      desc: "Web Portofolio pribadi pertama saya, dirancang dari awal untuk memamerkan keterampilan dan proyek pengembangan web awal saya.",
      image: "/img/projects/project_6.png",
      category: "Company Profile",
    },
  ];

  // 4. Logika Filter: Saring project berdasarkan kategori yang dipilih
  const filteredProjects = projects.filter((project) =>
    activeCategory === "Semua" ? true : project.category === activeCategory,
  );

  // Logika pembatasan: Ambil dari hasil yang sudah di-filter
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section
      id="portfolio"
      className="py-24 px-6 max-w-6xl mx-auto bg-white dark:bg-[#0a0a0a]"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
            Portfolio
          </h2>
          <div className="h-1 w-20 bg-black dark:bg-white mt-4"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-6 md:mt-4 text-lg">
            Bukti nyata solusi digital yang telah saya bangun untuk berbagai
            kebutuhan.
          </p>
        </div>
        <a
          href="https://tiktok.com/@syzen.web"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-black dark:text-white font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0"
        >
          Lihat prosesnya di TikTok
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            &rarr;
          </span>
        </a>
      </div>

      {/* 5. Menu Filter Kategori (Tabs) */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            // Saat diklik, ubah kategori dan reset tombol "Tampilkan Semua" ke false (biar rapi)
            onClick={() => {
              setActiveCategory(category);
              setShowAll(false);
            }}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeCategory === category
                ? "bg-black dark:bg-white text-white dark:text-black shadow-md"
                : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      {/* Tambahkan min-h agar layout tidak lompat-lompat saat data kosong */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 transition-all duration-500 min-h-[400px] content-start">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project, index) => (
            <div
              key={`${activeCategory}-${index}`} // Key unik agar animasi ulang saat ganti kategori
              className="group cursor-pointer flex flex-col p-5 border border-gray-200 dark:border-gray-800 rounded-3xl hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-zinc-900 animate-fade-in-up"
            >
              {/* Badge Kategori di atas gambar */}
              <div className="overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 dark:bg-gray-800 mb-6 border border-gray-100 dark:border-gray-800 relative">
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm text-black dark:text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-sm">
                  {project.category}
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="px-1 flex-grow">
                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))
        ) : (
          // Tampilan jika kategori kosong (Opsional, jaga-jaga)
          <div className="col-span-1 md:col-span-3 text-center py-20 text-gray-500">
            Belum ada proyek di kategori ini.
          </div>
        )}
      </div>

      {/* Tombol Toggle (Hanya tampil jika jumlah data di kategori tersebut lebih dari 3) */}
      {filteredProjects.length > 3 && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-bold rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            {showAll ? "Lebih Sedikit" : "Tampilkan Semua"}
            <span
              className={`transform transition-transform duration-300 ${
                showAll ? "rotate-180" : "rotate-0"
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
