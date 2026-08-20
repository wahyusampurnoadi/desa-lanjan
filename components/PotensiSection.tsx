'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Sprout, Mountain, ShoppingBag, ArrowUpRight, X, Maximize2, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const POTENSI_DATA = [
  {
    title: 'Sektor Pertanian & Perkebunan',
    description:
      'Menjadi sektor unggulan utama dengan komoditas melimpah berupa kopi dan aneka sayuran, padi (yang dipanen setahun sekali karena kontur dataran tinggi), serta hasil palawija seperti ketela dan ubi.',
    icon: Sprout,
    image: '/images/header-1.webp',
    gallery: [
      '/images/header-1.jpg',
      '/images/header-2.jpg',
      '/images/header-3.jpg',
    ],
  },
  {
    title: 'Seni Budaya dan Olahraga',
    description:
      'Desa Lanjan memiliki kekayaan seni tradisional berupa kesenian reog, serta prestasi dan fasilitas olahraga unggulan yaitu cabang olahraga bulu tangkis di Dusun Lanjan serta bola voli di Dusun Jambon.',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      '/images/profil.jpg',
    ],
  },
  {
    title: 'Produk Unggulan UMKM (Olahan Ketela & Lainnya)',
    description:
      'Usaha egg roll yang berlokasi di Dusun Kalibanger. Rengginang pohong "Mak Dah" serta berbagai jajanan pasar tradisional di Dusun Jambon. Rengginang singkong "Mak Nunuk" di Dusun Jambon. Kripik atos-atos di Dusun Ngelo. Berbagai jajanan pasar/makanan tradisional khas olahan warga seperti cetil, cetot, lupis, ketan srundeng, klepon, jongkong, dan putu mayang (yang selama ini dipasarkan secara offline di Pasar Babadan, Ungaran, serta pesanan warga sekitar).',
    icon: ShoppingBag,
    image: '/images/umkm-1.webp',
    gallery: [
      '/images/umkm-2.webp',
      '/images/umkm-3.webp',
      '/images/umkm-4.webp',
      '/images/umkm-5.webp',
      '/images/umkm-6.webp',
      '/images/umkm-7.webp',
    ],
  },
];

type PotensiItem = typeof POTENSI_DATA[0];

