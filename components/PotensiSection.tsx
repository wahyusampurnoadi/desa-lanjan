'use client';

import React, { useState, useEffect } from 'react';
import { Sprout, Mountain, ShoppingBag, ArrowUpRight, X } from 'lucide-react';

const POTENSI_DATA = [
  {
    title: 'Sektor Pertanian & Perkebunan',
    description:
      'Menjadi sektor unggulan utama dengan komoditas melimpah berupa kopi dan aneka sayuran, padi (yang dipanen setahun sekali karena kontur dataran tinggi), serta hasil palawija seperti ketela dan ubi.',
    icon: Sprout,
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Seni Budaya dan Olahraga',
    description:
      'Desa Lanjan memiliki kekayaan seni tradisional berupa kesenian reog, serta prestasi dan fasilitas olahraga unggulan yaitu cabang olahraga bulu tangkis di Dusun Lanjan serta bola voli di Dusun Jambon.',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Produk Unggulan UMKM (Olahan Ketela & Lainnya)',
    description:
      'Usaha egg roll yang berlokasi di Dusun Kalibanger. Rengginang pohong "Mak Dah" serta berbagai jajanan pasar tradisional di Dusun Jambon. Rengginang singkong "Mak Nunuk" di Dusun Jambon. Kripik atos-atos di Dusun Ngelo. Berbagai jajanan pasar/makanan tradisional khas olahan warga seperti cetil, cetot, lupis, ketan srundeng, klepon, jongkong, dan putu mayang (yang selama ini dipasarkan secara offline di Pasar Babadan, Ungaran, serta pesanan warga sekitar).',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
  },
];

type PotensiItem = typeof POTENSI_DATA[0];

export default function PotensiSection() {
  const [selectedItem, setSelectedItem] = useState<PotensiItem | null>(null);

  // Mencegah scrollbar shift saat modal dibuka
  useEffect(() => {
    if (selectedItem) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedItem]);

  return (
    <section id="potensi" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
            Keunggulan Wilayah
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-3">
            Potensi & UMKM
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Sektor-sektor unggulan yang menjadi pilar perekonomian dan keindahan Desa Lanjan.
          </p>
        </div>

        {/* Grid 3 Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POTENSI_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                className="group relative h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-end p-6 border border-slate-100 dark:border-slate-800"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

                <div className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-300 shadow-lg">
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="relative z-10 space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400" />
                  </h3>

                  <p className="text-sm text-slate-200/90 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <span className="inline-block text-xs font-semibold text-emerald-400 group-hover:underline pt-1">
                    Klik untuk selengkapnya →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* MODAL POP-UP DETAIL */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28 bg-slate-950/80 backdrop-blur-md">
          {/* Backdrop (Klik Luar untuk Tutup) */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setSelectedItem(null)} 
          />

          {/* Modal Container */}
          <div 
            className="relative w-full max-w-2xl max-h-[75vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col z-10 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Gambar */}
            <div className="relative h-48 sm:h-56 w-full shrink-0 bg-slate-100 dark:bg-slate-950">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/30" />
              
              {/* Tombol Close (X) Utama */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white backdrop-blur-md transition-all cursor-pointer border border-white/20 hover:scale-110 shadow-lg"
                aria-label="Tutup Detail"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md mb-2">
                  {React.createElement(selectedItem.icon, { className: 'w-3.5 h-3.5' })}
                  Potensi Desa
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-md leading-tight">
                  {selectedItem.title}
                </h3>
              </div>
            </div>

            {/* Area Deskripsi Utama - Leluasa Maksimal */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col min-h-0 overflow-hidden">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 shrink-0">
                Deskripsi Lengkap
              </h4>
              
              <div 
                className="overflow-y-auto scroll-smooth flex-1 pr-2"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'
                }}
              >
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base whitespace-pre-line pb-4">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}