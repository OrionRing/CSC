'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Award, Clock, ShieldCheck, Microchip, BookOpen } from 'lucide-react';
import { useVersion } from '@/context/VersionContext';
import {
  SectionLabel,
  ArrowLink,
  CircularCTA,
  ImagePlaceholder,
} from '@/components/ui';
import { ProjectGrid } from '@/components/ProjectComponents';
import { JournalCard } from '@/components/JournalComponents';
import { RoadmapItem } from '@/components/RoadmapItem';

export default function HomePage() {
  const {
    version,
    clubInfo,
    stats,
    projects,
    journalPosts,
    milestones,
    getFeaturedProject,
  } = useVersion();

  const homepageProjects = projects.slice(0, 3);
  const featuredProject = getFeaturedProject() || projects[0];
  const recentPosts = journalPosts.slice(0, 3);
  const roadmapPreview = milestones.slice(0, 4);

  const isV2 = version === 'v2';

  return (
    <>
      {/* =====================================================
          HERO
          ===================================================== */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-end bg-[#050505] overflow-hidden"
        aria-labelledby="hero-headline"
      >
        {/* Background image placeholder */}
        <div className="absolute inset-0" aria-hidden="true">
          <ImagePlaceholder
            label={isV2 ? "KOLESE KANISIUS RESEARCH LAB" : "HERO IMAGE"}
            sublabel={isV2 ? "Lab Fisika, Biologi & Kimia Kolese Kanisius" : "Replace with club photography"}
            dark
            className="w-full h-full aspect-auto"
            aspectRatio=""
          />
          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(5,5,5,0.65)' }}
          />
        </div>

        {/* Content */}
        <div className="relative container-main pb-16 pt-40">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            <span className="label text-[#B8B8B8]">{clubInfo.name.toUpperCase()}</span>
            <span className="label text-[#606060]">·</span>
            <span className="label text-[#B8B8B8]">
              {isV2 ? 'SEKOLAH HOMOGEN LAKI-LAKI KOLESE KANISIUS' : 'STUDENT RESEARCH / 2026'}
            </span>
            {isV2 && (
              <span className="label bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded font-mono border border-emerald-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> CURA PERSONALIS IN STEM
              </span>
            )}
          </div>

          {/* Headline */}
          <h1
            id="hero-headline"
            className="hero-headline text-white mb-8 max-w-5xl"
          >
            {isV2 ? (
              <>
                Semangat Riset.<br />
                Merawat Alam Ciptaan.
              </>
            ) : (
              <>
                Explore<br />
                the unknown.
              </>
            )}
          </h1>

          {/* Supporting copy */}
          <p className="body-large text-[#B8B8B8] mb-10 max-w-2xl leading-relaxed">
            {clubInfo.intro}
          </p>

          {/* CTA */}
          <CircularCTA href="/projects" light>
            {isV2 ? 'Lihat Hasil Penelitian Kanisius' : 'Discover our work'}
          </CircularCTA>
        </div>

        {/* Bottom focus strip */}
        <div className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="container-main py-4">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div className="flex items-center gap-4">
                <span className="label text-[#B8B8B8]">FOKUS PENELITIAN STEM</span>
                <span className="text-[#606060] text-xs">·</span>
                <span className="label text-emerald-400 font-mono">
                  {isV2
                    ? 'CQD Nanomaterial / TEG Destilasi / Eco-Enzyme MFC / Generator Pintu Geser'
                    : 'Environmental Science / Engineering / Biology'}
                </span>
              </div>

              {isV2 && (
                <div className="flex items-center gap-3 text-xs font-mono text-gray-300">
                  <span className="flex items-center gap-1 text-amber-400">
                    <Clock size={13} /> Pertemuan: Rabu & Jumat (15.00–17.00 WIB)
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Award size={13} /> Target: Finalis/Juara Lomba (Nilai A)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED MISSION
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF]"
        aria-labelledby="mission-heading"
      >
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Text */}
            <div>
              <SectionLabel className="mb-6">
                {isV2 ? 'PRINSIP & PHILOSOPHY RISET' : 'OUR MISSION'}
              </SectionLabel>
              <h2
                id="mission-heading"
                className="section-headline text-[#111111] mb-6"
              >
                {isV2
                  ? 'Bukan Sekadar Meriset — Menghasilkan Solusi Nyata.'
                  : 'Science begins with a question.'}
              </h2>
              <p className="body-large text-[#606060] mb-8 max-w-lg leading-relaxed">
                {isV2
                  ? 'Di Kolese Kanisius, semangat yang kami emban bukan meriset tanpa manfaat realistis. Kami memanfaatkan ilmu pengetahuan STEM untuk mencari solusi atas permasalahan sehari-hari dan merawat seluruh alam ciptaan demi keberlanjutan hidup makhluk hidup.'
                  : 'Our club gives students the freedom to investigate ideas beyond the classroom. We design experiments, study real problems, build prototypes, analyze evidence, and share what we discover.'}
              </p>

              {isV2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 bg-[#F4F4F1] p-5 rounded-lg border border-[#E8E8E4]">
                  <div>
                    <span className="font-bold text-[#111111] text-sm flex items-center gap-1.5 mb-1">
                      <Clock size={16} className="text-[#D83933]" /> Jadwal Rutin
                    </span>
                    <p className="text-xs text-[#606060]">
                      Rabu & Jumat (2 jam/sesi) di laboratorium sekolah.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-[#111111] text-sm flex items-center gap-1.5 mb-1">
                      <Award size={16} className="text-emerald-600" /> Target Prestasi
                    </span>
                    <p className="text-xs text-[#606060]">
                      Wajib mencapai posisi Juara/Finalis untuk syarat Nilai A.
                    </p>
                  </div>
                </div>
              )}

              <ArrowLink href="/about">
                {isV2 ? 'Pelajari Profil Ekskul Riset CC' : 'Learn about the club'}
              </ArrowLink>
            </div>

            {/* Image */}
            <div className="image-zoom">
              <ImagePlaceholder
                label={isV2 ? "KANISIUS STEM LAB" : "CLUB MISSION"}
                sublabel={isV2 ? "Spektrofotometer UV-Vis, Pyrolisis & Smartboard" : "Replace with club photography"}
                caption={isV2 ? "Laboratorium Fisika, Biologi, dan Kimia Kolese Kanisius" : "Science Club — collaborative investigation"}
                className="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECTS
          ===================================================== */}
      <section
        className="section-spacing bg-[#F4F4F1]"
        aria-labelledby="projects-heading"
      >
        <div className="container-main">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel className="mb-4">
                {isV2 ? 'PENELITIAN REAL KANISIUS · 2026–2027' : 'SELECTED PROJECTS · 2026–2027'}
              </SectionLabel>
              <h2
                id="projects-heading"
                className="section-headline text-[#111111]"
              >
                {isV2 ? 'Karya Inovasi & Riset STEM.' : 'What we\'re investigating.'}
              </h2>
            </div>
            <ArrowLink href="/projects" className="shrink-0">
              {isV2 ? 'Semua Karya Penelitian' : 'All Projects'}
            </ArrowLink>
          </div>

          {/* Asymmetric project grid */}
          <ProjectGrid projects={homepageProjects} />
        </div>
      </section>

      {/* =====================================================
          WHAT WE EXPLORE — dark section
          ===================================================== */}
      <section
        className="section-dark section-spacing"
        aria-labelledby="explore-heading"
      >
        <div className="container-main">
          <SectionLabel light className="mb-6">
            {isV2 ? 'PILAR UTAMA EKSKUL' : 'WHAT WE DO'}
          </SectionLabel>
          <h2
            id="explore-heading"
            className="section-headline text-white mb-16 max-w-3xl"
          >
            {isV2
              ? 'Empat Aspek Utama Riset STEM Kolese Kanisius.'
              : 'We explore science from different angles.'}
          </h2>

          {/* Rows */}
          <div>
            {(isV2
              ? [
                  {
                    num: '01',
                    title: 'STEM Research Excellence',
                    desc: 'Penelitian mendalam di bidang Fisika, Kimia Nanomaterial, Bioteknologi, dan Teknik Energi.',
                  },
                  {
                    num: '02',
                    title: 'Target Lomba & Nilai A',
                    desc: 'Persiapan matang untuk melaju hingga tahap Finalis atau Juara pada kompetisi ilmiah nasional.',
                  },
                  {
                    num: '03',
                    title: 'Cura Personalis Mentoring',
                    desc: 'Pendampingan individual yang memperhatikan potensi, kedisiplinan, dan karakter tiap siswa.',
                  },
                  {
                    num: '04',
                    title: 'Care for Creation (Keberlanjutan)',
                    desc: 'Merawat seluruh alam ciptaan dengan menghasilkan solusi hijau berbasis limbah dan energi terbarukan.',
                  },
                ]
              : [
                  {
                    num: '01',
                    title: 'Experiments',
                    desc: 'We test ideas through structured hands-on investigations and direct observation.',
                  },
                  {
                    num: '02',
                    title: 'Research',
                    desc: 'We study questions, examine evidence, collect information, and communicate what we learn.',
                  },
                  {
                    num: '03',
                    title: 'Engineering',
                    desc: 'We design, prototype, test, fail, improve, and build again.',
                  },
                  {
                    num: '04',
                    title: 'Collaboration',
                    desc: 'We combine different interests and skills to solve problems as a team.',
                  },
                ]
            ).map((item, i) => (
              <div key={i} className="explore-row">
                <span
                  className="label text-[#D83933] text-base font-bold"
                  aria-hidden="true"
                >
                  {item.num}
                </span>
                <h3 className="text-white font-bold text-2xl lg:text-3xl tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#B8B8B8] leading-relaxed max-w-md text-sm lg:text-base hidden lg:block">
                  {item.desc}
                </p>
                <p className="text-[#B8B8B8] leading-relaxed max-w-md text-sm block lg:hidden col-span-2 pl-[3.25rem]">
                  {item.desc}
                </p>
                <div className="hidden lg:flex items-center justify-end">
                  <span
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center
                      text-white/40 transition-colors duration-200 hover:border-[#D83933] hover:text-[#D83933]"
                    aria-hidden="true"
                  >
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
            {/* Final border */}
            <div className="border-t border-white/08" />
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRENT FOCUS — Featured project story
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF]"
        aria-labelledby="current-focus-heading"
      >
        <div className="container-main">
          <SectionLabel className="mb-6">
            {isV2 ? 'SOROTAN RESEARCH KANISIUS' : 'CURRENT FOCUS'}
          </SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#E8E8E4]">
            {/* Image */}
            <div className="image-zoom">
              <Link
                href={`/projects/${featuredProject.slug}`}
                tabIndex={-1}
                aria-hidden="true"
              >
                <ImagePlaceholder
                  label={`PROJECT ${featuredProject.number}`}
                  sublabel={featuredProject.category.toUpperCase()}
                  caption={featuredProject.title}
                  className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-72"
                />
              </Link>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-14 border-t lg:border-t-0 lg:border-l border-[#E8E8E4]">
              <h2
                id="current-focus-heading"
                className="text-[#111111] font-bold text-2xl lg:text-3xl tracking-tight leading-tight mb-6"
              >
                {featuredProject.title}
              </h2>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="label text-[#606060]">{featuredProject.category}</span>
                <span className="label text-[#E8E8E4]">—</span>
                <span className="label text-[#606060]">Project {featuredProject.number}</span>
                <span className="label text-[#D83933]">
                  {isV2 ? 'Target Finalis / Juara' : 'In Progress / 2026'}
                </span>
              </div>

              <p className="text-[#606060] leading-relaxed mb-8">
                {featuredProject.summary}
              </p>

              <ArrowLink href={`/projects/${featuredProject.slug}`}>
                {isV2 ? 'Baca Laporan Lengkap Penelitian' : 'Explore the project'}
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ROADMAP PREVIEW
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF]"
        aria-labelledby="roadmap-heading"
      >
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel className="mb-4">
                {isV2 ? 'AGENDA & ROADMAP KOMPETISI' : '2026–2027 ROADMAP'}
              </SectionLabel>
              <h2
                id="roadmap-heading"
                className="section-headline text-[#111111]"
              >
                {isV2 ? 'Tahapan Menuju Juara.' : 'What\'s next.'}
              </h2>
            </div>
            <ArrowLink href="/roadmap" className="shrink-0">
              {isV2 ? 'Lihat Roadmap Lengkap' : 'View full roadmap'}
            </ArrowLink>
          </div>

          <div>
            {roadmapPreview.map((milestone: any) => (
              <RoadmapItem key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CLUB BY THE NUMBERS
          ===================================================== */}
      <section
        className="section-dark section-spacing"
        aria-labelledby="stats-heading"
      >
        <div className="container-main">
          <SectionLabel light className="mb-6">
            {isV2 ? 'FASILITAS & ANGKA' : 'THE CLUB'}
          </SectionLabel>
          <h2
            id="stats-heading"
            className="section-headline text-white mb-16"
          >
            {isV2 ? 'Keunggulan Riset Kolese Kanisius.' : 'A year of curiosity.'}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat: any, i: number) => (
              <div
                key={stat.id}
                className={`stat-block pr-8
                  ${i < stats.length - 1 ? 'border-r border-white/10' : ''}
                  ${i > 0 ? 'pl-8 pr-0 lg:pr-8' : ''}
                `}
              >
                <p
                  className="stat-number text-white"
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  {stat.value}
                </p>
                <p className="label text-[#B8B8B8] mt-3">{stat.label.toUpperCase()}</p>
                <p className="text-xs text-[#606060] mt-1 line-clamp-2">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNAL / LATEST
          ===================================================== */}
      <section
        className="section-spacing bg-[#FFFFFF]"
        aria-labelledby="journal-heading"
      >
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <h2
              id="journal-heading"
              className="section-headline text-[#111111]"
            >
              {isV2 ? 'Catatan Laboratorium & Jurnal' : 'From the Journal'}
            </h2>
            <ArrowLink href="/journal" className="shrink-0">
              {isV2 ? 'Semua Catatan Lab' : 'All entries'}
            </ArrowLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {recentPosts.map((post: any) => (
              <JournalCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JOIN CTA — dark section
          ===================================================== */}
      <section
        className="section-dark section-spacing"
        id="join"
        aria-labelledby="join-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl">
            <SectionLabel light className="mb-6">
              {isV2 ? 'GABUNG EKSKUL RISET CC' : 'JOIN THE CLUB'}
            </SectionLabel>
            <h2
              id="join-heading"
              className="page-headline text-white mb-6"
            >
              {isV2
                ? 'Jadilah Peneliti Muda Kolese Kanisius Berprestasi.'
                : 'Your next question could become our next project.'}
            </h2>
            <p className="body-large text-[#B8B8B8] mb-10 max-w-xl">
              {clubInfo.joinInfo}
            </p>

            <CircularCTA href="/about#join" light className="mb-8">
              {isV2 ? 'Gabung Ekskul Riset' : 'Join Science Club'}
            </CircularCTA>

            <p className="label text-[#606060] mt-8 max-w-md leading-relaxed">
              {clubInfo.meetingInfo}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
