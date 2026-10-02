'use client';

import { useVersion } from '@/context/VersionContext';
import { SectionLabel } from '@/components/ui';
import { RoadmapItem } from '@/components/RoadmapItem';

export default function RoadmapPage() {
  const { version, statusGroups, longTermGoals } = useVersion();
  const isV2 = version === 'v2';

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 bg-[#050505]"
        aria-labelledby="roadmap-hero-heading"
      >
        <div className="container-main">
          <div className="flex items-center gap-2 mb-5">
            <SectionLabel light>ROADMAP</SectionLabel>
            {isV2 && (
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded font-semibold border border-emerald-500/30">
                TAHAPAN KOMPETISI KANISIUS (V2)
              </span>
            )}
          </div>
          <h1
            id="roadmap-hero-heading"
            className="page-headline text-white mb-8 max-w-4xl"
          >
            {isV2 ? 'Roadmap Kompetisi & Target Nilai A.' : 'Where curiosity takes us next.'}
          </h1>
          <p className="body-large text-[#B8B8B8] max-w-2xl leading-relaxed">
            {isV2
              ? 'Tahapan kronologis riset STEM Kolese Kanisius mulai dari orientasi lab, eksperimen sesi Rabu & Jumat, seleksi naskah ilmiah, hingga pengiriman karya ke kompetisi nasional.'
              : 'A chronological view of what we have done, what is in progress, and where the club is heading.'}
          </p>
        </div>
      </section>

      {/* Completed */}
      {statusGroups.completed.length > 0 && (
        <section
          className="section-spacing bg-[#FFFFFF]"
          aria-labelledby="completed-heading"
        >
          <div className="container-main">
            <div className="flex items-center gap-4 mb-12">
              <SectionLabel className="mb-0">COMPLETED</SectionLabel>
              <span className="w-2 h-2 rounded-full bg-[#111111]" aria-hidden="true" />
            </div>
            {statusGroups.completed.map((milestone: any) => (
              <RoadmapItem key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </section>
      )}

      {/* Current */}
      {statusGroups.current.length > 0 && (
        <section
          className="section-spacing bg-[#F4F4F1] border-y border-[#E8E8E4]"
          aria-labelledby="current-heading"
        >
          <div className="container-main">
            <div className="flex items-center gap-4 mb-12">
              <SectionLabel className="mb-0">CURRENT</SectionLabel>
              <span className="w-2 h-2 rounded-full bg-[#D83933]" aria-hidden="true" />
            </div>
            {statusGroups.current.map((milestone: any) => (
              <RoadmapItem key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </section>
      )}

      {/* Upcoming */}
      {statusGroups.upcoming.length > 0 && (
        <section
          className="section-spacing bg-[#FFFFFF]"
          aria-labelledby="upcoming-heading"
        >
          <div className="container-main">
            <div className="flex items-center gap-4 mb-12">
              <SectionLabel className="mb-0">UPCOMING</SectionLabel>
              <span className="w-2 h-2 rounded-full bg-[#B8B8B8]" aria-hidden="true" />
            </div>
            {statusGroups.upcoming.map((milestone: any) => (
              <RoadmapItem key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </section>
      )}

      {/* Long-term direction */}
      <section
        className="section-dark section-spacing"
        aria-labelledby="longterm-heading"
      >
        <div className="container-main">
          <SectionLabel light className="mb-5">
            {isV2 ? 'STRATEGI JANGKA PANJANG KANISIUS' : 'LONG-TERM DIRECTION'}
          </SectionLabel>
          <h2 id="longterm-heading" className="section-headline text-white mb-4">
            {isV2 ? 'Visi Inovasi 2027 & Keberlanjutan.' : '2027 and beyond.'}
          </h2>
          <p className="text-[#B8B8B8] mb-12 max-w-lg">
            {isV2
              ? 'Target strategis ekskul riset Kolese Kanisius dalam pemenuhan keunggulan akademis dan dampak nyata bagi masyarakat.'
              : 'These are directions we are working toward — goals rather than confirmed plans.'}
          </p>

          <div className="max-w-3xl">
            {longTermGoals.map((goal, i) => (
              <div
                key={i}
                className="flex gap-8 py-6 border-t border-white/10"
              >
                <span
                  className="label text-[#D83933] shrink-0 mt-0.5 font-mono"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[#B8B8B8] leading-relaxed">{goal}</p>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>
    </>
  );
}
