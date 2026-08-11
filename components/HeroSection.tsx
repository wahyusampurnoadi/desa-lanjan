'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { HERO_SLIDES } from '@/types';
import StatSection from '@/components/StatSection';

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="beranda" className="relative w-full bg-slate-950 text-white transition-colors duration-300 pb-6 md:pb-0">
      {/* Carousel Container */}
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex w-full">
          {HERO_SLIDES.map((slide) => (
            <div 
              key={slide.id} 
              className="relative w-full min-w-full flex-shrink-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20 sm:pb-36 min-h-[480px] sm:min-h-[580px] md:min-h-[calc(100vh-80px)] select-none overflow-hidden"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.bgImage}')` }}
              >
                <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]"></div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* Content Box */}
              <div className="relative max-w-5xl mx-auto text-center z-10 my-auto">
                <span className="inline-block bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 md:mb-6 backdrop-blur-sm">
                  {slide.badge}
                </span>
                <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
                  {slide.title} <span className="text-emerald-400">{slide.highlight}</span>
                </h1>
                <p className="mt-3 md:mt-6 text-sm sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                  {slide.description}
                </p>
                <div className="mt-5 md:mt-10 flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-4">
                  <a 
                    href="#profil" 
                    className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-semibold shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Jelajahi Profil <ChevronRight size={18} />
                  </a>
                  <a 
                    href="#potensi" 
                    className="bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-semibold transition-all backdrop-blur-sm text-sm sm:text-base flex items-center justify-center"
                  >
                    Potensi Desa
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-emerald-600/80 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all active:scale-90 border border-white/10 z-20 hidden md:flex"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-emerald-600/80 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all active:scale-90 border border-white/10 z-20 hidden md:flex"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* STAT SECTION: Posisi Rapi di Mobile & Melayang di Desktop */}
      <div className="relative md:absolute left-0 right-0 md:bottom-0 md:translate-y-1/2 z-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 md:mt-0 mb-6 md:mb-0">
        <StatSection />
      </div>
    </section>
  );
}