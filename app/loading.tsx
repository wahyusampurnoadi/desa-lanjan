import React from 'react';
import { Loader2 } from 'lucide-react';

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm transition-all">
      <div className="relative flex items-center justify-center">
        {/* Ring Lingkaran Luar Berputar */}
        <div className="w-16 h-16 rounded-full border-4 border-emerald-100 border-t-emerald-600 animate-spin" />
        
        {/* Spinner Ikon Tengah */}
        <Loader2 className="w-7 h-7 text-emerald-600 animate-spin absolute" />
      </div>

      {/* Teks Indikator Loading */}
      <div className="mt-4 text-center space-y-1">
        <p className="text-slate-900 font-bold text-base tracking-wide">Desa Lanjan</p>
        <p className="text-slate-500 text-xs font-medium animate-pulse">Memuat halaman...</p>
      </div>
    </div>
  );
}