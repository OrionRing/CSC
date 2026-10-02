'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useVersion } from '@/context/VersionContext';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/journal', label: 'Journal' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { version, clubInfo } = useVersion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkHero, setDarkHero] = useState(false);

  useEffect(() => {
    // Check if page starts with a dark hero
    const isHomePage = pathname === '/';
    setDarkHero(isHomePage);

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isTransparent = darkHero && !scrolled;
  const textColor = isTransparent ? 'text-white' : 'text-[#111111]';
  const navClass = scrolled
    ? 'navbar-solid'
    : darkHero
    ? 'navbar-transparent'
    : 'navbar-solid';

  return (
    <>
      <nav
        className={`navbar ${navClass}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className={`label text-sm tracking-widest font-bold ${textColor} hover:opacity-70 transition-opacity duration-200 flex items-center gap-2`}
              aria-label={`${clubInfo.name} — Home`}
            >
              <span>{version === 'v2' ? 'KANISIUS SCIENCE CLUB' : 'SCIENCE CLUB'}</span>
              {version === 'v2' && (
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono font-normal">
                  V2
                </span>
              )}
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-tight transition-opacity duration-200 hover:opacity-60 ${
                    pathname === link.href ? 'opacity-100' : 'opacity-80'
                  } ${textColor}`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Join CTA */}
              <Link
                href="/about#join"
                className={`flex items-center gap-2 text-sm font-semibold ${textColor} group`}
              >
                <span>Join Us</span>
                <span
                  className="w-6 h-6 rounded-full bg-[#D83933] flex items-center justify-center
                    transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <ArrowRight size={12} className="text-white" />
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className={`md:hidden ${textColor} p-3 min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/"
            className="label text-sm tracking-widest font-bold text-white"
            onClick={() => setMenuOpen(false)}
          >
            {version === 'v2' ? 'KANISIUS SCIENCE CLUB' : 'SCIENCE CLUB'}
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white p-1"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Mobile links */}
        <div className="flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-4xl font-bold tracking-tight py-3 border-b border-white/10
                hover:text-[#D83933] transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile join CTA */}
        <div className="mt-auto pt-8">
          <Link
            href="/about#join"
            onClick={() => setMenuOpen(false)}
            className="circular-cta text-white"
          >
            <span className="text-xl font-bold">Join Science Club</span>
            <span className="circle" aria-hidden="true">
              <ArrowRight size={14} />
            </span>
          </Link>

          <p className="label text-[#B8B8B8] mt-6">
            {clubInfo.identifier} / 2026
          </p>
        </div>
      </div>
    </>
  );
}

