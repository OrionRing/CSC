'use client';

import Link from 'next/link';
import { SectionLabel, ArrowLink } from '@/components/ui';
import { strategicPillars, longTermGoals, strategicRoadmap } from '@/data/v2/roadmap';
import {
  ArchivePipelineIllustration,
  BenchAssayIllustration,
  ApprenticeshipLoopIllustration,
  CircularSourcingIllustration,
  CampusShowcaseIllustration,
  UniversityNetworkIllustration,
} from '@/components/RoadmapIllustrations';

export default function RoadmapPage() {
  const completedCount = strategicRoadmap.filter((m) => m.status === 'completed').length;
  const inProgressCount = strategicRoadmap.filter((m) => m.status === 'in-progress').length;
  const plannedCount = strategicRoadmap.filter((m) => m.status === 'planned').length;

  // Map phase ID to corresponding technical illustration
  const renderIllustration = (id: string) => {
    switch (id) {
      case 'rd-01':
        return <ArchivePipelineIllustration />;
      case 'rd-02':
        return <BenchAssayIllustration />;
      case 'rd-03':
        return <ApprenticeshipLoopIllustration />;
      case 'rd-04':
        return <CircularSourcingIllustration />;
      case 'rd-05':
        return <CampusShowcaseIllustration />;
      case 'rd-06':
        return <UniversityNetworkIllustration />;
      default:
        return null;
    }
  };

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-[#111111]">
      {/* =====================================================
          HERO — Spacious & Editorial NASA Aesthetic
          ===================================================== */}
      <section
        className="pt-36 pb-20 bg-[#FFFFFF] border-b border-[#E8E8E4]"
        aria-labelledby="roadmap-hero-heading"
      >
        <div className="container-main">
          <SectionLabel className="mb-4">STRATEGIC TIMELINE 2026–2028</SectionLabel>
          <h1
            id="roadmap-hero-heading"
            className="page-headline text-[#111111] mb-6 max-w-4xl"
          >
            Where curiosity takes us next.
          </h1>
          <p className="body-large text-[#606060] max-w-2xl leading-relaxed mb-12">
            A grounded, spaced-out roadmap engineered around real secondary school schedules. Focused on finishing solid bench experiments, keeping the club resilient against member turnover, and sharing science across campus without burnout.
          </p>

          {/* Quick Metrics & Anchor Links */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-[#E8E8E4]">
            <div className="flex items-center gap-8 text-xs font-mono">
              <span className="flex items-center gap-2 text-[#111111]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                {completedCount} Completed
              </span>
              <span className="flex items-center gap-2 text-[#D83933]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D83933] animate-pulse" />
                {inProgressCount} Active
              </span>
              <span className="flex items-center gap-2 text-[#606060]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B8B8B8]" />
                {plannedCount} Planned
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#pillar-development"
                className="px-4 py-2 text-xs font-mono uppercase bg-[#F4F4F1] border border-[#E8E8E4] rounded hover:border-[#111111] hover:bg-[#FFFFFF] transition-all"
              >
                1. Future Dev ↓
              </a>
              <a
                href="#pillar-sustainability"
                className="px-4 py-2 text-xs font-mono uppercase bg-[#F4F4F1] border border-[#E8E8E4] rounded hover:border-[#111111] hover:bg-[#FFFFFF] transition-all"
              >
                2. Sustainability ↓
              </a>
              <a
                href="#pillar-expansion"
                className="px-4 py-2 text-xs font-mono uppercase bg-[#F4F4F1] border border-[#E8E8E4] rounded hover:border-[#111111] hover:bg-[#FFFFFF] transition-all"
              >
                3. Expansion ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PILLAR SECTIONS (Spaced Out with Illustrations)
          ===================================================== */}
      <div className="divide-y divide-[#E8E8E4]">
        {strategicPillars.map((pillarSection) => {
          return (
            <section
              key={pillarSection.id}
              id={pillarSection.id}
              className="py-36 sm:py-48 bg-[#FFFFFF] scroll-mt-20"
              aria-labelledby={`${pillarSection.id}-heading`}
            >
              <div className="container-main">
                {/* Pillar Header */}
                <div className="max-w-3xl mb-24 sm:mb-32">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#D83933] text-white font-mono text-xs font-bold rounded">
                      PILLAR {pillarSection.number}
                    </span>
                    <span className="font-mono text-xs text-[#606060] uppercase tracking-wider">
                      STRATEGIC DIRECTIVE
                    </span>
                  </div>

                  <h2
                    id={`${pillarSection.id}-heading`}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight mb-4"
                  >
                    {pillarSection.headline}
                  </h2>

                  <p className="body-large text-[#606060] leading-relaxed">
                    {pillarSection.summary}
                  </p>
                </div>

                {/* Milestones Container - Spacious 2-Column Cards */}
                <div className="space-y-36 sm:space-y-48">
                  {pillarSection.milestones.map((milestone, idx) => {
                    const isCompleted = milestone.status === 'completed';
                    const isCurrent = milestone.status === 'in-progress';

                    return (
                      <div
                        key={milestone.id}
                        className="p-10 sm:p-14 lg:p-16 bg-[#FBFBFA] border border-[#E8E8E4] rounded-lg transition-all duration-300 hover:border-[#111111] hover:shadow-sm"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                          {/* Left Column: Concise Content (7 cols) */}
                          <div className="lg:col-span-7 flex flex-col justify-between">
                            <div>
                              {/* Metadata Badge */}
                              <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="font-mono text-xs text-[#D83933] font-bold uppercase tracking-wider">
                                  {milestone.phase} // {milestone.timeline}
                                </span>

                                <span
                                  className={`label px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold ${
                                    isCompleted
                                      ? 'bg-[#111111] text-white'
                                      : isCurrent
                                      ? 'bg-[#D83933] text-white'
                                      : 'bg-white text-[#606060] border border-[#E8E8E4]'
                                  }`}
                                >
                                  {milestone.status.toUpperCase()}
                                </span>
                              </div>

                              {/* Title */}
                              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-4 leading-tight">
                                {milestone.title}
                              </h3>

                              {/* Concise Core Focus */}
                              <p className="text-base text-[#606060] leading-relaxed mb-8">
                                {milestone.strategicObjective}
                              </p>

                              {/* Deliverable Tags (Concise & Punchy) */}
                              <div className="space-y-2.5 mb-6">
                                {milestone.deliverables.map((item, dIdx) => (
                                  <div
                                    key={dIdx}
                                    className="flex items-start gap-3 text-sm text-[#111111]"
                                  >
                                    <span className="text-[#D83933] font-bold shrink-0 mt-0.5 font-mono text-xs">
                                      ✓
                                    </span>
                                    <span className="leading-snug">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Schedule / Bandwidth Note */}
                            {milestone.notes && (
                              <div className="pt-4 mt-4 border-t border-[#E8E8E4] flex items-center gap-2 text-xs font-mono text-[#606060]">
                                <span className="text-[#D83933] font-semibold">⚡ REALITY:</span>
                                <span>{milestone.notes}</span>
                              </div>
                            )}
                          </div>

                          {/* Right Column: Technical Illustration (5 cols) */}
                          <div className="lg:col-span-5 w-full">
                            {renderIllustration(milestone.id)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* =====================================================
          LONG-TERM DIRECTION (Spacious Dark Container)
          ===================================================== */}
      <section className="section-dark py-32 sm:py-44" aria-labelledby="longterm-heading">
        <div className="container-main">
          <SectionLabel light className="mb-5">LONG-TERM DIRECTION</SectionLabel>
          <h2 id="longterm-heading" className="section-headline text-white mb-6">
            Institutional Longevity & Evergreen Research.
          </h2>
          <p className="text-[#B8B8B8] mb-16 max-w-xl leading-relaxed text-base sm:text-lg">
            Canisius Science Club is designed to transcend graduating cohorts. Through structured peer apprenticeships, open electronic documentation, and zero-cost circular materials, every incoming generation builds upon the findings of the last.
          </p>

          <div className="max-w-3xl space-y-6">
            {longTermGoals.map((goal, i) => (
              <div
                key={i}
                className="flex items-start gap-8 py-8 border-t border-white/10"
              >
                <span className="label text-[#D83933] shrink-0 font-mono text-base font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-white/80 text-lg leading-relaxed">{goal}</p>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D83933] text-white font-mono text-xs uppercase font-bold tracking-wider rounded hover:bg-[#b82e28] transition-colors"
            >
              Explore 22 Archived Research Papers →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-4 text-white/70 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              View Lab Equipment & Facilities →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
