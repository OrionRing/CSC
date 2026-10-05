'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Award, Shield, Sparkles } from 'lucide-react';
import { clubStats, clubInfo } from '@/data/v2/stats';
import { projects } from '@/data/v2/projects';
import { ProjectCard } from '@/components/ProjectComponents';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* =====================================================
          HERO SECTION — Clean, uncluttered, red & black
          ===================================================== */}
      <section
        className="relative bg-[#050505] text-white pt-24 pb-20 border-b border-white/10"
        aria-labelledby="hero-headline"
      >
        <div className="container-main">
          {/* Subtle top identifier */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest uppercase">
              CANISIUS SCIENCE CLUB
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs font-mono text-white/60 uppercase">
              SMA KOLESE KANISIUS JAKARTA
            </span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-headline"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-10"
          >
            Semangat Riset.<br />
            Merawat Alam Ciptaan.
          </h1>

          {/* Description Paragraph with ample breathing room */}
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed mb-12">
            Kami adalah Canisius Science Club (Ekstrakulikuler Riset) di Kolese Kanisius. Berfokus pada penelitian ilmiah berbasis STEM dan aktif berkompetisi di tingkat nasional maupun internasional. Semangat kami bukan sekadar meriset tanpa arah, melainkan memanfaatkan ilmu pengetahuan untuk menciptakan solusi nyata atas persoalan sehari-hari serta merawat seluruh alam ciptaan.
          </p>

          {/* Clean CTA */}
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#D83933] text-white font-mono text-sm font-semibold hover:bg-[#b82e28] transition-colors duration-200 rounded"
            >
              <span>Lihat Hasil Penelitian</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-mono text-white/80 hover:text-white transition-colors duration-200"
            >
              <span>Profil & Alat Laboratorium</span>
              <ArrowRight size={14} className="text-[#D83933]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY SECTION — Without clutter badges or image slots
          ===================================================== */}
      <section
        className="py-20 bg-[#0A0A0A] text-white border-b border-white/10"
        aria-labelledby="philosophy-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-4">
              PRINSIP & FILOSOFI RISET
            </span>
            <h2
              id="philosophy-heading"
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-8"
            >
              Bukan Sekadar Meriset — Menghasilkan Solusi Nyata.
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
              Di Kolese Kanisius, penelitian ilmiah diawali dari observasi nyata terhadap lingkungan terdekat. Dari pemanfaatan limbah minyak jelantah menjadi biodiesel, sintesis nanoteknologi pelindung radiasi UV-A, pemanfaatan air cucian beras untuk bio-listrik Microbial Fuel Cell, hingga pendinginan panel surya fotovoltaik berbasis material fase alami.
            </p>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10">
              Setiap karya riset dituntun oleh pendampingan <em>Cura Personalis</em> yang membentuk integritas saintifik, ketelitian pengujian laboratorium, dan daya juang berkompetisi demi dampak positif bagi sesama.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#D83933] hover:text-white font-bold transition-colors duration-200"
            >
              <span>Pelajari Profil & Aktivitas Riset CC</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUR PILLARS / ASPECTS — Cleaned right border arrows
          ===================================================== */}
      <section
        className="py-20 bg-[#050505] text-white border-b border-white/10"
        aria-labelledby="pillars-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
              PILAR UTAMA EKSKUL
            </span>
            <h2
              id="pillars-heading"
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Empat Aspek Utama Riset STEM Kolese Kanisius.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: '01',
                title: 'STEM Research Excellence',
                desc: 'Eksperimen mendalam di bidang Fisika Terapan, Nanomaterial, Bioteknologi Lingkungan, dan Teknik Energi Terbarukan.',
              },
              {
                num: '02',
                title: 'Target Lomba & Prestasi',
                desc: 'Bimbingan intensif dan persiapan matang untuk melaju ke tahap Finalis dan Juara pada kompetisi ilmiah nasional dan internasional.',
              },
              {
                num: '03',
                title: 'Cura Personalis Mentoring',
                desc: 'Pendampingan individual yang memperhatikan potensi, disiplin keselamatan lab, dan kedewasaan karakter tiap siswa peneliti.',
              },
              {
                num: '04',
                title: 'Care for Creation (Keberlanjutan)',
                desc: 'Merawat seluruh alam ciptaan dengan menghasilkan solusi hijau berbasis pemanfaatan limbah dan konservasi sumber daya alam.',
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="p-8 bg-[#0D0D0D] border border-white/10"
              >
                <span className="text-xs font-mono text-[#D83933] font-bold block mb-4">
                  {pillar.num} // PILAR
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED RESEARCH PROJECTS — Real papers, no status badges
          ===================================================== */}
      <section
        className="py-20 bg-[#0A0A0A] text-white border-b border-white/10"
        aria-labelledby="projects-heading"
      >
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
                KARYA ILMIAH SISWA
              </span>
              <h2
                id="projects-heading"
                className="text-2xl sm:text-4xl font-bold text-white tracking-tight"
              >
                Karya Inovasi & Riset STEM.
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#D83933] hover:text-white font-bold transition-colors duration-200 shrink-0"
            >
              <span>Semua Karya Penelitian ({projects.length})</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NUMBERS & ACHIEVEMENTS
          ===================================================== */}
      <section
        className="py-20 bg-[#050505] text-white border-b border-white/10"
        aria-labelledby="stats-heading"
      >
        <div className="container-main">
          <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
            FASILITAS & PRESTASI
          </span>
          <h2
            id="stats-heading"
            className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-14"
          >
            Keunggulan Ekskul Riset Kolese Kanisius.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubStats.map((stat) => (
              <div key={stat.id} className="p-6 bg-[#0D0D0D] border border-white/10">
                <p className="text-4xl font-bold text-white font-mono mb-2">
                  {stat.value}
                </p>
                <p className="text-xs font-mono text-[#D83933] font-semibold uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className="text-xs text-white/60 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FIND US AT CC (JOIN / CONTACT)
          ===================================================== */}
      <section
        className="py-20 bg-[#0A0A0A] text-white"
        aria-labelledby="contact-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-4">
              LOKASI & PERTEMUAN
            </span>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-6"
            >
              Temui Kami di Laboratorium Kolese Kanisius.
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
              {clubInfo.joinInfo}
            </p>

            <div className="p-6 bg-[#111111] border border-white/10 rounded mb-8 font-mono text-xs sm:text-sm text-white/80 space-y-2">
              <p className="text-[#D83933] font-bold">JADWAL & TEMPAT:</p>
              <p>• Hari: Setiap Rabu & Jumat</p>
              <p>• Waktu: Pukul 15.00 – 17.00 WIB (2 jam per sesi)</p>
              <p>• Lokasi: Kompleks Laboratorium STEM SMA Kolese Kanisius, Jl. Menteng Raya No. 64, Jakarta Pusat</p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#D83933] text-white font-mono text-sm font-semibold hover:bg-[#b82e28] transition-colors duration-200 rounded"
            >
              <span>Lihat Fasilitas & Peralatan Laboratorium</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
