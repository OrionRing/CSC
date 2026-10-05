'use client';

import Link from 'next/link';
import { ArrowDown, CheckCircle2, Clock, Calendar, Shield, Award, Users, RefreshCw, Globe, Sparkles } from 'lucide-react';
import { strategicPillars, longTermGoals, strategicRoadmap } from '@/data/v2/roadmap';
import { SectionLabel, ArrowLink } from '@/components/ui';

export default function RoadmapPage() {
  const completedCount = strategicRoadmap.filter((m) => m.status === 'completed').length;
  const inProgressCount = strategicRoadmap.filter((m) => m.status === 'in-progress').length;
  const plannedCount = strategicRoadmap.filter((m) => m.status === 'planned').length;

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-[#111111]">
      {/* =====================================================
          HERO — Clean NASA editorial aesthetic
          ===================================================== */}
      <section
        className="pt-36 pb-16 bg-[#FFFFFF] border-b border-[#E8E8E4]"
        aria-labelledby="roadmap-hero-heading"
      >
        <div className="container-main">
          <SectionLabel className="mb-4">STRATEGIC ROADMAP 2026–2028+</SectionLabel>
          <h1
            id="roadmap-hero-heading"
            className="page-headline text-[#111111] mb-6 max-w-4xl"
          >
            Strategies for Future Development, Self-Sustainability, and Expansion.
          </h1>
          <p className="body-large text-[#606060] max-w-3xl leading-relaxed mb-10">
            A comprehensive institutional roadmap designed to elevate empirical rigor, insulate club operations against student turnover through self-renewing apprenticeships, and expand Canisius student innovations into university laboratories and community deployments.
          </p>

          {/* Quick Metrics & Anchor Links */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#E8E8E4]">
            <div className="flex items-center gap-6 text-xs font-mono mr-auto">
              <span className="flex items-center gap-1.5 text-[#111111]">
                <span className="w-2 h-2 rounded-full bg-[#111111]" />
                {completedCount} Completed
              </span>
              <span className="flex items-center gap-1.5 text-[#D83933]">
                <span className="w-2 h-2 rounded-full bg-[#D83933] animate-pulse" />
                {inProgressCount} Active
              </span>
              <span className="flex items-center gap-1.5 text-[#606060]">
                <span className="w-2 h-2 rounded-full bg-[#B8B8B8]" />
                {plannedCount} Planned
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#pillar-development"
                className="px-3.5 py-1.5 text-xs font-mono uppercase bg-[#F4F4F1] border border-[#E8E8E4] rounded hover:border-[#111111] transition-colors"
              >
                1. Future Dev ↓
              </a>
              <a
                href="#pillar-sustainability"
                className="px-3.5 py-1.5 text-xs font-mono uppercase bg-[#F4F4F1] border border-[#E8E8E4] rounded hover:border-[#111111] transition-colors"
              >
                2. Sustainability ↓
              </a>
              <a
                href="#pillar-expansion"
                className="px-3.5 py-1.5 text-xs font-mono uppercase bg-[#F4F4F1] border border-[#E8E8E4] rounded hover:border-[#111111] transition-colors"
              >
                3. Expansion ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PILLAR SECTIONS
          ===================================================== */}
      <div className="divide-y divide-[#E8E8E4]">
        {strategicPillars.map((pillarSection) => {
          return (
            <section
              key={pillarSection.id}
              id={pillarSection.id}
              className="section-spacing bg-[#FFFFFF] scroll-mt-20"
              aria-labelledby={`${pillarSection.id}-heading`}
            >
              <div className="container-main">
                {/* Pillar Header */}
                <div className="max-w-4xl mb-12">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 bg-[#D83933] text-white font-mono text-xs font-bold rounded">
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

                {/* Timeline / Phase Cards */}
                <div className="max-w-4xl relative pl-6 sm:pl-10 border-l-2 border-[#111111] ml-3 sm:ml-6 space-y-12">
                  {pillarSection.milestones.map((milestone) => {
                    const isCompleted = milestone.status === 'completed';
                    const isCurrent = milestone.status === 'in-progress';

                    return (
                      <div key={milestone.id} className="relative group">
                        {/* Timeline Node Dot */}
                        <span
                          className={`absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full border-2 border-white transition-transform duration-200 group-hover:scale-125 ${
                            isCompleted
                              ? 'bg-[#111111]'
                              : isCurrent
                              ? 'bg-[#D83933] ring-4 ring-[#D83933]/20 animate-pulse'
                              : 'bg-[#B8B8B8]'
                          }`}
                          aria-hidden="true"
                        />

                        {/* Milestone Card */}
                        <div className="p-6 sm:p-8 bg-[#F4F4F1] border border-[#E8E8E4] rounded">
                          {/* Top Badges */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E8E8E4]">
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

                          {/* Phase Title */}
                          <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-3">
                            {milestone.title}
                          </h3>

                          {/* Strategic Objective */}
                          <div className="mb-6">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#606060] font-semibold block mb-1">
                              Strategic Objective
                            </span>
                            <p className="text-[#111111] text-sm sm:text-base leading-relaxed">
                              {milestone.strategicObjective}
                            </p>
                          </div>

                          {/* 2-Column Grid: Initiatives & Deliverables */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E8E8E4]">
                            {/* Key Initiatives */}
                            <div>
                              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D83933] font-semibold block mb-2">
                                Key Initiatives
                              </span>
                              <ul className="space-y-2 text-xs sm:text-sm text-[#606060]">
                                {milestone.keyInitiatives.map((init, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-[#D83933] mt-0.5 font-mono">▪</span>
                                    <span>{init}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Tangible Deliverables */}
                            <div>
                              <span className="text-[11px] font-mono uppercase tracking-wider text-[#111111] font-semibold block mb-2">
                                Concrete Deliverables
                              </span>
                              <ul className="space-y-2 text-xs sm:text-sm text-[#606060]">
                                {milestone.deliverables.map((deliv, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-[#111111] mt-0.5 font-mono">✓</span>
                                    <span>{deliv}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* KPIs if present */}
                          {milestone.kpis && milestone.kpis.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-[#E8E8E4]/60 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#606060]">
                              <span className="text-[#111111] font-semibold">Target KPIs:</span>
                              {milestone.kpis.map((kpi, i) => (
                                <span key={i} className="inline-flex items-center gap-1">
                                  <span className="text-[#D83933]">●</span>
                                  <span>{kpi}</span>
                                </span>
                              ))}
                            </div>
                          )}
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
          LONG-TERM DIRECTION & SUSTAINABILITY MANIFESTO
          ===================================================== */}
      <section className="section-dark section-spacing" aria-labelledby="longterm-heading">
        <div className="container-main">
          <SectionLabel light className="mb-5">LONG-TERM DIRECTION</SectionLabel>
          <h2 id="longterm-heading" className="section-headline text-white mb-6">
            Institutional Longevity & Evergreen Research.
          </h2>
          <p className="text-[#B8B8B8] mb-12 max-w-xl leading-relaxed">
            Canisius Science Club is designed to transcend graduating cohorts. Through structured peer apprenticeships, open electronic documentation, and university linkages, every incoming generation builds upon the findings of the last.
          </p>

          <div className="max-w-3xl">
            {longTermGoals.map((goal, i) => (
              <div key={i} className="flex gap-8 py-6 border-t border-white/10">
                <span className="label text-[#D83933] shrink-0 font-mono text-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[#B8B8B8] text-base leading-relaxed">{goal}</p>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D83933] text-white font-mono text-xs uppercase font-bold tracking-wider rounded hover:bg-[#b82e28] transition-colors"
            >
              Explore 16 Archived Research Papers →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              View Lab Equipment & Facilities →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
