'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { clubStats, clubInfo } from '@/data/v2/stats';
import { projects } from '@/data/v2/projects';
import { milestones } from '@/data/v2/roadmap';
import { SectionLabel, ArrowLink, CircularCTA } from '@/components/ui';
import { ProjectCard } from '@/components/ProjectComponents';
import { RoadmapItem } from '@/components/RoadmapItem';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const currentFocus = projects[1] || projects[0]; // PCM Solar Cooling project
  const roadmapPreview = milestones.slice(0, 3);

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
          {/* Metadata */}
          <div className="flex items-center gap-3 mb-8">
            <span className="label text-[#D83933] font-bold">
              CANISIUS SCIENCE CLUB
            </span>
            <span className="label text-white/30">·</span>
            <span className="label text-white/60">
              KOLLESE KANISIUS JAKARTA / 2026–2027
            </span>
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
                className="py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group"
              >
                <div className="flex items-baseline gap-6 md:w-1/3">
                  <span className="label text-[#D83933] font-bold font-mono text-sm">
                    {pillar.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-white/60 leading-relaxed md:w-2/3 max-w-xl">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRENT FOCUS / FEATURED HIGHLIGHT
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF] text-[#111111] border-b border-[#E8E8E4]"
        aria-labelledby="focus-heading"
      >
        <div className="container-main">
          <SectionLabel className="mb-6">CURRENT FOCUS</SectionLabel>

          <div className="p-8 lg:p-14 bg-[#F4F4F1] border border-[#E8E8E4]">
            <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#606060]">
              <span className="text-[#D83933] font-bold uppercase">{currentFocus.category}</span>
              <span>—</span>
              <span>PROJECT {currentFocus.number}</span>
              <span>—</span>
              <span>{currentFocus.year}</span>
            </div>

            <h2
              id="focus-heading"
              className="text-2xl lg:text-4xl font-bold tracking-tight text-[#111111] mb-4 leading-tight"
            >
              {currentFocus.title}
            </h2>

            <p className="label text-[#606060] mb-6">
              Authors: {currentFocus.authors.join(', ')}
            </p>

            <p className="body-large text-[#606060] max-w-3xl leading-relaxed mb-8">
              {currentFocus.summary}
            </p>

            <ArrowLink href={`/projects/${currentFocus.slug}`}>
              Read full project paper & experimental data
            </ArrowLink>
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
                Recent Scientific Papers.
              </h2>
            </div>
            <ArrowLink href="/projects" className="shrink-0">
              View all {projects.length} research papers
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
          ROADMAP PREVIEW
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF] text-[#111111] border-b border-[#E8E8E4]"
        aria-labelledby="roadmap-preview-heading"
      >
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel className="mb-4">TIMELINE & ROADMAP</SectionLabel>
              <h2 id="roadmap-preview-heading" className="section-headline text-[#111111]">
                Active Research Agenda.
              </h2>
            </div>
            <ArrowLink href="/roadmap" className="shrink-0">
              View complete roadmap
            </ArrowLink>
          </div>

          <div>
            {roadmapPreview.map((milestone) => (
              <RoadmapItem key={milestone.id} milestone={milestone} />
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
