export type PostType = 'project-log' | 'field-notes' | 'club-update' | 'reflection';

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  type: PostType;
  typeLabel: string;
  date: string;
  dateISO: string;
  readingTime: string;
  summary: string;
  image: string;
  imageCaption: string;
  content: string[];
}

export const journalPosts: JournalPost[] = [
  {
    id: 'cc-jrn-01',
    slug: 'cqd-spectrophotometer-log',
    title: 'Catatan Lab Rabu: Pengujian Spektrofotometer UV-Vis Doping CQD Akrilik',
    type: 'project-log',
    typeLabel: 'CATATAN LAB (RABU)',
    date: '21 Oktober 2026',
    dateISO: '2026-10-21',
    readingTime: '4 MENIT BACA',
    summary:
      'Sesi pengujian intensif 2 jam di Lab Kimia Kolese Kanisius menggunakan Spektrofotometer UV-Vis untuk membuktikan efisiensi penyerapan radiasi UV-A pada akrilik dopan CQD.',
    image: '/images/journal-filtration-test.jpg',
    imageCaption: 'Pembacaan grafik spektrum puncak absorbansi UV-A pada Spektrofotometer UV-Vis.',
    content: [
      'Pada pertemuan sesi Rabu minggu ini di Lab Kimia, tim riset nanomaterial fokus menguji 4 variasi sampel akrilik hasil sintesis Carbon Quantum Dots (CQD).',
      'Memanfaatkan Spektrofotometer UV-Vis laboratorium, kami mengukur transmitansi spektral dari panjang gelombang 200 nm hingga 800 nm.',
      'Hasil grafik pada Smartboard lab menunjukkan puncak pemblokiran radiasi UV-A (365 nm) yang sangat tajam pada sampel konsentrasi 0.5% b/v. Penyerapan radiasi mencapai 94.8%, sementara transparansi cahaya tampak berada pada angka 87.2%.',
      'Bapak Advisor mengarahkan kami untuk melengkapi pengujian dengan variasi ketebalan akrilik agar berkas penelitian siap diajukan ke kompetisi ilmiah remaja nasional dengan target Juara 1 untuk syarat Nilai A.',
      'Sesi berikutnya pada hari Jumat akan difokuskan pada uji ketahanan mekanis dan pengeringan spesimen.',
    ],
  },
  {
    id: 'cc-jrn-02',
    slug: 'jumat-lab-eco-enzyme-mfc',
    title: 'Catatan Lab Jumat: Memanen Arus Listrik Mikro dari Limbah Eco-Enzyme',
    type: 'project-log',
    typeLabel: 'CATATAN LAB (JUMAT)',
    date: '16 Oktober 2026',
    dateISO: '2026-10-16',
    readingTime: '3 MENIT BACA',
    summary:
      'Proses pemanenan energi listrik terbarukan dari limbah fermentasi buah kantin sekolah menggunakan sel bahan bakar mikrobia Dual-Chamber MFC.',
    image: '/images/journal-indicators.jpg',
    imageCaption: 'Pengukuran tegangan listrik sel MFC Eco-Enzyme menggunakan multimeter presisi di Lab Biologi.',
    content: [
      'Setiap Jumat pukul 15.00 WIB, tim Bioteknologi berkumpul di Lab Biologi untuk memantau reaktor Microbial Fuel Cell (MFC).',
      'Substrat yang digunakan adalah larutan Eco-Enzyme hasil fermentasi sampah buah kantin Kanisius selama 90 hari. Keberadaan asam organik kompleks dan mikroba aktif menjadi pemicu transfer elektron pada elektroda grafit felt.',
      'Hari ini tegangan terbuka (OCV) mencatatkan rekor baru sebesar 680 mV. Saat dihubungkan secara seri 4 sel, tegangan terakumulasi mencapai 2.5V yang sanggup menyalakan lampu indikator LED kontinu.',
      'Penelitian ini membuktikan bahwa semangat riset STEM di Kolese Kanisius selaras dengan komitmen merawat seluruh alam ciptaan — mengubah limbah organik terbuang menjadi energi bersih bermanfaat.',
    ],
  },
  {
    id: 'cc-jrn-03',
    slug: 'cura-personalis-in-research',
    title: 'Semangat Cura Personalis & Target Finalis Lomba Riset STEM',
    type: 'reflection',
    typeLabel: 'REFLEKSI CC',
    date: '28 September 2026',
    dateISO: '2026-09-28',
    readingTime: '5 MENIT BACA',
    summary:
      'Mengapa riset di Kolese Kanisius menargetkan posisi Juara/Finalis lomba untuk Nilai A, dan bagaimana Cura Personalis membentuk integritas peneliti muda.',
    image: '/images/journal-research-questions.jpg',
    imageCaption: 'Diskusi kelompok riset dan mentoring pribadi bersama pembimbing di depan Smartboard lab.',
    content: [
      'Di Kolese Kanisius, ekstrakulikuler riset sains bukan sekadar formalitas pengisi waktu luang. Sebagai sekolah homogen laki-laki, kami ditempa untuk memiliki daya juang tinggi, kedisiplinan laboratorium, dan standar keunggulan (Magis).',
      'Target mengikuti lomba nasional/internasional hingga melaju ke babak final atau menjadi juara dirancang untuk mendorong setiap siswa memberikan kemampuan terbaiknya demi meraih Nilai A.',
      'Namun, kemenangan lomba bukanlah tujuan akhir. Pendampingan Cura Personalis (perhatian menyeluruh pada tiap pribadi) mengajarkan bahwa ilmu sains yang dipelajari harus memiliki manfaat realistis bagi masyarakat dan menjaga keberlanjutan lingkungan hidup.',
      'Setiap Rabu dan Jumat selama 2 jam, kami tidak hanya menguji hipotesis di laboratorium lengkap (Fisika, Biologi, Kimia), tetapi juga mengasah kedewasaan karakter dan rasa kepedulian sosial.',
    ],
  },
  {
    id: 'cc-jrn-04',
    slug: 'sliding-door-energy-prototype',
    title: 'Inovasi Pintu Geser Kelas: Mengubah Aktivitas Harian Menjadi Daya Listrik',
    type: 'field-notes',
    typeLabel: 'CATATAN FIELD WORK',
    date: '10 September 2026',
    dateISO: '2026-09-10',
    readingTime: '4 MENIT BACA',
    summary:
      'Perakitan sistem gear rack-and-pinion pada pintu geser kelas untuk memanen energi kinetik gerakan dorong-tarik siswa.',
    image: '/images/journal-failed-experiments.jpg',
    imageCaption: 'Uji coba pemasangan rel gerigi pintu geser di Lab Fisika Kanisius.',
    content: [
      'Ide tim Fisika berawal dari pengamatan sederhana di ruang kelas: pintu geser dibuka dan ditutup puluhan kali setiap harinya oleh siswa.',
      'Melalui studi kinetika di Lab Fisika yang dilengkapi peralatan rangkaian listrik lengkap dan Smartboard, kami merancang mekanisme energy harvesting dengan rasio roda gigi 1:12.',
      'Setiap kali pintu didorong, gerakan translasi diputar oleh pinion gear menuju mini generator DC dan mengisi superkapasitor 5.5V.',
      'Sistem inovatif ini menjadi contoh nyata bagaimana permasalahan dan potensi di sekitar lingkungan sekolah dapat diubah menjadi solusi teknologi tepat guna.',
    ],
  },
];

export function getPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}

export const postTypeLabels: Record<PostType, string> = {
  'project-log': 'CATATAN LAB',
  'field-notes': 'CATATAN FIELD WORK',
  'club-update': 'UPDATE EKSKUL',
  'reflection': 'REFLEKSI CC',
};
