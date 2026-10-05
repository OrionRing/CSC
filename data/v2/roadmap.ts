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
      'Prevent lost work between school terms by logging all 30+ past and active research papers with clean English abstracts, methodology notes, and data logs in one accessible place.',
    keyInitiatives: [
      'Catalog existing student papers (biodiesel, UV quantum dots, thermoelectric thermos, water biofilters) into structured formats.',
      'Create a shared, plug-and-play writeup template (Abstract, Methods, Observations, Discussion) optimized for Indonesian national competitions (OPSI, ITB).',
      'Inventory available school lab equipment (AC/DC sets, optical kits, galvanometers) so teams know what apparatus they can immediately borrow.',
    ],
    deliverables: [
      'Digital research archive live on the Canisius Science Club hub (16 documented papers).',
      'One-page equipment & glassware reference sheet for quick lab planning.',
      'Reusable paper template reducing writeup time for new projects.',
    ],
    notes: 'Completed without adding extra administrative burden to weekly lab sessions.',
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
      'Work within real student schedules by prioritizing only 1 or 2 high-potential competition targets per term rather than over-committing across multiple simultaneous contests.',
    keyInitiatives: [
      'Advance the Daun Jarak (Jatropha curcas) antibacterial gel: run simple zone-of-inhibition disc tests and test topical gel consistency during Wednesday lab hours.',
      'Support other small teams (e.g., PCM cooling or Arduino sensor builds) to complete working prototypes before exam periods begin.',
      'Pick 1–2 target competitions (e.g., OPSI Kemendikbud or ITB Science Fair) and synchronize draft deadlines with school exam schedules to avoid burnout.',
    ],
    deliverables: [
      '1 validated botanical gel prototype with clear antimicrobial test data.',
      'At least 1 high-quality team submission to a national high school science competition.',
      'Exam-friendly project timeline with built-in pause buffers during midterm (PTS) and final (PAS) test weeks.',
    ],
    notes: 'Paced specifically for high schoolers balancing daily coursework and CC activities.',
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
      'Keep the club alive and functional even with natural student turnover by turning institutional knowledge into short, casual 10-minute walkthroughs rather than heavy manuals.',
    keyInitiatives: [
      'Run quick 10-minute practical demos at the start of meetings on how to operate lab apparatus (calibrating galvanometers, setting up spin coaters, safe chemical disposal).',
      'Pair 10th graders directly with 11th grade project leads as informal co-researchers so they learn by watching and assisting.',
      'Maintain a simple shared Google Sheet checklist for chemical reagents (alcohol, agar powder, petri dishes) to re-stock before they run out.',
    ],
    deliverables: [
      'Brief 1-page "Quickstart Equipment Guide" posted inside the CC lab locker.',
      'Active Grade 10 apprentices ready to take over lead author roles for next term’s projects.',
      'Shared reagent restock list reviewed once a month.',
    ],
    notes: 'Designed to require zero extra meetings—everything fits inside regular weekly club hours.',
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
      'Make research sustainable on a modest high school budget without relying on expensive commercial supplies or complex sponsorships.',
    keyInitiatives: [
      'Source everyday waste materials for experiments: canteen cooking oil for biodiesel, scrap plastic for permeable pavement, and backyard Jatropha cuttings for botanical extraction.',
      'Coordinate with the school science department for basic lab consumables (distilled water, filter papers, glassware access).',
      'Set up an informal group chat with CC alumni studying science/engineering at university for quick paper proofreading and sanity checks before competition submissions.',
    ],
    deliverables: [
      'Zero-cost feedstock channels established for ongoing student research.',
      'Alumni review channel for quick 1-week turnaround on paper abstracts.',
      'Basic consumable supply buffer maintained for routine Wednesday/Friday sessions.',
    ],
    notes: 'Low effort, high payoff. Leverages the strong Canisius community and campus resources.',
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
      'Demystify research for the broader Canisius student body through hands-on, visually interesting demos (fluorescent quantum dots, spinning engines, herbal gels).',
    keyInitiatives: [
      'Set up an interactive booth at CC Day featuring 3 physical demos with simple poster boards.',
      'Host 1 casual "Open Lab Afternoon" where any Canisian student can drop by, try an experiment, or see how equipment works without commitment.',
      'Publish short student-friendly summaries of our best papers in the school bulletin or Instagram.',
    ],
    deliverables: [
      'Interactive CC Day exhibition table featuring real student-built hardware.',
      'Open lab afternoon welcoming new prospective members into the club.',
      'Handful of motivated new recruits joining active project groups.',
    ],
    notes: 'Relaxed, organic recruitment—interested students can just drop by and see things work.',
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
      'Give dedicated members a glimpse into university-level STEM research while keeping external commitments realistic and exciting.',
    keyInitiatives: [
      'Arrange an informal weekend or term-break lab visit to a local university engineering or chemistry facility.',
      'Share research findings with 1 or 2 neighboring Jakarta schools interested in starting student science clubs.',
      'Submit our best-tested projects to university-hosted youth science symposiums if the team has the bandwidth.',
    ],
    deliverables: [
      '1 university lab observation tour (e.g. observing SEM or spectrophotometer operations).',
      'Informal exchange of project ideas with fellow high school science enthusiasts.',
      'Clear roadmap transition ready for the following year’s club leadership.',
    ],
    notes: 'Optional enrichment that fits around holidays without interfering with academic terms.',
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
