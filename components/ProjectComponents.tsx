import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { StatusBadge, ImagePlaceholder } from './ui';

// ============================================================
// ProjectCard — standard project card for grids
// ============================================================
interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <article className={`project-card ${className}`}>
      {/* Image */}
      <Link
        href={`/projects/${project.slug}`}
        className="block image-zoom mb-4"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ImagePlaceholder
          label={`PROJECT ${project.number}`}
          sublabel={project.category.toUpperCase()}
          caption={`Replace with club photography`}
          className="aspect-[4/3]"
        />
      </Link>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="label text-[#606060]">{project.category.toUpperCase()}</span>
        <span className="label text-[#E8E8E4]">—</span>
        <span className="label text-[#606060]">{project.year}</span>
        <StatusBadge status={project.status} />
      </div>

      {/* Title */}
      <h3 className="project-heading text-[#111111] mb-3">
        <Link
          href={`/projects/${project.slug}`}
          className="hover:text-[#D83933] transition-colors duration-200"
        >
          {project.title}
        </Link>
      </h3>

      {/* Summary */}
      <p className="text-[#606060] text-sm leading-relaxed mb-4 max-w-sm">
        {project.summary}
      </p>

      {/* Link */}
      <Link
        href={`/projects/${project.slug}`}
        className="arrow-link text-sm text-[#111111]"
        aria-label={`Explore project: ${project.title}`}
      >
        <span>Explore project</span>
        <ArrowRight size={14} className="arrow-icon" aria-hidden="true" />
      </Link>
    </article>
  );
}

// ============================================================
// FeaturedProject — large asymmetric featured project display
// ============================================================
interface FeaturedProjectProps {
  project: Project;
  index?: number;
}

export function FeaturedProject({ project, index = 0 }: FeaturedProjectProps) {
  const isEven = index % 2 === 0;

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-[#E8E8E4]">
      {/* Image — alternates sides */}
      <div className={`image-zoom ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
          <ImagePlaceholder
            label={`PROJECT ${project.number}`}
            sublabel={project.category.toUpperCase()}
            caption={`Replace with club photography`}
            className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-64"
          />
        </Link>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-center p-8 lg:p-16 bg-[#F4F4F1]
          ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="label text-[#606060]">PROJECT {project.number}</span>
          <span className="label text-[#E8E8E4]">—</span>
          <span className="label text-[#606060]">{project.category.toUpperCase()}</span>
          <span className="label text-[#606060]">{project.year}</span>
        </div>

        <h3 className="text-[#111111] font-bold text-3xl lg:text-4xl tracking-tight leading-tight mb-4">
          {project.title}
        </h3>

        <StatusBadge status={project.status} className="mb-6 self-start" />

        <p className="text-[#606060] leading-relaxed mb-8 max-w-md">
          {project.description}
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="arrow-link text-[#111111] font-semibold"
          aria-label={`Explore project: ${project.title}`}
        >
          <span>Explore project</span>
          <ArrowRight size={16} className="arrow-icon" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

// ============================================================
// ProjectGrid — asymmetric editorial homepage project grid
// ============================================================
interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [featured, ...rest] = projects;

  return (
    <div>
      {/* Featured / large project */}
      {featured && (
        <article className="grid grid-cols-1 lg:grid-cols-5 border-t border-[#E8E8E4] mb-0">
          {/* Large image */}
          <div className="lg:col-span-3 image-zoom">
            <Link href={`/projects/${featured.slug}`} tabIndex={-1} aria-hidden="true">
              <ImagePlaceholder
                label={`PROJECT ${featured.number}`}
                sublabel={featured.category.toUpperCase()}
                caption="Replace with club photography"
                className="aspect-[16/9] lg:aspect-auto lg:h-full min-h-72"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 flex flex-col justify-end p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-[#E8E8E4]">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="label text-[#606060]">PROJECT {featured.number}</span>
              <StatusBadge status={featured.status} />
            </div>

            <span className="label text-[#606060] mb-2">{featured.category.toUpperCase()} / {featured.year}</span>

            <h3 className="text-[#111111] font-bold text-2xl lg:text-3xl tracking-tight leading-tight mb-4">
              {featured.title}
            </h3>

            <p className="text-[#606060] leading-relaxed mb-6 text-sm">
              {featured.summary}
            </p>

            <Link
              href={`/projects/${featured.slug}`}
              className="arrow-link text-sm text-[#111111] font-semibold"
              aria-label={`Explore project: ${featured.title}`}
            >
              <span>Explore project</span>
              <ArrowRight size={14} className="arrow-icon" aria-hidden="true" />
            </Link>
          </div>
        </article>
      )}

      {/* Remaining projects in grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-[#E8E8E4]">
          {rest.map((project) => (
            <article
              key={project.id}
              className="border-r border-[#E8E8E4] last:border-r-0 p-8 lg:p-10
                [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r sm:[&:nth-child(3)]:border-r-0
                lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r-0"
            >
              <div className="image-zoom mb-5">
                <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
                  <ImagePlaceholder
                    label={`PROJECT ${project.number}`}
                    sublabel={project.category.toUpperCase()}
                    caption="Replace with club photography"
                    className="aspect-[4/3]"
                  />
                </Link>
              </div>

              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="label text-[#606060] text-xs">{project.category.toUpperCase()}</span>
                <span className="label text-[#E8E8E4]">—</span>
                <span className="label text-[#606060] text-xs">{project.year}</span>
              </div>

              <StatusBadge status={project.status} className="mb-3" />

              <h3 className="text-[#111111] font-bold text-xl tracking-tight leading-tight mb-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="hover:text-[#D83933] transition-colors duration-200"
                >
                  {project.title}
                </Link>
              </h3>

              <p className="text-[#606060] text-sm leading-relaxed mb-4">
                {project.summary}
              </p>

              <Link
                href={`/projects/${project.slug}`}
                className="arrow-link text-xs text-[#111111]"
                aria-label={`Explore project: ${project.title}`}
              >
                <span>Explore</span>
                <ArrowRight size={12} className="arrow-icon" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
