// data/stats.ts
// Science Club statistics / figures
// Update these values as the club progresses.

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const clubStats: Stat[] = [
  {
    id: 'stat-01',
    value: '24',
    label: 'Active Members',
    description: 'Students currently enrolled in the Science Club for 2026–2027.',
  },
  {
    id: 'stat-02',
    value: '08',
    label: 'Projects Started',
    description: 'Investigations, prototypes, and research projects initiated this year.',
  },
  {
    id: 'stat-03',
    value: '04',
    label: 'Fields Explored',
    description: 'Biology, Chemistry, Physics, and Environmental Science.',
  },
  {
    id: 'stat-04',
    value: '01',
    label: 'Shared Mission',
    description: 'Turning curiosity into questions, questions into investigations.',
  },
];

// Club metadata
export const clubInfo = {
  name: 'Science Club',
  identifier: 'Student Science',
  year: '2026',
  yearRange: '2026–2027',
  tagline: 'Explore the unknown.',
  secondaryTagline: 'Question. Test. Discover.',
  intro:
    'We are a student-led science club exploring the world through experiments, research, engineering, and collaboration. We turn curiosity into questions, questions into investigations, and ideas into things we can test.',
  joinInfo:
    'Open to all high school students interested in science, technology, experimentation, research, or engineering. No prior experience required — just genuine curiosity.',
  meetingInfo: 'Meetings take place weekly. Check with your science department for current room and time details.',
};
