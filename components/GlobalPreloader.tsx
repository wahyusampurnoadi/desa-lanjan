'use client';

import React, { useState, useEffect } from 'react';
import { Landmark } from 'lucide-react';

export default function GlobalPreloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Tampilkan preloader selama 1 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && ( 
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500">
          
          {/* Spinner Minimalis & Icon */}
          <div className="relative flex items-center justify-center w-20 h-20 mb-5">
            {/* Ring Berputar Tipis */}
            <div className="absolute inset-0 rounded-full border-2 border-emerald-100 border-t-emerald-600 animate-spin" />
            
            {/* Inner Glowing Badge */}
            <div className="w-11 h-11 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm animate-pulse">
              <Landmark className="w-5 h-5" />
            </div>
          </div>

          {/* Teks Brand */}
          <div className="text-center space-y-1">
            <h3 className="text-slate-900 font-extrabold text-lg tracking-wider">
              DESA LANJAN
            </h3>
            <p className="text-[11px] font-medium text-emerald-600 tracking-widest uppercase">
              Kec. Sumowono
            </p>
          </div>

          {/* Minimal Dots Pulse */}
          <div className="flex gap-1.5 mt-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" />
          </div>

        </div>
      )}

      {/* Konten Utama Website */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}>
        {children}
      </div>
    </>
  );
}