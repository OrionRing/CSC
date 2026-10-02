'use client';

import { useVersion } from '@/context/VersionContext';
import { SectionLabel } from '@/components/ui';
import { JournalCard, FeaturedJournalCard } from '@/components/JournalComponents';

export default function JournalPage() {
  const { version, journalPosts } = useVersion();
  const [featured, ...rest] = journalPosts;
  const isV2 = version === 'v2';

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 bg-[#FFFFFF] border-b border-[#E8E8E4]"
        aria-labelledby="journal-hero-heading"
      >
        <div className="container-main">
          <div className="flex items-center gap-2 mb-4">
            <SectionLabel>JOURNAL</SectionLabel>
            {isV2 && (
              <span className="bg-emerald-500/20 text-emerald-800 text-[10px] font-mono px-2 py-0.5 rounded font-semibold border border-emerald-500/30">
                CATATAN LAB RABU & JUMAT (V2)
              </span>
            )}
          </div>
          <h1
            id="journal-hero-heading"
            className="page-headline text-[#111111] mb-6"
          >
            {isV2 ? 'Catatan Laboratorium & Refleksi Riset.' : 'Journal'}
          </h1>
          <p className="body-large text-[#606060] max-w-2xl leading-relaxed">
            {isV2
              ? 'Catatan pengujian dari sesi laboratorium hari Rabu dan Jumat di Kolese Kanisius, dokumentasi instrumen (Spektrofotometer UV-Vis, Pyrolisis), serta refleksi Cura Personalis.'
              : 'Project notes, research reflections, club updates, and lessons from experiments.'}
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="section-spacing bg-[#FFFFFF]">
          <div className="container-main">
            <SectionLabel className="mb-8">LATEST ENTRY</SectionLabel>
            <FeaturedJournalCard post={featured} />
          </div>
        </section>
      )}

      {/* All posts */}
      <section className="section-spacing bg-[#F4F4F1] border-t border-[#E8E8E4]">
        <div className="container-main">
          <SectionLabel className="mb-10">ALL ENTRIES</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {journalPosts.map((post: any) => (
              <JournalCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
