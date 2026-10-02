'use client';

import React from 'react';
import { useVersion } from '@/context/VersionContext';
import { Sparkles, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export default function VersionBanner() {
  const { version, setVersion } = useVersion();

  return (
    <div className="w-full bg-[#080B10] border-b border-white/10 text-white text-xs py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
          <span className="flex items-center gap-1 font-mono uppercase tracking-widest text-[10px] text-accent-light bg-accent/20 px-2 py-0.5 rounded border border-accent/40">
            <Layers className="w-3 h-3" /> Select Site Version
          </span>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <span className="text-gray-300">
            Currently Viewing:{' '}
            <strong className="text-white font-mono">
              {version === 'v1' ? 'Version 1 — Original Science Club' : 'Version 2 — Kolese Kanisius Science & Research Club'}
            </strong>
          </span>
        </div>

        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-md border border-white/10">
          <button
            onClick={() => setVersion('v1')}
            className={`px-3 py-2.5 min-h-[44px] rounded text-xs font-mono transition-all flex items-center gap-1.5 ${
              version === 'v1'
                ? 'bg-accent text-white font-bold shadow-sm'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            Version 1 (Original)
          </button>

          <button
            onClick={() => setVersion('v2')}
            className={`px-3 py-2.5 min-h-[44px] rounded text-xs font-mono transition-all flex items-center gap-1.5 ${
              version === 'v2'
                ? 'bg-emerald-600 text-white font-bold shadow-sm ring-1 ring-emerald-400'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            Version 2 (Kolese Kanisius)
          </button>
        </div>
      </div>

      {version === 'v2' && (
        <div className="max-w-7xl mx-auto mt-1.5 pt-1.5 border-t border-white/5 text-[11px] text-emerald-400/90 flex items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>
              <strong>V2 Updates Included:</strong> Kolese Kanisius (Sekolah Homogen Laki-laki) • Pertemuan Rabu & Jumat (2 Jam) • Target Finalis/Juara Lomba (Nilai A) • Cura Personalis • 6 Penelitian Real (CQD UV-A Akrilik, TEG Destilator Aquadest, Generator Pintu Geser, Eco-Enzyme MFC, Nutribar Lokal, Supresi Api Akustik) • Lab Lengkap (UV-Vis Spectrophotometer, Pyrolisis, Smartboard)
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
