'use client';

import React, { useState } from 'react';
import { User, Phone, MapPin, Tag, FileText, Send } from 'lucide-react';

export default function PengaduanSection() {
  const [formData, setFormData] = useState({
    nama: '',
    kontak: '',
    dusun: '',
    kategori: '',
    pesan: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pesanWA = `Halo Admin Desa Lanjan,%0A%0ASaya ingin menyampaikan pengaduan:%0A- *Nama*: ${formData.nama}%0A- *NIK/WA*: ${formData.kontak}%0A- *Dusun*: ${formData.dusun}%0A- *Kategori*: ${formData.kategori}%0A- *Isi Laporan*: ${formData.pesan}`;
    window.open(`https://wa.me/6281234567890?text=${pesanWA}`, '_blank');
  };

  return (
    <section id="pengaduan" className="py-20 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800/80">
            Layanan Aspirasi & Pengaduan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Layanan Pengaduan <span className="text-emerald-600 dark:text-emerald-400">Warga</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Sampaikan laporan, saran, atau kendala fasilitas umum di Desa Lanjan secara cepat, mudah, dan langsung terhubung dengan admin desa.
          </p>
        </div>

        {/* 3 Langkah Alur Pengaduan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900/90 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md">
              01
            </span>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Isi Form Laporan</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Lengkapi data diri & detail</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/90 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md">
              02
            </span>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Kirim via WhatsApp</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Otomatis terformat rapi</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/90 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
            <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md">
              03
            </span>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Respon Quick-Admin</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Ditindaklanjuti tim desa</p>
            </div>
          </div>
        </div>

        {/* Card Form Pengaduan */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl transition-colors duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Nama Lengkap */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="Sesuai KTP"
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all"
                  />
                </div>
              </div>

              {/* NIK / WhatsApp */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  NIK / Nomor WhatsApp <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="Contoh: 08123456789"
                    value={formData.kontak}
                    onChange={(e) => setFormData({ ...formData, kontak: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all"
                  />
                </div>
              </div>

              {/* Wilayah Dusun */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  Wilayah Dusun <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                  <select
                    required
                    value={formData.dusun}
                    onChange={(e) => setFormData({ ...formData, dusun: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400 dark:bg-slate-900">Pilih Dusun</option>
                    <option value="Dusun Lanjan" className="dark:bg-slate-900">Dusun Lanjan</option>
                    <option value="Dusun Jambon" className="dark:bg-slate-900">Dusun Jambon</option>
                    <option value="Dusun Kalibanger" className="dark:bg-slate-900">Dusun Kalibanger</option>
                    <option value="Dusun Ngelo" className="dark:bg-slate-900">Dusun Ngelo</option>
                  </select>
                </div>
              </div>

              {/* Kategori Laporan */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  Kategori Laporan <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Tag className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                  <select
                    required
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400 dark:bg-slate-900">Infrastruktur & Jalan</option>
                    <option value="Infrastruktur & Jalan" className="dark:bg-slate-900">Infrastruktur & Jalan</option>
                    <option value="Fasilitas Umum" className="dark:bg-slate-900">Fasilitas Umum</option>
                    <option value="Pelayanan Administrasi" className="dark:bg-slate-900">Pelayanan Administrasi</option>
                    <option value="Kebersihan & Lingkungan" className="dark:bg-slate-900">Kebersihan & Lingkungan</option>
                    <option value="Keamanan & Ketertiban" className="dark:bg-slate-900">Keamanan & Ketertiban</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Isi Laporan */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1">
                Isi Laporan / Pengaduan <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <FileText className="w-5 h-5 absolute left-3.5 top-4 text-slate-400 dark:text-slate-500" />
                <textarea
                  rows={4}
                  required
                  placeholder="Jelaskan detail lokasi dan masalah yang ingin dilaporkan..."
                  value={formData.pesan}
                  onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all resize-none"
                />
              </div>
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-5 h-5" />
              Kirim Laporan via WhatsApp
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}