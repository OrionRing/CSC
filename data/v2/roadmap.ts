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
    id: 'ms-01',
    date: 'Semester 1 (Aug – Oct 2026)',
    shortDate: 'AUG–OCT',
    title: 'Laboratory Re-alignment & Baseline Testing',
    status: 'completed',
    description:
      'Inventory audit of all physics, chemistry, and biology laboratory equipment. Archiving historical research papers and restructuring project datasets for competition preparation.',
  },
  {
    id: 'ms-02',
    date: 'Semester 1 (Nov – Dec 2026)',
    shortDate: 'NOV–DEC',
    title: 'Individual Project Focus & Manuscript Drafting',
    status: 'in-progress',
    description:
      'Solo consolidation phase: finalizing research documentation for ongoing prototypes (solar cooling, bio-energy, and nanomaterials). Drafting academic abstracts and project portfolios.',
  },
  {
    id: 'ms-03',
    date: 'Semester 2 (Jan – Feb 2027)',
    shortDate: 'JAN–FEB',
    title: 'Competition Submissions & External Registrations',
    status: 'planned',
    description:
      'Registering polished research papers into regional and national student olympiads (OPSI, LIPI/BRIN, EUREKA! ITB 2027). Finalizing poster boards and digital exhibition presentations.',
  },
  {
    id: 'ms-04',
    date: 'Semester 2 (Mar – May 2027)',
    shortDate: 'MAR–MAY',
    title: 'Finals Presentation & School Science Showcase',
    status: 'planned',
    description:
      'Defending papers in competition judging rounds, followed by an internal Canisius science exhibition showcasing working hardware and verified research results.',
  },
];

export const longTermGoals = [
  'Maintain an open-access digital archive of student scientific research at Kolese Kanisius.',
  'Target top podium rankings across national and international STEM competitions.',
  'Translate laboratory prototypes into real-world sustainable solutions for the school campus and surrounding community.',
];

export const statusGroups = {
  completed: milestones.filter((m) => m.status === 'completed'),
  current: milestones.filter((m) => m.status === 'in-progress'),
  upcoming: milestones.filter((m) => m.status === 'planned'),
};
