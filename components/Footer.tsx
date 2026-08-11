'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Mail, Phone, Send } from 'lucide-react';
import { LatLngBoundsExpression, LatLngTuple } from 'leaflet';

const MapLeaflet = dynamic(() => import('@/components/MapLeaflet'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-800 animate-pulse rounded-xl flex items-center justify-center text-slate-400 text-xs">
      Memuat Peta Interaktif...
    </div>
  ),
});

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  const urlKantorDesa = "https://maps.app.goo.gl/HBuZaoSA7XDBA96Q7";
  const urlWilayahDesa = "https://maps.app.goo.gl/E6FxFbQEDduUXPvV7";

  const koordinatKantorLanjan: [number, number] = [-7.232222, 110.317500];

  const batasWilayahPeta: LatLngBoundsExpression = [
    [-7.2650, 110.2850],
    [-7.2000, 110.3450],
  ];

  const koordinatAreaMerah: LatLngTuple[] = [
    [-7.2180, 110.3120],
    [-7.2190, 110.3240],
    [-7.2250, 110.3310],
    [-7.2340, 110.3320],
    [-7.2420, 110.3260],
    [-7.2450, 110.3150],
    [-7.2430, 110.3040],
    [-7.2350, 110.2980],
    [-7.2250, 110.3010],
  ];

  const logoKabSemarang = "/images/logo.png";

  return (
    <footer id="kontak" className="w-full bg-slate-950 text-white font-sans">
      
      <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 py-10 px-4 sm:px-6 lg:px-8 border-t border-emerald-800/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* MAP 1: LOKASI KANTOR DESA */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-center text-sm font-bold tracking-wider text-slate-200 uppercase">
              Lokasi Kantor Desa
            </h4>
            <div className="w-full h-56 rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl">
              <MapLeaflet 
                center={koordinatKantorLanjan} 
                zoom={17} 
                popupText="Kantor Kepala Desa Lanjan" 
                tileType="satellite"
                googleMapsUrl={urlKantorDesa}
              />
            </div>
          </div>

          {/* INFORMASI TENGAH (LOGO TANPA LINGKARAN) */}
          <div className="lg:col-span-4 text-center space-y-4 px-2">
            
            {/* LOGO TANPA BORDER LINGKARAN */}
            <div className="flex justify-center items-center">
              <img
                src={logoKabSemarang}
                alt="Logo Kabupaten Semarang"
                className="h-20 w-auto object-contain filter drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div>
              <h3 className="text-lg font-black tracking-wide uppercase text-white">
                Pemerintah Desa Lanjan
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Desa Lanjan, Kec. Sumowono <br />
                Kab. Semarang, Jawa Tengah 50662
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-300">
              <p className="flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>pemerintah@desalanjan.go.id</span>
              </p>
              <p className="flex items-center justify-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+62 812-3456-7890</span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-80 transition" aria-label="Facebook">
                <FacebookIcon size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white hover:opacity-80 transition" aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white hover:opacity-80 transition" aria-label="Telegram">
                <Send size={16} />
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white hover:opacity-80 transition" aria-label="WhatsApp">
                <Phone size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:opacity-80 transition" aria-label="YouTube">
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>

          {/* MAP 2: WILAYAH DESA */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-center text-sm font-bold tracking-wider text-slate-200 uppercase">
              Wilayah Desa
            </h4>
            <div className="w-full h-56 rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl">
              <MapLeaflet 
                center={koordinatKantorLanjan} 
                zoom={14} 
                minZoom={12}
                maxZoom={16}
                maxBounds={batasWilayahPeta}
                boundaryPolygon={koordinatAreaMerah}
                popupText="Wilayah Desa Lanjan" 
                tileType="street"
                googleMapsUrl={urlWilayahDesa}
              />
            </div>
          </div>

        </div>
      </div>

      <div className="bg-slate-950 py-4 text-center text-xs text-slate-500 border-t border-slate-900">
        © 2026 Pemerintah Desa Lanjan. All rights reserved.
      </div>

    </footer>
  );
}