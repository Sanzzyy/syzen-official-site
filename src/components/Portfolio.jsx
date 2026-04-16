import { useState } from "react";

export default function Portfolio() {
  // State untuk mengatur jumlah project yang tampil
  const [showAll, setShowAll] = useState(false);

  // Array 6 Proyek (Tech dihapus, fokus ke fungsi/solusi)
  const projects = [
    {
      title: "Sistem Absensi Organisasi",
      desc: "Sistem manajemen kehadiran modern yang dirancang untuk melacak dan mengelola kehadiran anggota organisasi secara real-time dengan mudah.",
      image: "/img/projects/project_1.png",
    },
    {
      title: "Web Hotel Profesional",
      desc: "Website hotel modern dengan tampilan elegan yang dirancang untuk meningkatkan kepercayaan pelanggan, menampilkan informasi kamar, fasilitas, serta sistem reservasi yang mudah digunakan.",
      image: "/img/projects/project_7.png",
    },
    {
      title: "Web E-Commerce",
      desc: "Platform toko online dengan desain modern yang menampilkan produk secara menarik, dilengkapi fitur katalog, detail produk, dan pengalaman belanja yang responsif.",
      image: "/img/projects/project_8.png",
    },
    {
      title: "Remake Aplikasi Mengelola Keuangan",
      desc: "Remake aplikasi pencatat keuangan pribadi yang cerdas, ditingkatkan dengan Supabase untuk manajemen data yang andal dan antarmuka pengguna yang sangat responsif.",
      image: "/img/projects/project_2.png",
    },
    {
      title: "Sistem Input Matakuliah",
      desc: "Aplikasi web dinamis yang dirancang untuk membantu saya memasukkan, mengelola, dan mengatur jadwal kuliah saya secara efisien.",
      image: "/img/projects/project_3.png",
    },
    {
      title: "Aplikasi Mengelola Keuangan",
      desc: "Sistem aplikasi pencatat keuangan saya, yang menggunakan Firebase untuk manajemen basis data waktu nyata dan otentikasi pengguna.",
      image: "/img/projects/project_4.png",
    },
    {
      title: "Remake Portfolio",
      desc: "Web Portofolio pribadi yang telah ditingkatkan, menampilkan UI/UX interaktif dan animasi yang mulus untuk memamerkan perjalanan pengembangan saya.",
      image: "/img/projects/project_5.png",
    },
    {
      title: "Portfolio",
      desc: "Web Portofolio pribadi pertama saya, dirancang dari awal untuk memamerkan keterampilan dan proyek pengembangan web awal saya.",
      image: "/img/projects/project_6.png",
    },
  ];

  // Logika pembatasan: Jika showAll true, tampilkan semua. Jika false, ambil 3 saja.
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="portfolio"
      className="py-24 px-6 max-w-6xl mx-auto bg-white dark:bg-[#0a0a0a]"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
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
          className="group flex items-center gap-2 text-black dark:text-white font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          Lihat prosesnya di TikTok
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            &rarr;
          </span>
        </a>
      </div>

      {/* Grid Layout (Card Style dengan Border) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 transition-all duration-500">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            // Tambahan Card Layout: p-5, border, rounded, dan efek hover shadow/angkat sedikit
            className="group cursor-pointer flex flex-col p-5 border border-gray-200 dark:border-gray-800 rounded-3xl hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-zinc-900"
          >
            {/* Image Container */}
            <div className="overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 dark:bg-gray-800 mb-6 border border-gray-100 dark:border-gray-800 relative">
              <img
                src={project.image}
                alt={project.title}
                // Hapus grayscale, biarkan colorfull, tetap ada efek zoom saat hover
                className="w-full h-full object-cover "
              />
            </div>

            {/* Text Content */}
            <div className="px-1">
              <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Toggle */}
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
    </section>
  );
}