export default function PotensiSection() {
  const [selectedItem, setSelectedItem] = useState<PotensiItem | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const currentGallery = selectedItem
    ? [selectedItem.image, ...(selectedItem.gallery || [])]
    : [];

  const handlePrevImage = useCallback(() => {
    if (previewIndex === null || currentGallery.length === 0) return;
    setPreviewIndex((prev) =>
      prev === 0 ? currentGallery.length - 1 : (prev as number) - 1
    );
  }, [previewIndex, currentGallery]);

  const handleNextImage = useCallback(() => {
    if (previewIndex === null || currentGallery.length === 0) return;
    setPreviewIndex((prev) =>
      prev === currentGallery.length - 1 ? 0 : (prev as number) + 1
    );
  }, [previewIndex, currentGallery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (previewIndex !== null) {
        if (e.key === 'Escape') setPreviewIndex(null);
        if (e.key === 'ArrowLeft') handlePrevImage();
        if (e.key === 'ArrowRight') handleNextImage();
      } else if (selectedItem !== null) {
        if (e.key === 'Escape') setSelectedItem(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewIndex, selectedItem, handlePrevImage, handleNextImage]);

  useEffect(() => {
    if (selectedItem || previewIndex !== null) {
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
  }, [selectedItem, previewIndex]);

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

      {/* MODAL POP-UP DETAIL - RESPONSIVE 2 COLUMNS ON DESKTOP */}
      {selectedItem && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 pt-16 sm:pt-24 pb-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setSelectedItem(null)} 
          />

          {/* Modal Container */}
          <div 
            className="relative w-full max-w-5xl max-h-[80vh] sm:max-h-[85vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row z-10 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close Global untuk Layar Lebar */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-slate-950/80 hover:bg-rose-600 text-white backdrop-blur-md transition-all cursor-pointer border border-white/20 shadow-lg hidden md:flex items-center justify-center"
              aria-label="Tutup Detail"
            >
              <X className="w-5 h-5" />
            </button>

            {/* KOLOM KIRI: GAMBAR UTAMA & GALERI */}
            <div className="w-full md:w-1/2 flex flex-col bg-slate-950 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 shrink-0">
              {/* Gambar Utama */}
              <div className="relative h-48 sm:h-56 md:h-full min-h-[180px] sm:min-h-[220px] w-full bg-slate-100 dark:bg-slate-950">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-black/30" />

                <button
                  onClick={() => setPreviewIndex(0)}
                  className="absolute top-4 left-4 z-30 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white backdrop-blur-md transition-all cursor-pointer border border-white/20 hover:scale-105 shadow-lg"
                  aria-label="Perbesar Foto Utama"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Tombol Close Mobile Only */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white backdrop-blur-md transition-all cursor-pointer border border-white/20 md:hidden"
                  aria-label="Tutup Detail"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 z-10 md:hidden">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md mb-2">
                    {React.createElement(selectedItem.icon, { className: 'w-3.5 h-3.5' })}
                    Potensi Desa
                  </span>
                  <h3 className="text-xl font-extrabold text-white drop-shadow-md">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>

              {/* Galeri Foto di bawah Gambar Utama */}
              {selectedItem.gallery && selectedItem.gallery.length > 0 && (
                <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800 shrink-0">
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">
                    Galeri Foto (Klik untuk Memperbesar)
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-emerald-500/30">
                    {selectedItem.gallery.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setPreviewIndex(idx + 1)}
                        className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl overflow-hidden border-2 border-slate-700 hover:border-emerald-500 transition-all duration-200 group/thumb shadow-sm"
                      >
                        <img
                          src={imgUrl}
                          alt={`Galeri ${idx + 1}`}
                          className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-200"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-transparent transition-colors flex items-center justify-center">
                          <ZoomIn className="w-4 h-4 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* KOLOM KANAN: DESKRIPSI & INFO (Scrollable) */}
            <div className="w-full md:w-1/2 p-5 sm:p-8 flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col h-full min-h-0">
                {/* Header Judul Khusus Desktop */}
                <div className="hidden md:block mb-4 pr-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 mb-3">
                    {React.createElement(selectedItem.icon, { className: 'w-3.5 h-3.5' })}
                    Potensi Desa
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {selectedItem.title}
                  </h3>
                </div>

                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 shrink-0">
                  Deskripsi Lengkap
                </h4>
                
                {/* Area Deskripsi Teks Luas */}
                <div className="overflow-y-auto scroll-smooth flex-1 pr-2 max-h-[220px] sm:max-h-[300px] md:max-h-[calc(85vh-200px)]">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base whitespace-pre-line pb-4">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* LIGHTBOX FULLSCREEN PREVIEW */}
      {previewIndex !== null && currentGallery.length > 0 && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 pt-20 pb-8 select-none"
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className="relative flex flex-col items-center justify-center max-w-5xl w-full max-h-[calc(100vh-120px)] my-auto px-0 sm:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            {currentGallery.length > 1 && (
              <button
                onClick={handlePrevImage}
                className="hidden sm:flex absolute left-1 sm:left-2 z-[10001] p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-2xl hover:scale-110 active:scale-95"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="relative inline-block max-w-full max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-140px)] shadow-2xl rounded-2xl overflow-hidden border border-white/20">
              <img
                src={currentGallery[previewIndex]}
                alt={`Preview ${previewIndex + 1}`}
                className="max-w-full max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-140px)] object-contain block mx-auto transition-all duration-300"
              />

              {currentGallery.length > 1 && (
                <div className="absolute bottom-3 left-3 z-[10000] px-3 py-1 rounded-full bg-slate-950/80 text-white/90 text-xs font-semibold backdrop-blur-md border border-white/20">
                  {previewIndex + 1} / {currentGallery.length}
                </div>
              )}

              <button
                onClick={() => setPreviewIndex(null)}
                className="absolute top-3 right-3 z-[10000] p-2 rounded-full bg-slate-950/80 hover:bg-rose-600 text-white backdrop-blur-md transition-all cursor-pointer border border-white/30 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {currentGallery.length > 1 && (
              <button
                onClick={handleNextImage}
                className="hidden sm:flex absolute right-1 sm:right-2 z-[10001] p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-2xl hover:scale-110 active:scale-95"
                aria-label="Berikutnya"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {currentGallery.length > 1 && (
              <div className="flex sm:hidden items-center justify-center gap-6 mt-4 z-[10001]">
                <button
                  onClick={handlePrevImage}
                  className="p-3 rounded-full bg-slate-900/90 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 transition-all shadow-xl active:scale-95"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="p-3 rounded-full bg-slate-900/90 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 transition-all shadow-xl active:scale-95"
                  aria-label="Berikutnya"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}