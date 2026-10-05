'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { clubInfo } from '@/data/v2/stats';

const footerLinks = {
  explore: [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About & Equipment' },
    { href: '/roadmap', label: 'Roadmap' },
  ],
  club: [
    { href: '/about#vision-mission', label: 'Vision & Mission' },
    { href: '/about#activities', label: 'Activities' },
    { href: '/about#join', label: 'Find Us at CC' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer bg-[#050505] text-white border-t border-white/10" role="contentinfo">
      <div className="container-main py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="label text-[#D83933] font-mono mb-3">{clubInfo.name.toUpperCase()}</p>
            <h2 className="text-white text-xl font-bold tracking-tight leading-snug max-w-xs">
              {clubInfo.tagline}
            </h2>
            <p className="text-[#888888] text-sm mt-4 max-w-xs leading-relaxed">
              Canisius Science Club — Student STEM research at SMA Kolese Kanisius Jakarta. Transforming curiosity into empirical investigations that serve our community and environment.
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-end md:ml-auto md:max-w-sm w-full">
            <div>
              <p className="label text-white/50 mb-5 font-mono">EXPLORE</p>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-[#D83933] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label text-white/50 mb-5 font-mono">CLUB</p>
              <ul className="space-y-3">
                {footerLinks.club.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-[#D83933] transition-colors duration-200"
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
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#888888]">
          <p>SMA Kolese Kanisius Jakarta · STEM Research & Innovation</p>
          <p className="text-[#D83933]">Cura Personalis • Wednesday & Friday Sessions</p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
          <div>
            <p className="text-xs font-mono text-[#666666]">
              CANISIUS SCIENCE CLUB © 2026–2027
            </p>
          </div>

          <a
            href="#top"
            className="flex items-center gap-2 text-sm text-[#888888] hover:text-[#D83933] transition-colors duration-200 group"
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
