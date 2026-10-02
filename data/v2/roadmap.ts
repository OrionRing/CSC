export type MilestoneStatus = 'completed' | 'in-progress' | 'planned';

export interface Milestone {
  id: string;
  date: string;
  shortDate: string;
  title: string;
  status: MilestoneStatus;
  description: string;
}

export const milestones: Milestone[] = [
  {
    id: 'cc-ms-01',
    date: 'Agustus 2026',
    shortDate: 'AGT 2026',
    title: 'Perumusan Topik Riset & Mentoring Cura Personalis',
    status: 'completed',
    description:
      'Pembentukan kelompok riset STEM, orientasi 3 laboratorium utama (Fisika, Biologi, Kimia), serta perumusan 6 topik penelitian berbasis permasalahan sehari-hari.',
  },
  {
    id: 'cc-ms-02',
    date: 'September – Oktober 2026',
    shortDate: 'SEP-OKT 2026',
    title: 'Siklus Eksperimen Sesi Rabu & Jumat',
    status: 'completed',
    description:
      'Pengujian Spektrofotometer UV-Vis untuk akrilik CQD, pemanenan energi destilasi aquadest, fermentasi Eco-Enzyme sel MFC, dan pembuatan Nutribar pangan lokal.',
  },
  {
    id: 'cc-ms-03',
    date: 'Nopember 2026',
    shortDate: 'NOV 2026',
    title: 'Seleksi Internal & Penyusunan Paper Kompetisi',
    status: 'in-progress',
    description:
      'Penyusunan naskah ilmiah (scientific paper) dan simulasi sidang riset di depan Smartboard lab untuk menyaring karya terbaik melaju ke tingkat nasional.',
  },
  {
    id: 'cc-ms-04',
    date: 'Desember 2026 – Januari 2027',
    shortDate: 'DES-JAN 2027',
    title: 'Pengiriman Berkas Lomba Riset STEM Nasional',
    status: 'planned',
    description:
      'Pendaftaran dan pengiriman naskah ke ajang OPSI, LIPI Youth Science Competition, dan OSEAN. Target melaju ke babak Finalis/Juara untuk nilai kredit akademis A.',
  },
  {
    id: 'cc-ms-05',
    date: 'Maret 2027',
    shortDate: 'MAR 2027',
    title: 'Babak Final & Presentasi Karya Juara',
    status: 'planned',
    description:
      'Presentasi produk prototipe (Generator Pintu Geser & Supresi Api Gelombang Akustik) di ajang kompetisi nasional & internasional.',
  },
  {
    id: 'cc-ms-06',
    date: 'Mei 2027',
    shortDate: 'MEI 2027',
    title: 'Kanisian Science Exhibition & Implementasi Keberlanjutan',
    status: 'planned',
    description:
      'Pameran ilmiah tahunan Kolese Kanisius dan penyerahan inovasi teknologi ramah lingkungan untuk komunitas sekolah dan lingkungan masyarakat.',
  },
];

export const longTermGoals = [
  'Mencapai 100% tingkat kelulusan Juara/Finalis lomba riset STEM nasional bagi seluruh anggota ekskul untuk pemenuhan Nilai A.',
  'Memperluas penerapan teknologi ramah lingkungan di sekolah (MFC Eco-Enzyme & Generator Pintu Geser).',
  'Mengembangkan publikasi ilmiah berkala "Canisian Journal of Youth STEM Research".',
  'Meningkatkan fasilitas laboratorium dengan teknologi sensor IoT & perangkat pirolisis otomatis.',
  'Menjalin kolaborasi riset antar-sekolah dan institusi perguruan tinggi sains.',
  'Mewujudkan semangat Cura Personalis dalam setiap karya inovasi untuk keberlanjutan seluruh alam ciptaan.',
];

export const statusGroups = {
  completed: milestones.filter((m) => m.status === 'completed'),
  current: milestones.filter((m) => m.status === 'in-progress'),
  upcoming: milestones.filter((m) => m.status === 'planned'),
};
