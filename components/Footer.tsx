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

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.177-1.238-6.164-3.48-8.407" />
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
                <span>pemdesdesalanjan@gmail.com</span>
              </p>
              <p className="flex items-center justify-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kepala Desa: 3322092004</span>
              </p>
              <p className="flex items-center justify-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sekretaris: 02986072346</span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <a href="https://www.facebook.com/398678880269171/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-80 transition" aria-label="Facebook">
                <FacebookIcon size={16} />
              </a>
              <a href="https://www.instagram.com/kkn.desalanjan/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white hover:opacity-80 transition" aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href="https://wa.me/6285640671541" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white hover:opacity-80 transition" aria-label="WhatsApp">
                <WhatsAppIcon size={16} />
              </a>
              <a href="https://www.youtube.com/@DesaLanjanOfficial" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:opacity-80 transition" aria-label="YouTube">
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