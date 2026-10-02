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
    date: 'September 2026',
    shortDate: 'SEP 2026',
    title: 'Club Launch & Recruitment',
    status: 'completed',
    description:
      'Welcome new members, establish teams, identify interests, and select the first investigations. Define documentation standards and set up shared communication channels.',
  },
  {
    id: 'ms-02',
    date: 'October 2026',
    shortDate: 'OCT 2026',
    title: 'First Research Cycle',
    status: 'in-progress',
    description:
      'Begin biology and environmental science experiments. Launch chemistry natural indicators project. Establish consistent documentation and observation standards across all active teams.',
  },
  {
    id: 'ms-03',
    date: 'December 2026',
    shortDate: 'DEC 2026',
    title: 'Internal Science Showcase',
    status: 'planned',
    description:
      'Present early findings, prototypes, experiments, failures, and lessons to the school community. Share what worked, what did not, and what the data actually showed.',
  },
  {
    id: 'ms-04',
    date: 'January 2027',
    shortDate: 'JAN 2027',
    title: 'Research Cycle II',
    status: 'planned',
    description:
      'Launch new interdisciplinary research and engineering teams. Begin solar efficiency investigation and passive cooling model. Incorporate lessons from the first research cycle.',
  },
  {
    id: 'ms-05',
    date: 'March 2027',
    shortDate: 'MAR 2027',
    title: 'Competition Preparation',
    status: 'planned',
    description:
      'Develop selected projects for exhibitions, competitions, and public presentation. Support members in preparing clear, evidence-based project summaries and presentation materials.',
  },
  {
    id: 'ms-06',
    date: 'May 2027',
    shortDate: 'MAY 2027',
    title: 'Annual Science Exhibition',
    status: 'planned',
    description:
      'Present the year\'s research, prototypes, experiments, and results. Document all projects for the club archive and identify directions for the following year.',
  },
];

export const longTermGoals = [
  'Build more interdisciplinary projects that connect science, technology, mathematics, and environmental thinking.',
  'Increase student-led research across more fields of study.',
  'Participate in regional and national scientific exhibitions.',
  'Improve and standardize project documentation practices.',
  'Create connections with other student science communities.',
  'Develop an annual student science publication documenting the year\'s work.',
];

export const statusGroups = {
  completed: milestones.filter((m) => m.status === 'completed'),
  current: milestones.filter((m) => m.status === 'in-progress'),
  upcoming: milestones.filter((m) => m.status === 'planned'),
};
