'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Award, Shield, CheckCircle2, Search, SlidersHorizontal } from 'lucide-react';
import { labEquipmentList, LabItem } from '@/data/v2/inventory';
import { clubInfo } from '@/data/v2/stats';

const categories = [
  'Semua Alat & Bahan',
  'Fisika & Instrumentasi',
  'Biologi & Bioteknologi',
  'Kimia & Nanomaterial',
  'Senyawa & Reagen Kimia',
] as const;

export default function AboutPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Alat & Bahan');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEquipment = labEquipmentList.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Semua Alat & Bahan' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* =====================================================
          HERO
          ===================================================== */}
      <section
        className="pt-28 pb-16 bg-[#050505] text-white border-b border-white/10"
        aria-labelledby="about-hero-heading"
      >
        <div className="container-main">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest uppercase">
              ABOUT CSC
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs font-mono text-white/60 uppercase">
              CANISIUS SCIENCE CLUB
            </span>
          </div>

          <h1
            id="about-hero-heading"
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-8 max-w-4xl leading-tight"
          >
            Ekskul Riset STEM Kolese Kanisius.
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            Wadah eksplorasi ilmiah dan pengembangan teknologi bagi siswa SMA Kolese Kanisius. Kami memadukan rasa ingin tahu saintifik, ketelitian eksperimen laboratorium, dan daya juang kompetisi untuk menghadirkan solusi nyata bagi sesama dan lingkungan.
          </p>
        </div>
      </section>

      {/* =====================================================
          VISI & MISI
          ===================================================== */}
      <section
        id="visi-misi"
        className="py-20 bg-[#0A0A0A] text-white border-b border-white/10"
        aria-labelledby="visi-misi-heading"
      >
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Visi */}
            <div className="p-8 bg-[#0D0D0D] border border-white/10">
              <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-4">
                01 // VISI
              </span>
              <h2 className="text-2xl font-bold text-white mb-6">
                Menjadi Pusat Keunggulan Riset Remaja Berintegritas & Berdampak Nyata.
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Membentuk komunitas saintis muda Kanisian yang memiliki ketajaman berpikir kritis, kecakapan metodologi ilmiah berstandar tinggi, serta komitmen moral untuk merawat alam ciptaan (*Care for Creation*) melalui riset sains dan inovasi teknologi aplikatif.
              </p>
            </div>

            {/* Misi */}
            <div className="p-8 bg-[#0D0D0D] border border-white/10">
              <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-4">
                02 // MISI
              </span>
              <h2 className="text-2xl font-bold text-white mb-6">
                Empat Langkah Konkret Ekskul Riset.
              </h2>
              <ul className="space-y-4 text-sm sm:text-base text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-[#D83933] font-mono font-bold mt-0.5">•</span>
                  <span><strong>Eksplorasi Laboratorium Mandiri:</strong> Menyediakan ruang dan pendampingan bagi siswa untuk menguji hipotesis di bidang fisika, biologi, kimia, dan teknik.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D83933] font-mono font-bold mt-0.5">•</span>
                  <span><strong>Solusi Berbasis Masalah Nyata:</strong> Mendorong proyek penelitian yang berorientasi pada pemanfaatan limbah lokal, efisiensi energi terbarukan, dan konservasi alam.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D83933] font-mono font-bold mt-0.5">•</span>
                  <span><strong>Daya Juang Kompetisi:</strong> Mempersiapkan naskah ilmiah dan prototipe presisi untuk berkompetisi di ajang riset bergengsi tingkat nasional dan internasional.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D83933] font-mono font-bold mt-0.5">•</span>
                  <span><strong>Pendampingan Cura Personalis:</strong> Membina setiap individu anggota dengan perhatian personal pada karakter, kejujuran data, dan kedisiplinan keselamatan kerja lab.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACTIVITIES
          ===================================================== */}
      <section
        id="activities"
        className="py-20 bg-[#050505] text-white border-b border-white/10"
        aria-labelledby="activities-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
              KEGIATAN & RITME KERJA
            </span>
            <h2
              id="activities-heading"
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Aktivitas Rutin Ekskul Riset.
            </h2>
            <p className="text-white/70 text-base mt-4 leading-relaxed">
              Fokus kegiatan kami terbagi menjadi dua pilar utama: sesi riset berkala di laboratorium dan persiapan kompetisi ilmiah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#0D0D0D] border border-white/10">
              <div className="flex items-center gap-3 text-[#D83933] mb-4">
                <Clock size={20} />
                <span className="font-mono text-sm font-bold uppercase tracking-wider">
                  Sesi Rutin Laboratorium
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Pertemuan Setiap Rabu & Jumat
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                Dilaksanakan dua kali seminggu dengan durasi 2 jam per sesi (15.00 – 17.00 WIB) di laboratorium Fisika, Kimia, atau Biologi Kolese Kanisius.
              </p>
              <ul className="text-xs font-mono text-white/60 space-y-2">
                <li>• Eksperimen sintesis dan pengujian material</li>
                <li>• Analisis data spektroskopi & sensorik digital</li>
                <li>• Diskusi kelompok dan bimbingan guru advisor</li>
                <li>• Evaluasi keselamatan kerja & pencatatan log lab</li>
              </ul>
            </div>

            <div className="p-8 bg-[#0D0D0D] border border-white/10">
              <div className="flex items-center gap-3 text-[#D83933] mb-4">
                <Award size={20} />
                <span className="font-mono text-sm font-bold uppercase tracking-wider">
                  Target Prestasi Lomba
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Persiapan Kompetisi Nasional & Global
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                Setiap kelompok riset dibimbing secara khusus untuk menyusun proposal penelitian, laporan ilmiah berformat akademis, dan poster/presentasi untuk ajang ilmiah resmi.
              </p>
              <ul className="text-xs font-mono text-white/60 space-y-2">
                <li>• OPSI (Olimpiade Penelitian Siswa Indonesia)</li>
                <li>• EUREKA! ITB Science Project Competition</li>
                <li>• Indonesia International Invention Expo (IIIEX)</li>
                <li>• Youth International Science Fair (YSIF)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LABORATORY EQUIPMENT & INVENTORY DIRECTORY
          ===================================================== */}
      <section
        id="equipment"
        className="py-20 bg-[#0A0A0A] text-white border-b border-white/10"
        aria-labelledby="equipment-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-3">
              FASILITAS & INVENTARIS
            </span>
            <h2
              id="equipment-heading"
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Daftar Alat & Bahan Laboratorium.
            </h2>
            <p className="text-white/70 text-base mt-4 leading-relaxed">
              Kompleks laboratorium SMA Kolese Kanisius dilengkapi sarana pengujian modern untuk mendukung seluruh riset mandiri siswa.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono rounded whitespace-nowrap transition-colors duration-200 ${
                    selectedCategory === cat
                      ? 'bg-[#D83933] text-white font-bold'
                      : 'bg-[#141414] text-white/60 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Cari alat atau bahan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111111] border border-white/10 rounded py-2 pl-9 pr-4 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-[#D83933]"
              />
            </div>
          </div>

          {/* Table of Equipment */}
          <div className="border border-white/10 overflow-x-auto bg-[#0D0D0D]">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 bg-[#141414] text-[#D83933]">
                  <th className="py-3 px-4 w-16">NO</th>
                  <th className="py-3 px-4">NAMA ALAT / BAHAN</th>
                  <th className="py-3 px-4">KATEGORI LAB</th>
                  <th className="py-3 px-4 w-28">JUMLAH</th>
                  <th className="py-3 px-4">KETERANGAN / FUNGSI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/05 text-white/80">
                {filteredEquipment.length > 0 ? (
                  filteredEquipment.map((item, index) => (
                    <tr key={item.id} className="hover:bg-white/05 transition-colors duration-150">
                      <td className="py-3 px-4 text-white/40">{String(index + 1).padStart(2, '0')}</td>
                      <td className="py-3 px-4 font-bold text-white">{item.name}</td>
                      <td className="py-3 px-4 text-[#D83933]">{item.category}</td>
                      <td className="py-3 px-4">{item.quantity || 'Tersedia'}</td>
                      <td className="py-3 px-4 text-white/60">{item.notes || '—'}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-white/40">
                      Tidak ditemukan alat atau bahan dengan kata kunci tersebut.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="text-xs font-mono text-white/40 mt-4 text-right">
            Menampilkan {filteredEquipment.length} dari {labEquipmentList.length} inventaris laboratorium
          </p>
        </div>
      </section>

      {/* =====================================================
          FIND US AT CC (NO OPEN RECRUITMENT NOTICE)
          ===================================================== */}
      <section
        id="join"
        className="py-20 bg-[#050505] text-white"
        aria-labelledby="join-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest block mb-4">
              HUBUNGI & TEMUI KAMI
            </span>
            <h2
              id="join-heading"
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-6"
            >
              Find Us at Canisius College.
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
              Saat ini Canisius Science Club sedang tidak membuka rekrutmen terbuka (*not actively recruiting*), karena tim sedang berfokus penuh pada penyelesaian proyek riset berjalan dan bimbingan kompetisi lomba.
            </p>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
              Bagi siswa Kolese Kanisius, rekan akademisi, atau pihak luar yang ingin berdiskusi atau bertukar wawasan seputar penelitian sains, silakan temui kami langsung di sekolah atau di laboratorium saat jam ekstrakulikuler berlangsung.
            </p>

            <div className="p-6 bg-[#0D0D0D] border border-white/10 rounded mb-8 font-mono text-xs sm:text-sm text-white/80 space-y-2">
              <p className="text-[#D83933] font-bold">LOKASI & KONTAK:</p>
              <p>• Laboratorium STEM SMA Kolese Kanisius</p>
              <p>• Alamat: Jl. Menteng Raya No. 64, Jakarta Pusat 10340</p>
              <p>• Waktu Lab: Rabu & Jumat (15.00 – 17.00 WIB)</p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#D83933] text-white font-mono text-sm font-semibold hover:bg-[#b82e28] transition-colors duration-200 rounded"
            >
              <span>Jelajahi Hasil Riset Kami</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
