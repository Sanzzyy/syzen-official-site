export const whatsappNumber = "6282279773535";
export const whatsappText = encodeURIComponent(
  "Halo Syzen Web, saya ingin konsultasi gratis untuk kebutuhan website bisnis.",
);
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const valueHighlights: string[] = [
  "Responsive",
  "Fast loading",
  "Custom design",
  "CTA WhatsApp",
];

export interface ServicePoint {
  highlight: string;
  text: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  points: ServicePoint[];
}

export const services: ServiceItem[] = [
  {
    title: "Landing Page Bisnis",
    description:
      "Website satu halaman (Single-Page) dengan arsitektur konversi tinggi, dirancang khusus untuk memikat calon pelanggan dan mempercepat keputusan pembelian.",
    points: [
      {
        highlight: "Fokus Konversi Tinggi",
        text: "Menarik perhatian pengunjung sejak detik pertama dan mengarahkannya untuk segera membeli atau menghubungi Anda.",
      },
      {
        highlight: "Kecepatan Akses Tinggi",
        text: "Struktur kode bersih bebas bloat yang membuat halaman terbuka instan baik di smartphone maupun desktop.",
      },
      {
        highlight: "WhatsApp Direct CTA",
        text: "Tombol Call to Action yang terintegrasi secara cerdas untuk menghubungkan leads berkualitas langsung ke chat Anda.",
      },
    ],
  },
  {
    title: "Company Profile",
    description:
      "Website profesional multi-halaman untuk memperkuat kehadiran online, memamerkan portofolio terbaik, serta membangun kredibilitas bisnis Anda di mata klien.",
    points: [
      {
        highlight: "Kredibilitas Brand Kuat",
        text: "Presentasi visual premium yang menonjolkan profesionalisme bisnis, sejarah, visi-misi, dan keunikan jasa Anda.",
      },
      {
        highlight: "Showcase Portofolio & Layanan",
        text: "Tampilan galeri hasil kerja dan detail layanan dengan layout modern yang mempermudah klien dalam memilih.",
      },
      {
        highlight: "Struktur Ramah Google",
        text: "Pondasi coding ramah SEO agar bisnis Anda lebih mudah ditemukan oleh calon pelanggan potensial di hasil pencarian.",
      },
    ],
  },
  {
    title: "Custom Website",
    description:
      "Solusi website interaktif dengan sistem khusus seperti booking online, katalog dinamis, portal komunitas, hingga dashboard kustom untuk alur operasional Anda.",
    points: [
      {
        highlight: "Fitur & Sistem Kustom",
        text: "Pengembangan fitur unik dari nol yang sepenuhnya disesuaikan dengan alur kerja nyata operasional bisnis Anda.",
      },
      {
        highlight: "Dashboard Admin Ringan",
        text: "Panel kontrol intuitif dan berkinerja tinggi untuk memudahkan Anda mengelola data bisnis secara real-time.",
      },
      {
        highlight: "Arsitektur Siap Berkembang",
        text: "Struktur kode modular modern yang siap diskalakan dan ditambah modul baru seiring pertumbuhan pesat bisnis.",
      },
    ],
  },
];

export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  accent: string;
  image: string;
  url: string;
  filterGroup: "landing" | "company" | "custom";
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Sistem Absensi Organisasi",
    category: "Sistem Khusus / Web App",
    description:
      "Sistem manajemen kehadiran modern yang dirancang untuk melacak dan mengelola kehadiran anggota organisasi secara real-time dengan mudah.",
    accent: "#2563eb",
    image: "/assets/projects/project_1.png",
    url: "syzen.web/absensi-organisasi",
    filterGroup: "custom",
  },
  {
    title: "Remake Aplikasi Mengelola Keuangan",
    category: "Sistem Khusus / Web App",
    description:
      "Remake aplikasi pencatat keuangan pribadi yang cerdas, ditingkatkan dengan Supabase untuk manajemen data yang andal dan antarmuka pengguna yang sangat responsif.",
    accent: "#0f766e",
    image: "/assets/projects/project_2.png",
    url: "syzen.web/company-profile",
    filterGroup: "company",
  },
  {
    title: "Sistem Input Matakuliah",
    category: "Sistem Khusus / Web App",
    description:
      "Sistem efisien untuk membantu mahasiswa dalam merencanakan dan mengelola mata kuliah yang akan diambil, lengkap dengan simulasi beban studi dan prasyarat.",
    accent: "#f59e0b",
    image: "/assets/projects/project_3.png",
    url: "syzen.web/event-page",
    filterGroup: "landing",
  },
  {
    title: "Web Hotel Profesional",
    category: "Company Profile",
    description:
    "Website hotel modern dengan tampilan elegan yang dirancang untuk meningkatkan kepercayaan pelanggan, menampilkan informasi kamar, fasilitas, serta sistem reservasi yang mudah digunakan.",
    accent: "#db2777",
    image: "/assets/projects/project_4.png",
    url: "syzen.web/creative-brand",
    filterGroup: "company",
  },
  {
    title: "Web E-Commerce",
    category: "Sistem Khusus / Web App",
    description:
      "Platform toko online dengan desain modern yang menampilkan produk secara menarik, dilengkapi fitur katalog, detail produk, dan pengalaman belanja yang responsif.",
    accent: "#22c55e",
    image: "/assets/projects/project_5.png",
    url: "syzen.web/dashboard-absensi",
    filterGroup: "custom",
  },
  {
    title: "Web Taman Satwa",
    category: "Landing Page",
    description:
      "Website Taman Satwa profesional dengan desain modern yang menampilkan produk secara menarik, dilengkapi fitur katalog, detail produk, dan pengalaman belanja yang responsif.",
    accent: "#7c3aed",
    image: "/assets/projects/project_6.png",
    url: "syzen.web/esport",
    filterGroup: "landing",
  },
];

