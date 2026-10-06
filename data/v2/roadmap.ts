export type MilestoneStatus = 'completed' | 'in-progress' | 'planned';
export type RoadmapPillar = 'Future Development' | 'Self-Sustainability' | 'Potential Expansion';

export interface Milestone {
  id: string;
  pillar: RoadmapPillar;
  phase: string;
  timeline: string;
  date?: string; // Backwards compatibility
  title: string;
  status: MilestoneStatus;
  description?: string; // Backwards compatibility
  strategicObjective: string;
  keyInitiatives: string[];
  deliverables: string[];
  notes?: string;
}

export interface StrategicPillarInfo {
  id: string;
  pillar: RoadmapPillar;
  number: string;
  headline: string;
  summary: string;
  milestones: Milestone[];
}

export const strategicRoadmap: Milestone[] = [
  // ==================== 1. FUTURE DEVELOPMENT ====================
  {
    id: 'rd-01',
    pillar: 'Future Development',
    phase: 'Phase 01',
    timeline: 'Ongoing / Q3–Q4 2026',
    date: 'Q3–Q4 2026',
    title: 'Archive Centralization & Reusable Paper Templates',
    status: 'completed',
    description:
      'Consolidate scattered research documents from club drives into a single public repository and establish standard paper templates so members don’t start from scratch.',
    strategicObjective:
      'Consolidate all student research into a public digital repository with standard writeup templates and equipment indexes.',
    keyInitiatives: [
      'Catalog existing student papers into structured formats with English abstracts and data logs.',
      'Provide plug-and-play writeup templates optimized for Indonesian national competitions (OPSI, ITB).',
    ],
    deliverables: [
      'Digital repository live on hub (22 documented papers).',
      'Reusable competition paper template for incoming members.',
    ],
    notes: 'Completed with zero administrative friction during lab sessions.',
  },
  {
    id: 'rd-02',
    pillar: 'Future Development',
    phase: 'Phase 02',
    timeline: 'Q1–Q2 2027',
    date: 'Q1–Q2 2027',
    title: 'Bench Testing Active Prototypes & Targeted Competition Entry',
    status: 'in-progress',
    description:
      'Focus weekly lab time on finishing active hands-on experiments (like the Daun Jarak antibacterial gel) and submitting 1–2 polished entries to major competitions without burning out.',
    strategicObjective:
      'Concentrate weekly lab sessions on completing active botanical gels and physical harvesters for 1–2 target science fairs.',
    keyInitiatives: [
      'Advance the Daun Jarak (Jatropha curcas) antibacterial gel: run zone-of-inhibition disc assays.',
      'Support energy harvesting builds (PCM, TEG) to complete prototypes before exam periods.',
    ],
    deliverables: [
      'Validated Daun Jarak antibacterial gel prototype with clear inhibition zones.',
      'Targeted submission to national science competitions (OPSI/ITB).',
    ],
    notes: 'Paced specifically for high schoolers balancing daily coursework.',
  },

  // ==================== 2. SELF-SUSTAINABILITY ====================
  {
    id: 'rd-03',
    pillar: 'Self-Sustainability',
    phase: 'Phase 03',
    timeline: 'Q3 2027',
    date: 'Q3 2027',
    title: 'Low-Friction Knowledge Handover & Equipment Care',
    status: 'planned',
    description:
      'Establish lightweight peer handovers so when senior members get busy with 12th grade exams or graduate, younger students can pick up right where they left off.',
    strategicObjective:
      'Transfer apparatus operating skills to younger grades through brief 10-minute demonstrations during regular meetings.',
    keyInitiatives: [
      'Run 10-minute practical apparatus walkthroughs during Wednesday lab sessions.',
      'Pair 10th grade apprentices directly with 11th grade project leads.',
    ],
    deliverables: [
      '1-page equipment quickstart posted in the laboratory.',
      'Grade 10 co-investigators prepared for lead research roles.',
    ],
    notes: 'Integrated into regular weekly hours without extra meetings.',
  },
  {
    id: 'rd-04',
    pillar: 'Self-Sustainability',
    phase: 'Phase 04',
    timeline: 'Q4 2027',
    date: 'Q4 2027',
    title: 'Pragmatic Resource Sourcing & Alumni Check-Ins',
    status: 'planned',
    description:
      'Keep project costs close to zero by utilizing campus materials (canteen waste oils, local plant cuttings) and asking alumni researchers for quick review feedback.',
    strategicObjective:
      'Maintain near-zero experiment costs by utilizing campus waste streams and informal alumni mentorship.',
    keyInitiatives: [
      'Source everyday waste materials: canteen cooking oil, scrap plastic, and garden cuttings.',
      'Connect with university alumni for rapid paper abstract feedback.',
    ],
    deliverables: [
      'Zero-cost feedstock channels established for student research.',
      'Alumni review network for fast competition abstract feedback.',
    ],
    notes: 'Leverages the strong Canisius community and campus resources.',
  },

  // ==================== 3. POTENTIAL EXPANSION ====================
  {
    id: 'rd-05',
    pillar: 'Potential Expansion',
    phase: 'Phase 05',
    timeline: 'Q1–Q2 2028',
    date: 'Q1–Q2 2028',
    title: 'CC Campus Science Showcase & Open Lab Sessions',
    status: 'planned',
    description:
      'Showcase working student prototypes during school events (like CC Day or extracurricular fairs) to inspire fellow Kanisian students and recruit curious new members.',
    strategicObjective:
      'Share student-built hardware and live experiments during CC Day to inspire the broader school community.',
    keyInitiatives: [
      'Host an interactive demonstration table during CC Day with live working prototypes.',
      'Organize a casual open-lab afternoon for curious prospective members.',
    ],
    deliverables: [
      'Interactive CC Day demo station with working prototypes.',
      'Open lab afternoon welcoming prospective student scientists.',
    ],
    notes: 'Organic recruitment where students experience science hands-on.',
  },
  {
    id: 'rd-06',
    pillar: 'Potential Expansion',
    phase: 'Phase 06',
    timeline: '2028 & Beyond',
    date: '2028 & Beyond',
    title: 'Local University Lab Visits & Inter-School Exchanges',
    status: 'planned',
    description:
      'Organize occasional visits to local university laboratories (e.g., UI or ITB alumni labs) to see professional instruments and connect with other high school science clubs.',
    strategicObjective:
      'Connect club members with university laboratories and peer high school science groups during term breaks.',
    keyInitiatives: [
      'Arrange term-break observation visits to local university STEM facilities.',
      'Exchange project ideas with high school science clubs across Jakarta.',
    ],
    deliverables: [
      'University laboratory observation visit (spectrophotometry & advanced analysis).',
      'Knowledge exchange with peer high school science clubs.',
    ],
    notes: 'Enrichment opportunities scheduled around term holidays.',
  },
];

