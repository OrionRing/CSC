'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Award, Search, Sparkles } from 'lucide-react';
import { labEquipmentList } from '@/data/v2/inventory';
import { clubInfo } from '@/data/v2/stats';
import { SectionLabel, CircularCTA } from '@/components/ui';

const categories = [
  'All Equipment',
  'Physics & Instrumentation',
  'Biology & Biotechnology',
  'Chemistry & Nanomaterials',
  'Chemical Reagents',
] as const;

export default function AboutPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Equipment');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEquipment = labEquipmentList.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All Equipment' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* =====================================================
          HERO — Spacious editorial layout
          ===================================================== */}
      <section
        className="pt-36 pb-16 bg-[#FFFFFF] border-b border-[#E8E8E4]"
        aria-labelledby="about-hero-heading"
      >
        <div className="container-main">
          <SectionLabel className="mb-4">ABOUT CSC</SectionLabel>
          <h1
            id="about-hero-heading"
            className="page-headline text-[#111111] mb-8 max-w-4xl"
          >
            Built around curiosity and evidence.
          </h1>
          <p className="body-large text-[#606060] max-w-2xl leading-relaxed">
            {clubInfo.intro}
          </p>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF]"
        id="vision-mission"
        aria-labelledby="mission-heading"
      >
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <SectionLabel className="mb-5">OUR VISION & PURPOSE</SectionLabel>
              <h2
                id="mission-heading"
                className="section-headline text-[#111111] mb-6"
              >
                Developing young researchers who create real-world solutions.
              </h2>
              <p className="body-large text-[#606060] leading-relaxed mb-6">
                Our vision is to build an uncompromising community of young scientists at Kolese Kanisius equipped with rigorous research skills, academic integrity, and a profound commitment to environmental stewardship.
              </p>
              <p className="body-large text-[#606060] leading-relaxed">
                Rather than treating science as textbook theory, we empower members to investigate unsolved problems, conduct hands-on laboratory trials, and present empirical findings on national and international podiums.
              </p>
            </div>

            <div className="p-8 lg:p-10 bg-[#F4F4F1] border border-[#E8E8E4]">
              <SectionLabel className="mb-6">CORE METHODOLOGY</SectionLabel>
              <ul className="space-y-4 text-sm text-[#606060] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#D83933] font-bold mt-0.5">•</span>
                  <span><strong>Independent Lab Exploration:</strong> Active physical experimentation in physics, organic chemistry, bio-reactors, and microcontroller automation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D83933] font-bold mt-0.5">•</span>
                  <span><strong>Ecological Responsibility:</strong> Every major research track prioritizes environmental sustainability and circular resource utilization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D83933] font-bold mt-0.5">•</span>
                  <span><strong>Cura Personalis:</strong> Close individual mentorship nurturing character, laboratory safety, and perseverance through research hurdles.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACTIVITIES
          ===================================================== */}
      <section
        className="section-dark section-spacing"
        id="activities"
        aria-labelledby="activities-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl mb-16">
            <SectionLabel light className="mb-4">SCHEDULE & ACTIVITIES</SectionLabel>
            <h2 id="activities-heading" className="section-headline text-white">
              Weekly Rhythm & Competition Targets.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-t border-white/10 pt-8">
              <span className="label text-[#D83933] block mb-3 font-mono">01 // ROUTINE</span>
              <h3 className="text-2xl font-bold text-white mb-4">Laboratory Working Sessions</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Held twice weekly on <strong>Wednesdays and Fridays (15:00 – 17:00 WIB)</strong> in the school laboratory complex.
              </p>
              <p className="text-xs font-mono text-white/50 leading-relaxed">
                Activities include chemical reagent synthesis, optical absorbance logging, circuit breadboarding, data analysis, and regular supervisor check-ins.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <span className="label text-[#D83933] block mb-3 font-mono">02 // MILESTONES</span>
              <h3 className="text-2xl font-bold text-white mb-4">Competition Milestones</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Structured preparation for premier national and international youth science olympiads.
              </p>
              <p className="text-xs font-mono text-white/50 leading-relaxed">
                Active targets include OPSI, EUREKA! ITB Science Project Competition, Indonesia International Invention Expo (IIIEX), and Youth International Science Fair (YSIF).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LABORATORY INVENTORY (COMPACT DIRECTORY)
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF] border-b border-[#E8E8E4]"
        id="equipment"
        aria-labelledby="equipment-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl mb-12">
            <SectionLabel className="mb-4">LABORATORY INVENTORY</SectionLabel>
            <h2 id="equipment-heading" className="section-headline text-[#111111]">
              Apparatus & Chemical Reagents.
            </h2>
            <p className="body-large text-[#606060] mt-4 leading-relaxed">
              Kolese Kanisius maintains three fully-equipped STEM laboratories with high-precision analytical equipment, support tools, and certified compounds.
            </p>
          </div>

          {/* Compact Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono rounded whitespace-nowrap transition-colors duration-150 ${
                    selectedCategory === cat
                      ? 'bg-[#111111] text-white font-bold'
                      : 'bg-[#F4F4F1] text-[#606060] hover:text-[#111111] border border-[#E8E8E4]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative min-w-[220px]">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A0A0]" />
              <input
                type="text"
                placeholder="Search equipment or chemical..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F4F4F1] border border-[#E8E8E4] rounded py-1.5 pl-8 pr-3 text-xs font-mono text-[#111111] placeholder-[#A0A0A0] focus:outline-none focus:border-[#111111]"
              />
            </div>
          </div>

          {/* Compact Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredEquipment.length > 0 ? (
              filteredEquipment.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 bg-[#F4F4F1] border border-[#E8E8E4] rounded flex items-start justify-between gap-3 text-xs"
                >
                  <div>
                    <p className="font-semibold text-[#111111] leading-tight mb-1">{item.name}</p>
                    <p className="label text-[#A0A0A0] text-[10px]">{item.category}</p>
                  </div>
                  {item.quantity && (
                    <span className="label font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-[#E8E8E4] text-[#606060] shrink-0">
                      {item.quantity}
                    </span>
                  )}
                </div>
              ))
            ) : (
              <p className="col-span-full py-8 text-center text-xs font-mono text-[#A0A0A0]">
                No equipment or reagents found matching your query.
              </p>
            )}
          </div>

          <p className="text-xs font-mono text-[#A0A0A0] mt-6 text-right">
            Showing {filteredEquipment.length} of {labEquipmentList.length} items
          </p>
        </div>
      </section>

      {/* =====================================================
          FIND US AT CC
          ===================================================== */}
      <section
        className="section-spacing bg-[#F4F4F1]"
        id="join"
        aria-labelledby="join-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl">
            <SectionLabel className="mb-5">CONNECT & VISIT</SectionLabel>
            <h2 id="join-heading" className="section-headline text-[#111111] mb-6">
              Find Us at Kolese Kanisius.
            </h2>
            <p className="body-large text-[#606060] mb-6 leading-relaxed">
              {clubInfo.joinInfo}
            </p>
            <p className="body-large text-[#606060] mb-8 leading-relaxed">
              Students, alumni, or scientific partners wishing to exchange ideas or inspect our laboratory apparatus are welcome to visit during scheduled session hours.
            </p>

            <div className="p-6 bg-white border border-[#E8E8E4] rounded mb-8 font-mono text-xs text-[#606060] space-y-2">
              <p className="text-[#D83933] font-bold">CAMPUS & LABORATORY COORDINATES:</p>
              <p>• Complex: STEM Science Laboratories, SMA Kolese Kanisius</p>
              <p>• Address: Jl. Menteng Raya No. 64, Jakarta Pusat 10340</p>
              <p>• Weekly Hours: Wednesday & Friday (15:00 – 17:00 WIB)</p>
            </div>

            <CircularCTA href="/projects">
              Browse our research papers
            </CircularCTA>
          </div>
        </div>
      </section>
    </>
  );
}
