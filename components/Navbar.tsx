"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { name: "Beranda", href: "#beranda", id: "beranda" },
  { name: "Profil Desa", href: "#profil", id: "profil" },
  { name: "Potensi & UMKM", href: "#potensi", id: "potensi" },
  { name: "Pengaduan", href: "#pengaduan", id: "pengaduan" },
  { name: "Kontak", href: "#kontak", id: "kontak" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#beranda");
  
  // Handling Theme & Hydration
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Komponen Tombol Toggle
  const renderThemeToggle = () => {
    if (!mounted) {
      return (
        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
      );
    }

    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer"
        aria-label="Toggle Theme"
        title={theme === "dark" ? "Ubah ke Mode Terang" : "Ubah ke Mode Gelap"}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
        )}
      </button>
    );
  };

  return (
    <nav className="sticky top-0 z-[9999] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
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
              <span className="text-xl font-bold text-slate-900 dark:text-white block leading-tight">
                Desa Lanjan
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">
                Kec. Sumowono, Kab. Semarang
              </span>
            </div>
          </a>

          {/* Desktop Navigation & Controls */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
              {NAV_LINKS.map((link) => {
                const isActive = activeTab === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveTab(link.href)}
                    className={`relative px-4 py-2 rounded-full transition-all duration-200 active:scale-95 ${
                      isActive
                        ? "text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60"
                        : "hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <a
              href="#pengaduan"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 active:scale-95 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-emerald-100 dark:shadow-none hover:shadow-lg hover:shadow-emerald-200"
            >
              Layanan Publik
            </a>

            {/* Theme Switcher Button */}
            {renderThemeToggle()}
          </div>

          {/* Mobile Actions (Toggle Theme + Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            {renderThemeToggle()}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-90 transition-all focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 ${
          isMenuOpen
            ? "max-h-[400px] opacity-100 px-4 pt-2 pb-6"
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
              className={`block px-3 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === link.href
                  ? "text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60"
                  : "text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pengaduan"
            onClick={() => setIsMenuOpen(false)}
            className="block text-center mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all"
          >
            Layanan Publik
          </a>
        </div>
      </div>
    </nav>
  );
}