import { LucideIcon, Trees, Users, Award, MapPin } from 'lucide-react';

export interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface PotensiItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BeritaItem {
  id: number;
  date: string;
  title: string;
  snippet: string;
}

export const STATS_DATA: StatItem[] = [
  { icon: Users, value: '4366+', label: 'Jumlah Penduduk' },
  { icon: Trees, value: 'Agrikultur', label: 'Komoditas Utama' },
  { icon: Award, value: 'Mandiri', label: 'Status Desa' },
];

export const POTENSI_DATA: PotensiItem[] = [
  {
    icon: Trees,
    title: 'Pertanian & Holtikultura',
    description: 'Lahan subur Desa Lanjan menghasilkan berbagai produk pertanian berkualitas seperti cabai, kubis, dan sayuran hijau.'
  },
  {
    icon: MapPin,
    title: 'Wisata Alam & Edukasi',
    description: 'Pemandangan perbukitan yang indah serta potensi agrowisata petik sayur langsung dari kebun warga.'
  },
  {
    icon: Award,
    title: 'UMKM & Kerajinan',
    description: 'Produk olahan pangan lokal dan olahan hasil tani yang diproduksi secara mandiri oleh kelompok tani wanita (KWT).'
  }
];

export const BERITA_DATA: BeritaItem[] = [
  {
    id: 1,
    date: '12 Agustus 2026',
    title: 'Kegiatan Kerja Bakti dan Penghijauan Desa Lanjan Menyambut Musim Tanam',
    snippet: 'Warga Desa Lanjan bersama perangkat desa bergotong royong membersihkan saluran irigasi dan menanam bibit pohon...'
  },
  {
    id: 2,
    date: '05 Agustus 2026',
    title: 'Pelatihan Digitalisasi UMKM Produk Olahan Pangan Lokal Desa Lanjan',
    snippet: 'Pemerintah desa menggelar workshop pemasaran digital bagi para pelaku UMKM dan KWT Desa Lanjan...'
  },
  {
    id: 3,
    date: '28 Juli 2026',
    title: 'Penyaluran Bantuan Sektor Pertanian untuk Kelompok Tani Desa Lanjan',
    snippet: 'Pemerintah Kabupaten Semarang menyerahkan bantuan bibit dan alat pertanian modern kepada petani Lanjan...'
  }
];

export interface HeroSlide {
  id: number;
  title: string;
  highlight: string;
  description: string;
  badge: string;
  bgImage: string; // URL / Path gambar
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: 'Selamat Datang di Portal Resmi',
    title: 'Mewujudkan Desa Lanjan yang',
    highlight: 'Maju & Asri',
    description: 'Pusat informasi publik, potensi pertanian, serta layanan digital masyarakat Desa Lanjan, Kec. Sumowono, Kab. Semarang.',
    bgImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop' // Contoh Gambar Pemandangan
  },
  {
    id: 2,
    badge: 'Potensi Pertanian & Agrowisata',
    title: 'Hasil Alam Subur dari',
    highlight: 'Lereng Pegunungan',
    description: 'Menghasilkan berbagai komoditas sayur segar berkualitas tinggi yang dikelola oleh kelompok tani lokal.',
    bgImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    badge: 'Layanan Digital Desa',
    title: 'Kemudahan Akses Informasi &',
    highlight: 'Surat Online',
    description: 'Layanan publik yang cepat, transparan, dan dapat diakses dari mana saja untuk seluruh warga Desa Lanjan.',
    bgImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop'
  }
];