export interface PackageItem {
  name: string;
  price: string;
  description: string;
  fit: string;
  features: string[];
  featured: boolean;
}

export const packages: PackageItem[] = [
  {
    name: "Landing Page Bisnis",
    price: "Mulai dari Rp1.500.000",
    description:
      "Website satu halaman premium berorientasi konversi tinggi untuk promosi produk atau jasa Anda.",
    fit: "Cocok untuk promo produk, event, campaign iklan, dan UMKM yang ingin cepat go-online.",
    features: [
      "Desain Premium 1 Halaman (Single-Page)",
      "Maksimal 5 Bagian Halaman (Sections)",
      "Tampilan Responsif (Mobile & Desktop)",
      "Integrasi Tombol WhatsApp Direct Chat",
      "Optimasi Kecepatan Loading Website",
      "Setup SEO Dasar (Meta Tags & Sitemap)",
      "Setup SSL Keamanan Selamanya",
      "Gratis Revisi 2x & Panduan Kelola",
    ],
    featured: false,
  },
  {
    name: "Company Profile",
    price: "Mulai dari Rp3.000.000",
    description:
      "Website multi-halaman profesional untuk memamerkan profil usaha dan membangun kredibilitas kuat.",
    fit: "Cocok untuk korporasi, UMKM berkembang, dan penyedia jasa yang butuh trust signal kokoh.",
    features: [
      "Struktur Multi-Halaman (Up to 6 Halaman)",
      "Halaman Beranda, Tentang Kami, Layanan, Portofolio, Kontak",
      "Integrasi Form Kontak & Google Maps",
      "Animasi Elegan & Visual Berkelas",
      "Setup SEO Premium & Indeks Google Search Console",
      "Setup SSL Keamanan Selamanya",
      "Gratis Revisi 3x & Dukungan Teknis",
    ],
    featured: true,
  },
  {
    name: "Custom Website",
    price: "Diskusi Kebutuhan",
    description:
      "Website interaktif bersistem khusus yang dirancang penuh menyesuaikan alur operasional bisnis unik Anda.",
    fit: "Cocok untuk sistem booking, e-catalog, portal dinamis, dashboard admin, atau web app khusus.",
    features: [
      "Analisis Kebutuhan & Desain UI/UX Eksklusif",
      "Sistem Interaktif Kustom (Booking, Katalog, dll)",
      "Dashboard Admin untuk Kelola Data Mandiri",
      "Arsitektur Kode Modular (Mudah Dikembangkan)",
      "Integrasi API Pihak Ketiga (Payment Gateway, dll)",
      "Penyerahan Source Code & Hak Milik Penuh",
      "Dukungan Pemeliharaan & Monitoring (1 Bulan)",
    ],
    featured: false,
  },
];

export interface TrustSignal {
  title: string;
  description: string;
}

export const trustSignals: TrustSignal[] = [
  {
    title: "Brief lebih terarah",
    description:
      "Kebutuhan website diterjemahkan menjadi struktur halaman yang jelas dan mudah dibaca.",
  },
  {
    title: "Visual terasa modern",
    description:
      "Desain dibuat bersih, premium, dan tidak terasa seperti template generik.",
  },
  {
    title: "CTA tidak membingungkan",
    description:
      "Visitor diarahkan ke langkah berikutnya dengan tombol dan pesan yang natural.",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery (Riset & Analisis)",
    description:
      "Sesi diskusi mendalam untuk memetakan visi bisnis, target audiens, dan menyusun strategi agar tujuan website tepat sasaran.",
  },
  {
    number: "02",
    title: "Direction (Konsep & Strategi)",
    description:
      "Merancang arsitektur informasi, menyusun copywriting persuasif yang menjual, serta merumuskan visual style (moodboard) & alur CTA.",
  },
  {
    number: "03",
    title: "Build (Desain & Kode)",
    description:
      "Menulis kode bersih berkecepatan tinggi menggunakan Astro & Tailwind CSS v4, mengimplementasikan animasi mikro, serta optimasi responsif.",
  },
  {
    number: "04",
    title: "Launch (Optimasi & Handover)",
    description:
      "Pengujian performa, setup domain & SEO ramah Google, hingga sesi serah terima agar Anda bisa mengelola website secara mandiri.",
  },
];

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  initials: string;
  projectType: string;
}

export const testimonials: TestimonialItem[] = [
  {
    name: "Rian Hidayat",
    role: "Owner",
    company: "Kopi Senja",
    feedback:
      "Landing page buatan Syzen sangat cepat dan responsif! Penjualan kopi kemasan kami naik hampir 50% setelah website diluncurkan.",
    rating: 5,
    initials: "RH",
    projectType: "Landing Page",
  },
  {
    name: "Siti Rahma",
    role: "Founder",
    company: "Butik Aisyah",
    feedback:
      "Komunikasi sangat lancar dan visual web-nya benar-benar mewah. Sangat puas dengan hasil company profile butik kami.",
    rating: 5,
    initials: "SR",
    projectType: "Company Profile",
  },
  {
    name: "Budi Santoso",
    role: "CEO",
    company: "TechInovasi",
    feedback:
      "Sistem kustom dashboard absensi terintegrasi dengan sempurna. Kerja cepat, kode bersih, dan dokumentasi lengkap.",
    rating: 5,
    initials: "BS",
    projectType: "Custom Website",
  },
  {
    name: "Anita Wijaya",
    role: "Marketing Manager",
    company: "MedikaPlus Klinik",
    feedback:
      "Website profil klinik kami jadi jauh lebih kredibel. Desain modern dan alur pendaftaran pasien jadi sangat mudah.",
    rating: 5,
    initials: "AW",
    projectType: "Company Profile",
  },
];
