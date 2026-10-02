import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { VersionProvider } from '@/context/VersionContext';
import VersionBanner from '@/components/VersionBanner';

export const metadata: Metadata = {
  title: {
    default: 'Science Club — Explore. Experiment. Discover.',
    template: '%s — Science Club',
  },
  description:
    'A student-led high school Science Club exploring science through experiments, research, engineering, and collaboration.',
  keywords: [
    'science club',
    'high school science',
    'student research',
    'experiments',
    'biology',
    'chemistry',
    'physics',
    'environmental science',
    'engineering',
    'kolese kanisius',
    'canisius college',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Science Club',
    title: 'Science Club — Explore. Experiment. Discover.',
    description:
      'A student-led high school Science Club exploring science through experiments, research, engineering, and collaboration.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Science Club — Explore. Experiment. Discover.',
    description:
      'A student-led high school Science Club exploring science through experiments, research, engineering, and collaboration.',
  },
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
      <body>
        <VersionProvider>
          <header className="sticky top-0 z-50 w-full bg-[#050505]">
            <VersionBanner />
            <Navbar />
          </header>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </VersionProvider>
      </body>
    </html>
  );
}

