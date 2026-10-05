import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Canisius Science Club — SMA Kolese Kanisius Jakarta',
    template: '%s — Canisius Science Club',
  },
  description:
    'Ekstrakulikuler Riset STEM SMA Kolese Kanisius Jakarta. Mengembangkan rasa ingin tahu, daya juang kompetisi, dan solusi nyata demi merawat alam ciptaan.',
  keywords: [
    'canisius science club',
    'kolese kanisius',
    'sma kolese kanisius',
    'ekskul riset kanisius',
    'stem high school',
    'student research',
    'cura personalis',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      id="top"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-[#050505] text-white">
        <header className="sticky top-0 z-50 w-full bg-[#050505]">
          <Navbar />
        </header>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
