'use client';

import { useState } from 'react';
import { useVersion } from '@/context/VersionContext';
import { ProjectCard } from '@/components/ProjectComponents';
import { SectionLabel } from '@/components/ui';

type Filter = 'all' | 'biology' | 'physics' | 'chemistry' | 'engineering' | 'environmental';

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'biology', label: 'Biology' },
  { value: 'physics', label: 'Physics' },
  { value: 'chemistry', label: 'Chemistry' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'environmental', label: 'Environmental' },
];

export default function ProjectsPage() {
  const { version, projects } = useVersion();
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const isV2 = version === 'v2';

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p: any) => p.categories.includes(activeFilter));

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 bg-[#F4F4F1] border-b border-[#E8E8E4]"
        aria-labelledby="projects-hero-heading"
      >
        <div className="container-main">
          <div className="flex items-center gap-2 mb-5">
            <SectionLabel>PROJECTS</SectionLabel>
            {isV2 && (
              <span className="bg-emerald-500/20 text-emerald-800 text-[10px] font-mono px-2 py-0.5 rounded font-semibold border border-emerald-500/30">
                KOLESE KANISIUS RESEARCH (V2)
              </span>
            )}
          </div>
          <h1
            id="projects-hero-heading"
            className="page-headline text-[#111111] mb-6 max-w-4xl"
          >
            {isV2
              ? 'Daftar Penelitian & Prototipe Riset STEM.'
              : 'Questions worth investigating.'}
          </h1>
          <p className="body-large text-[#606060] max-w-2xl leading-relaxed">
            {isV2
              ? 'Kumpulan proyek penelitian nyata siswa Kolese Kanisius (CQD Akrilik UV-A, TEG Destilator Aquadest, Generator Pintu Geser, Eco-Enzyme MFC, Nutribar Lokal, Supresi Api Akustik) yang dikembangkan pada sesi Rabu & Jumat untuk kompetisi nasional dan pemenuhan Nilai A.'
              : 'Our projects begin with curiosity and develop through research, experimentation, observation, and iteration.'}
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section aria-label="Filter projects by category">
        <div className="container-main py-6 border-b border-[#E8E8E4]">
          <div className="flex items-center gap-3 flex-wrap" role="group" aria-label="Category filters">
            <span className="label text-[#606060] mr-2 hidden sm:inline">FILTER</span>
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`filter-btn ${activeFilter === f.value ? 'filter-btn-active' : ''}`}
                aria-pressed={activeFilter === f.value}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-spacing bg-[#FFFFFF]" aria-live="polite" aria-atomic="true">
        <div className="container-main">
          {/* Count */}
          <p className="label text-[#606060] mb-10">
            {filtered.length} {filtered.length === 1 ? 'PROJECT' : 'PROJECTS'}
            {activeFilter !== 'all' && ` · ${activeFilter.toUpperCase()}`}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-b border-[#E8E8E4]">
              {filtered.map((project: any, i: number) => (
                <div
                  key={project.id}
                  className={`p-6 lg:p-10 border-t border-[#E8E8E4]
                    ${i % 3 !== 2 ? 'lg:border-r lg:border-r-[#E8E8E4]' : ''}
                    ${i % 2 !== 1 ? 'sm:border-r sm:border-r-[#E8E8E4]' : ''}
                  `}
                >
                  <ProjectCard project={project} />
                  {isV2 && project.competitionTarget && (
                    <div className="mt-4 pt-3 border-t border-[#E8E8E4] text-[11px] font-mono text-emerald-700 bg-emerald-50 p-2 rounded">
                      🎯 <strong>Target:</strong> {project.competitionTarget}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="label text-[#B8B8B8] mb-4">NO PROJECTS FOUND</p>
              <p className="text-[#606060]">
                No projects match the selected filter.{' '}
                <button
                  onClick={() => setActiveFilter('all')}
                  className="underline hover:text-[#111111] transition-colors"
                >
                  View all projects
                </button>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image library note */}
      <section className="bg-[#F4F4F1] py-10 border-t border-[#E8E8E4]">
        <div className="container-main">
          <p className="label text-[#B8B8B8]">
            {isV2
              ? 'Versi 2: Kolese Kanisius (All-Boys High School) • Pertemuan Rabu & Jumat • Target Finalis Lomba (Nilai A) • Cura Personalis'
              : 'Image placeholders are active. Replace with club photography in /public/images/'}
          </p>
        </div>
      </section>
    </>
  );
}
