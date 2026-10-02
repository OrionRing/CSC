'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Award, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { useVersion } from '@/context/VersionContext';
import {
  SectionLabel,
  CircularCTA,
  ImagePlaceholder,
} from '@/components/ui';

export default function AboutPage() {
  const { version, clubInfo, teamMembers } = useVersion();
  const isV2 = version === 'v2';

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 bg-[#FFFFFF] border-b border-[#E8E8E4]"
        aria-labelledby="about-hero-heading"
      >
        <div className="container-main">
          <div className="flex items-center gap-2 mb-4">
            <SectionLabel>ABOUT</SectionLabel>
            {isV2 && (
              <span className="bg-emerald-500/20 text-emerald-800 text-[10px] font-mono px-2 py-0.5 rounded font-semibold border border-emerald-500/30">
                KOLESE KANISIUS EDITION (V2)
              </span>
            )}
          </div>
          <h1
            id="about-hero-heading"
            className="page-headline text-[#111111] mb-8 max-w-4xl"
          >
            {isV2
              ? 'Ekskul Riset STEM Kolese Kanisius.'
              : 'Built around curiosity.'}
          </h1>
          <p className="body-large text-[#606060] max-w-2xl leading-relaxed">
            {clubInfo.intro}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        className="section-spacing bg-[#FFFFFF]"
        aria-labelledby="mission-section-heading"
      >
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <SectionLabel className="mb-5">
                {isV2 ? 'LATAR BELAKANG & VISI' : 'OUR MISSION'}
              </SectionLabel>
              <h2
                id="mission-section-heading"
                className="section-headline text-[#111111] mb-6"
              >
                {isV2
                  ? 'Semangat Riset, Solusi Realistis & Merawat Alam Ciptaan.'
                  : 'To create a space where students can explore science.'}
              </h2>
              <p className="body-large text-[#606060] leading-relaxed max-w-lg mb-6">
                {isV2
                  ? 'Kami adalah klub sains (ekskul riset) di Kolese Kanisius, sekolah homogen laki-laki yang memiliki semangat kuat untuk riset STEM. Kami mengadakan pertemuan rutin setiap hari Rabu dan Jumat di sekolah dengan durasi 2 jam per sesi. Penelitian kami berorientasi pada penciptaan solusi nyata atas permasalahan harian dan merawat seluruh alam ciptaan demi keberlanjutan hidup.'
                  : 'Through curiosity, experimentation, evidence, engineering, and collaboration — we work on questions that matter to us, and we share what we learn honestly.'}
              </p>

              {isV2 && (
                <div className="space-y-3 bg-[#F4F4F1] p-6 rounded-lg border border-[#E8E8E4] font-mono text-xs text-[#111111]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Jadwal Pertemuan:</strong> Setiap Rabu & Jumat (2 jam/sesi)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#D83933] shrink-0" />
                    <span><strong>Target Lomba:</strong> Wajib melaju ke babak Finalis / Juara untuk Nilai A</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>Pendampingan:</strong> Cura Personalis (Pengembangan pribadi menyeluruh)</span>
                  </div>
                </div>
              )}
            </div>
            <div className="image-zoom">
              <ImagePlaceholder
                label={isV2 ? "KANISIUS RESEARCH CLUB" : "SCIENCE CLUB"}
                sublabel={isV2 ? "Siswa Kolese Kanisius dalam sesi riset Rabu & Jumat" : "Replace with club photography"}
                caption={isV2 ? "Kegiatan laboratorium ekskul riset Kolese Kanisius" : "Club members at work — replace with actual photography"}
                className="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities section for V2 */}
      {isV2 && (
        <section className="section-spacing bg-[#F4F4F1]" aria-labelledby="facilities-heading">
          <div className="container-main">
            <SectionLabel className="mb-5">FASILITAS & PERALATAN CANGGIH</SectionLabel>
            <h2 id="facilities-heading" className="section-headline text-[#111111] mb-8">
              3 Laboratorium Utama Lengkap dengan Instrumentasi Presisi.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Lab Kimia',
                  equip: 'Spektrofotometer UV-Vis & Smartboard',
                  desc: 'Pusat sintesis nanomaterial, pengujian transmitansi optik akrilik CQD, dan analisis kimia proksimat nutribar.',
                },
                {
                  title: 'Lab Fisika',
                  equip: 'Alat Pyrolisis, Rangkaian Listrik & Smartboard',
                  desc: 'Fasilitas perakitan energy harvesting generator pintu geser, supresi api akustik, dan riset termoelektrik TEG.',
                },
                {
                  title: 'Lab Biologi',
                  equip: 'Inkubator, Reaktor MFC & Smartboard',
                  desc: 'Pusat riset bio-energi Eco-Enzyme Microbial Fuel Cell dan kultur mikrobia elektrogenik.',
                },
              ].map((fac, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-[#E8E8E4] shadow-sm">
                  <span className="text-xs font-mono text-[#D83933] font-bold block mb-2">
                    0{i + 1} // FASILITAS LAB CC
                  </span>
                  <h3 className="text-xl font-bold text-[#111111] mb-1">{fac.title}</h3>
                  <p className="text-xs font-mono text-emerald-700 font-semibold mb-3">
                    {fac.equip}
                  </p>
                  <p className="text-sm text-[#606060] leading-relaxed">{fac.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What we value */}
      <section
        className="section-dark section-spacing"
        aria-labelledby="values-heading"
      >
        <div className="container-main">
          <SectionLabel light className="mb-6">
            {isV2 ? 'NILAI & PRINSIP KANISIUS' : 'WHAT WE VALUE'}
          </SectionLabel>
          <h2 id="values-heading" className="section-headline text-white mb-16">
            {isV2 ? 'Prinsip Utama Peneliti Muda Kanisius.' : 'The principles behind our work.'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {(isV2
              ? [
                  {
                    num: '01',
                    title: 'Cura Personalis',
                    desc: 'Pendampingan individual yang membentuk karakter, kedisiplinan lab, dan kedewasaan nurani.',
                  },
                  {
                    num: '02',
                    title: 'Magis (Target Juara)',
                    desc: 'Daya juang maksimal mengikuti lomba riset hingga melaju ke tahap Finalis/Juara untuk Nilai A.',
                  },
                  {
                    num: '03',
                    title: 'Solusi Realistis',
                    desc: 'Memanfaatkan ilmu STEM untuk menyelesaikan masalah praktis di lingkungan sekitar.',
                  },
                  {
                    num: '04',
                    title: 'Care for Creation',
                    desc: 'Merawat seluruh alam ciptaan demi mendukung keberlanjutan hidup seluruh makhluk.',
                  },
                ]
              : [
                  {
                    num: '01',
                    title: 'Curiosity',
                    desc: 'Ask better questions. The most important thing we practice.',
                  },
                  {
                    num: '02',
                    title: 'Evidence',
                    desc: 'Follow what observations and data actually show, not what we hoped for.',
                  },
                  {
                    num: '03',
                    title: 'Iteration',
                    desc: 'Improve ideas through testing. First attempts are rarely the best.',
                  },
                  {
                    num: '04',
                    title: 'Collaboration',
                    desc: 'Science works better when knowledge and perspectives are shared.',
                  },
                ]
            ).map((val, i) => (
              <div
                key={i}
                className={`p-8 lg:p-10 border-t border-white/10
                  ${i < 3 ? 'sm:border-r sm:border-r-white/10' : ''}
                  ${i < 2 ? 'lg:border-r lg:border-r-white/10' : ''}
                  ${i >= 2 ? 'sm:border-r-0' : ''}
                  ${i >= 2 ? 'lg:border-r lg:border-r-white/10' : ''}
                  ${i === 3 ? 'lg:border-r-0' : ''}
                `}
              >
                <span
                  className="label text-[#D83933] block mb-6"
                  aria-hidden="true"
                >
                  {val.num}
                </span>
                <h3 className="text-white text-2xl font-bold tracking-tight mb-4">
                  {val.title}
                </h3>
                <p className="text-[#B8B8B8] text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="section-spacing bg-[#FFFFFF]"
        id="team"
        aria-labelledby="team-heading"
      >
        <div className="container-main">
          <SectionLabel className="mb-5">
            {isV2 ? 'TIM & PEMBIMBING RISET' : 'THE TEAM'}
          </SectionLabel>
          <h2 id="team-heading" className="section-headline text-[#111111] mb-4">
            {isV2 ? 'Struktur Organisasi Ekskul Riset CC.' : 'The people behind the work.'}
          </h2>
          <p className="text-[#606060] mb-12 max-w-lg">
            {isV2
              ? 'Didampingi oleh pembimbing utama (Cura Personalis) dan koordinator divisi laboratorium Fisika, Kimia, dan Biologi.'
              : 'Names and photos will be added as members consent to their inclusion.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {teamMembers.map((member: any, i: number) => (
              <div
                key={member.id}
                className={`p-8 border-t border-[#E8E8E4]
                  ${i % 3 !== 2 ? 'lg:border-r lg:border-r-[#E8E8E4]' : ''}
                  ${i % 2 !== 1 ? 'sm:border-r sm:border-r-[#E8E8E4] lg:border-r-[#E8E8E4]' : ''}
                `}
              >
                {/* Photo placeholder */}
                <div className="mb-5">
                  <div
                    className="w-16 h-16 rounded-full bg-[#E8E8E4] flex items-center justify-center font-bold text-xs text-[#606060]"
                    aria-hidden="true"
                  >
                    {member.roleShort.slice(0, 3)}
                  </div>
                </div>

                <span className="label text-[#D83933] block mb-2">
                  {member.roleShort}
                </span>
                <h3 className="text-[#111111] text-xl font-bold tracking-tight mb-2">
                  {member.role}
                </h3>
                <p className="label text-[#B8B8B8] mb-3">{member.year} · {member.focus}</p>
                <p className="text-[#606060] text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section
        className="section-spacing bg-[#F4F4F1] border-t border-[#E8E8E4]"
        id="join"
        aria-labelledby="join-section-heading"
      >
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel className="mb-5">
                {isV2 ? 'PERSYARATAN & JADWAL' : 'JOIN THE CLUB'}
              </SectionLabel>
              <h2 id="join-section-heading" className="section-headline text-[#111111] mb-6">
                {isV2 ? 'Siap Berkompetisi & Meriset di Kanisius?' : 'Your next question could become our next project.'}
              </h2>
              <p className="body-large text-[#606060] mb-6 leading-relaxed">
                {clubInfo.joinInfo}
              </p>
              <p className="text-[#606060] text-sm mb-8 leading-relaxed font-mono bg-white p-4 rounded border border-[#E8E8E4]">
                {clubInfo.meetingInfo}
              </p>
              <CircularCTA href="mailto:riset@kanisius.sch.id">
                {isV2 ? 'Daftar Ekskul Riset CC' : 'Get in touch'}
              </CircularCTA>
            </div>

            {/* Requirements */}
            <div className="bg-[#FFFFFF] p-8 lg:p-12">
              <SectionLabel className="mb-6">
                {isV2 ? 'KRITERIA ANGGOTA RISET CC' : 'WHAT WE LOOK FOR'}
              </SectionLabel>
              <ul className="space-y-5">
                {(isV2
                  ? [
                      'Memiliki rasa ingin tahu tinggi terhadap sains & teknologi STEM',
                      'Komitmen hadir di sesi laboratorium setiap Rabu & Jumat (2 jam)',
                      'Daya juang pantang menyerah untuk berkompetisi hingga tingkat Finalis/Juara',
                      'Integrasi moral dan kejujuran dalam mencatat data pengujian lab',
                      'Semangat merawat seluruh alam ciptaan & membantu sesama',
                    ]
                  : [
                      'Genuine curiosity about how things work',
                      'Willingness to document your work honestly',
                      'Ability to commit to regular weekly meetings',
                      'Interest in contributing to a shared project',
                      'Openness to working across different science fields',
                    ]
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="w-5 h-5 rounded-full border border-[#D83933] flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D83933]" />
                    </span>
                    <p className="text-[#606060] text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
