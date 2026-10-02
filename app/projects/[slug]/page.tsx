import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projects as projectsV1, getProjectBySlug as getProjectV1 } from '@/data/v1/projects';
import { projects as projectsV2, getProjectBySlug as getProjectV2 } from '@/data/v2/projects';
import {
  SectionLabel,
  StatusBadge,
  ImagePlaceholder,
  ArrowLink,
} from '@/components/ui';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allProjects = [...projectsV1, ...projectsV2];
  const uniqueSlugs = Array.from(new Set(allProjects.map((p) => p.slug)));
  return uniqueSlugs.map((slug) => ({ slug }));
}

function findProject(slug: string) {
  return getProjectV2(slug) || getProjectV1(slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const allProjects = [...projectsV2, ...projectsV1];
  const related = allProjects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.categories.some((c: string) => project.categories.includes(c))
    )
    .slice(0, 2);

  const isPlannedOrResearch =
    project.status === 'planned' || project.status === 'research';

  return (
    <>
      {/* Back link + hero */}
      <section className="pt-28 pb-0 bg-[#FFFFFF]" aria-labelledby="project-title">
        <div className="container-main">
          {/* Back */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 label text-[#606060] hover:text-[#111111]
              transition-colors duration-200 mb-10 group"
            aria-label="Back to all projects"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            All Projects
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="label text-[#606060]">PROJECT {project.number}</span>
            <span className="label text-[#E8E8E4]">—</span>
            <span className="label text-[#606060]">{project.category.toUpperCase()}</span>
            <span className="label text-[#606060]">{project.year}</span>
          </div>

          {/* Title */}
          <h1
            id="project-title"
            className="page-headline text-[#111111] mb-8 max-w-4xl"
          >
            {project.title}
          </h1>

          {/* Status + duration */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <StatusBadge status={project.status} />
            <span className="label text-[#B8B8B8]">·</span>
            <span className="label text-[#606060]">{project.duration}</span>
            {(project as any).competitionTarget && (
              <span className="label bg-emerald-100 text-emerald-800 px-3 py-1 rounded font-mono font-semibold">
                🎯 {(project as any).competitionTarget}
              </span>
            )}
          </div>
        </div>

        {/* Feature image — full width */}
        <div className="container-main px-0 lg:px-0">
          <ImagePlaceholder
            label={`PROJECT ${project.number} · ${project.category.toUpperCase()}`}
            sublabel={project.imageCaption}
            caption={`${project.imageCaption}`}
            className="aspect-[16/7]"
            aspectRatio=""
          />
        </div>
      </section>

      {/* Article body */}
      <section className="section-spacing bg-[#FFFFFF]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main content */}
            <div className="lg:col-span-7">

              {/* Overview */}
              <div className="mb-14">
                <SectionLabel className="mb-4">OVERVIEW & SUMMARY</SectionLabel>
                <p className="body-large text-[#606060] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <hr className="mb-14" />

              {/* Research question */}
              <div className="mb-14">
                <SectionLabel className="mb-4">RESEARCH QUESTION</SectionLabel>
                <blockquote className="border-l-2 border-[#D83933] pl-6">
                  <p className="text-[#111111] text-xl font-medium leading-relaxed italic">
                    {project.researchQuestion}
                  </p>
                </blockquote>
              </div>

              <hr className="mb-14" />

              {/* Hypothesis */}
              <div className="mb-14">
                <SectionLabel className="mb-4">HYPOTHESIS</SectionLabel>
                <p className="text-[#606060] leading-relaxed">
                  {project.hypothesis}
                </p>
              </div>

              <hr className="mb-14" />

              {/* Method */}
              <div className="mb-14">
                <SectionLabel className="mb-4">
                  METHOD & PROCEDURES{isPlannedOrResearch ? ' (PLANNED)' : ''}
                </SectionLabel>
                {isPlannedOrResearch && (
                  <p className="label text-[#D83933] mb-4">
                    PLANNED INVESTIGATION — method undergoing lab preparation
                  </p>
                )}
                <ol className="space-y-4">
                  {project.method.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="label text-[#B8B8B8] shrink-0 mt-0.5 font-mono">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[#606060] leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <hr className="mb-14" />

              {/* Observations */}
              <div className="mb-14">
                <SectionLabel className="mb-4">
                  LAB OBSERVATIONS & DATA
                </SectionLabel>
                <p className="text-[#606060] leading-relaxed">
                  {project.observations}
                </p>
              </div>

              <hr className="mb-14" />

              {/* Results */}
              <div className="mb-14">
                <SectionLabel className="mb-4">RESULTS & FINDINGS</SectionLabel>
                <p className="text-[#606060] leading-relaxed">
                  {project.results}
                </p>
              </div>

              <hr className="mb-14" />

              {/* Limitations */}
              <div className="mb-14">
                <SectionLabel className="mb-4 font-mono">LIMITATIONS</SectionLabel>
                <ul className="space-y-3">
                  {project.limitations.map((lim, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#D83933] mt-1.5 shrink-0" aria-hidden="true">
                        —
                      </span>
                      <p className="text-[#606060] leading-relaxed">{lim}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="mb-14" />

              {/* Next steps */}
              <div className="mb-14">
                <SectionLabel className="mb-4 font-mono">NEXT STEPS</SectionLabel>
                <ul className="space-y-3">
                  {project.nextSteps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="label text-[#B8B8B8] shrink-0 mt-0.5 font-mono">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[#606060] leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5 lg:col-start-9">
              <div className="sticky top-24">
                {/* Project info card */}
                <div className="bg-[#F4F4F1] p-8 mb-8">
                  <SectionLabel className="mb-6">PROJECT METADATA</SectionLabel>

                  <dl className="space-y-5">
                    <div>
                      <dt className="label text-[#B8B8B8] mb-1">STATUS</dt>
                      <dd>
                        <StatusBadge status={project.status} />
                      </dd>
                    </div>
                    <div>
                      <dt className="label text-[#B8B8B8] mb-1">CATEGORY</dt>
                      <dd className="text-[#111111] text-sm font-medium">
                        {project.category}
                      </dd>
                    </div>
                    <div>
                      <dt className="label text-[#B8B8B8] mb-1">YEAR</dt>
                      <dd className="label text-[#111111]">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="label text-[#B8B8B8] mb-1">DURATION</dt>
                      <dd className="text-[#606060] text-sm">{project.duration}</dd>
                    </div>
                    {(project as any).facilitiesUsed && (
                      <div>
                        <dt className="label text-[#B8B8B8] mb-1">LAB FACILITIES USED</dt>
                        <dd className="text-xs font-mono text-emerald-800 bg-emerald-50 p-2 rounded">
                          {(project as any).facilitiesUsed.join(' • ')}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* Team */}
                <div className="bg-[#F4F4F1] p-8">
                  <SectionLabel className="mb-5">RESEARCH TEAM</SectionLabel>
                  <ul className="space-y-3">
                    {project.team.map((member, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#D83933] mt-1 shrink-0" aria-hidden="true">
                          ·
                        </span>
                        <span className="text-[#606060] text-sm">{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="section-spacing-sm bg-[#F4F4F1] border-t border-[#E8E8E4]">
          <div className="container-main">
            <SectionLabel className="mb-10">RELATED RESEARCH</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {related.map((rp) => (
                <article key={rp.id} className="border-t border-[#E8E8E4] pt-6">
                  <div className="image-zoom mb-4">
                    <Link href={`/projects/${rp.slug}`} tabIndex={-1} aria-hidden="true">
                      <ImagePlaceholder
                        label={`PROJECT ${rp.number}`}
                        sublabel={rp.category.toUpperCase()}
                        caption={rp.title}
                        className="aspect-[4/3]"
                      />
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="label text-[#606060] text-xs">{rp.category.toUpperCase()}</span>
                    <StatusBadge status={rp.status} />
                  </div>
                  <h3 className="text-[#111111] font-bold text-xl tracking-tight mb-3">
                    {rp.title}
                  </h3>
                  <ArrowLink href={`/projects/${rp.slug}`}>
                    Explore project
                  </ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
