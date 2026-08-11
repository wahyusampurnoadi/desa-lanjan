'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { STATS_DATA } from '@/types';

function StatItem({ item, index }: { item: typeof STATS_DATA[0]; index: number }) {
  const IconComponent = item.icon;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  const numericMatch = item.value.match(/\d[\d.]*/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0].replace(/\./g, ''), 10) : null;
  const suffix = item.value.replace(/[\d.]/g, '');
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView && targetNumber !== null) {
      const controls = animate(0, targetNumber, {
        duration: 2,
        ease: 'easeOut',
        onUpdate(value) { setDisplayValue(Math.floor(value)); },
      });
      return () => controls.stop();
    } else {
      setDisplayValue(0);
    }
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className="group relative bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-emerald-100/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-emerald-950/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
    >
      {/* Decorative Subtle Background Pattern */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-all duration-500 pointer-events-none" />
      <div className="absolute -right-2 -bottom-2 w-12 h-12 rounded-full bg-teal-500/5 group-hover:scale-150 transition-all duration-500 pointer-events-none" />

      {/* Top Accent Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center gap-4 sm:gap-5 relative z-10">
        {/* Icon Badge with Glow Effect */}
        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/80 border border-emerald-200/60 flex items-center justify-center text-emerald-600 group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white group-hover:border-emerald-500 group-hover:shadow-lg group-hover:shadow-emerald-600/30 transition-all duration-300 shrink-0">
          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Content */}
        <div className="space-y-0.5">
          <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-baseline">
            {targetNumber !== null ? `${displayValue.toLocaleString('id-ID')}${suffix}` : item.value}
          </p>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 group-hover:text-emerald-700 transition-colors duration-300">
            {item.label}
          </p>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}

export default function StatSection() {
  return (
    <div className="relative pb-6 md:pb-0 md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 w-full max-w-6xl px-4 sm:px-6 z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {STATS_DATA.map((item, index) => (
          <StatItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}