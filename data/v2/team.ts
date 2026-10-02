export interface TeamMember {
  id: string;
  role: string;
  roleShort: string;
  description: string;
  year: string;
  focus: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'cc-tm-01',
    role: 'Ketua Ekskul Riset CC',
    roleShort: 'PRESIDENT',
    description:
      'Memimpin arah strategi riset, koordinasi jadwal latihan Rabu & Jumat, serta memastikan setiap proyek memenuhi standar target Finalis/Juara Lomba.',
    year: 'Kelas XII',
    focus: 'Nanoteknologi & Kimia Terapan',
  },
  {
    id: 'cc-tm-02',
    role: 'Wakil Ketua & Koordinator Kompetisi',
    roleShort: 'VICE PRESIDENT',
    description:
      'Mengelola pendaftaran lomba riset STEM nasional/internasional, pemetaan berkas kompetisi, dan pendampingan verifikasi data pengujian.',
    year: 'Kelas XI',
    focus: 'Fisika Akustik & Energy Harvesting',
  },
  {
    id: 'cc-tm-03',
    role: 'Koordinator Laboratorium & Instrumentasi',
    roleShort: 'LAB & TOOLS',
    description:
      'Penanggung jawab operasional Spektrofotometer UV-Vis, Alat Pyrolisis, dan Smartboard interaktif di 3 lab utama (Fisika, Biologi, Kimia).',
    year: 'Kelas XII',
    focus: 'Spektroskopi & Rekayasa Alat Lab',
  },
  {
    id: 'cc-tm-04',
    role: 'Koordinator Bio-Energi & Kebijakan Lingkungan',
    roleShort: 'BIO-RESEARCH',
    description:
      'Memandu penelitian Eco-Enzyme MFC dan formulasi nutribar pangan lokal dengan prinsip keberlanjutan dan kepedulian merawat alam ciptaan.',
    year: 'Kelas XI',
    focus: 'Bioteknologi & Bio-Energi',
  },
  {
    id: 'cc-tm-05',
    role: 'Koordinator Dokumentasi & Publikasi Ilmiah',
    roleShort: 'DOCUMENTATION',
    description:
      'Menyusun naskah ilmiah (paper) standar kompetisi, mengarsip jurnal riset Rabu & Jumat, dan membuat ringkasan hasil uji laboratorium.',
    year: 'Kelas X',
    focus: 'Jurnalistik STEM & Analisis Data',
  },
  {
    id: 'cc-tm-06',
    role: 'Pembimbing Utama (Mentoring Cura Personalis)',
    roleShort: 'MENTOR ADVISOR',
    description:
      'Memberikan bimbingan akademis, moral, dan teknis laboratorium menyeluruh (Cura Personalis) untuk memastikan riset berdampak nyata bagi masyarakat.',
    year: 'Guru SMA Kolese Kanisius',
    focus: 'Departemen Sains & Riset STEM CC',
  },
];
