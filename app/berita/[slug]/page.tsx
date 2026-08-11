import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { DATA_BERITA_DESA } from '@/data/berita';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DetailBeritaPage({ params }: PageProps) {
  const { slug } = await params;

  // Cari berita berdasarkan slug dari data/berita.ts
  const berita = DATA_BERITA_DESA.find((item) => item.slug === slug);

  // Tampilkan halaman 404 jika berita tidak ditemukan
  if (!berita) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tombol Kembali */}
        <Link
          href="/#berita"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mb-8 group transition-colors"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>

        {/* Kartu Berita */}
        <article className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm p-6 sm:p-10">
          
          {/* Badge Kategori & Tanggal */}
          <div className="flex flex-wrap items-center gap-4 text-xs mb-4">
            <span className="bg-emerald-100 text-emerald-800 font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Tag size={12} />
              {berita.category}
            </span>
            <span className="text-slate-500 flex items-center gap-1 font-medium">
              <Calendar size={14} />
              {berita.date}
            </span>
          </div>

          {/* Judul Berita */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            {berita.title}
          </h1>

          {/* Gambar Berita */}
          <div className="relative w-full h-[300px] sm:h-[420px] rounded-2xl overflow-hidden mb-8 bg-slate-100">
            <img
              src={berita.image}
              alt={berita.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Isi Paragraf Berita */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
            <p className="text-lg font-medium text-slate-800 leading-relaxed">
              {berita.snippet}
            </p>
            <p>
              Lanjan, Sumowono — Kegiatan ini dilaksanakan dalam rangka memperkuat sinergi antara Pemerintah Desa Lanjan dan seluruh elemen masyarakat. Melalui program ini, diharapkan setiap layanan dan fasilitas umum dapat terus ditingkatkan demi kesejahteraan bersama.
            </p>
            <p>
              Pemerintah Desa Lanjan menyampaikan apresiasi dan ucapan terima kasih kepada seluruh warga yang terus berpartisipasi aktif dalam mendukung berbagai agenda pembangunan desa.
            </p>
          </div>

        </article>
      </div>
    </main>
  );
}