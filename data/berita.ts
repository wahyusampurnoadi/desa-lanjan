export interface Berita {
  id: number;
  title: string;
  slug: string;
  date: string;
  category: string;
  snippet: string;
  image: string;
  link?: string;
}

export const DATA_BERITA_DESA: Berita[] = [
  {
    id: 1,
    title: 'Pemerintah Desa Lanjan Dorong Digitalisasi Layanan Publik',
    slug: 'digitalisasi-layanan-publik-desa-lanjan',
    date: '04 Agustus 2026',
    category: 'Pemerintahan',
    snippet: 'Upaya meningkatkan efisiensi administrasi desa melalui integrasi sistem informasi berbasis web untuk memudahkan pelayanan warga Desa Lanjan.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    link: 'https://regional.kompas.com',
  },
  {
    id: 2,
    title: 'Pelatihan dan Pendampingan UMKM Hasil Tani Kecamatan Sumowono',
    slug: 'pelatihan-umkm-hasil-tani-sumowono',
    date: '02 Agustus 2026',
    category: 'Perekonomian',
    snippet: 'Program pemberdayaan petani lokal dalam mengolah dan mengemas produk holtikultura unggulan agar memiliki nilai jual dan daya saing tinggi.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.kompas.com',
  },
  {
    id: 3,
    title: 'Gotong Royong Pembersihan Saluran Irigasi Pertanian di Kabupaten Semarang',
    slug: 'gotong-royong-irigasi-kab-semarang',
    date: '28 Juli 2026',
    category: 'Kegiatan Warga',
    snippet: 'Warga Desa Lanjan bersama-sama membersihkan aliran irigasi guna mengantisipasi musim tanam dan menjaga kelancaran pasokan air ke perkebunan.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.detik.com',
  },
];