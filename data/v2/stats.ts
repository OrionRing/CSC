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
    description: 'Fisika, Biologi, dan Kimia dilengkapi Spektrofotometer UV-Vis, Pyrolisis & Smartboard.',
  },
  {
    id: 'stat-02',
    value: '02x',
    label: 'Pertemuan Rutin / Minggu',
    description: 'Setiap hari Rabu dan Jumat (durasi 2 jam per sesi) berfokus pada penelitian STEM.',
  },
  {
    id: 'stat-03',
    value: '100%',
    label: 'Target Finalis & Juara',
    description: 'Kompetisi bukan sekadar diikuti, tapi harus melaju ke final/juara untuk syarat Nilai A.',
  },
  {
    id: 'stat-04',
    value: '∞',
    label: 'Cura Personalis',
    description: 'Pendampingan pribadi dan komitmen merawat seluruh alam ciptaan demi keberlanjutan hidup.',
  },
];

export const clubInfo = {
  name: 'Ekskul Riset Kolese Kanisius',
  identifier: 'Canisius Science Club',
  year: '2026',
  yearRange: '2026–2027',
  tagline: 'Solusi Realistis. Merawat Alam Ciptaan.',
  secondaryTagline: 'Riset STEM • Cura Personalis • Target Juara Lomba',
  intro:
    'Kami adalah Klub Sains (Ekstrakulikuler Riset) di Kolese Kanisius, sekolah homogen laki-laki yang memiliki semangat kuat untuk riset STEM. Bertemu setiap hari Rabu dan Jumat di sekolah (2 jam/sesi), kami berfokus pada penelitian harian dan aktif berkompetisi hingga tingkat nasional dan internasional dengan target melaju ke babak final atau juara agar mencapai nilai A. Semangat yang kami emban bukan sekadar meriset tanpa manfaat realistis, melainkan menggunakan ilmu pengetahuan untuk mencari solusi atas permasalahan nyata di kehidupan sehari-hari serta merawat seluruh alam ciptaan.',
  joinInfo:
    'Terbuka bagi seluruh siswa SMA Kolese Kanisius yang siap mengasah rasa ingin tahu, disiplin laboratorium, dan daya juang tinggi untuk memenangkan lomba riset STEM.',
  meetingInfo: 'Pertemuan Rutin: Setiap Hari Rabu dan Jumat (Pukul 15.00 – 17.00 WIB / 2 jam per sesi) di Kompleks Laboratorium STEM Kolese Kanisius.',
  badge: 'VERSION 2 // KOLESE KANISIUS SCIENCE CLUB',
  facilities: [
    {
      name: 'Laboratorium Kimia Canggih',
      equipment: 'Spektrofotometer UV-Vis & Smartboard Interaktif',
      description: 'Digunakan untuk analisis transmitansi optik, doping CQD, dan pengujian senyawa bio-kimia.',
    },
    {
      name: 'Laboratorium Fisika & Otomasi',
      equipment: 'Alat Pyrolisis, Microcontroller Kit & Instrumentasi Listrik Lengkap',
      description: 'Digunakan untuk perakitan energy harvesting, alat supresi gelombang akustik, dan riset pyrolisis biomassa.',
    },
    {
      name: 'Laboratorium Biologi & Bio-Energi',
      equipment: 'Set Inkubator, Smartboard & Reaktor Microbial Fuel Cell (MFC)',
      description: 'Tempat riset kultur mikrobia, fermentasi Eco-Enzyme, serta ekstraksi nutrisi pangan lokal.',
    },
  ],
  mentoring: 'Pendampingan Cura Personalis — Perhatian individual kepada setiap siswa peneliti untuk mengembangkan bakat alami, karakter pantang menyerah, serta integritas moral dan ilmiah.',
};
