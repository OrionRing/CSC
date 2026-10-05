'use client';

import Link from 'next/link';
import { Clock, AlertCircle, ArrowRight } from 'lucide-react';

export default function RoadmapPage() {
  return (
    <article className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section
        className="pt-28 pb-16 border-b border-white/10"
        aria-labelledby="roadmap-hero-heading"
      >
        <div className="container-main">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#D83933] font-bold tracking-widest uppercase">
              STATUS UPDATE
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs font-mono text-white/60 uppercase">
              CANISIUS SCIENCE CLUB
            </span>
          </div>

          <h1
            id="roadmap-hero-heading"
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-8 max-w-4xl leading-tight"
          >
            Roadmap Kegiatan & Kompetisi.
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            Jadwal pelaksanaan tahapan riset, sinkronisasi kalender kompetisi ilmiah remaja, dan agenda kegiatan ekstrakulikuler.
          </p>
        </div>
      </section>

      {/* On Delay Notice Card */}
      <section className="py-20" aria-labelledby="delay-heading">
        <div className="container-main">
          <div className="max-w-3xl p-10 bg-[#0D0D0D] border border-white/10 rounded">
            <div className="flex items-center gap-3 text-[#D83933] mb-6">
              <Clock size={24} />
              <span className="font-mono text-sm font-bold uppercase tracking-wider">
                Status: On Delay / Penjadwalan Ulang
              </span>
            </div>

            <h2 id="delay-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Roadmap Resmi Sedang Dalam Penyesuaian Kalender Akademik.
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-6">
              Roadmap publik untuk periode semester berjalan saat ini sedang <strong>on delay</strong> sehubungan dengan penyesuaian tenggat waktu pendaftaran kompetisi ilmiah nasional (OPSI, LIPI/BRIN, EUREKA! ITB) serta kalender ujian SMA Kolese Kanisius.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-8">
              Meskipun roadmap publik sedang dijadwalkan ulang, seluruh kelompok riset tetap aktif menjalankan eksperimen rutin setiap hari <strong>Rabu dan Jumat (15.00 – 17.00 WIB)</strong> di laboratorium sekolah.
            </p>

            <div className="p-6 bg-[#141414] border border-white/05 rounded font-mono text-xs text-white/70 space-y-2 mb-8">
              <p className="text-[#D83933] font-bold">INFORMASI PENJADWALAN:</p>
              <p>• Sesi Lab Rutin: Tetap berlangsung sesuai jadwal mingguan</p>
              <p>• Pembaruan Kalender Lomba: Akan dipublikasikan setelah sinkronisasi pembimbing riset</p>
              <p>• Pertanyaan Jadwal: Silakan hubungi koordinator ekskul riset di sekolah</p>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D83933] text-white font-mono text-xs font-bold hover:bg-[#b82e28] transition-colors duration-200 rounded"
              >
                <span>Lihat Karya Penelitian Berjalan</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors duration-200"
              >
                <span>Profil & Jadwal Pertemuan</span>
                <ArrowRight size={12} className="text-[#D83933]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
