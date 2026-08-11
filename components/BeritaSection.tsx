'use client';

import React from 'react';
import Link from 'next/link'; // Import Link dari next/link
import { Calendar, ArrowRight } from 'lucide-react';
import { DATA_BERITA_DESA } from '@/data/berita';

export default function BeritaSection() {
  return (
    <section id="berita" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider block mb-2">
              Kabar & Informasi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Berita & Pengumuman Desa
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md mt-2 md:mt-0">
            Informasi resmi seputar kegiatan, pembangunan, dan pengumuman masyarakat Desa Lanjan, Sumowono.
          </p>
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATA_BERITA_DESA.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  <Calendar size={12} />
                  {item.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-6">
                    {item.snippet}
                  </p>
                </div>

                {/* Tombol ke Halaman Detail Internal */}
                <Link
                  href={`/berita/${item.slug}`}
                  className="inline-flex items-center justify-between text-emerald-600 font-semibold text-sm hover:text-emerald-700 group/btn pt-4 border-t border-slate-100"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}