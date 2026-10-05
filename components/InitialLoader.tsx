'use client';

import { useEffect, useState } from 'react';

export default function InitialLoader() {
  const [mounted, setMounted] = useState(false);
  const [fade, setFade] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initial boot timing: ~850ms visible, then 300ms fadeout = ~1.15s total
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 850);

    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 1150);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!mounted || hidden) return null;

  return (
    <aside
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505] text-white transition-opacity duration-300 ease-out ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Loading Canisius Science Club"
    >
      <div className="flex flex-col items-center gap-6 max-w-sm px-6 text-center">
        {/* Minimal pulse symbol */}
        <div className="relative flex items-center justify-center" aria-hidden="true">
          <span className="w-12 h-12 rounded-full border border-white/20 animate-ping absolute opacity-40" />
          <span className="w-9 h-9 rounded-full bg-[#111111] border border-[#D83933] flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D83933]" />
          </span>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest text-[#D83933] font-bold uppercase mb-1">
            CANISIUS SCIENCE CLUB
          </p>
          <p className="font-mono text-[10px] text-white/50 tracking-wider uppercase">
            INITIALIZING STEM LABORATORY REPOSITORY...
          </p>
        </div>

        {/* Minimal red progress bar */}
        <div className="w-36 h-[2px] bg-white/10 overflow-hidden relative rounded-full" aria-hidden="true">
          <div className="absolute inset-y-0 left-0 bg-[#D83933] w-full animate-loader-slide" />
        </div>
      </div>
    </aside>
  );
}
