'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects, Project } from '@/data/v2/projects';
import { ProjectCard } from '@/components/ProjectComponents';

const categories = [
  'Semua Kategori',
  'Chemistry / Nanotechnology',
  'Physics / Renewable Energy',
  'Biology / Bio-Energy',
  'Health / Biomedical Engineering',
  'Environmental Science / Biology',
  'Civil & Environmental Engineering',
  'Computer Science / Astronomy',
] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Kategori');

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'Semua Kategori') return true;
    return project.category === selectedCategory;
  });

  return (
    <>
      {/* Hero */}
      <section
        className="pt-28 pb-16 bg-[#050505] text-white border-b border-white/10"
        aria-labelledby="projects-hero-heading"
      >
        <div className="container-main">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest uppercase">
              RESEARCH REPOSITORY
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs font-mono text-white/60 uppercase">
              CANISIUS SCIENCE CLUB
            </span>
          </div>

          <h1
            id="projects-hero-heading"
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-8 max-w-4xl leading-tight"
          >
            Karya Inovasi & Riset Ilmiah.
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            Koleksi publikasi karya penelitian siswa SMA Kolese Kanisius. Seluruh proyek berbasis pengujian eksperimen laboratorium dengan hipotesis terukur dan metodologi saintifik yang dapat dipertanggungjawabkan.
          </p>
        </div>
      </section>

      {/* Projects Grid & Category Filter */}
      <section className="py-20 bg-[#0A0A0A] text-white" aria-labelledby="all-projects-heading">
        <div className="container-main">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono rounded whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#D83933] text-white font-bold'
                    : 'bg-[#141414] text-white/70 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Bottom count notice */}
          <p className="text-xs font-mono text-white/40 mt-12 text-center">
            Menampilkan {filteredProjects.length} dari {projects.length} karya penelitian terdaftar
          </p>
        </div>
      </section>
    </>
  );
}
