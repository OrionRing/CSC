// data/projects.ts
// Science Club project data
// Update this file with real project information as the club progresses.

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
}

export const projects: Project[] = [
  {
    id: 'proj-01',
    slug: 'plant-growth-light',
    number: '01',
    title: 'Plant Growth Under Different Light Conditions',
    category: 'Biology',
    categories: ['biology'],
    year: 2026,
    status: 'completed',
    summary: 'A four-week investigation into how different light conditions affect plant growth, leaf development, and overall plant health.',
    description:
      'This project examined how exposure to different types of light — natural sunlight, artificial white light, and limited indirect light — affects the rate of plant growth, leaf size, stem height, and overall plant health in fast-growing seedlings.',
    researchQuestion:
      'How do different light conditions (natural sunlight, artificial white light, and indirect low light) affect the growth rate and physical development of bean seedlings over a four-week period?',
    hypothesis:
      'We hypothesized that seedlings receiving natural sunlight would demonstrate the greatest overall growth, while seedlings under indirect low light would show elongated stems with smaller, less-developed leaves — a response consistent with phototropism and light-seeking behavior.',
    method: [
      'Twelve identical bean seedlings were divided equally into three groups.',
      'Group A was placed on a south-facing windowsill receiving direct natural sunlight.',
      'Group B was placed under a full-spectrum LED grow light on a 14-hour cycle.',
      'Group C was placed in an interior space with only ambient indirect light.',
      'Stem height, leaf count, and leaf width were measured every three days over four weeks.',
      'Observations and photographs were recorded in a shared documentation log.',
    ],
    observations:
      'Group A and Group B showed similar rates of growth in height during the first two weeks, though Group B leaves appeared broader and darker green by week three. Group C seedlings grew taller quickly but developed narrower, paler leaves — a classic etiolation response. By week four, Group A plants appeared the most structurally robust, with the widest leaves and most compact stems.',
    results:
      'Results are consistent with our hypothesis. Natural sunlight produced the healthiest overall plant development. Artificial LED lighting produced comparable growth in height but with some differences in leaf pigmentation. Indirect low light caused measurable etiolation — elongated stems, reduced leaf development, and lighter coloration.',
    limitations: [
      'Small sample size (four plants per group) limits statistical confidence.',
      'Room temperature was not precisely controlled across all three locations.',
      'Different soil batches were used due to supply constraints — a possible variable.',
      'The LED light spectrum may not perfectly replicate natural sunlight.',
    ],
    nextSteps: [
      'Repeat the experiment with a larger sample size.',
      'Use a more controlled environment (e.g., a grow tent with regulated temperature).',
      'Measure chlorophyll content as a proxy for photosynthetic efficiency.',
      'Extend the observation period to eight weeks.',
    ],
    team: ['Club President', 'Research Coordinator', 'Two Year 10 Members'],
    duration: 'Four weeks — September to October 2026',
    image: '/images/project-plant-growth.jpg',
    imageCaption: 'Bean seedlings under observation across three light conditions. Photography pending.',
    featured: false,
  },
  {
    id: 'proj-02',
    slug: 'water-filtration-prototype',
    number: '02',
    title: 'Low-Cost Water Filtration Prototype',
    category: 'Environmental Science / Engineering',
    categories: ['environmental', 'engineering'],
    year: 2026,
    status: 'in-progress',
    summary:
      'Designing and testing a simple filtration system using accessible materials to investigate methods for improving water clarity.',
    description:
      'Our team is designing and comparing simple filtration systems to understand how different layering materials — sand, gravel, activated charcoal, and cotton — affect water clarity. The project combines environmental science, measurement, design, and iterative testing.',
    researchQuestion:
      'Which combination of low-cost filtration materials most effectively reduces turbidity and visible particulates in artificially contaminated water samples?',
    hypothesis:
      'We hypothesize that a three-stage filtration system combining gravel, fine sand, and activated charcoal will produce the lowest turbidity measurements compared to single-material or two-stage alternatives.',
    method: [
      'Contaminated water samples will be created using controlled amounts of soil, clay, and organic material.',
      'Four prototype filtration columns will be constructed from identical PET plastic bottles.',
      'Each column will use a different material configuration: gravel only, sand only, charcoal only, and a layered combination.',
      'Turbidity of input and output water will be measured using a simple light-transmission test.',
      'Flow rate will also be recorded for each prototype.',
      'Results will be documented across three test cycles with fresh contaminated water each time.',
    ],
    observations:
      'Initial testing is underway. Preliminary observations suggest the layered combination column is producing noticeably clearer output water compared to single-material columns. Full measurement data is being collected.',
    results:
      'Results are being collected. Full analysis expected by December 2026. Preliminary data will be presented at the internal showcase.',
    limitations: [
      'Turbidity measurements use a simple visual/light method rather than calibrated scientific equipment.',
      'The contamination mixture is artificial and does not replicate real-world water complexity.',
      'Flow rate variation between prototypes introduces an additional variable.',
    ],
    nextSteps: [
      'Complete three full measurement cycles.',
      'Analyze turbidity data and calculate percentage improvement.',
      'Redesign the best-performing prototype for improved flow rate.',
      'Document full findings for the December showcase.',
    ],
    team: ['Vice President', 'Engineering Coordinator', 'Three Year 11 Members'],
    duration: 'Ongoing — October 2026 to December 2026',
    image: '/images/project-water-filtration.jpg',
    imageCaption: 'Filtration prototypes under construction. Photography pending.',
    featured: true,
  },
  {
    id: 'proj-03',
    slug: 'solar-energy-efficiency',
    number: '03',
    title: 'Solar Energy Efficiency Investigation',
    category: 'Physics / Renewable Energy',
    categories: ['physics'],
    year: 2027,
    status: 'planned',
    summary:
      'An investigation into how angle, light intensity, and environmental conditions influence the electrical output of small solar panels.',
    description:
      'This planned investigation will examine how changes in panel angle, shading, and light intensity affect the voltage and current output of small consumer-grade solar panels — exploring the practical limits and optimization of solar energy capture at a small scale.',
    researchQuestion:
      'How does panel angle relative to a simulated light source affect the electrical output (voltage and current) of a small solar panel under controlled laboratory conditions?',
    hypothesis:
      'We hypothesize that maximum electrical output will occur when the panel is perpendicular to the light source (90°), and that output will decrease predictably as the angle of incidence increases toward either extreme.',
    method: [
      'Small solar panels will be mounted on an adjustable angle bracket.',
      'A calibrated light source will simulate solar illumination at a consistent distance.',
      'Panel angle will be adjusted in 10-degree increments from 0° to 90°.',
      'Voltage and current output will be measured using a multimeter at each angle.',
      'The experiment will be repeated under partial shading conditions.',
      'Data will be graphed and analyzed for relationship patterns.',
    ],
    observations:
      'Investigation not yet started. Expected to begin January 2027.',
    results:
      'Planned investigation. Results pending. This section will be updated following data collection.',
    limitations: [
      'Using a lab light source rather than actual sunlight introduces variables.',
      'Small consumer panels may have manufacturing inconsistencies.',
      'Ambient light in the room may affect measurement accuracy.',
    ],
    nextSteps: [
      'Confirm equipment availability.',
      'Review existing research on solar panel efficiency curves.',
      'Design the measurement apparatus.',
      'Begin investigation in January 2027.',
    ],
    team: ['Physics-interest members — to be confirmed'],
    duration: 'Planned — January to March 2027',
    image: '/images/project-solar.jpg',
    imageCaption: 'Investigation planned for January 2027.',
    featured: false,
  },
  {
    id: 'proj-04',
    slug: 'natural-indicators-acidity',
    number: '04',
    title: 'Natural Indicators and Acidity',
    category: 'Chemistry',
    categories: ['chemistry'],
    year: 2026,
    status: 'completed',
    summary:
      'Testing plant-based pigments as natural acid-base indicators and comparing their visible responses across different solutions.',
    description:
      'We extracted pigments from red cabbage, turmeric, and beetroot and tested their color-change responses across solutions of known pH — exploring the chemistry behind natural indicators and comparing their sensitivity to commercial litmus paper.',
    researchQuestion:
      'How do plant-based pigment extracts compare to commercial litmus paper in indicating the acidity or alkalinity of common household solutions?',
    hypothesis:
      'We hypothesized that red cabbage extract (containing anthocyanin) would show the widest visible color range across the pH scale, making it the most informative natural indicator among those tested.',
    method: [
      'Pigment extracts were prepared from red cabbage, turmeric, and beetroot using a water-based extraction method.',
      'Seven solutions were prepared: lemon juice, vinegar, plain water, baking soda solution, soap water, antacid solution, and household bleach (handled with full safety precautions).',
      'Each extract was added to small sample volumes of each solution.',
      'Color changes were photographed and recorded alongside commercial litmus paper comparisons.',
      'Estimated pH ranges were assigned based on color comparison with reference charts.',
    ],
    observations:
      'Red cabbage extract showed the most distinct color range — from deep pink/red in acidic conditions through purple in neutral to green/yellow in alkaline solutions. Turmeric showed a less dramatic shift. Beetroot produced visible but subtler changes.',
    results:
      'Red cabbage extract demonstrated the broadest and most visually distinct color range, consistent with our hypothesis. Commercial litmus paper aligned closely with extract results across all seven solutions. Turmeric showed clear sensitivity to strong alkaline conditions (producing a reddish-orange), making it useful for identifying high-pH solutions specifically.',
    limitations: [
      'Concentration of extracts was estimated rather than precisely measured.',
      'Color observations were subjective and dependent on ambient lighting.',
      'We did not have access to calibrated pH meters for independent verification.',
    ],
    nextSteps: [
      'Test additional plant sources for extractable indicator pigments.',
      'Use a calibrated pH meter to verify solution pH values.',
      'Develop a simple color-reference chart for classroom use.',
    ],
    team: ['Research Coordinator', 'Documentation Lead', 'Two Year 10 Members'],
    duration: 'Three weeks — September to October 2026',
    image: '/images/project-indicators.jpg',
    imageCaption: 'Natural indicator color responses across tested solutions.',
    featured: false,
  },
  {
    id: 'proj-05',
    slug: 'passive-cooling-model',
    number: '05',
    title: 'Passive Cooling Model',
    category: 'Physics / Engineering',
    categories: ['physics', 'engineering'],
    year: 2027,
    status: 'research',
    summary:
      'Exploring how ventilation, surface materials, and structure affect temperature in small-scale building models.',
    description:
      'This project is in its research phase, examining how passive design strategies — including cross-ventilation, reflective surface materials, and roof geometry — affect the internal temperature of small model structures under identical heat source conditions.',
    researchQuestion:
      'Which combination of passive design features (ventilation openings, surface reflectivity, and roof geometry) produces the greatest reduction in internal temperature in a small model structure exposed to a consistent artificial heat source?',
    hypothesis:
      'We hypothesize that a model combining cross-ventilation openings, a reflective roof surface, and a gabled roof geometry will demonstrate the lowest internal temperature compared to single-variable alternatives.',
    method: [
      'Research phase: reviewing existing literature on passive cooling strategies.',
      'Three identical base structures will be constructed from cardboard.',
      'Surface modifications (reflective film, dark paint) will be applied to separate models.',
      'Ventilation openings will be added to selected models.',
      'Temperature loggers will be placed inside each model.',
      'A standardized heat lamp will serve as the simulated heat source.',
      'Temperature readings will be taken at 5-minute intervals over one hour.',
    ],
    observations:
      'Research phase. Physical construction and testing planned for January 2027.',
    results:
      'Research phase. Results pending. This section will be updated following data collection.',
    limitations: [
      'A heat lamp does not fully replicate solar radiation behavior.',
      'Model scale means results may not translate directly to full-scale buildings.',
      'Ambient room temperature may affect readings.',
    ],
    nextSteps: [
      'Complete research review.',
      'Design model construction specifications.',
      'Source materials and temperature loggers.',
      'Begin construction in January 2027.',
    ],
    team: ['Engineering Coordinator — team to be confirmed'],
    duration: 'Research ongoing — construction planned January 2027',
    image: '/images/project-cooling.jpg',
    imageCaption: 'Planned investigation. Research phase in progress.',
    featured: false,
  },
  {
    id: 'proj-06',
    slug: 'school-biodiversity-survey',
    number: '06',
    title: 'School Biodiversity Survey',
    category: 'Biology / Environmental Science',
    categories: ['biology', 'environmental'],
    year: 2027,
    status: 'planned',
    summary:
      'Documenting plant and small-animal diversity around the school environment and examining patterns across different areas.',
    description:
      'A planned field investigation that will document and classify the plant species, invertebrate populations, and bird observations found across different zones of the school grounds — comparing diversity between paved, grassy, garden, and wooded areas.',
    researchQuestion:
      'How does plant and invertebrate species diversity vary across different land-use zones within the school grounds?',
    hypothesis:
      'We hypothesize that the garden and wooded boundary areas will contain significantly greater species diversity than the paved and manicured lawn zones, reflecting the relationship between habitat complexity and biodiversity.',
    method: [
      'The school grounds will be divided into four survey zones: paved courtyard, maintained lawn, garden bed, and wooded boundary.',
      'Each zone will be surveyed using standardized quadrat sampling for plant species.',
      'Invertebrate surveys will use visual inspection and pitfall traps.',
      'Bird observations will be logged over three morning sessions.',
      'All observations will be recorded photographically and in a shared species log.',
      'Species will be identified using field guides and verified by the teacher advisor.',
    ],
    observations:
      'Survey not yet conducted. Planned for spring term 2027.',
    results:
      'Planned investigation. Results pending. This section will be updated following fieldwork completion.',
    limitations: [
      'Species identification by students may involve errors requiring advisor verification.',
      'Survey timing (season) will affect which species are observable.',
      'Pitfall traps require careful management to minimize impact on invertebrate populations.',
    ],
    nextSteps: [
      'Obtain school administration permission for fieldwork.',
      'Source identification guides and sampling equipment.',
      'Train members on field identification techniques.',
      'Begin surveys in March 2027.',
    ],
    team: ['Biology-interest members — to be confirmed'],
    duration: 'Planned — March to April 2027',
    image: '/images/project-biodiversity.jpg',
    imageCaption: 'Fieldwork planned for spring 2027.',
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project {
  return projects.find((p) => p.featured) ?? projects[1];
}

export const statusLabels: Record<ProjectStatus, string> = {
  'completed': 'Completed',
  'in-progress': 'In Progress',
  'planned': 'Planned',
  'research': 'Research Phase',
};
