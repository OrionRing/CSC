'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { useVersion } from '@/context/VersionContext';

const footerLinks = {
  explore: [
    { href: '/projects', label: 'Projects' },
    { href: '/roadmap', label: 'Roadmap' },
    { href: '/journal', label: 'Journal' },
  ],
  club: [
    { href: '/about', label: 'About' },
    { href: '/about#team', label: 'Members' },
    { href: '/about#join', label: 'Join' },
  ],
};

export default function Footer() {
  const { version, clubInfo } = useVersion();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container-main">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="label text-[#B8B8B8] mb-4">{clubInfo.name}</p>
            <h2 className="text-white text-xl font-bold tracking-tight leading-snug max-w-xs">
              {clubInfo.tagline}
            </h2>
            <p className="text-[#606060] text-sm mt-4 max-w-xs leading-relaxed">
              {version === 'v2'
                ? 'Ekskul Riset Kolese Kanisius — Memanfaatkan ilmu STEM untuk solusi realistis harian dan merawat seluruh alam ciptaan.'
                : 'Through research, experimentation, engineering, and collaboration — we turn curiosity into investigation.'}
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-end md:ml-auto md:max-w-sm w-full">
            <div>
              <p className="label text-[#B8B8B8] mb-5">Explore</p>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label text-[#B8B8B8] mb-5">Club</p>
              <ul className="space-y-3">
                {footerLinks.club.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Info band */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="label text-[#B8B8B8]">
            {version === 'v2'
              ? 'Kolese Kanisius Jakarta · Ekskul Riset STEM (Rabu & Jumat)'
              : '2026–2027 · High School Science Club'}
          </p>
          {version === 'v2' && (
            <p className="text-[11px] font-mono text-emerald-400">
              Cura Personalis & Target Finalis/Juara (Nilai A)
            </p>
          )}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
          <div>
            <p className="label text-[#606060]">{clubInfo.name.toUpperCase()} / 2026</p>
            <p className="text-[#606060] text-sm mt-1">
              {version === 'v2' ? 'Sekolah Homogen Laki-laki Kolese Kanisius' : 'Built for curiosity.'}
            </p>
          </div>

          <a
            href="#top"
            className="flex items-center gap-2 text-sm text-[#606060] hover:text-white
              transition-colors duration-200 group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp
              size={14}
              className="transition-transform duration-200 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

