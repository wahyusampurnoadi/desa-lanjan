"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Beranda", href: "#beranda", id: "beranda" },
  { name: "Profil Desa", href: "#profil", id: "profil" },
  { name: "Potensi & UMKM", href: "#potensi", id: "potensi" },
  { name: "Berita", href: "#berita", id: "berita" },
  { name: "Pengaduan", href: "#pengaduan", id: "pengaduan" },
  { name: "Kontak", href: "#kontak", id: "kontak" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#beranda");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px", // Area sensitivitas layar tengah
      threshold: 0.2,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Amati setiap section berdasarkan ID
    NAV_LINKS.forEach((link) => {
      if (link.id) {
        const element = document.getElementById(link.id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-[9999] bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo / Brand */}
          <a
            href="#beranda"
            className="flex items-center gap-3 group active:scale-95 transition-transform duration-150"
          >
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <img
                src="/images/logo.png"
                alt="Logo Desa Lanjan"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 block leading-tight">
                Desa Lanjan
              </span>
              <span className="text-xs text-slate-500 block">
                Kec. Sumowono, Kab. Semarang
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.href)}
                  className={`relative px-4 py-2 rounded-full transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "text-emerald-600 font-bold bg-emerald-50"
                      : "hover:text-emerald-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#pengaduan"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-emerald-100 hover:shadow-lg hover:shadow-emerald-200"
            >
              Layanan Publik
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 active:scale-90 transition-all focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-200 ${
          isMenuOpen
            ? "max-h-96 opacity-100 px-4 pt-2 pb-6"
            : "max-h-0 opacity-0 px-4 py-0"
        }`}
      >
        <div className="space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.href);
                setIsMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-lg font-medium transition-all ${
                activeTab === link.href
                  ? "text-emerald-600 font-bold bg-emerald-50"
                  : "text-slate-600 hover:text-emerald-600 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}