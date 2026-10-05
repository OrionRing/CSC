import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InitialLoader from '@/components/InitialLoader';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: {
    default: 'Canisius Science Club — SMA Kolese Kanisius Jakarta',
    template: '%s — Canisius Science Club',
  },
  description:
    'Canisius Science Club (CSC) is the STEM research extracurricular at SMA Kolese Kanisius Jakarta.',
  keywords: [
    'canisius science club',
    'kolese kanisius',
    'sma kolese kanisius',
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
      lang="en"
      id="top"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-[#FFFFFF] text-[#111111]">
        <InitialLoader />
        <header className="sticky top-0 z-50 w-full bg-[#FFFFFF] border-b border-[#E8E8E4]">
          <Navbar />
        </header>
        <main id="main-content" tabIndex={-1}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
