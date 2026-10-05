export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const clubStats: Stat[] = [
  {
    id: 'stat-01',
    value: '03',
    label: 'Lab Utama Lengkap',
    description: 'Laboratorium Fisika, Biologi, dan Kimia dengan inventaris instrumen presisi dan reagen analitik.',
  },
  {
    id: 'stat-02',
    value: '02x',
    label: 'Pertemuan Rutin / Minggu',
    description: 'Sesi riset dan pendampingan setiap hari Rabu dan Jumat (15.00 – 17.00 WIB) di laboratorium sekolah.',
  },
  {
    id: 'stat-03',
    value: '09+',
    label: 'Karya Penelitian Unggulan',
    description: 'Publikasi karya ilmiah riil siswa dalam bidang energi terbarukan, nanoteknologi, dan lingkungan hidup.',
  },
  {
    id: 'stat-04',
    value: '🏆',
    label: 'Prestasi Nasional & Global',
    description: 'Raihan Medali Emas IIIEX 2024, Medali Perak YSIF 2024, dan kompetisi riset bergengsi lainnya.',
  },
];

export const clubInfo = {
  name: 'Canisius Science Club',
  identifier: 'CSC',
  year: '2026',
  yearRange: '2026–2027',
  tagline: 'Semangat Riset. Solusi Nyata. Merawat Alam Ciptaan.',
  secondaryTagline: 'Riset STEM • Cura Personalis • Target Prestasi Lomba',
  intro:
    'Kami adalah Canisius Science Club (Ekstrakulikuler Riset) di Kolese Kanisius Jakarta. Bertemu rutin setiap hari Rabu dan Jumat di sekolah (15.00 – 17.00 WIB), kami berfokus pada penelitian ilmiah aplikatif dan persiapan kompetisi tingkat nasional maupun internasional. Semangat kami adalah menggunakan ilmu pengetahuan STEM untuk menemukan solusi atas persoalan riil di sekitar kita serta merawat seluruh alam ciptaan.',
  joinInfo:
    'Tertarik berkolaborasi atau ingin mengetahui kegiatan riset kami? Temui kami langsung di kompleks laboratorium SMA Kolese Kanisius. Saat ini kami berfokus pada pengembangan proyek riset berjalan dan bimbingan kompetisi lomba.',
  meetingInfo: 'Pertemuan Rutin: Setiap Hari Rabu dan Jumat (Pukul 15.00 – 17.00 WIB) di Laboratorium STEM Kolese Kanisius, Menteng Raya 64, Jakarta Pusat.',
};
