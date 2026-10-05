'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Award, Shield } from 'lucide-react';
import { milestones, longTermGoals, statusGroups } from '@/data/v2/roadmap';
import { SectionLabel, ArrowLink } from '@/components/ui';
import { RoadmapItem } from '@/components/RoadmapItem';

export default function RoadmapPage() {
  return (
    <article className="min-h-screen bg-[#FFFFFF] text-[#111111]">
      {/* Hero */}
      <section
        className="pt-36 pb-16 bg-[#FFFFFF] border-b border-[#E8E8E4]"
        aria-labelledby="roadmap-hero-heading"
      >
        <div className="container-main">
          <SectionLabel className="mb-4">ROADMAP</SectionLabel>
          <h1
            id="roadmap-hero-heading"
            className="page-headline text-[#111111] mb-8 max-w-4xl"
          >
            Where curiosity takes us next.
          </h1>
          <p className="body-large text-[#606060] max-w-2xl leading-relaxed">
            A chronological timeline of active laboratory experimentation, manuscript consolidation, and competition target dates for the 2026–2027 academic term.
          </p>
        </div>
      </section>

      {/* Completed Milestones */}
      {statusGroups.completed.length > 0 && (
        <section className="section-spacing bg-[#FFFFFF]" aria-labelledby="completed-heading">
          <div className="container-main">
            <div className="flex items-center gap-4 mb-12">
              <SectionLabel className="mb-0">COMPLETED</SectionLabel>
              <span className="w-2 h-2 rounded-full bg-[#111111]" aria-hidden="true" />
            </div>
            {statusGroups.completed.map((milestone) => (
              <RoadmapItem key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </section>
      )}

      {/* Current Milestones */}
      {statusGroups.current.length > 0 && (
        <section className="section-spacing bg-[#F4F4F1] border-y border-[#E8E8E4]" aria-labelledby="current-heading">
          <div className="container-main">
            <div className="flex items-center gap-4 mb-12">
              <SectionLabel className="mb-0">CURRENT FOCUS</SectionLabel>
              <span className="w-2 h-2 rounded-full bg-[#D83933]" aria-hidden="true" />
            </div>
            {statusGroups.current.map((milestone) => (
              <RoadmapItem key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </section>
      )}

      {/* Upcoming Milestones */}
      {statusGroups.upcoming.length > 0 && (
        <section className="section-spacing bg-[#FFFFFF] border-b border-[#E8E8E4]" aria-labelledby="upcoming-heading">
          <div className="container-main">
            <div className="flex items-center gap-4 mb-12">
              <SectionLabel className="mb-0">UPCOMING</SectionLabel>
              <span className="w-2 h-2 rounded-full bg-[#B8B8B8]" aria-hidden="true" />
            </div>
            {statusGroups.upcoming.map((milestone) => (
              <RoadmapItem key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </section>
      )}

      {/* Long-Term Goals */}
      <section className="section-dark section-spacing" aria-labelledby="longterm-heading">
        <div className="container-main">
          <SectionLabel light className="mb-5">LONG-TERM DIRECTION</SectionLabel>
          <h2 id="longterm-heading" className="section-headline text-white mb-6">
            2027 and Beyond.
          </h2>
          <p className="text-[#B8B8B8] mb-12 max-w-lg leading-relaxed">
            Strategic directions guiding future Canisius research cohorts, laboratory upgrades, and community impact.
          </p>

          <div className="max-w-3xl">
            {longTermGoals.map((goal, i) => (
              <div key={i} className="flex gap-8 py-6 border-t border-white/10">
                <span className="label text-[#D83933] shrink-0 font-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[#B8B8B8] leading-relaxed">{goal}</p>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>
    </article>
  );
}