// Backwards compatibility alias
export const milestones: Milestone[] = strategicRoadmap;

export const strategicPillars: StrategicPillarInfo[] = [
  {
    id: 'pillar-development',
    pillar: 'Future Development',
    number: '01',
    headline: 'Strategies for Future Development',
    summary:
      'Organizing past project archives, creating reusable paper templates, and completing active bench experiments (like Daun Jarak antibacterial gels) for 1–2 target competitions without burning out.',
    milestones: strategicRoadmap.filter((m) => m.pillar === 'Future Development'),
  },
  {
    id: 'pillar-sustainability',
    pillar: 'Self-Sustainability',
    number: '02',
    headline: 'Strategies for Self-Sustainability',
    summary:
      'Protecting the club against student turnover through 10-minute hands-on peer handovers, sourcing zero-cost materials (canteen cooking oil & garden plants), and friendly alumni paper reviews.',
    milestones: strategicRoadmap.filter((m) => m.pillar === 'Self-Sustainability'),
  },
  {
    id: 'pillar-expansion',
    pillar: 'Potential Expansion',
    number: '03',
    headline: 'Strategies for Potential Expansion',
    summary:
      'Connecting with the wider school and community through a fun CC Day demo booth, casual open lab sessions, and occasional university lab visits during term breaks.',
    milestones: strategicRoadmap.filter((m) => m.pillar === 'Potential Expansion'),
  },
];

export const longTermGoals = [
  'Keep an active, friendly research environment at Kolese Kanisius that survives graduating cohorts with zero stress.',
  'Target 1–2 prestigious national science fairs (OPSI, ITB) per year with well-tested, honest student data.',
  'Make STEM research accessible and fun for any curious Canisian student through hands-on laboratory exploration.',
];

export const statusGroups = {
  completed: strategicRoadmap.filter((m) => m.status === 'completed'),
  current: strategicRoadmap.filter((m) => m.status === 'in-progress'),
  upcoming: strategicRoadmap.filter((m) => m.status === 'planned'),
};
