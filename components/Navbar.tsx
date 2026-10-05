'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/roadmap', label: 'Roadmap' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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

  return (
    <>
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-[#050505] border-b border-white/10'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-sm tracking-widest font-bold text-white hover:text-[#D83933] transition-colors duration-200 flex items-center gap-2"
              aria-label="Canisius Science Club — Home"
            >
              <span className="font-mono text-base tracking-wider">CANISIUS SCIENCE CLUB</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-tight transition-colors duration-200 ${
                    pathname === link.href ? 'text-[#D83933]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Join CTA */}
              <Link
                href="/about#join"
                className="flex items-center gap-2 text-sm font-semibold text-white group ml-2"
              >
                <span className="group-hover:text-[#D83933] transition-colors duration-200">Find Us</span>
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
              className="md:hidden text-white p-3 min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2"
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

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''} bg-[#0A0A0A]`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/"
            className="text-sm tracking-widest font-bold text-white font-mono"
            onClick={() => setMenuOpen(false)}
          >
            CANISIUS SCIENCE CLUB
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white p-2 min-w-[44px] min-h-[44px]"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile links */}
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl font-bold tracking-tight py-4 border-b border-white/10
                hover:text-[#D83933] transition-colors duration-200"
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
            className="flex items-center justify-between py-4 px-6 bg-[#161616] border border-white/10 rounded text-white hover:border-[#D83933] transition-colors duration-200"
          >
            <span className="text-lg font-bold">Find Us at CC</span>
            <span className="w-8 h-8 rounded-full bg-[#D83933] flex items-center justify-center text-white">
              <ArrowRight size={16} />
            </span>
          </Link>

          <p className="text-xs font-mono text-[#888888] mt-6">
            CANISIUS SCIENCE CLUB // 2026–2027
          </p>
        </div>
      </div>
    </>
  );
}
