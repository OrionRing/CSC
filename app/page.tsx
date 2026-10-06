'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { clubStats, clubInfo } from '@/data/v2/stats';
import { projects } from '@/data/v2/projects';
import { strategicRoadmap, strategicPillars } from '@/data/v2/roadmap';
import { SectionLabel, ArrowLink, CircularCTA } from '@/components/ui';
import { ProjectCard } from '@/components/ProjectComponents';
import { BotanicalExtractionIllustration } from '@/components/ScientificIllustrations';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* =====================================================
          HERO — Clean NASA editorial aesthetic
          ===================================================== */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-end bg-[#050505] text-white border-b border-white/10"
        aria-labelledby="hero-headline"
      >
        <div className="container-main pb-20 pt-36">
          {/* Metadata with Official Logo */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/csc-logo.png"
              alt="Canisius Science Club Logo"
              width={52}
              height={52}
              className="rounded-full border border-white/20 shadow-md shrink-0"
              priority
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="label text-[#D83933] font-bold text-sm tracking-wider">
                  CANISIUS SCIENCE CLUB
                </span>
                <span className="label text-white/30">·</span>
                <span className="label text-white/60 text-xs">
                  SMA KOLESE KANISIUS
                </span>
              </div>
              <span className="label text-white/40 text-[11px] font-mono block mt-0.5">
                LABORATORY OF SCIENTIFIC INQUIRY // 2026–2027
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            id="hero-headline"
            className="hero-headline text-white mb-8 max-w-5xl"
          >
            Scientific Rigor.<br />
            Real Solutions.
          </h1>

          {/* Supporting Copy */}
          <p className="body-large text-white/70 max-w-2xl leading-relaxed mb-10">
            {clubInfo.intro}
          </p>

          {/* Action CTA */}
          <CircularCTA href="/projects" light>
            Explore our research
          </CircularCTA>
        </div>
      </section>

      {/* =====================================================
          MISSION & PHILOSOPHY
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF] text-[#111111]"
        aria-labelledby="mission-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl">
            <SectionLabel className="mb-6">OUR MISSION</SectionLabel>
            <h2
              id="mission-heading"
              className="section-headline text-[#111111] mb-6"
            >
              Curiosity with Purpose — Grounded in Evidence.
            </h2>
            <p className="body-large text-[#606060] leading-relaxed mb-6">
              At Kolese Kanisius, science begins with observations of real-world challenges around us. Whether synthesizing quantum dots from organic precursors, harvesting bio-electricity from kitchen wastewater, or developing passive solar panel heat sinks for equatorial heat, our projects combine academic curiosity with genuine social utility.
            </p>
            <p className="body-large text-[#606060] leading-relaxed mb-8">
              Guided by the Jesuit principle of <em>Cura Personalis</em>, our work emphasizes meticulous laboratory discipline, intellectual honesty, and persistence under rigorous competitive standards.
            </p>
            <ArrowLink href="/about">
              Learn about our facilities & methodology
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPLORE AREAS / FOUR PILLARS
          ===================================================== */}
      <section
        className="section-dark section-spacing"
        aria-labelledby="pillars-heading"
      >
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <SectionLabel light className="mb-4">RESEARCH FOUNDATIONS</SectionLabel>
              <h2 id="pillars-heading" className="section-headline text-white">
                Four Pillars of Canisius Science.
              </h2>
            </div>
            <p className="text-white/50 text-sm font-mono max-w-xs sm:text-right">
              THE CORE PHILOSOPHY BEHIND EVERY EXPERIMENT
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {[
              {
                num: '01',
                title: 'Experimental Rigor',
                desc: 'Applied investigations in Materials Science, Nanotechnology, Applied Physics, Renewable Energy, and Environmental Bio-remediation.',
              },
              {
                num: '02',
                title: 'Competitive Excellence',
                desc: 'Targeted preparation for prestigious national and international research forums (OPSI, EUREKA! ITB, IIIEX, YSIF).',
              },
              {
                num: '03',
                title: 'Cura Personalis',
                desc: 'Individual mentoring fostering moral character, laboratory safety discipline, and intellectual resilience in every student.',
              },
              {
                num: '04',
                title: 'Care for Creation',
                desc: 'Commitment to sustainable technology by transforming waste streams into useful energy and safeguarding our natural ecology.',
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="flex items-center gap-6 md:w-5/12">
                  <span className="label text-[#D83933] font-bold font-mono text-base">
                    {pillar.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-white/70 leading-relaxed md:w-7/12 max-w-xl">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRENT FOCUS: BIOMEDICAL & NATURAL BOTANICAL RESEACH
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF] text-[#111111] border-b border-[#E8E8E4]"
        aria-labelledby="focus-heading"
      >
        <div className="container-main">
          <SectionLabel className="mb-6">CURRENT FOCUS</SectionLabel>

          <div className="p-8 lg:p-14 bg-[#F4F4F1] border border-[#E8E8E4] rounded">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#606060]">
                  <span className="text-[#D83933] font-bold uppercase">Biomedical Science / Natural Therapeutics</span>
                  <span>—</span>
                  <span>ACTIVE LAB INITIATIVE</span>
                  <span>—</span>
                  <span>2026–2027</span>
                </div>

                <h2
                  id="focus-heading"
                  className="text-2xl lg:text-3xl font-bold tracking-tight text-[#111111] mb-4 leading-tight"
                >
                  Biomedical Extraction: Jatropha Leaf (Daun Jarak) Antibacterial Gel Formulations
                </h2>

                <p className="label text-[#606060] mb-4">
                  Active Focus: Student Biomedical Cohort • Botanical Secondary Metabolites
                </p>

                <p className="body-large text-[#606060] max-w-2xl leading-relaxed mb-4">
                  Members are currently pursuing individual investigations in medical and biomedical sciences, focusing on extracting bioactive phytochemicals from local flora. One active trial investigates saponin and flavonoid extracts from <em>Jatropha curcas</em> (Daun Jarak) to formulate topically stable, natural antibacterial gels that inhibit common pathogenic bacteria without reliance on synthetic biocides.
                </p>

                <p className="text-sm font-mono text-[#A0A0A0] mb-6">
                  Ongoing Lab Procedures: Ethanolic maceration, rotary evaporation, disk diffusion zone-of-inhibition assays, and viscometric formulation stability testing.
                </p>

                <ArrowLink href="/about#equipment">
                  View laboratory apparatus used for extraction & testing
                </ArrowLink>
              </div>

              <div className="lg:col-span-5 w-full">
                <BotanicalExtractionIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESEARCH REPOSITORY PREVIEW
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF] text-[#111111] border-b border-[#E8E8E4]"
        aria-labelledby="projects-heading"
      >
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel className="mb-4">RESEARCH REPOSITORY</SectionLabel>
              <h2 id="projects-heading" className="section-headline text-[#111111]">
                Archived Scientific Papers.
              </h2>
            </div>
            <ArrowLink href="/projects" className="shrink-0">
              View all 22 cataloged research papers
            </ArrowLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ROADMAP PREVIEW — 3 STRATEGIC PILLARS
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF] text-[#111111] border-b border-[#E8E8E4]"
        aria-labelledby="roadmap-preview-heading"
      >
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel className="mb-4">STRATEGIC ROADMAP</SectionLabel>
              <h2 id="roadmap-preview-heading" className="section-headline text-[#111111]">
                Development, Sustainability, & Expansion.
              </h2>
            </div>
            <ArrowLink href="/roadmap" className="shrink-0">
              View full 3-pillar roadmap
            </ArrowLink>
          </div>

          {/* 3 Pillars Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {strategicPillars.map((p) => (
              <div key={p.id} className="p-6 sm:p-8 bg-[#F4F4F1] border border-[#E8E8E4] rounded flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#D83933]">PILLAR {p.number}</span>
                    <span className="font-mono text-[10px] text-[#606060] uppercase">
                      {p.milestones.length} PHASES
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{p.headline}</h3>
                  <p className="text-xs text-[#606060] leading-relaxed mb-6">{p.summary}</p>
                </div>
                <div className="pt-4 border-t border-[#E8E8E4] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#111111] font-semibold">
                    {p.milestones.some((m) => m.status === 'in-progress')
                      ? '● ACTIVE INITIATIVES'
                      : '○ PLANNED HORIZON'}
                  </span>
                  <Link
                    href={`/roadmap#${p.id}`}
                    className="text-xs font-mono text-[#D83933] font-bold hover:underline"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Container with Guaranteed Spacing and Padded Cards */}
          <div className="roadmap-timeline-rail ml-4 sm:ml-6">
            {strategicRoadmap.slice(0, 3).map((m) => (
              <div
                key={m.id}
                className="roadmap-timeline-card relative group hover:border-[#111111]"
                style={{ marginBottom: '3rem' }}
              >
                {/* Node indicator on timeline rail */}
                <span
                  className={`absolute -left-[41px] sm:-left-[57px] top-10 w-4 h-4 rounded-full border-2 border-white ${
                    m.status === 'completed'
                      ? 'bg-[#111111]'
                      : m.status === 'in-progress'
                      ? 'bg-[#D83933] ring-4 ring-[#D83933]/20 animate-pulse'
                      : 'bg-[#B8B8B8]'
                  }`}
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="label text-[#D83933] text-xs font-mono font-bold">
                    {m.phase} // {m.timeline}
                  </span>
                  <span className="label text-[#606060] text-[10px] bg-[#E8E8E4] px-3 py-1 rounded font-mono font-semibold uppercase">
                    {m.status.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-4">
                  {m.title}
                </h3>

                <p className="text-sm sm:text-base text-[#606060] leading-relaxed mb-6 max-w-2xl">
                  {m.strategicObjective}
                </p>

                <div className="pt-5 border-t border-[#E8E8E4] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#888888]">
                    Pillar: {m.pillar}
                  </span>
                  <Link
                    href={`/roadmap#${m.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#D83933] hover:underline"
                  >
                    View phase details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NUMBERS & ACHIEVEMENTS
          ===================================================== */}
      <section
        className="section-dark section-spacing"
        aria-labelledby="stats-heading"
      >
        <div className="container-main">
          <SectionLabel light className="mb-6">BY THE NUMBERS</SectionLabel>
          <h2 id="stats-heading" className="section-headline text-white mb-16">
            A Legacy of Student Inquiry.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {clubStats.map((stat) => (
              <div key={stat.id} className="pr-4">
                <p className="stat-number text-white font-mono">
                  {stat.value}
                </p>
                <p className="label text-[#B8B8B8] mt-3">{stat.label}</p>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FIND US / CONTACT
          ===================================================== */}
      <section
        className="section-dark section-spacing border-t border-white/10"
        id="join"
        aria-labelledby="join-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl">
            <SectionLabel light className="mb-6">FIND US AT CC</SectionLabel>
            <h2 id="join-heading" className="page-headline text-white mb-6">
              Connect With Canisius Science.
            </h2>
            <p className="body-large text-[#B8B8B8] mb-8 leading-relaxed">
              {clubInfo.joinInfo}
            </p>

            <CircularCTA href="/about#join" light className="mb-8">
              Laboratory details
            </CircularCTA>

            <p className="label text-white/40 mt-8 max-w-md leading-relaxed">
              {clubInfo.meetingInfo}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
