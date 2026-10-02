export type ProjectStatus = 'completed' | 'in-progress' | 'planned' | 'research';

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  categories: string[];
  year: number;
  status: ProjectStatus;
  summary: string;
  description: string;
  researchQuestion: string;
  hypothesis: string;
  method: string[];
  observations: string;
  results: string;
  limitations: string[];
  nextSteps: string[];
  team: string[];
  duration: string;
  image: string;
  imageCaption: string;
  featured: boolean;
  competitionTarget?: string;
  facilitiesUsed?: string[];
}

export const projects: Project[] = [
  {
    id: 'cc-proj-01',
    slug: 'cqd-acrylic-uv-shield',
    number: '01',
    title: 'Pendopingan Akrilik Antiradiasi UV-A dengan Carbon Quantum Dots (CQD)',
    category: 'Chemistry / Nanotechnology',
    categories: ['chemistry', 'physics'],
    year: 2026,
    status: 'completed',
    summary:
      'Sintesis Carbon Quantum Dots (CQD) dari limbah biomassa dan pendopingan pada matriks akrilik untuk menghasilkan panel pelindung radiasi UV-A berdaya serap tinggi tanpa mengurangi transparansi optik.',
    description:
      'Penelitian ini memanfaatkan teknologi nanokimia untuk mensintesis titik kuantum karbon (CQD) yang dapat menyerap radiasi ultraviolet panjang gelombang UV-A (315–400 nm). CQD hasil sintesis diintegrasikan ke dalam lembaran akrilik transparan. Karakterisasi transmitansi dan absorbansi diukur secara presisi menggunakan Spektrofotometer UV-Vis di Lab Kimia Kolese Kanisius.',
    researchQuestion:
      'Bagaimana konsentrasi dopan Carbon Quantum Dots (CQD) mempengaruhi efisiensi absorbansi radiasi UV-A dan nilai transmitansi cahaya tampak pada matriks polimer akrilik?',
    hypothesis:
      'Doping CQD pada konsentrasi optimal 0,5% b/v akan meningkatkan penyerapan radiasi UV-A hingga >92% namun tetap mempertahankan transparansi cahaya tampak >85%, sehingga aman digunakan sebagai kaca antiradiasi.',
    method: [
      'Sintesis CQD menggunakan metode pirolisis hidrothermal dari biomassa lokal pada suhu 180°C selama 4 jam di Lab Kimia/Fisika.',
      'Karakterisasi awal struktur fluoresensi dan absorbansi CQD menggunakan Spektrofotometer UV-Vis.',
      'Pencampuran CQD ke dalam larutan prekursor akrilik (Methyl Methacrylate) dengan variasi konsentrasi 0.1%, 0.3%, 0.5%, dan 0.8%.',
      'Pencetakan lembaran akrilik tebal 3mm dan curing bawah sinar UV.',
      'Uji spektrum radiasi UV-A dan transmitansi spektral menggunakan Spektrofotometer UV-Vis dan sensor radiometer.',
      'Uji ketahanan termal dan mekanis sampel akrilik.',
    ],
    observations:
      'Akrilik yang didoping CQD menunjukkan fluoresensi biru kehijauan di bawah lampu UV 365 nm. Pada uji Spektrofotometer UV-Vis, grafik absorbansi menunjukkan puncak tajam pada rentang 320–380 nm.',
    results:
      'Akrilik dengan doping CQD 0,5% berhasil memblokir 94,8% paparan UV-A dengan tingkat kejernihan optik (transmitansi visibel) mencapai 87,2%. Hasil ini memenuhi standar kualifikasi kompetisi riset nasional dan meraih penghargaan karya terbaik.',
    limitations: [
      'Homogenitas dispersi CQD dalam akrilik membutuhkan teknik pengadukan ultrasonik yang lebih lama.',
      'Daya tahan CQD terhadap paparan radiasi UV ekstrem jangka panjang (>6 bulan) masih dalam tahap pengujian berkala.',
    ],
    nextSteps: [
      'Patenkan formulasi dopan CQD akrilik.',
      'Mengembangkan prototipe kacamata dan kaca jendela laboratorium antiradiasi UV-A.',
      'Menyusun naskah ilmiah untuk publikasi jurnal ilmiah remaja nasional.',
    ],
    team: ['Tim Kimia Nanomaterial CC', 'Koordinator Lab Kimia', 'Siswa Kelas XI STEM'],
    duration: 'Sesi Rabu & Jumat (Agustus – Oktober 2026)',
    image: '/images/project-indicators.jpg',
    imageCaption: 'Pengujian spektrum transmitansi akrilik CQD dengan Spektrofotometer UV-Vis.',
    featured: true,
    competitionTarget: 'Finalis & Juara 1 OPSI / LIPI Youth Science Competition (Nilai A)',
    facilitiesUsed: ['Spektrofotometer UV-Vis', 'Lab Kimia', 'Smartboard Lab'],
  },
  {
    id: 'cc-proj-02',
    slug: 'distillation-waste-energy',
    number: '02',
    title: 'Pembuatan Energi Listrik dari Air Buangan Alat Destilasi Aquadest',
    category: 'Environmental Engineering / Energy',
    categories: ['engineering', 'environmental'],
    year: 2026,
    status: 'completed',
    summary:
      'Pendekatan Context-Problem-Solution untuk memanen energi thermal dan kinetik dari saluran air pendingin buangan alat destilator aquadest sekolah menjadi energi listrik mikro terbarukan.',
    description:
      'Context: Laboratorium Kimia Kolese Kanisius mengoperasikan alat destilasi aquadest secara rutin yang menghasilkan debit air hangat buangan cukup besar.\nProblem: Panas dan aliran air buangan tersebut terbuang sia-sia ke saluran pembuangan (thermal waste).\nSolution: Tim merancang sistem mikro-pembangkit energi hibrida menggabungkan modul Thermoelectric Generator (TEG Seebeck effect) dan turbin hidro mikro pada pipa buangan untuk memanen daya listrik.',
    researchQuestion:
      'Berapa daya listrik maksimal (mW) yang dapat dihasilkan dari konversi energi thermal dan kinetik air buangan alat destilasi aquadest 5 L/jam di laboratorium sekolah?',
    hypothesis:
      'Kombinasi 4 modul TEG SP1848 dan 1 micro-hydro generator 5V mampu menghasilkan tegangan terakumulasi >4.2V yang cukup untuk mengisi daya powerbank baterai laboratorium.',
    method: [
      'Pemetaan suhu dan debit air buangan alat destilator aquadest (Suhu masuk pendingin: 28°C, Suhu keluar: 62°C, Debit: 1.2 L/menit).',
      'Merancang casing konduktor tembaga yang menempel pada pipa pembuangan panas destilator.',
      'Memasang 4 modul Seebeck TEG di antara pipa panas dan heatsink pendingin udara.',
      'Integrasi micro hydro-generator pada ujung outlet saluran pembuangan.',
      'Pemasangan modul Boost Converter Step-Up DC-DC dan indikator daya digital.',
      'Pengukuran daya listrik kontinu selama 2 jam proses destilasi di Lab Kimia.',
    ],
    observations:
      'Selisih suhu ΔT sebesar 31°C menghasilkan tegangan TEG stabil sebesar 3.4V. Tambahan dari mikro-turbin menambah 1.1V, menghasilkan daya total yang stabil.',
    results:
      'Sistem berhasil memanen energi terbuang dengan daya rerata 620 mW selama proses destilasi. Energi ini disimpan dalam modul akumulatif untuk menyalakan sensor monitor suhu lab.',
    limitations: [
      'Efisiensi konversi modul TEG komersial terbatas pada ~5-8%.',
      'Fluktuasi debit air destilasi mempengaruhi kestabilan output hidro mikro.',
    ],
    nextSteps: [
      'Pemasangan pipa Heat Pipe berbahan tembaga murni untuk meningkatkan ΔT.',
      'Replikasi sistem pada alat destilasi di laboratorium biologi.',
    ],
    team: ['Tim Fisika & Teknik Lingkungan CC', 'Siswa Kelas XII STEM'],
    duration: 'Sesi Pertemuan Rabu & Jumat (September 2026)',
    image: '/images/project-water-filtration.jpg',
    imageCaption: 'Prototipe pemanen energi TEG & mikro-turbin pada alat destilasi aquadest.',
    featured: false,
    competitionTarget: 'Juara 1 National STEM Energy Innovation (Nilai A)',
    facilitiesUsed: ['Alat Destilasi Aquadest', 'Set Rangkaian Listrik Komplit', 'Lab Fisika'],
  },
  {
    id: 'cc-proj-03',
    slug: 'sliding-door-kinetic-generator',
    number: '03',
    title: 'Perakitan Sistem Generator Listrik Skala Kecil dari Pintu Geser Kelas',
    category: 'Physics / Mechanical Engineering',
    categories: ['physics', 'engineering'],
    year: 2026,
    status: 'in-progress',
    summary:
      'Perakitan mekanisme pemanen energi mekanik (energy harvesting) dari gerakan translasi pintu geser ruang kelas Kolese Kanisius untuk menghasilkan daya listrik ramah lingkungan.',
    description:
      'Setiap hari, pintu geser ruang kelas di Kolese Kanisius dibuka dan ditutup puluhan kali oleh siswa dan guru. Penelitian ini merancang sistem mekanis rack-and-pinion terintegrasi dengan flywheel mini dan generator DC magnet permanen untuk mengubah energi kinetik geseran pintu menjadi energi listrik simpanan.',
    researchQuestion:
      'Bagaimana efisiensi rasio roda gigi (gear ratio) pada mekanisme rack-and-pinion pintu geser terhadap jumlah daya listrik yang dapat disimpan per 50 kali bukaan pintu?',
    hypothesis:
      'Rasio gear 1:12 terintegrasi superkapasitor mampu menghasilkan daya simpan yang cukup untuk menyalakan lampu indikator kedatangan guru dan lampu darurat kelas.',
    method: [
      'Studi kinematika lintasan pintu geser kelas (panjang lintasan 1.2 meter, kecepatan rerata bukaan 0.8 m/s).',
      'Fabrikasi rel gerigi (rack) presisi dengan teknologi 3D printer di Lab Fisika.',
      'Perakitan kotak transmisi roda gigi (pinion gear ratio 1:6, 1:12, dan 1:18) tersambung ke generator stepper/DC.',
      'Pemasangan penyearah jembatan dioda (bridge rectifier) dan modul manajemen pengisian superkapasitor 5.5V.',
      'Pengujian jumlah dorongan pintu vs kenaikan tegangan pada superkapasitor.',
    ],
    observations:
      'Pengujian mekanis menunjukkan bukaan pintu yang halus tanpa menambah beban berat berarti saat didorong oleh siswa. Generator merespons cepat pada gear ratio 1:12.',
    results:
      'Prototipe tahap 1 mampu menghasilkan tegangan puncak 6.8V per sekali bukaan pintu cepat. Data pengumpulan energi harian sedang berlangsung.',
    limitations: [
      'Gesekan mekanis pada gerigi membutuhkan pelumasan berkala.',
      'Penyesuaian agar dorongan pintu tetap terasa ringan bagi pengguna.',
    ],
    nextSteps: [
      'Pemasangan pada 4 kelas utama di gedung SMA Kolese Kanisius.',
      'Menghubungkan output listrik ke sistem pencahayaan indikator IoT kelas.',
    ],
    team: ['Tim Mekatronika & Fisika CC', 'Siswa Kelas X & XI STEM'],
    duration: 'Sesi Rutin Rabu & Jumat (Oktober 2026 – Sekarang)',
    image: '/images/project-solar.jpg',
    imageCaption: 'Mekanisme transmisi gear dan generator DC pada miniatur pintu geser kelas.',
    featured: false,
    competitionTarget: 'Finalis Lomba Karya Cipta Teknologi Muda (Nilai A)',
    facilitiesUsed: ['Set Rangkaian Listrik', 'Lab Fisika', 'Smartboard Lab'],
  },
  {
    id: 'cc-proj-04',
    slug: 'eco-enzyme-microbial-fuel-cell',
    number: '04',
    title: 'Penerapan Microbial Fuel Cell (MFC) dari Eco-Enzyme',
    category: 'Biology / Bio-Energy',
    categories: ['biology', 'environmental'],
    year: 2026,
    status: 'in-progress',
    summary:
      'Pemanfaatan substrat organik Eco-Enzyme hasil fermentasi limbah buah kantin sekolah dalam sistem sel bahan bakar mikrobia dual-chamber untuk memanen bio-listrik dan pengolahan limbah.',
    description:
      'Eco-Enzyme kaya akan asam organik dan konsorsium mikroorganisme aktif hasil fermentasi 3 bulan sampah buah & sayur. Penelitian ini menguji formulasi Eco-Enzyme sebagai substrat biologis pada anoda Microbial Fuel Cell (MFC) dengan elektroda grafit berdoping karbon aktif untuk menghasilkan arus listrik ramah lingkungan sekaligus merawat alam ciptaan.',
    researchQuestion:
      'Bagaimana pengaruh variasi konsentrasi larutan Eco-Enzyme terhadap kerapatan daya (power density mW/m²) dan penurunan nilai Chemical Oxygen Demand (COD) substrat dalam sel MFC?',
    hypothesis:
      'Substrat Eco-Enzyme konsentrasi 30% v/v akan memberikan aktivitas mikroba elektrogenik tertinggi, menghasilkan kerapatan daya maksimum dan penurunan COD >70%.',
    method: [
      'Fermentasi limbah kulit buah kantin Kolese Kanisius dengan molase dan air (rasio 3:1:10) selama 90 hari di Lab Biologi.',
      'Fabrikasi reaktor MFC dual-chamber akrilik dengan jembatan garam (salt bridge) agar gelatin-KCl.',
      'Menyiapkan elektroda grafit felt yang dikondisikan dengan aktivasi asam.',
      'Pengukuran kurva polarisasi, tegangan terbuka (Open Circuit Voltage/OCV), dan arus listrik menggunakan multimeter digital presisi.',
      'Analisis kadar asam organik dan pH Eco-Enzyme sebelum dan sesudah uji MFC.',
    ],
    observations:
      'Tegangan OCV mencapai titik stabil 680 mV setelah 48 jam masa inkubasi sel. Larutan Eco-Enzyme menunjukkan aktivitas bio-elektrogenik yang konsisten.',
    results:
      'Reaktor MFC Eco-Enzyme berhasil mengoperasikan jam digital dan indikator LED secara kontinu selama 7 hari tanpa henti, membuktikan potensi bio-energi berkelanjutan.',
    limitations: [
      'Resistansi internal jembatan garam masih cukup tinggi dibanding membran pemutar proton (PEM) komersial.',
      'Membutuhkan penjagaan derajat keasaman (pH) substrat agar mikroba elektrogenik tidak terhambat.',
    ],
    nextSteps: [
      'Ganti jembatan garam dengan membran serat selulosa biopolimer hasil riset mandiri.',
      'Menyusun modul panduan pengolahan sampah organik berbasis MFC untuk komunitas sekolah.',
    ],
    team: ['Tim Bioteknologi & Lingkungan CC', 'Siswa Kelas XI STEM'],
    duration: 'Sesi Rutin Rabu & Jumat (Agustus – Desember 2026)',
    image: '/images/project-plant-growth.jpg',
    imageCaption: 'Reaktor Microbial Fuel Cell (MFC) berbahan substrat Eco-Enzyme di Lab Biologi.',
    featured: false,
    competitionTarget: 'Finalis & Juara International Science Project Olympiad (Nilai A)',
    facilitiesUsed: ['Lab Biologi', 'Set Rangkaian Listrik', 'Smartboard Lab'],
  },
  {
    id: 'cc-proj-05',
    slug: 'local-ingredient-nutribar',
    number: '05',
    title: 'Pembuatan Nutribar dari Bahan Pangan Lokal',
    category: 'Applied Chemistry / Food Technology',
    categories: ['chemistry', 'biology'],
    year: 2026,
    status: 'completed',
    summary:
      'Formulasi sereal batang (nutribar) berbasis bahan pangan lokal terjangkau (sorgum, kelor, ubi ungu) sebagai solusi pangan darurat dan pencegahan stunting berkalori tinggi.',
    description:
      'Dalam semangat keberlanjutan dan kepedulian terhadap permasalahan gizi masyarakat, riset ini memformulasikan produk nutribar padat gizi menggunakan tepung sorgum lokal, ekstrak daun kelor (Moringa oleifera), dan ubi ungu sebagai sumber serat, antioksidan, serta zat besi tinggi.',
    researchQuestion:
      'Berapa komposisi formulasi terbaik pangan lokal (sorgum: kelor: ubi ungu) yang menghasilkan nutribar berdaya simpan tinggi, kandungan energi >400 kcal/100g, serta dapat diterima secara organoleptik?',
    hypothesis:
      'Formulasi rasio 50:15:35 menghasilkan nilai gizi paling seimbang dengan kandungan protein >12%, antioksidan tinggi, serta tekstur renyah yang disukai.',
    method: [
      'Preparasi dan pengeringan bahan pangan lokal di oven laboratorium.',
      'Formulasi variasi adonan dengan perekat alami (madu dan minyak kelapa murni).',
      'Pencetakan dan pemanggangan nutribar pada suhu 150°C.',
      'Uji proksimat kandungan protein, kadar air, karbohidrat, dan lemak di Lab Kimia.',
      'Uji organoleptik (rasa, aroma, warna, tekstur) melibatkan 50 panelis siswa Kolese Kanisius.',
      'Uji ketahanan simpan dan aktivitas air (aw).',
    ],
    observations:
      'Nutribar formulasi 50:15:35 memiliki warna ungu keemasan yang menarik dengan aroma khas sorgum panggang. Panelis memberikan skor penerimaan 4.6/5.0.',
    results:
      'Nutribar berhasil dibuat dengan kandungan energi total 435 kcal per 100 gram, protein 13.2%, dan kaya zat besi. Produk ini sangat potensial sebagai suplemen pangan tanggap darurat.',
    limitations: [
      'Pengujian kadar vitamin lengkap memerlukan fasilitas analisis laboratorium eksternal terakreditasi.',
    ],
    nextSteps: [
      'Pengemasan vakum alumunium foil untuk memperpanjang masa simpan hingga 12 bulan.',
      'Mengajukan prototipe ke ajang inovasi pangan pemuda.',
    ],
    team: ['Tim Kimia Pangan & Kesehatan CC', 'Siswa Kelas X & XII STEM'],
    duration: 'Sesi Rutin Rabu & Jumat (September – Oktober 2026)',
    image: '/images/project-cooling.jpg',
    imageCaption: 'Nutribar pangan lokal hasil formulasi riset laboratorium kimia Kanisius.',
    featured: false,
    competitionTarget: 'Juara 1 Youth Food Technology Competition (Nilai A)',
    facilitiesUsed: ['Lab Kimia', 'Smartboard Lab'],
  },
  {
    id: 'cc-proj-06',
    slug: 'sound-wave-fire-damper',
    number: '06',
    title: 'Pembuatan Alat Peredam dan Supresi Api Berbasis Gelombang Akustik',
    category: 'Physics / Robotics & Fire Safety',
    categories: ['physics', 'engineering'],
    year: 2027,
    status: 'research',
    summary:
      'Inovasi alat peredam dan supresi api otomatis memanfaatkan gelombang suara frekuensi rendah (sound wave fire extinguisher) serta katup peredam untuk proteksi laboratorium.',
    description:
      'Kebakaran di laboratorium kimia/fisika membutuhkan penanganan cepat tanpa bahan kimia basah yang merusak alat presisi. Penelitian ini mengembangkan alat peredam api yang menggunakan gelombang akustik frekuensi 30–60 Hz untuk menekan pasokan oksigen di sekitar titik api (acoustic flame suppression). Alat dilengkapi sensor nyala api (flame sensor) dan katup peredam otomatis.',
    researchQuestion:
      'Berapa frekuensi (Hz) dan dekibel (dB) gelombang suara terbaik yang efektif memadamkan kobaran api hidrokarbon kecil dalam waktu <5 detik?',
    hypothesis:
      'Gelombang suara frekuensi 45 Hz pada intensitas >100 dB mampu mendistorsi batas nyala api dan menghentikan reaksi pembakaran secara instan tanpa residu.',
    method: [
      'Studi literatur akustik dan dinamika fluida pembakaran.',
      'Merancang tabung kolimator akustik (vortex generator) berbahan akrilik dan aluminium.',
      'Integrasi subwoofer daya tinggi 100W dengan sinyal generator frekuensi variabel.',
      'Pemasangan sensor inframerah flame detector dan sistem kendali Arduino/ESP32.',
      'Uji coba pemadaman api uji ukuran 5x5 cm pada kondisi terkontrol aman di Lab Fisika di bawah pengawasan guru advisor.',
    ],
    observations:
      'Tahap simulasi awal di Lab Fisika menunjukkan nyala api lilin dan burner kecil bergoyang hebat dan padam saat diterpa gelombang 40–50 Hz.',
    results:
      'Riset tahap awal membuktikan pemadaman api konsisten dalam kurun waktu 3.2 detik pada frekuensi 44 Hz. Prototipe lengkap sedang disempurnakan untuk lomba tingkat internasional.',
    limitations: [
      'Jangkauan efektif pemadam gelombang suara saat ini terbatas pada jarak <1 meter.',
      'Suara frekuensi rendah memerlukan peredam kebisingan pendukung untuk keamanan pendengaran operator.',
    ],
    nextSteps: [
      'Peningkatan amplifier daya dan pembuatan nozzle pengarah gelombang suara terfokus.',
      'Integrasi dengan sistem katup peredam otomatis pada lemari asam lab.',
    ],
    team: ['Tim Fisika Akustik & Otomasi CC', 'Koordinator Lab Fisika', 'Siswa Kelas XI STEM'],
    duration: 'Sesi Rutin Rabu & Jumat (Riset Berjalan – Target Final 2027)',
    image: '/images/project-biodiversity.jpg',
    imageCaption: 'Tabung kolimator gelombang akustik peredam api dalam uji coba di Lab Fisika.',
    featured: false,
    competitionTarget: 'Target Juara International Applied Science Olympiad (Nilai A)',
    facilitiesUsed: ['Alat Pyrolisis', 'Set Rangkaian Listrik', 'Lab Fisika', 'Smartboard Lab'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project {
  return projects.find((p) => p.featured) ?? projects[0];
}

export const statusLabels: Record<ProjectStatus, string> = {
  'completed': 'Completed (Juara/Finalis)',
  'in-progress': 'In Progress (Rabu & Jumat)',
  'planned': 'Planned (Persiapan Lomba)',
  'research': 'Research Phase (Lab CC)',
};
