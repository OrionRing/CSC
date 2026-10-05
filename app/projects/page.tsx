'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';
import { projects } from '@/data/v2/projects';
import { SectionLabel } from '@/components/ui';

const categories = [
  'All Fields',
  'Chemistry / Nanotechnology',
  'Physics / Renewable Energy',
  'Biology / Bio-Energy',
  'Health / Biomedical Engineering',
  'Environmental Science / Biology',
  'Civil & Environmental Engineering',
  'Physics / Mechanical Engineering',
  'Computer Science / Astronomy',
] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Fields');

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All Fields') return true;
    return project.category === selectedCategory || project.categories.includes(selectedCategory.toLowerCase());
  });

  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-16 bg-[#FFFFFF] border-b border-[#E8E8E4]"
        aria-labelledby="projects-hero-heading"
      >
        <div className="container-main">
          <SectionLabel className="mb-4">RESEARCH REPOSITORY</SectionLabel>
          <h1
            id="projects-hero-heading"
            className="page-headline text-[#111111] mb-8 max-w-4xl"
          >
            Student Research & Investigations.
          </h1>
          <p className="body-large text-[#606060] max-w-2xl leading-relaxed">
            With over 30+ investigations initiated across biomedical, physical, and chemical disciplines, this repository archives 16 fully documented experimental research papers conducted by students of SMA Kolese Kanisius.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="section-spacing bg-[#FFFFFF]" aria-labelledby="all-projects-heading">
        <div className="container-main">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-16 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-btn ${
                  selectedCategory === cat ? 'filter-btn-active' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Editorial Project List */}
          <div className="divide-y divide-[#E8E8E4] border-y border-[#E8E8E4]">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
              >
                {/* Meta Column */}
                <div className="lg:col-span-3">
                  <span className="label text-[#D83933] block mb-2 font-mono">
                    PROJECT {project.number} // {project.year}
                  </span>
                  <p className="label text-[#606060] mb-2">{project.category}</p>
                  {project.award && (
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mt-2 bg-[#D83933]/10 text-[#D83933] text-[11px] font-mono rounded">
                      <Award size={12} className="shrink-0" />
                      <span>{project.award}</span>
                    </div>
                  )}
                </div>

                {/* Main Content Column */}
                <div className="lg:col-span-7">
                  <h2 className="text-2xl font-bold text-[#111111] tracking-tight leading-snug mb-3 group-hover:text-[#D83933] transition-colors duration-150">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p className="label text-[#A0A0A0] text-xs mb-4">
                    Authors: {project.authors.join(', ')}
                  </p>
                  <p className="text-sm text-[#606060] leading-relaxed max-w-2xl">
                    {project.summary}
                  </p>
                </div>

                {/* Action Link Column */}
                <div className="lg:col-span-2 lg:text-right flex items-center lg:justify-end pt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="arrow-link text-xs font-mono font-bold text-[#111111] group-hover:text-[#D83933]"
                  >
                    <span>EXPLORE</span>
                    <ArrowRight size={13} className="arrow-icon" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="text-xs font-mono text-[#A0A0A0] mt-12 text-center">
            Displaying {filteredProjects.length} of {projects.length} recorded research projects
          </p>
        </div>
      </section>
    </>
  );
}
