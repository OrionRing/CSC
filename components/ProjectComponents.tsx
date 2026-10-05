import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';
import type { Project } from '@/data/v2/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <article
      className={`group flex flex-col justify-between p-8 bg-[#0D0D0D] border border-white/10 hover:border-[#D83933] transition-all duration-200 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div>
        {/* Category & Year */}
        <div className="flex items-center justify-between gap-4 mb-4 text-xs font-mono text-[#888888]">
          <span className="text-[#D83933] font-semibold uppercase tracking-wider">{project.category}</span>
          <span>{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-[#D83933] transition-colors duration-200">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        {/* Authors */}
        <p className="text-xs font-mono text-[#AAAAAA] mb-4">
          Peneliti: {project.authors.join(', ')}
        </p>

        {/* Summary */}
        <p className="text-sm text-[#888888] leading-relaxed mb-6 line-clamp-3">
          {project.summary}
        </p>

        {/* Award Badge if any */}
        {project.award && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-6 rounded bg-[#D83933]/15 text-[#D83933] text-xs font-mono border border-[#D83933]/30">
            <Award size={13} className="shrink-0" />
            <span>{project.award}</span>
          </div>
        )}
      </div>

      {/* Action link */}
      <div className="pt-4 border-t border-white/05 flex items-center justify-between">
        <span className="text-xs font-mono text-white/40">PROJECT {project.number}</span>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-xs font-bold font-mono text-white group-hover:text-[#D83933] transition-colors duration-200"
        >
          <span>BACA LAPORAN</span>
          <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
