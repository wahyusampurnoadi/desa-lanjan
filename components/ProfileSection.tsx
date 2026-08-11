'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Users, 
  Map, 
  Compass, 
  ShieldCheck, 
  Target, 
  Award,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface AnimatedNumberProps {
  target: number | string;
  suffix?: string;
  duration?: number;
}

function AnimatedNumber({ target, suffix = '', duration = 1800 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;

    // Cek apakah data berupa rentang angka (misal "650 - 900")
    const isRange = typeof target === 'string' && target.includes('-');
    const numbers = String(target).match(/\d+/g)?.map(Number) || [0];
    
    const endVal = isRange ? numbers[1] : numbers[0];
    const startVal = isRange ? numbers[0] : 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTime = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing Function (easeOutExpo) untuk pergerakan angka yang halus
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            if (isRange) {
              const currentStart = Math.floor(startVal * easeProgress);
              const currentEnd = Math.floor(endVal * easeProgress);
              setDisplayValue(`${currentStart.toLocaleString('id-ID')} - ${currentEnd.toLocaleString('id-ID')}`);
            } else {
              const current = typeof target === 'number' && target % 1 !== 0 
                ? (endVal * easeProgress).toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : Math.floor(endVal * easeProgress).toLocaleString('id-ID');
              setDisplayValue(current);
            }

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
  }, [target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums inline-block font-black">
      {displayValue}
      {suffix}
    </span>
  );
}

const STATS = [
  { 
    label: 'Jumlah Penduduk', 
    value: 4366, 
    suffix: '+', 
    icon: Users,
    badge: 'Jiwa Terdata',
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    borderHover: 'hover:border-emerald-400',
    iconBg: 'bg-emerald-500 text-white shadow-emerald-500/20'
  },
  { 
    label: 'Luas Wilayah', 
    value: 424.98, 
    suffix: ' Ha', 
    icon: Map,
    badge: 'Kawasan Desa',
    gradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
    borderHover: 'hover:border-blue-400',
    iconBg: 'bg-blue-600 text-white shadow-blue-500/20'
  },
  { 
    label: 'Ketinggian', 
    value: '650 - 900', 
    suffix: ' mdpl', 
    icon: Compass,
    badge: 'Dataran Tinggi',
    gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
    borderHover: 'hover:border-amber-400',
    iconBg: 'bg-amber-500 text-white shadow-amber-500/20'
  },
  { 
    label: 'Wilayah Dusun', 
    value: 7, 
    suffix: ' Dusun', 
    icon: ShieldCheck,
    badge: 'Administratif',
    gradient: 'from-teal-500/10 via-emerald-500/5 to-transparent',
    borderHover: 'hover:border-teal-400',
    iconBg: 'bg-teal-600 text-white shadow-teal-500/20'
  },
];

const MISI_LIST = [
  'Mewujudkan tata kelola pemerintahan desa yang transparan, akuntabel, dan berbasis digital.',
  'Meningkatkan kualitas sumber daya manusia melalui program edukasi dan pelatihan UMKM.',
  'Mengembangkan potensi pertanian dan wisata alam lokal untuk kesejahteraan warga.',
];

