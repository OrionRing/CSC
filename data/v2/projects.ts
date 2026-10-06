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
    id: 'csc-01',
    slug: 'cqd-acrylic-uv-shield',
    number: '01',
    title: 'Doping Acrylic with Carbon Quantum Dots to Produce Anti UV-A Transparent Material',
    category: 'Chemistry / Nanotechnology',
    categories: ['chemistry', 'physics'],
    year: 2026,
    authors: ['Davis Leon Palsha Sitorus', 'Laszlo Uria Maleh'],
    summary:
      'Synthesis of Carbon Quantum Dots (CQDs) from citric acid and urea, embedded into an acrylic matrix to produce optical-grade clear windows that block harmful UV-A radiation via photoluminescence.',
    description:
      'Long-wave ultraviolet radiation (UV-A: 315–400 nm) readily penetrates conventional silicate window glass, causing photochemical degradation and cellular skin damage. This research explores bottom-up hydrothermal synthesis of fluorescent Carbon Quantum Dots (CQDs) from eco-friendly organic precursors. Suspended CQD nanoparticles were uniformly cast into clear poly(methyl methacrylate) acrylic sheets, yielding a transparent composite that converts harmful UV-A rays into benign visible light.',
    researchQuestion:
      'How does CQD suspension concentration correlate with UV-A radiation attenuation and visible light optical transmittance in doped acrylic sheets?',
    hypothesis:
      'Higher dispersion densities of CQDs will enhance UV-A absorption via down-conversion fluorescence while maintaining visible light transparency above 85%.',
    method: [
      'Thermal pyrolysis synthesis of CQDs using stoichiometric ratios of citric acid and urea in the chemistry lab.',
      'Photoluminescence confirmation under 365 nm UV illumination.',
      'Homogeneous dispersion of CQDs into acrylic monomer resin across concentrations (0.01 to 0.05 g/100ml).',
      'Polymerization curing and precision optical absorbance profiling with spectrophotometry.',
      'Surface hardness and thermal stability stress testing.',
    ],
    observations:
      'Doped acrylic samples exhibited brilliant greenish-blue fluorescence under UV excitation while remaining visibly crystal clear in daylight.',
    results:
      'A 0.05 g/100ml suspension concentration achieved 61.9% UV-A blocking efficiency with negligible visible light haze, demonstrating a scalable, low-cost architectural daylighting shield.',
    limitations: [
      'Ultrasonic dispersion duration must be extended at higher concentrations to prevent nanoscale agglomeration.',
    ],
    nextSteps: [
      'Formulate thin-film spray-coating methods for existing school windows.',
      'Perform 6-month continuous accelerated weathering tests.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) & Extended Abstract Publication',
    featured: true,
  },
  {
    id: 'csc-02',
    slug: 'pcm-solar-panel-cooling',
    number: '02',
    title: 'Passive Phase Change Material (PCM) Cooling System for Tropical Solar Panels',
    category: 'Physics / Renewable Energy',
    categories: ['physics', 'engineering'],
    year: 2026,
    authors: ['Jonathan Paul Setiawan', 'Rafael Malaka Dala Da Gomez', 'Stevario Anathapindika Agung'],
    summary:
      'Designing a zero-electricity passive thermal management system for 12V photovoltaic panels using organic PCMs (coconut oil & soy wax) backed by passive copper heat pipes.',
    description:
      'Solar cell efficiency drops approximately 0.4% per 1°C increase above 25°C. In equatorial climates like Jakarta, solar panel surface temperatures routinely exceed 60°C. This investigation designs and tests a zero-power passive cooling jacket utilizing latent heat absorption of natural Phase Change Materials (coconut oil and soy wax) housed in a rear-mounted aluminium chamber with copper tube radiators.',
    researchQuestion:
      'To what extent does a natural PCM cooling enclosure lower solar surface temperatures and preserve output electrical power (P = V × I) across repeated cyclic heating?',
    hypothesis:
      'Latent heat absorption during solid-to-liquid phase transitions will buffer panel temperatures near the melting point, stabilizing power output without external pump or fan energy.',
    method: [
      'Thermal characterization of melting points and latent heat capacities of coconut oil and soy wax.',
      'Fabrication of high thermal conductivity aluminium rear-mount enclosure for a 12V test panel.',
      'Integration of copper loop heat sinks for nocturnal passive heat dissipation and re-solidification.',
      'Simulated equatorial solar heating cycles using calibrated halogen thermal lamps.',
      'Real-time logging of panel surface temperature and electrical power output.',
    ],
    observations:
      'PCM-backed panels showed significantly dampened temperature spikes compared to uncooled reference panels under identical radiant heat.',
    results:
      'The natural PCM heat sink maintained cooler panel operating temperatures across consecutive thermal cycles, resulting in measurable electrical efficiency preservation without parasitic energy draw.',
    limitations: [
      'Nocturnal cooling rates depend on ambient air convection for complete re-solidification.',
    ],
    nextSteps: [
      'Conduct long-term outdoor rooftop trials under natural Jakarta sunlight.',
      'Optimize aluminium internal fin geometry to maximize conduction rate.',
    ],
    competitionContext: 'Science Project Competition (SPC) EUREKA! ITB 2026',
    featured: true,
  },
  {
    id: 'csc-03',
    slug: 'rice-water-microbial-fuel-cell',
    number: '03',
    title: 'Double-Chamber Microbial Fuel Cell (MFC) Powered by Domestic Rice Washing Water',
    category: 'Biology / Bio-Energy',
    categories: ['biology', 'environmental'],
    year: 2024,
    authors: ['Ananda Bernard Hizkia'],
    summary:
      'Harvesting bio-electricity from domestic rice-cleaning wastewater using an anaerobic double-chamber Microbial Fuel Cell with graphite electrodes and a salt-bridge separator.',
    description:
      'Rice washing effluent is a ubiquitous carbohydrate-rich domestic waste that normally burdens sewage systems. This project harnesses indigenous electrogenic bacteria to oxidize dissolved starch and glucose in an anaerobic anode chamber, generating continuous bio-electricity while simultaneously treating wastewater.',
    researchQuestion:
      'How efficiently can rice-washing wastewater sustain electrical power density and voltage output in a dual-chamber bio-electrochemical reactor?',
    hypothesis:
      'The abundant starch and carbohydrate substrate in rice wastewater will fuel electrochemically active biofilms, sustaining measurable potential difference across an external load.',
    method: [
      'Construction of acrylic dual-chamber reactors with graphite felt electrodes.',
      'Preparation of concentrated KCl-agar salt bridges for proton transfer.',
      'Inoculation of anaerobic anode chamber with activated biofilm and fermented rice water.',
      'Continuous logging of Open Circuit Voltage (OCV) and polarization curves across 1000Ω loads.',
      'Pre- and post-trial chemical oxygen demand (COD) reduction analysis.',
    ],
    observations:
      'Stable potential difference developed within 48 hours as anaerobic bacterial colonization matured on the anode surface.',
    results:
      'The MFC successfully powered low-drain digital chronometers and LEDs continuously, demonstrating domestic wastewater remediation paired with decentral renewable power generation.',
    limitations: [
      'Internal resistance of the agar salt bridge limits peak power density compared to synthetic ion-exchange membranes.',
    ],
    nextSteps: [
      'Evaluate low-cost ceramic separators to replace agar salt bridges.',
    ],
    competitionContext: 'Indonesia International Invention Expo (IIIEX) 2024',
    award: 'Gold Medal — Environment Category (IIIEX 2024)',
    featured: true,
  },
  {
    id: 'csc-04',
    slug: 'arduino-tens-device-prototype',
    number: '04',
    title: 'Portable Arduino-Based Transcutaneous Electrical Nerve Stimulation (TENS) Device',
    category: 'Health / Biomedical Engineering',
    categories: ['engineering', 'biology'],
    year: 2024,
    authors: ['Nobiel Utoro', 'Fransiskus Jonathan Muljadi', 'Haposan Christian Gultom', 'Nobuhiro Komatsuda'],
    summary:
      'Developing an accessible, open-source electrotherapy device for analgesic pain relief based on Melzack-Wall Gate Control Theory, powered by Arduino Uno.',
    description:
      'Transcutaneous Electrical Nerve Stimulation (TENS) delivers controlled micro-current electrical pulses through skin electrodes to inhibit nociceptive pain signals from reaching the central nervous system. This team engineered a portable, programmable open-source TENS generator with variable frequency and pulse width, featuring fail-safe current limiting.',
    researchQuestion:
      'Can an inexpensive microcontroller accurately generate clinical-grade biphasic therapeutic waveforms (2–150 Hz, 30–260 μs pulse width) within strict physiological safety thresholds?',
    hypothesis:
      'Microcontroller timer interrupts combined with a regulated step-up bridge can deliver consistent, therapeutic electrical stimulation safely comparable to commercial medical devices.',
    method: [
      'Circuit architecture design utilizing Arduino Uno, adjustable PWM switching, and isolation transformers.',
      'Development of an interactive LCD UI with parameter control knobs.',
      'Oscilloscope verification of output pulse frequencies, peak voltage, and rise times.',
      'Implementation of hardware overcurrent protection and automatic shut-off.',
    ],
    observations:
      'Oscilloscope traces confirmed exceptionally stable square pulse trains across the full target therapeutic bandwidth (2 to 150 Hz).',
    results:
      'The device successfully met clinical parameter targets with safe skin impedance tolerances, earning international recognition in applied innovation science.',
    limitations: [
      'Human in vivo efficacy testing was restricted to non-clinical bench simulation due to school ethics protocols.',
    ],
    nextSteps: [
      'Design a miniaturized PCB and 3D-printed pocket enclosure with rechargeable LiPo battery.',
    ],
    competitionContext: 'Youth International Science Fair (YSIF) 2024',
    award: 'Silver Medal — Innovation Science Category (YSIF 2024)',
    featured: false,
  },
  {
    id: 'csc-05',
    slug: 'biodiesel-catalyst-optimization',
    number: '05',
    title: 'Catalyst Optimization for Biodiesel Synthesis from Waste Cooking Oil',
    category: 'Chemistry / Biofuel',
    categories: ['chemistry', 'environmental'],
    year: 2025,
    authors: ['Reinier Louis Stefano', 'Theodore Rex Semita'],
    summary:
      'Determining the stoichiometric optimum of NaOH catalyst in transesterification to maximize Fatty Acid Methyl Ester (FAME) yield while suppressing unwanted saponification.',
    description:
      'Discarded culinary cooking oil poses acute environmental hazards if dumped into municipal waterways, yet holds dense triglyceride value for conversion into sustainable biodiesel. This investigation identifies the critical threshold of sodium hydroxide catalyst concentration to avoid soap emulsion formation while maximizing methyl ester yield.',
    researchQuestion:
      'What specific mass ratio of NaOH catalyst maximizes methyl ester conversion yield without triggering excessive saponification in waste cooking oil?',
    hypothesis:
      'A catalyst concentration of 0.2g NaOH per 100g oil will achieve the highest FAME conversion efficiency with minimal free fatty acid (FFA) soaping.',
    method: [
      'Physical pre-filtration and thermal dehydration of waste culinary oil at 110°C.',
      'Preparation of sodium methoxide solution using anhydrous methanol and varied NaOH amounts (0.1g to 0.8g).',
      'Batch transesterification at 60°C for 60 minutes under continuous magnetic stirring.',
      'Gravimetric separation of glycerol and biodiesel phases in separatory funnels.',
      'Warm water washing, drying, and yield measurement.',
    ],
    observations:
      'Exceeding 0.5g NaOH created thick saponified emulsions that severely impeded glycerol phase separation.',
    results:
      'The optimal catalyst threshold was verified at 0.2g NaOH per 100g oil, delivering peak pure methyl ester yield (46.7g) with optimal free fatty acid reduction.',
    limitations: [
      'Variability in source waste oil requires individual titration to determine initial acid value.',
    ],
    nextSteps: [
      'Measure kinematic viscosity, flash point, and cetane index against national biodiesel standards.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) 2025',
    featured: false,
  },
  {
    id: 'csc-06',
    slug: 'mussel-biofilter-ciliwung',
    number: '06',
    title: 'Comparative Biofiltration of Ciliwung River Water Using Bivalve Molluscs',
    category: 'Environmental Science / Biology',
    categories: ['biology', 'environmental'],
    year: 2026,
    authors: ['Javier Nicholas Vito Uisan', 'Vincenso Marco Pujianto', 'Wilbert Lee'],
    summary:
      'Evaluating Green Mussels, Blood Cockles, and Freshwater Mussels as living filter-feeders to reduce turbidity, nitrates, cyanuric acid, and hardness in urban river water.',
    description:
      'The Ciliwung River flowing through Jakarta suffers from heavy organic pollution, high dissolved solids, and agricultural runoff compounds. This study tests the bio-remediation capacity of three native bivalve species (Perna viridis, Tegillarca granosa, and Pilsbryoconcha exilis) to filter physical and chemical pollutants without synthetic chemical treatment.',
    researchQuestion:
      'Which mollusc species exhibits the highest bio-absorption rate for water hardness, nitrogen compounds, and heavy pollutant markers in Ciliwung water?',
    hypothesis:
      'Each bivalve species will exhibit distinct filtration strengths; freshwater mussels will demonstrate superior physiological survival under prolonged river water exposure.',
    method: [
      'Sample collection from standardized urban sampling points along the Ciliwung River.',
      'Acclimatization of test mollusc cohorts in aerated laboratory tanks.',
      'Controlled time-series exposure trials in individual biofiltration testing chambers.',
      'Multi-parameter water analysis: pH, TDS, water hardness, nitrates, nitrites, and fluorides.',
    ],
    observations:
      'Blood cockles released residual hemoglobin under osmotic stress, while green mussels demonstrated vigorous active particle clearance.',
    results:
      'Green mussels proved most effective at scrubbing cyanuric acid, fluorides, nitrates, and nitrites, while blood cockles achieved the highest reduction in total water hardness.',
    limitations: [
      'Salinity tolerances of marine species restrict direct long-term deployment in pure freshwater rivers.',
    ],
    nextSteps: [
      'Investigate activated crushed shell matrices as passive fixed-bed biofilters.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) Research Paper',
    featured: false,
  },
  {
    id: 'csc-07',
    slug: 'star-trails-webgl-simulator',
    number: '07',
    title: 'WebGL-Based 3D Star Trails Astronomical Visualization Engine',
    category: 'Computer Science / Astronomy',
    categories: ['engineering', 'physics'],
    year: 2026,
    authors: ['Darrel Jeremiah Rondonuwu', 'Natalius Gabriel'],
    summary:
      'A real-time interactive browser tool built on Three.js and SvelteKit to simulate celestial rotation and predict star trail geometry for astrophotographers based on geographic coordinates.',
    description:
      'Planning long-exposure star trail photography requires predicting celestial pole curvature, camera angle of view, and exposure time to avoid trial-and-error. Using Three.js, WebGL shaders, and SvelteKit, this project engineered a responsive 3D simulation calculating real-time equatorial-to-horizontal coordinate transformations for any global latitude and longitude.',
    researchQuestion:
      'How can WebGL shader pipelines be optimized to render tens of thousands of orbital star arcs interactively with sub-500ms recomputation times?',
    hypothesis:
      'Offloading celestial coordinate transformation matrices directly to client-side GPU shaders will enable fluid 60 FPS previews across exposure parameters.',
    method: [
      'Compilation of bright star astronomical catalogs with Right Ascension and Declination coordinates.',
      'Mathematical modeling of local sidereal time and coordinate transformations.',
      'Implementation of arc-curve GPU mesh generation in Three.js.',
      'Benchmarking re-render compute latency across 1-hour to 8-hour simulated exposures.',
    ],
    observations:
      'The engine rendered smooth interactive 60 FPS viewport manipulation with instant exposure scrub updates on standard laptop hardware.',
    results:
      'Simulations achieved sub-500ms re-render speeds for exposure parameter adjustments and 1.7–3.1 seconds for full global coordinate recalculations, providing a robust planning suite for astrophotographers.',
    limitations: [
      'Extremely wide-angle fisheye lens projections require additional lens distortion shader compensation.',
    ],
    nextSteps: [
      'Incorporate real-time night sky light pollution maps (Bortle Scale data).',
    ],
    competitionContext: 'Canisius Science Competition (CSC) Software Track',
    featured: false,
  },
  {
    id: 'csc-08',
    slug: 'mini-alpha-stirling-engine',
    number: '08',
    title: 'Alpha-Type Mini Stirling Engine Prototype for Low-Grade Heat Recovery',
    category: 'Physics / Mechanical Engineering',
    categories: ['physics', 'engineering'],
    year: 2026,
    authors: ['Reinier Louis Stefano', 'Jason Nathanael Widjasena'],
    summary:
      'Engineering a compact closed-cycle external combustion alpha Stirling engine to convert industrial waste heat gradients directly into rotational mechanical energy.',
    description:
      'Stirling engines operate on cyclic compression and expansion of air across hot and cold cylinders, offering high theoretical thermodynamic efficiency. This study designed and tested a compact alpha-configuration prototype to examine the mathematical relationship between thermal differential (ΔT) and output shaft angular velocity (RPM).',
    researchQuestion:
      'What is the quantitative correlation between cylinder temperature differentials and flywheel RPM in a miniature alpha Stirling engine?',
    hypothesis:
      'Flywheel rotational speed will exhibit a linear relationship with cylinder temperature differential once initial friction break-away torque is surpassed.',
    method: [
      'Precision CAD modeling and machining of hot cylinder, cold cylinder, pistons, and balanced flywheel.',
      'Thermal instrumentation with digital thermocouple sensors.',
      'Controlled thermal testing from 80°C to 200°C cylinder temperatures.',
      'Non-contact optical tachometer RPM measurement.',
    ],
    observations:
      'Spontaneous sustained rotation began once hot cylinder temperature reached 85°C with a minor initial flywheel push.',
    results:
      'Flywheel RPM scaled linearly with hot cylinder temperature: producing 40 RPM at 100°C and accelerating smoothly to 225 RPM at 200°C, proving viability for micro-scale waste heat harvesting.',
    limitations: [
      'Piston seal friction requires micro-lubrication to sustain longevity without gas leakage.',
    ],
    nextSteps: [
      'Mount a permanent-magnet micro-dynamo onto the shaft to generate direct electrical output.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) Engineering Track',
    featured: false,
  },
  {
    id: 'csc-09',
    slug: 'porous-asphalt-water-filtration',
    number: '09',
    title: 'Porous Asphalt Pavement Using Recycled Plastics and Volcanic Aggregates',
    category: 'Civil & Environmental Engineering',
    categories: ['engineering', 'environmental'],
    year: 2024,
    authors: ['Yarra Wiryadenta', 'Joshua Viencent Tandibrata', 'Nobuhiro Komatsuda'],
    summary:
      'Developing permeable urban pavement incorporating shredded PET/PE plastic waste and igneous volcanic rocks for rapid stormwater infiltration and flood prevention.',
    description:
      'Impervious urban surfaces in Jakarta aggravate flood risks and surface runoff pollution. This research engineered permeable asphalt composites using recycled shredded plastic waste and volcanic igneous rock aggregates, forming vertical drainage channels monitored by an Arduino-based ultrasonic sensor network.',
    researchQuestion:
      'What hydraulic permeability coefficient and compressive strength can be achieved by blending recycled plastic binders with volcanic aggregate matrix?',
    hypothesis:
      'Interconnected macro-pore voids between angular volcanic rocks will deliver superior drainage flow rates while retaining load-bearing capacity for foot and light vehicle traffic.',
    method: [
      'Aggregate grading of volcanic rocks and mechanical shredding of PET/PE consumer plastics.',
      'Hot-mix formulation of plastic-modified asphalt binders.',
      'Compaction of cylindrical test briquettes in laboratory molds.',
      'Falling-head hydraulic permeability measurements.',
      'Compressive stress testing up to failure under mechanical press.',
    ],
    observations:
      'Water poured onto the specimen drained through instantly without aggregate disintegration or pooling.',
    results:
      'The volcanic composite achieved high water permeability (0.28 cm/s) and supported over 700 Newtons of compressive force, proving feasible for permeable pedestrian paths and parking bays.',
    limitations: [
      'Long-term fine sediment clogging requires periodic pressurized water cleaning maintenance.',
    ],
    nextSteps: [
      'Install a pilot test walkway on the Kolese Kanisius campus.',
    ],
    competitionContext: 'DISCO 7th National Civil Engineering Competition 2024',
    award: 'National Civil & Environmental Engineering Finalist',
    featured: false,
  },
  {
    id: 'csc-10',
    slug: 'underwater-current-turbine',
    number: '10',
    title: 'Vertical vs Horizontal Axis Underwater Turbines for Hydrokinetic Power Generation',
    category: 'Physics / Renewable Energy',
    categories: ['physics', 'engineering'],
    year: 2024,
    authors: ['Muhammad Rangga Cindraputra', 'Nobiel Utoro', 'Haposan Christian Gultom'],
    summary:
      'A comparative hydrodynamics study testing vertical and horizontal axis turbine prototypes to determine power generation efficiency across omnidirectional water currents.',
    description:
      'Hydrokinetic energy from shallow rivers and tidal flows offers clean baseload electricity without requiring large dams. This project fabricated and benchmarked vertical-axis (Savonius/Darrieus hybrid) and horizontal-axis propeller turbine models across varying flow angles and flow velocities in an experimental water channel.',
    researchQuestion:
      'How does turbine blade orientation (vertical vs horizontal) affect electrical output under multi-directional, turbulent water flow conditions?',
    hypothesis:
      'Vertical-axis turbines will maintain superior operational stability and consistent power generation under shifting, non-laminar flow vectors.',
    method: [
      'Fabrication of scale model vertical and horizontal axis turbines using 3D-printed blades.',
      'Integration of low-RPM permanent magnet DC generators with rectifier circuits.',
      'Testing inside a controlled flow flume at water speeds from 0.5 to 2.0 m/s.',
      'Measurement of electrical voltage and rotational torque at various angles of attack.',
    ],
    observations:
      'Horizontal turbines performed well in purely parallel laminar flow, but stalled frequently when current angles deviated. Vertical turbines remained rotationally stable across all angles.',
    results:
      'Vertical turbines delivered higher average electrical energy across variable flow directions, demonstrating ideal suitability for turbulent urban rivers and irrigation channels.',
    limitations: [
      'Horizontal turbines had higher peak efficiency under strictly straight, uniform laminar flow.',
    ],
    nextSteps: [
      'Design modular floating pontoons for riverbank deployment.',
    ],
    competitionContext: 'Conscience Science Competition 2024',
    featured: false,
  },
  {
    id: 'csc-11',
    slug: 'water-electrolysis-hydrogen-generator',
    number: '11',
    title: 'Low-Cost Water Electrolysis Hydrogen Generator Using Kitchenware Electrodes',
    category: 'Chemistry / Energy',
    categories: ['chemistry', 'engineering'],
    year: 2025,
    authors: ['Kenzie Levi Chandra', 'Keizo Putra Budiman'],
    summary:
      'Engineering an ultra-accessible DIY water electrolysis apparatus utilizing stainless steel scourers and culinary whisks to extract pure hydrogen gas.',
    description:
      'Electrochemical hydrogen production often relies on cost-prohibitive platinum-coated electrodes. This study tested high-surface-area kitchenware components (stainless steel scourers and wire whisks) as cathode and anode matrices to maximize electrode surface area and bubble detachment rates in alkaline water splitting.',
    researchQuestion:
      'Can high surface-to-volume ratio domestic stainless steel scourers match the electrolysis gas generation rates of commercial metal plates in an alkaline electrolyte?',
    hypothesis:
      'The multi-strand interlocking structure of stainless steel scourers will reduce overpotential by increasing active catalyst contact area, accelerating hydrogen gas evolution.',
    method: [
      'Assembly of airtight acrylic electrolysis cells with gas collection burettes.',
      'Comparison of standard stainless plates vs coiled whisks vs stainless steel scourers.',
      'Electrolyte preparation using sodium bicarbonate and dilute sodium hydroxide.',
      'Application of low-voltage DC power (2–12V) and measurement of hydrogen displacement volume over time.',
    ],
    observations:
      'Scourer electrodes produced abundant micro-bubbles immediately upon voltage application with minimal electrode discoloration.',
    results:
      'The scourer design produced higher volume hydrogen gas per unit mass of metal than flat plates, proving that household stainless steel can serve as an accessible educational electrolyzer.',
    limitations: [
      'Micro-bubbles partially trapped within dense scourer meshes require acoustic agitation or liquid circulation pumps for maximum efficiency.',
    ],
    nextSteps: [
      'Incorporate a miniature vacuum siphon to assist bubble disengagement.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) 2025',
    featured: false,
  },
  {
    id: 'csc-12',
    slug: 'synthetic-turf-granules-safety',
    number: '12',
    title: 'Hazardous Substance and Emission Analysis of Synthetic Turf Rubber Granules',
    category: 'Environmental Science / Chemistry',
    categories: ['chemistry', 'environmental'],
    year: 2025,
    authors: ['Rayfael Feleon Siahaan', 'Roland Arthur Budhimulja'],
    summary:
      'Comparing toxic emissions, heavy metals (mercury), water leachate pH, and thermal gas releases of synthetic soccer field rubber infill versus natural cork.',
    description:
      'Synthetic athletic fields utilize crumb rubber infill manufactured from recycled automotive tires. This research investigated chemical safety risks—measuring mercury content, thermal gas emissions (CO/CO₂), Total Dissolved Solids, and water leachate pH from the Kolese Kanisius soccer field rubber granules in direct comparison with sustainable cork alternatives.',
    researchQuestion:
      'Do synthetic soccer turf rubber granules leach toxic heavy metals or release hazardous combustible gases when subjected to high tropical surface heat?',
    hypothesis:
      'Natural cork infill will emit significantly fewer volatile compounds and maintain safer water leachate parameters compared to synthetic recycled rubber.',
    method: [
      'Collection of rubber infill samples from the campus synthetic soccer pitch and commercial organic cork granules.',
      'Chemical testing for mercury and heavy metal precipitation.',
      'Thermal exposure testing in tube furnace with gas sensor logging (CO, flammable vapors).',
      'Water leachate testing over 14 days measuring pH, TDS, and conductivity.',
    ],
    observations:
      'Rubber granules emitted noticeable pungent fumes and high CO readings when heated above 60°C. Cork granules showed zero toxic gas release.',
    results:
      'Neither material contained detectable mercury. However, rubber emitted substantially higher carbon monoxide and volatile hydrocarbons under thermal stress, validating cork as a far safer, eco-friendly school sports infill.',
    limitations: [
      'Comprehensive polycyclic aromatic hydrocarbon (PAH) gas chromatography requires specialized university laboratory facilities.',
    ],
    nextSteps: [
      'Submit recommendations to school administration for future turf infill refurbishment.',
    ],
    competitionContext: 'Canisius College Science Research Program',
    featured: false,
  },
  {
    id: 'csc-13',
    slug: 'fruit-peel-composting-rates',
    number: '13',
    title: 'Decomposition and Microbial Maturation Rates of Orange, Banana, and Mango Peels',
    category: 'Biology / Waste Management',
    categories: ['biology', 'environmental'],
    year: 2024,
    authors: ['Wilson Thamadeus Tjahjadi', 'William Sasuga Dickension'],
    summary:
      'A 32-day controlled biological trial measuring decomposition speed, microbial activity, and compost maturity scores across common tropical fruit peel wastes.',
    description:
      'Fruit peels constitute a major percentage of organic culinary waste in Indonesia. This study tracked the composting velocity and microbial breakdown rates of banana, orange, and mango peels under uniform soil, moisture, and aeration conditions over a 32-day testing timeline.',
    researchQuestion:
      'Which tropical fruit peel decomposes fastest into mature organic compost, and how do natural antimicrobials in citrus peels affect decomposition kinetics?',
    hypothesis:
      'High-carbohydrate, thin-walled banana peels will compost significantly faster than citrus peels containing antimicrobial d-limonene oils.',
    method: [
      'Preparation of identical aeration composter vessels with standardized soil inoculant.',
      'Introduction of equal masses (250g) of chopped banana, orange, and mango peels.',
      'Daily temperature, moisture, and pH tracking.',
      'Weekly compost maturity index scoring (Solvita scale / visual breakdown metrics) over 32 days.',
    ],
    observations:
      'Banana peels darkened and broke down rapidly by week two, whereas orange peels retained structural firmness and showed stunted fungal colonization.',
    results:
      'Banana peels reached full maturity (Score 8) by day 26 due to easily metabolizable starches. Orange peels decomposed slowest due to antimicrobial limonene compounds inhibiting microbial proliferation.',
    limitations: [
      'Pre-shredding particle sizes were controlled manually rather than with an industrial grinder.',
    ],
    nextSteps: [
      'Formulate optimized multi-fruit ratio compost mixtures for the school botanical garden.',
    ],
    competitionContext: 'Indonesia International Invention Expo (IIIEX) 2024',
    featured: false,
  },
  {
    id: 'csc-14',
    slug: 'thermoelectric-generator-thermos',
    number: '14',
    title: 'Thermoelectric Energy Harvesting via Dual-Sided Thermal Flask Heat Differential',
    category: 'Physics / Energy Harvesting',
    categories: ['physics', 'engineering'],
    year: 2025,
    authors: ['Jonnevan Chandra', 'Claus Abednego Tesiman', 'Bernardinus Fernando Lili'],
    summary:
      'Comparative circuit analysis of Seebeck Thermoelectric Generators (TEG) configured in series vs parallel to harvest electrical energy from hot and cold liquid vessels.',
    description:
      'Thermoelectric generators (TEGs) produce electrical voltage directly from temperature gradients via the Seebeck effect. This experiment constructed a dual-sided thermos flask system (hot coffee/water on one side, iced liquid on the other) and evaluated single, series, and parallel electrical connections to determine peak power output.',
    researchQuestion:
      'Which circuit topology (series vs parallel) yields the highest total electrical power (mW) from a 65°C thermal differential between adjacent thermos chambers?',
    hypothesis:
      'Series circuit topologies will maximize output voltage and overcome diode drops, delivering significantly higher net power to external battery charging circuits.',
    method: [
      'Mounting TEG (SP1848) modules between machined copper thermal contact plates of two insulated flasks.',
      'Establishing a controlled 65°C temperature gradient (hot water 85°C, ice water 20°C).',
      'Configuring identical modules into single, 2-series, and 2-parallel arrangements.',
      'Measuring voltage, current, and maximum power transfer under varying resistive loads.',
    ],
    observations:
      'Series connections produced instantaneous voltage elevation that quickly surpassed the minimum threshold required for step-up DC-DC converters.',
    results:
      'Series configurations consistently generated the highest usable power (reaching 2.68W under 65°C differential), outperforming parallel topologies by 134% and confirming optimal wiring for consumer thermal energy harvesting.',
    limitations: [
      'Thermal equalization between flasks gradually reduces ΔT over a 3-hour period.',
    ],
    nextSteps: [
      'Integrate heat pipes to harvest waste heat from school canteen steaming equipment.',
    ],
    competitionContext: 'Canisius Science Research Showcase',
    featured: false,
  },
  {
    id: 'csc-15',
    slug: 'energy-producing-road',
    number: '15',
    title: 'Energy Producing Road (EPR): Thermoelectric Power Harvesting from Asphalt Pavement',
    category: 'Physics / Civil Engineering',
    categories: ['physics', 'engineering'],
    year: 2025,
    authors: ['Javier Nicholas Vito Uisan', 'Wilbert Lee'],
    summary:
      'Harnessing solar thermal heat stored in urban asphalt roads and cold subterranean drainage channels using embedded Thermoelectric Generators (TEG) and Coolers (TEC).',
    description:
      'Asphalt road surfaces in tropical Jakarta absorb intense solar radiation, frequently reaching temperatures exceeding 55°C while nearby underground stormwater conduits remain at 24°C. This project developed prototype pavement slabs embedding thermoelectric modules to generate renewable electricity from urban road heat.',
    researchQuestion:
      'Can embedded thermoelectric modules in concrete and asphalt slabs generate measurable electrical potential using ambient road-to-drainage temperature differentials?',
    hypothesis:
      'High thermal conductivity concrete with embedded Seebeck modules will produce continuous millivolt potential sufficient for low-power smart road sensor nodes.',
    method: [
      'Fabrication of test asphalt and concrete pavement briquettes with embedded TEG and TEC modules.',
      'Simulation of surface asphalt heating with radiant lamps and sub-base cold water cooling loops.',
      'Continuous logging of voltage generation across varying thermal differentials (ΔT 15°C to 35°C).',
      'Evaluation of cloudy weather and rainfall impact on output voltage.',
    ],
    observations:
      'TEC modules adapted for energy harvesting produced an average of 130.5 mV, outperforming standard commercial TEGs (47.8 mV) under moderate temperature gradients.',
    results:
      'Thermal energy harvesting from roads proved physically viable; overcast skies dropped output by 40–50 mV, but sunny peak hours generated steady voltage capable of trickle-charging remote traffic telemetry sensors.',
    limitations: [
      'Heavy vehicular loading requires reinforced protective packaging around brittle thermoelectric semiconductor ceramics.',
    ],
    nextSteps: [
      'Prototype rugged polymer resin casing for full-scale road testing.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) Research Showcase',
    featured: false,
  },
  {
    id: 'csc-16',
    slug: 'arduino-spin-coater',
    number: '16',
    title: 'Low-Cost Arduino-Controlled Spin Coater for Thin-Film Nanomaterial Deposition',
    category: 'Engineering / Nanotechnology',
    categories: ['engineering', 'chemistry'],
    year: 2025,
    authors: ['Davis Leon Palsha Sitorus', 'Laszlo Uria Maleh'],
    summary:
      'Designing an affordable, high-precision laboratory spin coater using an Arduino microcontroller, Brushless DC (BLDC) motor, and 3D-printed chassis for thin-film fabrication.',
    description:
      'Commercial laboratory spin coaters used for depositing thin nanomaterial films (such as perovskites and quantum dots) cost thousands of dollars. This team engineered a budget-friendly alternative utilizing a high-speed brushless DC motor, electronic speed controller (ESC), optical tachometer, and Arduino Uno to achieve accurate rotational speeds up to 6000 RPM.',
    researchQuestion:
      'How does rotational speed control and deposition method (static vs dynamic) affect thin-film coating thickness and surface uniformity in an open-source spin coater?',
    hypothesis:
      'Closed-loop PWM speed feedback on a BLDC motor will provide stable RPM control capable of producing uniform nanometer-scale thin films comparable to commercial laboratory units.',
    method: [
      '3D modeling and printing of rotor chuck, fluid bowl, and motor dampening mounts.',
      'Writing Arduino closed-loop PID control firmware with rotary encoder RPM feedback.',
      'Spin coating acrylic polymer and CQD solutions onto glass microscope slides at varied RPM (1500 to 5000 RPM).',
      'Microscopic inspection of film thickness and edge bead formation.',
    ],
    observations:
      '3D-printed motor couplers required precision dynamic balancing to suppress micro-vibrations at speeds above 3500 RPM.',
    results:
      'Dynamic fluid dispensing produced exceptionally thin (19.6 nm) and uniform optical coatings, validating the DIY apparatus as an effective, low-cost research tool for high school nanomaterial synthesis.',
    limitations: [
      'Chassis requires weighted metal dampening to completely eliminate high-frequency harmonics during rapid acceleration.',
    ],
    nextSteps: [
      'Upgrade to an aluminum CNC machined vacuum chuck for automated substrate holding.',
    ],
    competitionContext: 'Canisius Science Competition (CSC) Engineering Track',
    featured: false,
  },
  {
    id: 'csc-17',
    slug: 'layered-pcm-vaccine-cold-chain',
    number: '17',
    title: 'Layered Phase Change Material System for Tropical Vaccine Cold Chain Preservation',
    category: 'Physics / Thermal Engineering',
    categories: ['physics', 'engineering', 'environmental'],
    year: 2026,
    authors: [
      'Kresna Nicolas Sutrisno',
      'Brayden Nicholas Kwenandar',
      'Patrick Polana Kho',
      'Naveen Xavier Dante',
      'Armadeo Bintang Puspanjono',
    ],
    summary:
      'Designing a two-stage passive cooling container using water ice and 5% saline solution to prevent sub-zero freeze damage to vaccines in tropical transport without active power.',
    description:
      'Most routine childhood vaccines (e.g. Hepatitis B, DTP, Tetanus) suffer permanent, irreversible loss of potency if frozen below 0°C. Standard tropical cold boxes rely on frozen ice packs melting at 0°C, frequently freezing vaccines during transport. This research engineered a two-stage layered passive Phase Change Material (PCM) configuration in a polystyrene container (20×29×25 cm) surrounding a 300 mL payload. By placing water ice (0°C) on the outside to absorb ambient tropical heat and 5% saline solution (−3°C) on the inside separated from direct payload contact, the system establishes a thermal buffer preventing sub-zero excursions.',
    researchQuestion:
      'Can a layered configuration of ordinary household PCMs (ice outer, saline inner) hold a payload within the 2–8°C safe window longer and avoid sub-zero freezing excursions under tropical ambient sunlight?',
    hypothesis:
      'The layered ice-saline configuration will prevent freezing excursions below 2°C compared to saline alone, while slowing temperature rise relative to single-material cooling media.',
    method: [
      'Preparation of five cooling configurations (300g total PCM mass each): Ice alone, 5% Saline alone, Coconut oil alone, Two-layer Ice/Saline, and Three-layer Coconut oil/Ice/Saline.',
      'Pre-chilling simulated water payload to 4°C in 300 mL glass containers.',
      'Simultaneous outdoor testing under direct equatorial sunlight (28–33°C ambient).',
      'Continuous calibrated digital thermocouple logging at 5-minute intervals for 50 minutes.',
      'Analysis of temperature plateaus, latent heat capacity, and thermal coupling resistance.',
    ],
    observations:
      'Saline alone dropped the payload to 1.3°C within five minutes (violating the 2°C minimum safe threshold). The two-layer Ice/Saline arrangement maintained the payload safely inside the 2–8°C window from start to finish.',
    results:
      'The two-layer configuration achieved the lowest mean temperature (8.1°C) and completely eliminated the early freeze excursion seen with saline alone. Coconut oil (melting point 24.5°C) failed to buffer, confirming that PCMs must be thermally active within the target operating window.',
    limitations: [
      'Air gaps between the PCM pouches and the glass payload container limited thermal coupling hold time to 30–35 minutes.',
    ],
    nextSteps: [
      'Design contoured internal carrier walls to minimize void air gaps and test hold time over extended 12-hour transport runs.',
    ],
    competitionContext: 'Canisius Science Club Research Archive 2026',
    featured: true,
  },
  {
    id: 'csc-18',
    slug: 'pcm-waste-heat-recovery-distiller',
    number: '18',
    title: 'Thermoelectric Waste Heat Recovery Using Paraffin-Jacketed Copper Delivery Pipelines',
    category: 'Physics / Clean Energy',
    categories: ['physics', 'engineering'],
    year: 2026,
    authors: [
      'Matthew Sulistio',
      'Kresna Nicolas Sutrisno',
      'Bastien Ray Pramono',
      'Bianca Madoka Rianto',
      'Cathleen Mulan Tyas Ho',
      'Rommel Zemar Arkansyah Biran',
    ],
    summary:
      'Integrating paraffin wax as a phase change thermal buffer around copper transport piping to stabilize intermittent waste heat from a water distiller, increasing TEG cumulative energy 2.3-fold.',
    description:
      'Laboratory water distillers continuously discharge low-grade waste hot water (close to 80°C), but small-scale recovery via Thermoelectric Generators (TEGs) is hindered by radial heat loss along connecting tubing and thermal instability during thermostatic on-off cycles. This team developed a copper pipe delivery line encased in a wooden shell filled with paraffin wax PCM. The latent heat of paraffin stabilizes water temperatures reaching the hot-side waterblock during distiller off-cycles, sustaining continuous electrical generation.',
    researchQuestion:
      'How does enclosing hot-water copper delivery piping in a paraffin wax PCM buffer affect the minimum sustained temperature difference (ΔT) and cumulative electrical energy harvested by a TEG array during intermittent on-off heating cycles?',
    hypothesis:
      'Paraffin wax latent heat buffering will reduce delivery heat loss during active heating and slow hot-side cooling during off-cycles by more than 3-fold compared to standard silicone tubing.',
    method: [
      'Assembly of a 5-module Seebeck TEG array (SP1848-27145SA in series) mounted between dual aluminium waterblocks.',
      'Encapsulation of copper transport piping in a 20×6×6 cm wooden housing cast with solid paraffin wax.',
      'Comparison against baseline uninsulated silicone tubing under identical 15-minute on/off duty cycles.',
      'Multi-point temperature logging (distiller outlet, transport line, hot-side waterblock, cold tap water) and electrical output monitoring.',
      'Storage of converted power in a 12V 6Ah LiFePO4 battery via a solar charge controller.',
    ],
    observations:
      'During steady heating, the copper-paraffin line cut heat loss from 6.3°C to 2.3°C. During off-phases, the hot-side waterblock cooled 3.5–4.2 times slower than the silicone baseline.',
    results:
      'The paraffin-buffered system sustained 4.7 times higher minimum electrical power during off-cycles (1.02 W vs 0.22 W) and yielded 2.3 times more cumulative energy per 60-minute run (1.12 Wh vs 0.49 Wh) without output degradation.',
    limitations: [
      'Testing was limited to two 60-minute trial repetitions under laboratory conditions.',
    ],
    nextSteps: [
      'Instrument the system for continuous 24-hour operation and test varying paraffin layer thicknesses to optimize cost-efficiency.',
    ],
    competitionContext: 'Canisius Science Club & SMA Santa Ursula Collaborative Research 2026',
    featured: true,
  },
  {
    id: 'csc-19',
    slug: 'hydrovoltaic-generator-cqd',
    number: '19',
    title: 'Evaporation-Driven Hydrovoltaic Electricity Generation via N,S-Doped Carbon Quantum Dots',
    category: 'Chemistry / Nanotechnology',
    categories: ['chemistry', 'physics', 'environmental'],
    year: 2026,
    authors: [
      'Owen Benedict Tanjung',
      'Kennard Kustiadi',
      'Jonathan Maximillian Effendi',
      'Dave Alexander Jayadi',
      'Matthew Orotodan',
      'Kresna Nicolas Sutrisno',
    ],
    summary:
      'Synthesizing biomass-derived nitrogen and sulfur co-doped Carbon Quantum Dots (N,S-CQDs) on filter paper substrates with PAA and H2O2 surface functionalization to generate continuous voltage from ambient water evaporation.',
    description:
      'Evaporation-driven hydrovoltaic generators produce clean electricity from spontaneous ambient water evaporation through porous media. While previous studies rely on expensive graphene oxide or toxic carbon nanotubes, this study synthesized eco-friendly N,S-doped Carbon Quantum Dots via one-step bottom-up pyrolysis of citric acid and thiourea. Coated onto cellulose filter paper and functionalized with poly(acrylic acid) (PAA) and hydrogen peroxide (H2O2), the enhanced surface charge density builds a robust Electric Double Layer (EDL), driving continuous streaming potential.',
    researchQuestion:
      'How does surface functionalization of biomass-derived N,S-CQDs with PAA and H2O2 enhance Electric Double Layer (EDL) formation and electrical power output under ambient water evaporation?',
    hypothesis:
      'Co-doping quantum dots with nitrogen and sulfur combined with PAA carboxyl functionalization will significantly boost EDL surface charge density, yielding higher steady-state voltages than untreated filter paper.',
    method: [
      'Bottom-up pyrolysis synthesis of N,S-CQDs at 200°C for 7 minutes using citric acid and thiourea.',
      'Confirmation of blue fluorescence under 365 nm UV illumination.',
      'Full factorial 2^3 experimental design testing 8 treatment groups across hanging, submerged, and evaporation conditions.',
      'Substrate coating of 3×8 cm filter paper strips with copper-tape electrodes and digital multimeter logging in 10-second intervals.',
      'Calculation of internal resistance and power output using Ohm’s and Joule’s electrical laws.',
    ],
    observations:
      'Evaporative capillary flow generated stable, consistent voltage across all testing periods, with treated papers showing immediate response upon wetting.',
    results:
      'Fully treated N,S-CQD paper with PAA and H2O2 generated a steady-state open-circuit voltage of 415 mV and power output of 8.703 µW—over 4 times higher than plain filter paper (1.954 µW). Submerged PAA-treated CQD paper reached a peak power of 32.198 µW.',
    limitations: [
      'Batch-mode evaporation eventually slows as salt accumulates at the upper electrode boundary.',
    ],
    nextSteps: [
      'Develop modular multi-cell paper stacks wired in series to illuminate low-power LED indicators.',
    ],
    competitionContext: 'Canisius Science Club Research Archive 2026',
    featured: true,
  },
  {
    id: 'csc-20',
    slug: 'p2w-microbial-fuel-cell',
    number: '20',
    title: 'P2W (Plants to Watts): Sustainable Microbial Fuel Cells Utilizing Fruit Eco-Enzymes and Biochar',
    category: 'Biology / Bio-Energy',
    categories: ['biology', 'environmental', 'chemistry'],
    year: 2026,
    authors: ['Matthew Sulistio', 'Eden James Paterson', 'Kresna Nicolas Sutrisno'],
    summary:
      'Constructing dual-chamber microbial fuel cells powered by fermented citrus leaf, banana, and apple eco-enzymes using upcycled coconut husk biochar electrodes and rope-agar-KCl salt bridges.',
    description:
      'Microbial Fuel Cells (MFCs) harness electrochemically active bacteria to simultaneously remediate organic waste and generate electricity. This project engineered "Plants to Watts" (P2W), an accessible waste-to-energy MFC system. Replacing costly graphite with upcycled coconut husk biochar wrapped around carbon rods, the cell utilizes fermented eco-enzymes (1:3:10 ratio of molasses, fruit waste, and water) as liquid organic substrates. The remaining spent sludge functions as liquid biofertilizer, achieving a zero-waste circular model.',
    researchQuestion:
      'How does substrate composition in fermented eco-enzymes (citrus leaf, banana peel, apple) affect microbial electron transfer rates, open-circuit voltage, and operational stability in a biochar-electrode MFC?',
    hypothesis:
      'Citrus leaf eco-enzymes, containing balanced soluble sugars and natural flavonoid redox mediators, will generate higher and more stable voltage than high-acid apple or rapidly depleting banana substrates.',
    method: [
      'Fermentation of three eco-enzyme batches (apple, banana peel, citrus leaf) over 3 months.',
      'Fabrication of dual 500 mL glass chambers connected by a 20 mm PVC pipe salt bridge (rope boiled in 3:30:100 agar-KCl gel).',
      'Preparation of anode using pre-washed coconut husk biochar packed in gauze pouches around a carbon collector rod.',
      'Continuous aeration of cathode chamber using a 3 L/min aquarium pump.',
      'Continuous voltage monitoring across 48+ hours using digital voltmeters.',
    ],
    observations:
      'Citrus leaf eco-enzyme produced an immediate, stable electrical potential with minimal odor, while banana substrate exhibited sharp initial output followed by rapid acidification.',
    results:
      'Citrus leaf eco-enzyme generated the highest and most stable voltage at 0.70 V (Day 1) and 0.61 V (Day 2). Banana yielded 0.40 V declining to 0.30 V, and apple produced 0.10 V due to high organic acid and phenolic inhibition. Total prototype construction cost was under Rp 150.000.',
    limitations: [
      'Batch mode operation experienced gradual voltage drop after 48 hours as readily available carbohydrates were metabolized.',
    ],
    nextSteps: [
      'Connect multiple P2W cells in series to power soil moisture sensors, and deploy the effluent as garden biofertilizer.',
    ],
    competitionContext: 'Canisius Science Club Bio-Innovation Series 2026',
    featured: true,
  },
  {
    id: 'csc-21',
    slug: 'palm-oil-tkks-bioenergy-briquettes',
    number: '21',
    title: 'Thermochemical Conversion of Palm Empty Fruit Bunches (TKKS) into Bioenergy Briquettes',
    category: 'Chemistry / Biomass Energy',
    categories: ['chemistry', 'environmental'],
    year: 2026,
    authors: ['Kresna Nicolas Sutrisno', 'Matthew Sulistio', 'Rayfael Feleon Siahaan'],
    summary:
      'Comparative evaluation of Hydrothermal Carbonization (HTC at 121°C) and dry torrefaction pyrolysis (160°C & 240°C) for converting raw oil palm empty fruit bunch waste into coal-substitute solid fuel.',
    description:
      'Indonesia is the world’s largest palm oil producer, generating massive volumes of Empty Fruit Bunch (TKKS) agricultural waste. High inherent moisture (60%) and low energy density prevent direct combustion. This study comparatively investigated low-temperature thermochemical conversion methods: wet Hydrothermal Carbonization (HTC at 121°C in an autoclave) versus dry mild pyrolysis (160°C and 240°C). Biochar products were densified into briquettes with tapioca binder and evaluated using a calibrated water calorimeter.',
    researchQuestion:
      'Which thermochemical method—subcritical HTC at 121°C or dry pyrolysis at 160°C/240°C—most effectively upgrades the heating value (HHV) and combustion stability of palm TKKS waste?',
    hypothesis:
      'Dry pyrolysis at 160°C will yield higher heating values than wet HTC due to effective moisture expulsion and relative fixed-carbon concentration through hemicellulose decomposition.',
    method: [
      'Collection, drying, and mechanical size reduction of oil palm empty fruit bunches (TKKS).',
      'HTC treatment at 121°C for 2 hours in a pressurized autoclave; dry pyrolysis at 160°C (1.5 h) and 240°C (1 h).',
      'Briquette densification using gelatinized tapioca starch binder.',
      'Water calorimeter testing calibrated against pure paraffin wax standards (30.35% thermal efficiency factor).',
      'Calculation of corrected high heating value (kcal/kg) and combustion duration.',
    ],
    observations:
      'Raw untreated TKKS completely failed to sustain combustion once external flames were removed. In contrast, pyrolyzed and HTC briquettes produced steady, long-lasting ember coals.',
    results:
      'Pyrolysis at 160°C achieved the highest corrected heating value at 3,409.95 kcal/kg, transforming non-combustible waste into quality sub-bituminous coal substitute fuel. HTC reached 2,169.98 kcal/kg, while mixed leaf/TKKS briquettes showed the most durable physical ember stability.',
    limitations: [
      'Simple water calorimeter has a 69.65% ambient heat loss factor; bomb calorimetry is recommended for final industrial certification.',
    ],
    nextSteps: [
      'Test higher torrefaction temperatures (250–300°C) using hydraulic press briquetting to achieve commercial 4,500 kcal/kg targets.',
    ],
    competitionContext: 'Science Project Competition IYREF 2026',
    award: 'Finalist / Official IYREF 2026 Submission',
    featured: true,
  },
  {
    id: 'csc-22',
    slug: 'warteg-hybrid-teg-microhydro',
    number: '22',
    title: 'WARTEG: Hybrid Thermoelectric and Pipeline Microhydro Harvester from Laboratory Water Distillers',
    category: 'Physics / Renewable Energy',
    categories: ['physics', 'engineering'],
    year: 2025,
    authors: ['Matthew Sulistio', 'Kresna Nicolas Sutrisno', 'Rayfael Feleon Siahaan'],
    summary:
      'Dual-harvesting waste energy from laboratory water distillers by pairing a 5-module Seebeck TEG array on boiling effluent with an inline pipeline microhydro turbine on cooling water to charge LiFePO4 batteries.',
    description:
      'Laboratory water distillers consume significant electrical energy while discharging hot wastewater (80°C) and fast-flowing condenser cooling water into the drain. The WARTEG (Water and Residual Thermoelectric Generator) project engineered a dual-mechanism waste energy recovery system. Thermoelectric Generator (TEG) modules capture Seebeck voltage across the hot water effluent and cold tap lines, while an in-line microhydro turbine harvests the kinetic energy of cooling water before discharge.',
    researchQuestion:
      'How much electrical energy can be harvested simultaneously from water distiller thermal effluent and cooling water flow using a hybrid TEG and pipeline microhydro turbine system?',
    hypothesis:
      'Combining 5 series TEG modules with an inline microhydro turbine will yield continuous combined power exceeding 1.8 W, sufficient to sustainably charge low-voltage laboratory sensor batteries.',
    method: [
      'Assembly of 5 bismuth telluride TEG modules (SP1848-27145SA) in series between dual aluminium waterblocks with thermal paste.',
      'Integration of a 0–80V pipeline microhydro turbine into the condenser cooling water feed line.',
      'Parallel electrical routing of TEG output (6.5V, 0.18A) and turbine output (4.0V, 0.20A) into a PWM solar charge controller.',
      'Charging of a 12.8V 6Ah LiFePO4 lithium battery under continuous water distillation runs.',
      'Calculation of system power, ΔT stability (51°C across blocks), and conversion efficiency (92%).',
    ],
    observations:
      'Distiller effluent maintained a steady 78°C hot-side waterblock temperature while tap water kept the cold block at 27°C, maintaining a continuous 51°C temperature gradient without active fans.',
    results:
      'The hybrid system generated 1.17 W from the TEG array and 0.80 W from the microhydro turbine (1.97 W gross). The solar charge controller delivered 1.81 W net into the LiFePO4 battery with 92% efficiency, yielding 43.4 Wh per 24 hours of operation.',
    limitations: [
      'Requires continuous water flow; battery charging rate is optimized for slow-charging sensor nodes rather than high-drain loads.',
    ],
    nextSteps: [
      'Scale up waterblock contact area and integrate automatic flow valves for automated laboratory power backup.',
    ],
    competitionContext: 'Science Project Competition MCE ITB 2025',
    award: 'Official MCE ITB 2025 Entry',
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project {
  return projects.find((p) => p.featured) ?? projects[0];
}
