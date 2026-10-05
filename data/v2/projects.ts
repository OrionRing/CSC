export type ProjectStatus = 'completed' | 'in-progress' | 'planned' | 'research';

export const statusLabels: Record<ProjectStatus, string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planned: 'Planned',
  research: 'Research',
};

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  categories: string[];
  year: number;
  authors: string[];
  summary: string;
  description: string;
  researchQuestion: string;
  hypothesis: string;
  method: string[];
  observations: string;
  results: string;
  limitations: string[];
  nextSteps: string[];
  competitionContext: string;
  award?: string;
  featured: boolean;
  status?: ProjectStatus;
  duration?: string;
}

export const projects: Project[] = [
  {
    id: 'csc-p01',
    slug: 'cqd-acrylic-uv-shield',
    number: '01',
    title: 'Doping Acrylic with Carbon Quantum Dots to Produce Anti UV-A Transparent Material',
    category: 'Chemistry / Nanotechnology',
    categories: ['chemistry', 'physics'],
    year: 2026,
    authors: ['Davis Leon Palsha Sitorus', 'Laszlo Uria Maleh'],
    summary:
      'Sintesis Carbon Quantum Dots (CQD) dari asam sitrat dan urea untuk didopingkan ke dalam matriks akrilik, menghasilkan panel kaca bening penangkal radiasi UV-A dengan memanfaatkan fenomena pendaran cahaya tampak.',
    description:
      'Radiasi ultraviolet gelombang panjang (UV-A: 315–400 nm) mampu menembus kaca jendela standar dan memicu kerusakan material maupun fotopenuaan kulit. Penelitian ini mensintesis Carbon Quantum Dots (CQD) berbahan baku organik ramah lingkungan. Larutan suspensi CQD dicampurkan secara homogen ke dalam resin akrilik transparan sebelum proses polimerisasi, menciptakan material proteksi radiasi yang tetap mempertahankan kejernihan optik.',
    researchQuestion:
      'Bagaimana pengaruh konsentrasi suspensi Carbon Quantum Dots (CQD) terhadap persentase pelemahan radiasi UV-A dan nilai kejernihan transparansi pada material akrilik transparan?',
    hypothesis:
      'Peningkatan konsentrasi dispersi CQD akan meningkatkan efisiensi penyerapan radiasi UV-A melalui konversi fluoresensi fotoluminesensi tanpa mengorbankan transmitansi cahaya pada spektrum kasatmata.',
    method: [
      'Sintesis CQD menggunakan prekursor asam sitrat dan urea melalui metode pirolisis termal di laboratorium kimia.',
      'Karakterisasi fotoluminesensi larutan CQD di bawah paparan lampu sinar UV 365 nm.',
      'Pembuatan lembaran akrilik dengan variasi konsentrasi dopan CQD (0.01 g/100ml hingga 0.05 g/100ml).',
      'Pengukuran daya serap absorbansi dan transmisi UV-A menggunakan sensor radiometer ultraviolet terkalibrasi.',
      'Uji kejernihan optik transmitansi cahaya tampak (visible light).',
    ],
    observations:
      'Partikel CQD yang terdispersi dalam akrilik memancarkan fluoresensi hijau-kebiruan (greenish-blue light) yang kuat saat terpapar sinar UV. Lembaran akrilik secara visual tetap tembus pandang jernih.',
    results:
      'Pada konsentrasi suspensi 0,05 g/100ml, akrilik hasil doping CQD berhasil memblokir hingga 61,9% paparan radiasi UV-A, membuktikan potensinya sebagai material kaca pelindung hemat biaya dan ramah lingkungan.',
    limitations: [
      'Dispersi partikel nano memerlukan pengadukan ultrasonik lebih intensif untuk meminimalkan aglomerasi pada konsentrasi lebih tinggi.',
    ],
    nextSteps: [
      'Pengembangan formulasi pelapisan film tipis pada kaca jendela gedung sekolah.',
      'Pengujian stabilitas fotodegradasi CQD pada paparan sinar matahari langsung selama 6 bulan.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) & Publikasi Extended Abstract',
    featured: true,
  },
  {
    id: 'csc-p02',
    slug: 'pcm-solar-panel-cooling',
    number: '02',
    title: 'Sistem Pendingin Pasif Panel Surya Berbasis Phase Change Material (PCM) Alami',
    category: 'Physics / Renewable Energy',
    categories: ['physics', 'engineering'],
    year: 2026,
    authors: ['Jonathan Paul Setiawan', 'Rafael Malaka Dala Da Gomez', 'Stevario Anathapindika Agung'],
    summary:
      'Perancangan sistem pendingin pasif tanpa listrik untuk panel surya mini 12V di iklim tropis menggunakan wadah aluminium berisi Phase Change Material (minyak kelapa dan lilin kedelai) terintegrasi pipa radiator tembaga.',
    description:
      'Efisiensi konversi panel surya mengalami penurunan drastis sekitar 0,4% per setiap kenaikan suhu 1°C di atas 25°C. Di iklim tropis Indonesia, suhu permukaan panel fotovoltaik dapat mencapai 50–70°C. Proyek ini merancang mekanisme pembuangan panas pasif dengan memanfaatkan kalor laten peleburan material pengubah fase (PCM) berbasis bahan nabati (minyak kelapa dan lilin kedelai) yang ditempatkan di bagian belakang panel.',
    researchQuestion:
      'Seberapa besar penurunan suhu permukaan panel dan peningkatan efisiensi daya listrik (P = V × I) yang dapat dicapai melalui sistem pendingin PCM alami pada siklus leleh-beku berulang?',
    hypothesis:
      'Penyerapan panas oleh kalor laten PCM saat bertransformasi dari fase padat ke cair akan menstabilkan suhu panel di dekat titik leleh material, menghasilkan kenaikan output daya listrik yang terukur dan konsisten.',
    method: [
      'Karakterisasi termal titik leleh dan kapasitas kalor laten minyak kelapa dan lilin kedelai.',
      'Fabrikasi wadah penampung aluminium dengan kontak termal konduktif tinggi di belakang panel surya 12V.',
      'Pemasangan pipa tembaga eksternal sebagai radiator pasif pendingin alami untuk mempercepat pemadatan kembali PCM.',
      'Simulasi pemanasan radiasi tropis terkontrol menggunakan lampu pemanas halogen.',
      'Pencatatan kontinu suhu permukaan panel (°C) dan keluaran daya listrik (V, I) menggunakan multimeter digital pada beberapa siklus termal.',
    ],
    observations:
      'Panel surya dengan pendingin PCM memperlihatkan laju kenaikan suhu yang jauh lebih lambat dibandingkan panel kontrol tanpa pendingin saat dihangatkan.',
    results:
      'Sistem pendingin PCM alami sukses meredam lonjakan panas panel, menjaga efisiensi fotovoltaik lebih tinggi dan membuktikan kestabilan performa pada siklus termal berulang tanpa mengonsumsi energi listrik tambahan.',
    limitations: [
      'Pelepasan panas kembali dari cairan PCM ke udara sekitar pada malam hari memerlukan ventilasi radiator yang memadai.',
    ],
    nextSteps: [
      'Uji coba lapangan jangka panjang di atap gedung Kolese Kanisius di bawah terik matahari Jakarta.',
      'Optimalisasi geometri wadah penampung aluminium untuk efisiensi transfer panas maksimal.',
    ],
    competitionContext: 'Science Project Competition (SPC) EUREKA! ITB 2026',
    featured: true,
  },
  {
    id: 'csc-p03',
    slug: 'rice-water-microbial-fuel-cell',
    number: '03',
    title: 'Pemanfaatan Air Cucian Beras sebagai Substrat Double-Chamber Microbial Fuel Cell (MFC)',
    category: 'Biology / Bio-Energy',
    categories: ['biology', 'environmental'],
    year: 2024,
    authors: ['Ananda Bernard Hizkia'],
    summary:
      'Inovasi pemanenan energi listrik mikro ramah lingkungan berbasis bio-elektrokimia memanfaatkan air cucian beras rumah tangga yang kaya karbohidrat sebagai substrat elektrogenik.',
    description:
      'Air cucian beras mengandung nutrisi pati dan karbohidrat tinggi yang umumnya langsung dibuang menjadi limbah domestik. Riset ini memanfaatkan limbah organik tersebut sebagai bahan bakar nutrisi bagi koloni bakteri elektrogenik di dalam reaktor Microbial Fuel Cell (MFC) tipe dual-chamber. Reaksi metabolik bakteri melepaskan elektron pada anoda dan proton yang dialirkan menuju katoda melalui jembatan garam.',
    researchQuestion:
      'Bagaimana efektivitas degradasi substrat air cucian beras dalam menghasilkan kerapatan arus listrik dan voltase kontinu pada reaktor MFC dua ruang?',
    hypothesis:
      'Kandungan glukosa dan amilum terlarut dalam air cucian beras mampu menopang pertumbuhan bakteri bio-elektrogenik untuk menghasilkan beda potensial listrik yang stabil.',
    method: [
      'Preparasi reaktor akrilik double-chamber dengan anoda dan katoda serat karbon grafit.',
      'Pembuatan jembatan garam agar-agar gelatin pekat KCl sebagai membran penghubung transfer proton.',
      'Inokulasi lumpur aktif biologis dan substrat air cucian beras terfermentasi pada ruang anoda.',
      'Pengukuran beda potensial Open Circuit Voltage (OCV) dan arus harian menggunakan multimeter presisi tinggi.',
      'Pengujian kemampuan catu daya terhadap beban resistor dan lampu LED indikator.',
    ],
    observations:
      'Tegangan reaktor melonjak secara bertahap dalam 48 jam pertama masa inkubasi seiring mikroba menguraikan karbohidrat cair.',
    results:
      'Reaktor double-chamber MFC berhasil menghasilkan tegangan stabil yang mampu menyalakan perangkat elektronik berdaya rendah, sekaligus menurunkan beban senyawa organik limbah domestik.',
    limitations: [
      'Resistansi dalam membran jembatan garam membatasi daya keluaran maksimum.',
    ],
    nextSteps: [
      'Peningkatan efisiensi sel menggunakan elektroda berbasis Carbon Cloth dan membran penukar kation komersial.',
    ],
    competitionContext: 'Indonesia International Invention Expo (IIIEX) 2024',
    award: 'Gold Medal — Environment Category (IIIEX 2024)',
    featured: true,
  },
  {
    id: 'csc-p04',
    slug: 'arduino-tens-device-prototype',
    number: '04',
    title: 'Prototipe Alat Transcutaneous Electrical Nerve Stimulation (TENS) Berbasis Arduino',
    category: 'Health / Biomedical Engineering',
    categories: ['engineering', 'biology'],
    year: 2024,
    authors: ['Nobiel Utoro', 'Fransiskus Jonathan Muljadi', 'Haposan Christian Gultom', 'Nobuhiro Komatsuda'],
    summary:
      'Pengembangan perangkat medis portabel berbiaya terjangkau berbasis mikrokontroler Arduino Uno untuk stimulasi saraf pereda nyeri fisiologis berlandaskan Gate Control Theory.',
    description:
      'Transcutaneous Electrical Nerve Stimulation (TENS) merupakan metode terapi non-invasif yang menghantarkan impuls arus listrik mikro melalui elektroda kulit untuk memblokir sinyal rasa sakit menuju otak. Proyek ini merancang perangkat TENS open-source bertenaga portabel dengan pengaturan frekuensi dan lebar pulsa yang dapat dikustomisasi, dilengkapi indikator keselamatan digital.',
    researchQuestion:
      'Bagaimana akurasi parameter gelombang stimulasi (frekuensi 2–150 Hz dan lebar pulsa 30–260 μs) yang dapat dihasilkan oleh mikrokontroler dengan standar keamanan kelistrikan?',
    hypothesis:
      'Pemrograman timer mikrokontroler dan sirkuit penguat daya transistor mampu menghasilkan pulsa elektrik bifasik yang presisi dan stabil sesuai rentang terapeutik klinis.',
    method: [
      'Perancangan arsitektur sirkuit berbasis Arduino Uno dan modul pengatur modulasi lebar pulsa (PWM).',
      'Pemrograman antarmuka pengguna digital dengan potensiometer dan layar LCD/LED indikator parameter.',
      'Pengujian karakterisasi bentuk gelombang dan tegangan keluaran menggunakan osiloskop laboratorium fisika.',
      'Penerapan modul proteksi arus berlebih (overcurrent safety cutoff).',
    ],
    observations:
      'Sinyal gelombang elektrik pulsa yang diamati pada layar osiloskop memperlihatkan kestabilan frekuensi yang presisi pada rentang uji 2 Hz hingga 150 Hz.',
    results:
      'Prototipe perangkat TENS sukses mensimulasikan gelombang pulsa analgesik terapeutik secara akurat dalam batas voltase aman, serta meraih penghargaan internasional di bidang inovasi sains terapan.',
    limitations: [
      'Protokol uji coba klinis pada subjek manusia dibatasi oleh pertimbangan kode etik riset sekolah.',
    ],
    nextSteps: [
      'Miniaturisasi PCB sirkuit ke dalam modul enclosure cetak 3D seukuran saku dengan baterai isi ulang.',
    ],
    competitionContext: 'Youth International Science Fair (YSIF) 2024',
    award: 'Silver Medal — Innovation Science Category (YSIF 2024)',
    featured: false,
  },
  {
    id: 'csc-p05',
    slug: 'biodiesel-catalyst-optimization',
    number: '05',
    title: 'Optimasi Penggunaan Katalis NaOH dalam Produksi Biodiesel dari Minyak Jelantah',
    category: 'Chemistry / Biofuel',
    categories: ['chemistry', 'environmental'],
    year: 2025,
    authors: ['Reinier Louis Stefano', 'Theodore Rex Semita'],
    summary:
      'Eksperimen transesterifikasi untuk menentukan takaran optimal katalis Natrium Hidroksida (NaOH) guna memaksimalkan rendemen Fatty Acid Methyl Ester (FAME) dari limbah minyak goreng bekas.',
    description:
      'Limbah minyak jelantah berpotensi mencemari perairan jika dibuang sembarangan namun kaya akan trigliserida yang dapat dikonversi menjadi bahan bakar alternatif biodiesel. Penelitian ini menganalisis titik kritis konsentrasi katalis basa NaOH untuk mencegah reaksi samping penyabunan (saponifikasi) yang merugikan.',
    researchQuestion:
      'Berapa massa katalis NaOH paling optimal untuk menghasilkan rendemen metil ester tertinggi tanpa memicu pembentukan emulsi sabun yang mengentalkan produk?',
    hypothesis:
      'Penambahan katalis NaOH pada batas massa 0,2 gram per 100 gram minyak jelantah akan memberikan konversi transesterifikasi tertinggi dengan angka asam terendah.',
    method: [
      'Penyaringan kotoran fisik dan pemanasan awal minyak jelantah untuk menghilangkan kadar air sisa.',
      'Preparasi larutan metoksida dengan melarutkan variasi massa NaOH (0.1g, 0.2g, 0.3g, 0.5g, dan 0.8g) ke dalam metanol murni.',
      'Reaksi transesterifikasi pada suhu terkontrol 60°C selama 60 menit menggunakan magnetic hotplate stirrer.',
      'Pemisahan fase gliserol dan metil ester pada corong pisah laboratorium.',
      'Pencucian (water washing) biodiesel dan uji rendemen massa metil ester yang dihasilkan.',
    ],
    observations:
      'Pada penambahan NaOH di atas 0,5 gram, campuran larutan berubah kental berbusa pekat akibat pembentukan sabun berlebih yang mempersulit pemisahan gliserol.',
    results:
      'Massa optimum katalis terbukti berada pada 0,2 gram NaOH, yang menghasilkan rendemen tertinggi sebesar 46,7 gram metil ester murni dengan penurunan kadar asam lemak bebas (FFA) paling efektif.',
    limitations: [
      'Kualitas minyak jelantah awal yang bervariasi membutuhkan tahapan pra-esterifikasi asam jika angka asam awal terlampau tinggi.',
    ],
    nextSteps: [
      'Pengujian nilai viskositas kinematik dan densitas biodiesel mengacu pada standar SNI Biodiesel.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) 2025',
    featured: false,
  },
  {
    id: 'csc-p06',
    slug: 'mussel-biofilter-ciliwung',
    number: '06',
    title: 'Efektivitas Kerang Hijau, Kerang Dara, dan Kijing sebagai Biofilter Air Sungai Ciliwung',
    category: 'Environmental Science / Biology',
    categories: ['biology', 'environmental'],
    year: 2026,
    authors: ['Javier Nicholas Vito Uisan', 'Vincenso Marco Pujianto', 'Wilbert Lee'],
    summary:
      'Uji perbandingan 3 spesies bivalvia sebagai agen filter-feeder biologis untuk mereduksi parameter pencemar fisik dan kimiawi sampel air Sungai Ciliwung.',
    description:
      'Sungai Ciliwung yang melintasi Jakarta menghadapi tekanan polutan berat berupa partikel tersuspensi, kesadahan tinggi, nitrat, dan nitrit. Penelitian ini mengeksplorasi potensi bioremediasi alami menggunakan tiga jenis kerang (Perna viridis, Tegillarca granosa, dan Pilsbryoconcha exilis) sebagai organisme penyaring polutan air tanpa bahan kimia sintetis.',
    researchQuestion:
      'Spesies kerang manakah yang memiliki kapasitas biosorpsi tertinggi dalam menurunkan kesadahan, senyawa nitrogen, dan kekeruhan air limbah sungai?',
    hypothesis:
      'Setiap spesies memiliki afinitas penyerapan yang spesifik terhadap ion tertentu; kerang air tawar (kijing) akan memiliki daya tahan fisiologis lebih baik dalam media air sungai.',
    method: [
      'Pengambilan sampel air uji dari titik representatif aliran Sungai Ciliwung Jakarta.',
      'Aklimatisasi kelompok kerang pada tangki aerasi laboratorium biologi.',
      'Pemaparan sampel kerang dalam akuarium uji dengan volume dan durasi waktu filtrasi terukur.',
      'Pengujian parameter kualitas air laboratorium: pH, Total Dissolved Solids (TDS), kesadahan total, asam sianurat, nitrat, nitrit, dan fluorida.',
    ],
    observations:
      'Kerang dara melepaskan senyawa hemoglobin ke dalam air saat kondisi stres sehingga mengubah air menjadi agak kemerahan, sedangkan kerang hijau memperlihatkan laju pembersihan air yang sangat aktif.',
    results:
      'Kerang hijau (Perna viridis) terbukti paling efektif dalam mereduksi kadar asam sianurat, fluorida, serta senyawa nitrat dan nitrit. Sementara kerang dara paling unggul dalam menurunkan kesadahan air.',
    limitations: [
      'Toleransi salinitas kerang laut saat ditempatkan di air tawar sungai membatasi durasi filtrasi biologis langsung.',
    ],
    nextSteps: [
      'Riset sistem biofilter hibrida berbasis cangkang kerang teraktivasi untuk filtrasi pasif jangka panjang.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) Research Paper',
    featured: false,
  },
  {
    id: 'csc-p07',
    slug: 'star-trails-webgl-simulator',
    number: '07',
    title: 'Pengembangan Visualisasi 3D Star Trails Berbasis WebGL Menggunakan Three.js',
    category: 'Computer Science / Astronomy',
    categories: ['engineering', 'physics'],
    year: 2026,
    authors: ['Darrel Jeremiah Rondonuwu', 'Natalius Gabriel'],
    summary:
      'Aplikasi simulasi komputasi visual berbasis web untuk memprediksi dan memodelkan pola lintasan jejak bintang (star trails) bagi astrofotografer dengan koordinat geografis nyata.',
    description:
      'Astrofotografi jejak bintang membutuhkan perencanaan sudut bidik kamera dan durasi eksposur yang matang agar menghasilkan komposisi melingkar kutub langit yang sempurna. Menggunakan Three.js, WebGL, dan SvelteKit, penelitian ini membangun platform interaktif 3D yang mengkalkulasi koordinat bola langit secara real-time berdasarkan posisi lintang, bujur, dan waktu pengamatan pengguna.',
    researchQuestion:
      'Bagaimana optimalisasi algoritma rendering WebGL dalam memvisualisasikan puluhan ribu lintasan rotasi bintang dengan waktu komputasi responsif (<500 ms)?',
    hypothesis:
      'Pemanfaatan matriks transformasi GPU melalui shader WebGL kustom akan mempercepat komputasi kalkulasi rotasi lintasan bintang tanpa membebani performa browser klien.',
    method: [
      'Pemetaan katalog posisi koordinat ekuatorial bintang terang (Right Ascension & Declination).',
      'Formulasi matematika konversi koordinat ekuatorial ke koordinat horizontal horizon lokal pengamat.',
      'Implementasi rendering mesh lintasan orbit bintang menggunakan pustaka Three.js.',
      'Tolok ukur (benchmarking) waktu komputasi render terhadap variasi durasi eksposur kamera (1 jam hingga 8 jam).',
    ],
    observations:
      'Rendering interaktif berjalan mulus pada 60 FPS pada pengujian perangkat browser modern standar.',
    results:
      'Aplikasi berhasil memvisualisasikan kurva star trails secara presisi dengan waktu re-rendering di bawah 500 ms untuk perubahan durasi, serta 1,7–3,1 detik untuk kalkulasi ulang penuh koordinat geografis.',
    limitations: [
      'Kepadatan visualisasi bintang teropong pada sudut pandang sangat lebar memerlukan penyesuaian level-of-detail (LOD).',
    ],
    nextSteps: [
      'Integrasi data polusi cahaya langit malam (Bortle Scale) ke dalam sistem simulasi pencahayaan.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) Software Track',
    featured: false,
  },
  {
    id: 'csc-p08',
    slug: 'mini-alpha-stirling-engine',
    number: '08',
    title: 'Rancang Bangun Mesin Stirling Mini Tipe Alfa sebagai Konverter Energi Panas',
    category: 'Physics / Mechanical Engineering',
    categories: ['physics', 'engineering'],
    year: 2026,
    authors: ['Reinier Louis Stefano', 'Jason Nathanael Widjasena'],
    summary:
      'Prototipe mesin termal eksternal siklus tertutup tipe Stirling alfa yang mengonversi energi termal buangan menjadi energi kinetik rotasi poros flywheel.',
    description:
      'Mesin Stirling merupakan mesin pembakaran luar (external combustion engine) berefisiensi termal tinggi yang beroperasi berdasarkan ekspansi dan kompresi siklik udara pada dua silinder dengan temperatur berbeda. Riset ini merancang prototipe kompak tipe alfa untuk mempelajari hubungan antara gradien suhu silinder terhadap kecepatan sudut rotasi mesin.',
    researchQuestion:
      'Bagaimana korelasi antara beda temperatur sumber panas dengan silinder pendingin terhadap laju putaran (RPM) yang dihasilkan oleh poros mesin Stirling mini?',
    hypothesis:
      'Laju putaran (RPM) flywheel akan meningkat secara proporsional linier terhadap pertambahan suhu pada silinder panas sesuai hukum termodinamika gas ideal.',
    method: [
      'Desain mekanik silinder panas, silinder dingin, piston penekan, dan flywheel penyeimbang.',
      'Fabrikasi komponen presisi menggunakan komponen logam dan kaca tahan panas di lab fisika.',
      'Pengujian operasional menggunakan burner api dengan pemantauan suhu termokopel digital.',
      'Pengukuran putaran rotasi per menit (RPM) menggunakan tachometer digital tanpa kontak.',
    ],
    observations:
      'Mesin mulai berputar spontan setelah silinder panas mencapai suhu awal minimal 85°C dengan dorongan awal pada flywheel.',
    results:
      'Pengujian membuktikan bahwa putaran flywheel meningkat secara linier dengan temperatur: menghasilkan 40 RPM pada suhu 100°C dan melonjak hingga 225 RPM pada suhu 200°C.',
    limitations: [
      'Kerapatan seal piston silinder membutuhkan pelumasan mikro berkala untuk mencegah kebocoran tekanan udara.',
    ],
    nextSteps: [
      'Pemasangan generator magnet permanen mikro pada poros untuk menghasilkan daya listrik langsung dari panas buangan.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) Engineering Showcase',
    featured: false,
  },
  {
    id: 'csc-p09',
    slug: 'porous-asphalt-water-filtration',
    number: '09',
    title: 'Penerapan Perkerasan Aspal Berpori (Porous Asphalt) dari Sampah Plastik & Batuan Vulkanik',
    category: 'Civil & Environmental Engineering',
    categories: ['engineering', 'environmental'],
    year: 2024,
    authors: ['Yarra Wiryadenta', 'Joshua Viencent Tandibrata', 'Nobuhiro Komatsuda'],
    summary:
      'Pengembangan aspal porus ramah lingkungan berbahan limbah plastik daur ulang (PET/PE) dan agregat batuan beku vulkanik untuk meningkatkan infiltrasi air hujan dan mencegah banjir.',
    description:
      'Genangan air pada permukaan jalan perkotaan Jakarta sering memicu kecelakaan lalu lintas dan banjir perkotaan akibat rendahnya resapan air. Penelitian ini merancang formula perkerasan aspal berpori menggunakan matriks plastik limbah dan batuan vulkanik untuk menciptakan saluran drainase alami vertikal, yang kinerjanya dipantau menggunakan sensor ultrasonik berbasis Arduino.',
    researchQuestion:
      'Berapa nilai koefisien permeabilitas air dan ketahanan kuat tekan mekanis dari campuran aspal porus berbahan limbah plastik dan batuan vulkanik?',
    hypothesis:
      'Struktur pori yang saling terhubung (interconnected voids) pada agregat batuan beku vulkanik akan menghasilkan laju infiltrasi air tertinggi dengan daya dukung beban yang kokoh.',
    method: [
      'Preparasi agregat batuan beku vulkanik dan pencacahan limbah plastik jenis PET/PE.',
      'Pencampuran binder aspal termodifikasi plastik pada suhu panas terkontrol.',
      'Pencetakan briket spesimen aspal porus laboratorium.',
      'Uji laju permeabilitas hidrolik vertikal (falling head permeability test).',
      'Pengujian kuat tekan beban mekanis dan integrasi sensor ultrasonik untuk pemantauan laju resapan.',
    ],
    observations:
      'Struktur pori saling menyambung dengan baik tanpa terjadi keretakan agregat saat dialiri air dalam debit deras.',
    results:
      'Spesimen berbahan agregat batuan vulkanik mencatat permeabilitas air terbaik mencapai 0,28 cm/detik dan mampu menahan kuat tekan beban hingga 700 Newton, membuktikan kelayakannya sebagai jalan resapan perkotaan.',
    limitations: [
      'Penyumbatan partikel debu dan lumpur tanah (clogging) memerlukan perawatan berkala dengan penyemprotan air bertekanan.',
    ],
    nextSteps: [
      'Penerapan uji coba perkerasan pada area parkir atau jalur pejalan kaki kampus Kolese Kanisius.',
    ],
    competitionContext: 'Essay Competition DISCO 7th 2024',
    award: 'Finalis Karya Ilmiah Teknik Sipil & Lingkungan',
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project {
  return projects.find((p) => p.featured) ?? projects[0];
}