export default function ProfilSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="profil" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 relative z-10">
        
        {/* SECTION 1: SELAYANG PANDANG */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Deskripsi Teks */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/80 border border-emerald-200/60 px-3.5 py-1.5 rounded-full shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Selayang Pandang
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Mengenal Lebih Dekat <span className="text-emerald-600">Desa Lanjan</span>
              </h2>
            </div>

            {/* Paragraf 1 & 2 (Selalu Tampil) */}
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
               Desa Lanjan merupakan salah satu desa yang terletak di Kecamatan Sumowono, Kabupaten Semarang, Provinsi Jawa Tengah, dengan wilayah berada di kawasan dataran tinggi atau pegunungan berudara sejuk. Desa ini memiliki luas wilayah kurang lebih 4,25 km² (425 Ha).
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Wilayah Desa Lanjan terbagi menjadi 7 (tujuh) dusun, yaitu Dusun Lanjan, Dusun Kalibanger, Dusun Jambon, Dusun Susukan, Dusun Larangan, Dusun Tegalroto, dan Dusun Ngelo. Desa Lanjan dihuni oleh penduduk sebanyak 4.299 jiwa, yang terdiri dari 2.178 jiwa laki-laki, 2.051 jiwa perempuan, serta mencakup 1.499 Kepala Keluarga (KK). 
            </p>

            {/* Paragraf Tambahan + List Poin (Tampil Saat Expanded) */}
            {isExpanded && (
              <div className="space-y-6 animate-fadeIn">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Sebagian besar masyarakat Desa Lanjan menggantungkan hidupnya sebagai petani, buruh tani, dan pedagang. Untuk mendukung aktivitas sehari-hari warganya, desa ini dilengkapi dengan fasilitas pendidikan berupa 2 Sekolah Dasar (SD Negeri Lanjan 01 & SD Negeri Lanjan 02), 1 Madrasah Ibtidaiyah (MI Miftakhul Ulum), serta 2 Taman Kanak-kanak (TK Keluarga Lanjan & TK Pertiwi), ditambah dengan layanan kesehatan dasar seperti Posyandu. 
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm sm:text-base">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Lingkungan pegunungan yang asri dan sejuk</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm sm:text-base">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>Pusat hasil komoditas sayur dan buah segar</span>
                  </div>
                </div>
              </div>
            )}

            {/* TOMBOL BACA SELENGKAPNYA */}
            <div className="pt-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all cursor-pointer group"
              >
                <span>{isExpanded ? 'Tampilkan Lebih Sedikit' : 'Baca Selengkapnya'}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                )}
              </button>
            </div>
          </div>

          {/* Gambar Profil Utama */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
            <img 
              src="/images/desa-lanjan.webp" 
              alt="Wilayah Desa Lanjan" 
              className="w-full h-[320px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="bg-emerald-600/90 backdrop-blur-md border border-emerald-400/30 text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-1.5 shadow-sm">
                Wilayah Desa Lanjan
              </span>
              <p className="text-white text-base font-semibold tracking-wide">
                Kec. Sumowono, Kab. Semarang
              </p>
            </div>
          </div>

        </div>

        {/* SECTION 2: STATISTIK ANGKA (MODERN GRADIENT CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`group relative bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between ${stat.borderHover}`}
              >
                {/* Visual Gradient Background Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                {/* Top Row: Icon & Category Badge */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${stat.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100/80 border border-slate-200/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {stat.badge}
                  </span>
                </div>

                {/* Bottom Row: Number & Label */}
                <div className="relative z-10 space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-bold tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION 3: VISI & MISI (PREMIUM DARK CARD) */}
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl overflow-hidden border border-slate-800">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Visi */}
            <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800/80 pb-8 lg:pb-0 lg:pr-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                <Target size={14} /> Visi Desa
              </div>
              <blockquote className="text-xl sm:text-2xl font-bold leading-relaxed text-slate-100 tracking-tight">
                &ldquo;Terwujudnya Desa Lanjan yang <span className="text-emerald-400">Mandiri</span>, <span className="text-emerald-400">Sejahtera</span>, Berbudaya, dan Berkelanjutan Melalui Inovasi Digital.&rdquo;
              </blockquote>
            </div>

            {/* Misi */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest">
                <Award size={14} /> Misi Desa
              </div>

              <ul className="space-y-4">
                {MISI_LIST.map((misi, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 group-hover:bg-emerald-500 text-emerald-400 group-hover:text-slate-950 font-bold text-xs flex items-center justify-center border border-slate-700 group-hover:border-emerald-400 transition-all duration-300 shadow-sm mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                      {misi}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}