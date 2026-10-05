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
  kpis?: string[];
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
    timeline: 'Q3–Q4 2026',
    date: 'Q3–Q4 2026',
    title: 'Research Protocol Standardization & Repository Digitalization',
    status: 'completed',
    description:
      'Elevate all club research methodologies to formal scientific standard with reproducible digital documentation and certified experimental tracking across all 3 labs.',
    strategicObjective:
      'Establish rigorous scientific methodology standards, paper authoring conventions, and an open digital repository preserving all Canisius student investigations.',
    keyInitiatives: [
      'Digitalize historical archives (cataloging 30+ projects into formal IEEE/scientific paper formats).',
      'Deploy standard operating procedures (SOPs) across Physics, Chemistry, and Biology laboratories.',
      'Implement structured electronic lab notebooks (ELNs) for real-time observation and raw data storage.',
      'Calibrate core analytical apparatus including AC/DC kits, galvanometer setups, and optical bench equipment.',
    ],
    deliverables: [
      'Comprehensive digital repository live on Canisius Science Club web hub with 16 fully cataloged papers.',
      'Standardized risk assessment and laboratory chemical safety protocols.',
      'Standard template library for research abstracts, methodologies, and statistical data plots.',
    ],
    kpis: [
      '100% of active projects documented in structured digital ELNs',
      'Zero lab safety incidents across all weekly sessions',
    ],
  },
  {
    id: 'rd-02',
    pillar: 'Future Development',
    phase: 'Phase 02',
    timeline: 'Q1–Q2 2027',
    date: 'Q1–Q2 2027',
    title: 'Applied Prototyping & Multi-Disciplinary Competition Pipeline',
    status: 'in-progress',
    description:
      'Transition theoretical investigations into validated physical prototypes prepared for high-tier national and international STEM Olympiads.',
    strategicObjective:
      'Focus student research cohorts on tangible physical prototypes with high empirical reproducibility, targeting national and international science fairs.',
    keyInitiatives: [
      'Advance lead project cohorts: Botanical antibacterial gels (Daun Jarak), PCM solar thermal cooling, and bio-energy cells.',
      'Conduct rigorous bench testing, calibration curves, and statistical reproducibility trials.',
      'Standardize competition registration workflows for OPSI, EUREKA! ITB, and international invention expos (IIIEX/YSIF).',
      'Organize internal peer-review mock defense sessions before external submission deadlines.',
    ],
    deliverables: [
      '3 fully characterized competition-grade physical prototypes with empirical manuscripts.',
      'Formal submissions to regional, national, and international science judging panels.',
      'Peer-review feedback rubrics modeled after national judging criteria.',
    ],
    kpis: [
      'Minimum 4 formal competition submissions per academic year',
      '>85% prototype experimental reproducibility across triplicated test runs',
    ],
  },

  // ==================== 2. SELF-SUSTAINABILITY ====================
  {
    id: 'rd-03',
    pillar: 'Self-Sustainability',
    phase: 'Phase 03',
    timeline: 'Q3 2027',
    date: 'Q3 2027',
    title: 'Junior Apprenticeship Architecture & Institutional Knowledge Continuity',
    status: 'planned',
    description:
      'Eliminate knowledge loss from graduating senior cohorts by establishing an institutionalized peer-mentoring framework independent of individual members.',
    strategicObjective:
      'Build a self-renewing talent pipeline where junior members gain direct hands-on lab competencies through co-authoring projects alongside senior researchers.',
    keyInitiatives: [
      'Establish a "Junior Researcher Apprenticeship" pairing Grade 10 students with veteran paper authors.',
      'Develop modular laboratory crash courses in microcontroller programming, spectrophotometry, and chemical extraction.',
      'Consolidate equipment maintenance checklists to ensure continuous operational readiness of lab apparatus.',
      'Create asynchronous lab onboarding guides covering apparatus setup, safety, and data analysis software.',
    ],
    deliverables: [
      'Internal CSC Laboratory Handbook & Research Training Syllabus.',
      'Self-service equipment calibration guides for all 15 core lab apparatus sets.',
      'Structured leadership transition protocol for executive club handovers.',
    ],
    kpis: [
      '100% of Grade 10 apprentices co-author at least 1 empirical paper by term end',
      'Zero apparatus downtime due to unlogged maintenance issues',
    ],
  },
  {
    id: 'rd-04',
    pillar: 'Self-Sustainability',
    phase: 'Phase 04',
    timeline: 'Q4 2027',
    date: 'Q4 2027',
    title: 'Circular Resource Procurement & Alumni Advisory Council',
    status: 'planned',
    description:
      'Secure long-term non-budgetary funding and material sustainability through campus waste stream integration and alumni STEM networks.',
    strategicObjective:
      'Make lab operations financially and materially self-reliant through circular material sourcing and an active alumni scientific network.',
    keyInitiatives: [
      'Channel school organic waste (canteen culinary oils, fruit peels, biological effluents) into ongoing biofuel and compost projects.',
      'Form an Alumni STEM Advisory Board comprising Canisius graduates in medicine, engineering, and chemical research.',
      'Introduce micro-grants funded through competition prize distributions to self-fund next-generation hardware.',
      'Establish a shared chemical reagent inventory database with automated re-order thresholds.',
    ],
    deliverables: [
      'Zero-cost feedstock agreements for culinary waste oil and biomass experiments.',
      'Charter of the Canisius Science Alumni Advisory Network for project feedback and paper pre-reviews.',
      'Automated reagent inventory tracking system preventing experimental supply shortages.',
    ],
    kpis: [
      '50%+ reduction in recurring material costs through campus circular waste streams',
      'Quarterly review sessions conducted with alumni researchers',
    ],
  },

  // ==================== 3. POTENTIAL EXPANSION ====================
  {
    id: 'rd-05',
    pillar: 'Potential Expansion',
    phase: 'Phase 05',
    timeline: 'Q1–Q2 2028',
    date: 'Q1–Q2 2028',
    title: 'Inter-School Youth Science Colloquium & Civic Eco-Remediation',
    status: 'planned',
    description:
      'Expand Canisius Science Club from an internal school club into a regional anchor for high school youth research collaboration and ecological action.',
    strategicObjective:
      'Scale student research from isolated laboratory benches into community-facing ecological solutions and regional academic symposiums.',
    keyInitiatives: [
      'Host the inaugural Canisius Invitational Youth Science Colloquium for high school student researchers across Greater Jakarta.',
      'Deploy student-engineered water filtration (mussel biofilters / porous pavement) as pilot community service initiatives.',
      'Open select laboratory equipment access workshops for partner junior high and elementary students.',
      'Publish an open-access anthology of secondary school scientific papers.',
    ],
    deliverables: [
      'Annual Canisius Science Symposium with published conference proceedings.',
      'Community deployment of urban eco-remediation testbeds along the Ciliwung River corridor.',
      'Youth STEM workshop modules delivered to middle school science classes.',
    ],
    kpis: [
      'Participation from 10+ partner high schools at the annual colloquium',
      'Measurable water purity improvement metrics documented at community pilot sites',
    ],
  },
  {
    id: 'rd-06',
    pillar: 'Potential Expansion',
    phase: 'Phase 06',
    timeline: '2028 & Beyond',
    date: '2028 & Beyond',
    title: 'University Research Lab Affiliations & Student Patent Incubator',
    status: 'planned',
    description:
      'Bridge high school innovations directly with university research labs, academic journals, and intellectual property protections.',
    strategicObjective:
      'Create institutional pathways for Canisius inventions to receive university-grade analytical characterization, peer-reviewed publication, and patent filings.',
    keyInitiatives: [
      'Establish formal memorandum agreements with university engineering and chemistry faculties (ITB, UI, UGM) for advanced spectroscopic characterization.',
      'Provide patent and utility model filing support for novel mechanical and biomaterial student inventions.',
      'Publish high-performing student papers in peer-reviewed secondary and undergraduate academic journals.',
      'Form industry advisory liaisons to evaluate commercial viability of student prototypes.',
    ],
    deliverables: [
      'At least 2 patent/utility model applications filed with the Indonesian Directorate General of Intellectual Property (DJKI).',
      'Affiliate laboratory agreements enabling specialized instrument access (SEM/TEM/FTIR).',
      'Minimum 2 student papers accepted in indexed student research journals.',
    ],
    kpis: [
      '2+ filed patent/utility model applications',
      'Direct pipeline established with 3 top Indonesian university research labs',
    ],
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
      'Standardizing empirical research protocols, modernizing laboratory documentation into digital ELNs, and engineering robust physical prototypes for premier national and international STEM Olympiads.',
    milestones: strategicRoadmap.filter((m) => m.pillar === 'Future Development'),
  },
  {
    id: 'pillar-sustainability',
    pillar: 'Self-Sustainability',
    number: '02',
    headline: 'Strategies for Self-Sustainability',
    summary:
      'Ensuring club continuity across student generations through institutional junior apprenticeships, modular lab skills curricula, zero-cost circular feedstock procurement, and an active alumni scientific network.',
    milestones: strategicRoadmap.filter((m) => m.pillar === 'Self-Sustainability'),
  },
  {
    id: 'pillar-expansion',
    pillar: 'Potential Expansion',
    number: '03',
    headline: 'Strategies for Potential Expansion',
    summary:
      'Broadening external reach through an inter-school youth science colloquium, field-tested civic ecological remediation along the Ciliwung River, university lab affiliations (ITB/UI), and intellectual property filings.',
    milestones: strategicRoadmap.filter((m) => m.pillar === 'Potential Expansion'),
  },
];

export const longTermGoals = [
  'Build an evergreen, self-sustaining scientific research culture at Kolese Kanisius that outlasts any single cohort.',
  'Achieve consistent top podium honors at Indonesia’s foremost science competitions (OPSI, BRIN, ITB).',
  'Bridge high school laboratory curiosity with commercial utility, university partnerships, and civic ecological impact.',
];

export const statusGroups = {
  completed: strategicRoadmap.filter((m) => m.status === 'completed'),
  current: strategicRoadmap.filter((m) => m.status === 'in-progress'),
  upcoming: strategicRoadmap.filter((m) => m.status === 'planned'),
};
