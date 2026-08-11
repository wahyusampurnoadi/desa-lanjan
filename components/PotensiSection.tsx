'use client';

import React from 'react';
import { Sprout, Mountain, ShoppingBag, ArrowUpRight } from 'lucide-react';

const POTENSI_DATA = [
  {
    title: 'Sektor Pertanian & Perkebunan',
    description:
      'Menjadi sektor unggulan utama dengan komoditas melimpah berupa kopi dan aneka sayuran, padi (yang dipanen setahun sekali karena kontur dataran tinggi), serta hasil palawija seperti ketela dan ubi.',
    icon: Sprout,
    // Gambar Unsplash Hortikultura/Pertanian
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Seni Budaya dan Olahraga',
    description:
      'Desa Lanjan memiliki kekayaan seni tradisional berupa kesenian reog, serta prestasi dan fasilitas olahraga unggulan yaitu cabang olahraga bulu tangkis di Dusun Lanjan serta bola voli di Dusun Jambon.',
    icon: Mountain,
    // Gambar Unsplash Pegunungan/Wisata Alam
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: '​Produk Unggulan UMKM (Olahan Ketela & Lainnya)',
    description:
      'Usaha egg roll yang berlokasi di Dusun Kalibanger. ​Rengginang pohong "Mak Dah" serta berbagai jajanan pasar tradisional di Dusun Jambon. Rengginang singkong "Mak Nunuk" di Dusun Jambon.Kripik atos-atos di Dusun Ngelo. Berbagai jajanan pasar/makanan tradisional khas olahan warga seperti cetil, cetot, lupis, ketan srundeng, klepon, jongkong, dan putu mayang (yang selama ini dipasarkan secara offline di Pasar Babadan, Ungaran, serta pesanan warga sekitar).',
    icon: ShoppingBag,
    // Gambar Unsplash Kerajinan/Produk Lokal
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
  },
];

export default function PotensiSection() {
  return (
    <section id="potensi" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
            Keunggulan Wilayah
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3">
            Potensi & Wisata Desa
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Sektor-sektor unggulan yang menjadi pilar perekonomian dan keindahan Desa Lanjan.
          </p>
        </div>

        {/* Grid 3 Card Kartu Gradasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POTENSI_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-end p-6 border border-slate-100"
              >
                {/* 1. Background Image dengan Zoom Effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />

                {/* 2. Gradasi Overlay (Transparan ke Hitam) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

                {/* 3. Badge Icon di Pojok Kanan Atas */}
                <div className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-300 shadow-lg">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* 4. Konten Teks di Atas Gradasi */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400" />
                  </h3>

                  <p className="text-sm text-slate-200/90 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
