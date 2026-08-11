'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Users, Sprout, Award } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  {
    icon: Users,
    value: '4.366+',
    label: 'Jumlah Penduduk',
  },
  {
    icon: Sprout,
    value: 'Agrikultur',
    label: 'Komoditas Utama',
  },
  {
    icon: Award,
    value: 'Berdaya Saing',
    label: 'Status Desa',
  },
];

// Komponen Pembantu untuk Animasi Angka
function AnimatedStatValue({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Cek apakah value mengandung angka
    const match = value.match(/\d[\d.]*/);
    
    // Jika tidak ada angka (misal: "Agrikultur" atau "Mandiri"), tampilkan teks langsung
    if (!match) {
      setDisplayValue(value);
      return;
    }

    // Ambil string angka dan bersihkan titik separator
    const numberStr = match[0];
    const targetNumber = parseInt(numberStr.replace(/\./g, ''), 10);
    const suffix = value.replace(numberStr, ''); // mengambil akhiran seperti '+'

    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 1800; // Durasi animasi dalam milidetik

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTime = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Efek easing (halus di akhir)
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = Math.floor(targetNumber * easeProgress);

            // Format ke ribuan Indonesia (contoh: 4.366)
            const formatted = currentVal.toLocaleString('id-ID');
            setDisplayValue(`${formatted}${suffix}`);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            }
          };

          animationFrameId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animationFrameId);
          setDisplayValue('0');
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [value]);

  return (
    <h3 ref={elementRef} className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight tabular-nums">
      {displayValue}
    </h3>
  );
}

export default function StatSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {STATS.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Visual Glow */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Icon className="w-7 h-7" />
                </div>

                <div>
                  {/* Panggil Komponen Nilai/Angka Beranimasi */}
                  <AnimatedStatValue value={stat.value} />
                  <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}