'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, X, Newspaper, User } from 'lucide-react';
import { DATA_BERITA_DESA } from '@/data/berita';

interface BeritaItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  snippet: string;
  content?: string;
  author?: string;
  slug: string;
}

export default function BeritaSection() {
  const [selectedBerita, setSelectedBerita] = useState<BeritaItem | null>(null);

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (selectedBerita) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedBerita]);

  return (
    <section 
      id="berita" 
      className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-2">
              Kabar & Informasi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Berita & Pengumuman Desa
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mt-2 md:mt-0">
            Informasi resmi seputar kegiatan, pembangunan, dan pengumuman masyarakat Desa Lanjan, Sumowono.
          </p>
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATA_BERITA_DESA.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:dark:border-emerald-500/50 rounded-2xl overflow-hidden shadow-md dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-xl hover:dark:shadow-emerald-950/30 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md text-slate-700 dark:text-slate-200 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
                  <Calendar size={12} className="text-emerald-600 dark:text-emerald-400" />
                  {item.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg leading-snug line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed mb-6">
                    {item.snippet}
                  </p>
                </div>

                {/* Tombol Pemicu Modal Pop-Up */}
                <button
                  type="button"
                  onClick={() => setSelectedBerita(item)}
                  className="inline-flex items-center justify-between w-full text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:text-emerald-700 dark:hover:text-emerald-300 group/btn pt-4 border-t border-slate-100 dark:border-slate-700/60 cursor-pointer"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MODAL POP-UP DETAIL BERITA */}
      {selectedBerita && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          {/* Overlay Click Area */}
          <div 
            className="absolute inset-0" 
            onClick={() => setSelectedBerita(null)} 
          />

          {/* Modal Card Box */}
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[82vh] overflow-y-auto z-10 transition-colors duration-300 flex flex-col my-auto">
            
            {/* Modal Header Image */}
            <div className="relative h-56 sm:h-72 w-full shrink-0 bg-slate-100 dark:bg-slate-950">
              <img 
                src={selectedBerita.image} 
                alt={selectedBerita.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Close Button - Selalu Terlihat di Pojok Kanan Atas Gambar */}
              <button
                onClick={() => setSelectedBerita(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 shadow-lg border border-white/20 cursor-pointer"
                aria-label="Tutup"
              >
                <X size={20} />
              </button>

              {/* Category Badge on Image */}
              <div className="absolute bottom-4 left-6 flex flex-wrap gap-2 items-center">
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {selectedBerita.category}
                </span>
                <span className="bg-slate-900/80 backdrop-blur-md text-slate-200 text-xs font-medium px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                  <Calendar size={12} className="text-emerald-400" />
                  {selectedBerita.date}
                </span>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {selectedBerita.title}
              </h2>

              {/* Author / Metadata Info */}
              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-1.5">
                  <User size={15} className="text-emerald-600 dark:text-emerald-400" />
                  <span>{selectedBerita.author || 'Admin Desa Lanjan'}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Newspaper size={15} className="text-emerald-600 dark:text-emerald-400" />
                  <span>Berita Resmi</span>
                </div>
              </div>

              {/* Full Content Body */}
              <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                {selectedBerita.content ? (
                  <p className="whitespace-pre-line">{selectedBerita.content}</p>
                ) : (
                  <>
                    <p>{selectedBerita.snippet}</p>
                    <p>
                      Pemerintah Desa Lanjan terus berkomitmen untuk menghadirkan pelayanan terbaik dan keterbukaan informasi publik kepada seluruh warga. Melalui program ini, diharapkan partisipasi aktif dari seluruh elemen masyarakat dapat terwujud demi kemajuan desa.
                    </p>
                  </>
                )}
              </div>

              {/* Modal Footer / Close Action */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedBerita(null)}
                  className="px-6 py-2.5 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-sm transition-all cursor-pointer"
                >
                  Tutup Informasi
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}