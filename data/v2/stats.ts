export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const clubStats: Stat[] = [
  {
    id: 'stat-01',
    value: '30+',
    label: 'Research Projects',
    description: '16 peer-reviewed papers archived in our digital repository, with ongoing lab trials currently underway.',
  },
  {
    id: 'stat-02',
    value: '03',
    label: 'Core Laboratories',
    description: 'Dedicated Physics, Chemistry, and Biology spaces equipped with precision analytical tools and certified reagents.',
  },
  {
    id: 'stat-03',
    value: '02x',
    label: 'Weekly Sessions',
    description: 'Active laboratory experimentation every Wednesday & Friday (15:00 – 17:00 WIB).',
  },
  {
    id: 'stat-04',
    value: '🏆',
    label: 'National & Global Awards',
    description: 'Gold Medals at IIIEX, Silver Medals at YSIF, and competitive science olympiad finishes.',
  },
];

export const clubInfo = {
  name: 'Canisius Science Club',
  identifier: 'CSC',
  year: '2026',
  yearRange: '2026–2027',
  tagline: 'Scientific Rigor. Real-World Solutions. Care for Creation.',
  secondaryTagline: 'Applied STEM • Cura Personalis • Academic Excellence',
  intro:
    'Canisius Science Club is the official STEM research extracurricular at SMA Kolese Kanisius Jakarta. We focus on hands-on experimental research, rigorous laboratory methodology, and high-impact science competition entries. Our mission is to transform scientific curiosity into tangible solutions that address everyday problems while caring for the environment.',
  joinInfo:
    'Interested in collaborating or learning about our ongoing research? Find us directly at the Canisius College laboratory complex. Currently, we are focused on project execution and competition preparation rather than general recruitment.',
  meetingInfo:
    'Regular Sessions: Wednesdays & Fridays (15:00 – 17:00 WIB) at the STEM Laboratory Complex, Kolese Kanisius, Jl. Menteng Raya No. 64, Central Jakarta.',
};
