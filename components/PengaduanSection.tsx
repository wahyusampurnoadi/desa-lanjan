'use client';

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  User,
  PhoneCall,
  MapPin,
  Tag,
  MessageSquare,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function PengaduanSection() {
  const [formData, setFormData] = useState({
    nama: '',
    nik: '',
    dusun: '',
    kategori: 'Infrastruktur',
    pesan: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Nomor WhatsApp Tujuan Admin Desa
    const NOMOR_WA_ADMIN = '6281228817085';

    // 2. Format pesan rapi TANPA EMOJI (Mencegah karakter aneh di WA Web)
    const pesanWA = 
`*PENGADUAN WARGA DESA LANJAN*
===========================
*Nama Pelapor:* ${formData.nama}
*NIK / No. HP:* ${formData.nik}
*Wilayah Dusun:* ${formData.dusun}
*Kategori Laporan:* ${formData.kategori}

*Isi Laporan / Pengaduan:*
"${formData.pesan}"
===========================
_Pesan dikirim otomatis melalui Portal Resmi Desa Lanjan._`;

    // 3. Encode URI & Buka link WhatsApp
    const urlWhatsApp = `https://wa.me/${NOMOR_WA_ADMIN}?text=${encodeURIComponent(pesanWA)}`;
    window.open(urlWhatsApp, '_blank');

    setIsSubmitted(true);

    // Reset form setelah beberapa detik
    setTimeout(() => {
      setFormData({ nama: '', nik: '', dusun: '', kategori: 'Infrastruktur', pesan: '' });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="pengaduan" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-slate-50 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/80 border border-emerald-200/60 px-3.5 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Layanan Aspirasi & Pengaduan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Layanan Pengaduan <span className="text-emerald-600">Warga</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Sampaikan laporan, saran, atau kendala fasilitas umum di Desa Lanjan secara cepat, mudah, dan langsung terhubung dengan admin desa.
          </p>
        </div>

        {/* 3 Steps Informational Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl flex items-center gap-3 shadow-sm hover:border-emerald-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20 font-bold text-sm">
              01
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Isi Form Laporan</p>
              <p className="text-[11px] text-slate-500">Lengkapi data diri & detail</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl flex items-center gap-3 shadow-sm hover:border-emerald-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20 font-bold text-sm">
              02
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Kirim via WhatsApp</p>
              <p className="text-[11px] text-slate-500">Otomatis terformat rapi</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl flex items-center gap-3 shadow-sm hover:border-emerald-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20 font-bold text-sm">
              03
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Respon Quick-Admin</p>
              <p className="text-[11px] text-slate-500">Ditindaklanjuti tim desa</p>
            </div>
          </div>
        </div>

        {/* Card Form Utama */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-200/80 relative">
          
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Mengarahkan ke WhatsApp...</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Silakan lanjutkan pengiriman pesan melalui aplikasi WhatsApp yang telah terbuka. Terima kasih atas partisipasi Anda.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Nama Lengkap */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Sesuai KTP"
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all focus:bg-white"
                    />
                  </div>
                </div>

                {/* NIK / No. HP */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    NIK / Nomor WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: 08123456789"
                      value={formData.nik}
                      onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all focus:bg-white"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Dusun */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Wilayah Dusun <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
                    <select
                      value={formData.dusun}
                      onChange={(e) => setFormData({ ...formData, dusun: e.target.value })}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Pilih Dusun</option>
                      <option value="Dusun Lanjan">Dusun Lanjan</option>
                      <option value="Dusun Kalitiga">Dusun Kalitiga</option>
                      <option value="Dusun Kemawi">Dusun Kemawi</option>
                      <option value="Dusun Gendol">Dusun Gendol</option>
                      <option value="Lainnya">Lainnya / Luar Desa</option>
                    </select>
                  </div>
                </div>

                {/* Kategori Pengaduan */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Kategori Laporan <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Tag className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
                    <select
                      value={formData.kategori}
                      onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="Infrastruktur">Infrastruktur & Jalan</option>
                      <option value="Pelayanan">Pelayanan Publik</option>
                      <option value="Kebersihan">Kebersihan & Lingkungan</option>
                      <option value="Keamanan">Keamanan & Ketertiban</option>
                      <option value="Lainnya">Lain-lain</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Isi Pesan / Laporan */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Isi Laporan / Pengaduan <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    rows={4}
                    required
                    placeholder="Jelaskan detail lokasi dan masalah yang ingin dilaporkan..."
                    value={formData.pesan}
                    onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all focus:bg-white resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Info Kerahasiaan & Privasi */}
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Identitas pelapor dijamin aman & dijaga kerahasiaannya oleh Pemerintah Desa.</span>
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Kirim via WhatsApp</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}