import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Award } from 'lucide-react';
import { projects, getProjectBySlug } from '@/data/v2/projects';

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

  const related = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.categories.some((c: string) => project.categories.includes(c))
    )
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-[#050505] text-white">
      {/* Header section */}
      <section className="pt-28 pb-16 border-b border-white/10" aria-labelledby="project-title">
        <div className="container-main">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors duration-200 mb-8 group"
            aria-label="Kembali ke semua karya penelitian"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            <span>SEMUA KARYA PENELITIAN</span>
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6 flex-wrap text-xs font-mono text-[#888888]">
            <span className="text-[#D83933] font-bold">PROJECT {project.number}</span>
            <span>—</span>
            <span>{project.category.toUpperCase()}</span>
            <span>—</span>
            <span>{project.year}</span>
          </div>

          {/* Title */}
          <h1
            id="project-title"
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-tight"
          >
            {project.title}
          </h1>

          {/* Authors */}
          <div className="flex items-center gap-2 mb-6 font-mono text-sm text-white/80">
            <span className="text-[#D83933] font-bold">Peneliti:</span>
            <span>{project.authors.join(', ')}</span>
          </div>

          {/* Award badge */}
          {project.award && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#D83933]/15 text-[#D83933] text-xs font-mono border border-[#D83933]/30">
              <Award size={14} className="shrink-0" />
              <span>{project.award}</span>
            </div>
          )}
        </div>
      </section>

      {/* Main body */}
      <section className="py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left column: Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Summary & Description */}
              <div>
                <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
                  RINGKASAN EKSEKUTIF
                </span>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-10">
                <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
                  RUMUSAN MASALAH / RESEARCH QUESTION
                </span>
                <blockquote className="border-l-2 border-[#D83933] pl-6 py-1">
                  <p className="text-lg sm:text-xl font-medium text-white italic leading-relaxed">
                    &ldquo;{project.researchQuestion}&rdquo;
                  </p>
                </blockquote>
              </div>

              <div className="border-t border-white/10 pt-10">
                <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
                  HIPOTESIS
                </span>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {project.hypothesis}
                </p>
              </div>

              {/* Method */}
              <div className="border-t border-white/10 pt-10">
                <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-6">
                  METODOLOGI & PROSEDUR EKSPERIMEN
                </span>
                <ol className="space-y-4">
                  {project.method.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-xs font-mono text-[#D83933] font-bold shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, '0')}.
                      </span>
                      <p className="text-sm text-white/70 leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Observations */}
              <div className="border-t border-white/10 pt-10">
                <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
                  OBSERVASI LABORATORIUM
                </span>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {project.observations}
                </p>
              </div>

              {/* Results */}
              <div className="border-t border-white/10 pt-10">
                <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
                  HASIL PENELITIAN & ANALISIS
                </span>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {project.results}
                </p>
              </div>

              {/* Limitations & Next Steps */}
              <div className="border-t border-white/10 pt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
                    BATASAN PENELITIAN
                  </span>
                  <ul className="space-y-2 text-xs text-white/60 leading-relaxed">
                    {project.limitations.map((lim, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#D83933]">•</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
                    LANGKAH LANJUTAN
                  </span>
                  <ul className="space-y-2 text-xs text-white/60 leading-relaxed">
                    {project.nextSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#D83933]">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column: Sidebar metadata */}
            <aside className="lg:col-span-4">
              <div className="p-8 bg-[#0D0D0D] border border-white/10 sticky top-24 space-y-6 text-xs font-mono">
                <span className="text-[#D83933] font-bold tracking-widest uppercase block">
                  METADATA PENELITIAN
                </span>

                <div>
                  <p className="text-white/40 mb-1">KOMPETISI / KONTEKS</p>
                  <p className="text-white font-semibold">{project.competitionContext}</p>
                </div>

                {project.award && (
                  <div>
                    <p className="text-white/40 mb-1">PENGHARGAAN</p>
                    <p className="text-[#D83933] font-bold">{project.award}</p>
                  </div>
                )}

                <div>
                  <p className="text-white/40 mb-1">TIM PENELITI</p>
                  <ul className="space-y-1 text-white">
                    {project.authors.map((author, i) => (
                      <li key={i}>• {author}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-white/40 mb-1">INSTITUSI</p>
                  <p className="text-white">SMA Kolese Kanisius Jakarta</p>
                </div>

                <div>
                  <p className="text-white/40 mb-1">BIDANG RISET</p>
                  <p className="text-white">{project.category}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
}
