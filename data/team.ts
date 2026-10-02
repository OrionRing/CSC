// data/team.ts
// Science Club team members
// Replace placeholder roles with actual member names and details.

export interface TeamMember {
  id: string;
  role: string;
  roleShort: string;
  description: string;
  year: string;
  focus: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'tm-01',
    role: 'Club President',
    roleShort: 'PRESIDENT',
    description:
      'Oversees club direction, coordinates between teams, manages the meeting schedule, and represents the club to the school.',
    year: 'Year 12',
    focus: 'Biology / Environmental Science',
  },
  {
    id: 'tm-02',
    role: 'Vice President',
    roleShort: 'VICE PRESIDENT',
    description:
      'Supports the president, coordinates the engineering and environmental science teams, and leads the water filtration project.',
    year: 'Year 11',
    focus: 'Environmental Science / Engineering',
  },
  {
    id: 'tm-03',
    role: 'Research Coordinator',
    roleShort: 'RESEARCH',
    description:
      'Manages the research methodology across active projects, reviews documentation standards, and coordinates the chemistry investigations.',
    year: 'Year 12',
    focus: 'Chemistry / Physics',
  },
  {
    id: 'tm-04',
    role: 'Engineering Coordinator',
    roleShort: 'ENGINEERING',
    description:
      'Leads prototype construction activities, manages materials, and coordinates design-and-test cycles for engineering projects.',
    year: 'Year 11',
    focus: 'Physics / Engineering',
  },
  {
    id: 'tm-05',
    role: 'Documentation Lead',
    roleShort: 'DOCUMENTATION',
    description:
      'Maintains the club journal, standardizes observation recording across projects, and produces written summaries of club activities.',
    year: 'Year 10',
    focus: 'Biology / Scientific Writing',
  },
  {
    id: 'tm-06',
    role: 'Teacher Advisor',
    roleShort: 'ADVISOR',
    description:
      'Provides scientific guidance, ensures safety across all experimental activities, and supports students in developing rigorous investigation methods.',
    year: 'Staff',
    focus: 'Science Department',
  },
];
