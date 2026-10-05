'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { milestones, longTermGoals, statusGroups } from '@/data/v2/roadmap';
import { SectionLabel, ArrowLink } from '@/components/ui';

export default function RoadmapPage() {
  return (
    <article className="min-h-screen bg-[#FFFFFF] text-[#111111]">
      {/* Hero */}
      <section
        className="pt-36 pb-16 bg-[#FFFFFF] border-b border-[#E8E8E4]"
        aria-labelledby="roadmap-hero-heading"
      >
        <div className="container-main">
          <SectionLabel className="mb-4">ROADMAP & TIMELINE</SectionLabel>
          <h1
            id="roadmap-hero-heading"
            className="page-headline text-[#111111] mb-8 max-w-4xl"
          >
            Where curiosity takes us next.
          </h1>
          <p className="body-large text-[#606060] max-w-2xl leading-relaxed">
            An integrated chronological timeline tracking laboratory preparation, manuscript consolidation, competition filing deadlines, and internal exhibition milestones.
          </p>
        </div>
      </section>

      {/* Modern Compact Timeline Section */}
      <section className="section-spacing bg-[#FFFFFF] border-b border-[#E8E8E4]" aria-labelledby="timeline-heading">
        <div className="container-main">
          <div className="max-w-4xl">
            <SectionLabel className="mb-10">2026–2027 ACADEMIC SCHEDULE</SectionLabel>

            {/* Vertical timeline spine */}
            <div className="relative pl-8 sm:pl-10 border-l-2 border-[#111111] ml-4 sm:ml-6 space-y-14">
              {milestones.map((m, idx) => {
                const isCompleted = m.status === 'completed';
                const isCurrent = m.status === 'in-progress';

                return (
                  <div key={m.id} className="relative group">
                    {/* Node Dot */}
                    <span
                      className={`absolute -left-[39px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-white transition-transform duration-200 group-hover:scale-125 ${
                        isCompleted
                          ? 'bg-[#111111]'
                          : isCurrent
                          ? 'bg-[#D83933] ring-4 ring-[#D83933]/20 animate-pulse'
                          : 'bg-[#B8B8B8]'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Timeline Card */}
                    <div className="p-6 sm:p-8 bg-[#F4F4F1] border border-[#E8E8E4] rounded">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="label text-[#D83933] font-bold font-mono">
                          PHASE {String(idx + 1).padStart(2, '0')} // {m.date}
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
                          {m.status.toUpperCase()}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-3">
                        {m.title}
                      </h2>

                      <p className="body-large text-[#606060] text-sm sm:text-base leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

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
