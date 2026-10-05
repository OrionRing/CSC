import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Award } from 'lucide-react';
import { projects, getProjectBySlug } from '@/data/v2/projects';
import { SectionLabel, ArrowLink } from '@/components/ui';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Canisius Science Club`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-[#111111]">
      {/* Header section */}
      <section className="pt-36 pb-16 bg-[#FFFFFF] border-b border-[#E8E8E4]" aria-labelledby="project-title">
        <div className="container-main">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 label text-[#606060] hover:text-[#111111] transition-colors duration-200 mb-8 group"
            aria-label="Back to all research projects"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            <span>ALL RESEARCH PROJECTS</span>
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6 flex-wrap text-xs font-mono text-[#606060]">
            <span className="text-[#D83933] font-bold">PROJECT {project.number}</span>
            <span>—</span>
            <span>{project.category.toUpperCase()}</span>
            <span>—</span>
            <span>{project.year}</span>
          </div>

          {/* Title */}
          <h1
            id="project-title"
            className="page-headline text-[#111111] mb-6 max-w-4xl"
          >
            {project.title}
          </h1>

          {/* Authors & Award */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-[#606060] mb-4">
            <span><strong>AUTHORS:</strong> {project.authors.join(', ')}</span>
            {project.award && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#D83933]/10 text-[#D83933] text-xs font-mono">
                <Award size={13} className="shrink-0" />
                <span>{project.award}</span>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main body */}
      <section className="section-spacing bg-[#FFFFFF]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left column: Content */}
            <div className="lg:col-span-8 space-y-14">
              {/* Executive Summary */}
              <div>
                <SectionLabel className="mb-4">EXECUTIVE SUMMARY</SectionLabel>
                <p className="body-large text-[#606060] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <hr />

              {/* Research Question */}
              <div>
                <SectionLabel className="mb-4">RESEARCH QUESTION</SectionLabel>
                <blockquote className="border-l-2 border-[#D83933] pl-6 py-1">
                  <p className="text-xl font-medium text-[#111111] italic leading-relaxed">
                    &ldquo;{project.researchQuestion}&rdquo;
                  </p>
                </blockquote>
              </div>

              <hr />

              {/* Hypothesis */}
              <div>
                <SectionLabel className="mb-4">HYPOTHESIS</SectionLabel>
                <p className="text-[#606060] leading-relaxed">
                  {project.hypothesis}
                </p>
              </div>

              <hr />

              {/* Method */}
              <div>
                <SectionLabel className="mb-6">METHOD & LABORATORY PROCEDURES</SectionLabel>
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

              <hr />

              {/* Observations */}
              <div>
                <SectionLabel className="mb-4">LABORATORY OBSERVATIONS</SectionLabel>
                <p className="text-[#606060] leading-relaxed">
                  {project.observations}
                </p>
              </div>

              <hr />

              {/* Results */}
              <div>
                <SectionLabel className="mb-4">EXPERIMENTAL FINDINGS & DATA</SectionLabel>
                <p className="text-[#606060] leading-relaxed">
                  {project.results}
                </p>
              </div>

              <hr />

              {/* Limitations & Next Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <SectionLabel className="mb-4">LIMITATIONS</SectionLabel>
                  <ul className="space-y-3">
                    {project.limitations.map((lim, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[#606060]">
                        <span className="text-[#D83933]">—</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <SectionLabel className="mb-4">NEXT STEPS</SectionLabel>
                  <ul className="space-y-3">
                    {project.nextSteps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[#606060]">
                        <span className="label text-[#B8B8B8] font-mono">{String(i + 1).padStart(2, '0')}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column: Sidebar metadata */}
            <aside className="lg:col-span-4">
              <div className="p-8 bg-[#F4F4F1] border border-[#E8E8E4] sticky top-28 space-y-6 text-xs font-mono">
                <SectionLabel className="mb-4">PROJECT METADATA</SectionLabel>

                <div>
                  <p className="text-[#A0A0A0] mb-1">COMPETITION / FORUM</p>
                  <p className="text-[#111111] font-semibold">{project.competitionContext}</p>
                </div>

                {project.award && (
                  <div>
                    <p className="text-[#A0A0A0] mb-1">AWARD / RECOGNITION</p>
                    <p className="text-[#D83933] font-bold">{project.award}</p>
                  </div>
                )}

                <div>
                  <p className="text-[#A0A0A0] mb-1">INVESTIGATORS</p>
                  <ul className="space-y-1 text-[#111111]">
                    {project.authors.map((author, i) => (
                      <li key={i}>• {author}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[#A0A0A0] mb-1">AFFILIATION</p>
                  <p className="text-[#111111]">SMA Kolese Kanisius, Jakarta</p>
                </div>

                <div>
                  <p className="text-[#A0A0A0] mb-1">DISCIPLINE</p>
                  <p className="text-[#111111]">{project.category}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
}
