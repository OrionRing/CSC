export type PostType = 'project-log' | 'field-notes' | 'club-update' | 'reflection';

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  type: PostType;
  typeLabel: string;
  date: string;
  dateISO: string;
  readingTime: string;
  summary: string;
  image: string;
  imageCaption: string;
  content: string[];
}

export const journalPosts: JournalPost[] = [
  {
    id: 'jrn-01',
    slug: 'filtration-first-test',
    title: 'What We Learned From Our First Filtration Test',
    type: 'project-log',
    typeLabel: 'PROJECT LOG',
    date: 'October 18, 2026',
    dateISO: '2026-10-18',
    readingTime: '4 MIN READ',
    summary:
      'The first round of filtration prototype testing raised more questions than it answered — which, as it turns out, is exactly what we were hoping for.',
    image: '/images/journal-filtration-test.jpg',
    imageCaption: 'Filtration prototype testing — first round results.',
    content: [
      'We ran our first full round of water filtration tests last Tuesday, and the results were both encouraging and instructive.',
      'The setup was straightforward: four prototype columns, each with a different material configuration, each receiving the same contaminated water sample.',
      'The layered column — combining gravel, fine sand, and activated charcoal — produced noticeably clearer output water than any single-material alternative.',
      'What we did not expect was that the layered column\'s flow rate was significantly slower than the sand-and-gravel two-stage prototype.',
      'First round: done. Second round: in preparation.',
    ],
  },
  {
    id: 'jrn-02',
    slug: 'failed-experiments-matter',
    title: 'Why Failed Experiments Still Matter',
    type: 'field-notes',
    typeLabel: 'FIELD NOTES',
    date: 'October 6, 2026',
    dateISO: '2026-10-06',
    readingTime: '3 MIN READ',
    summary:
      'Three of our seedling samples from the plant growth investigation did not survive the first week. Here is why that was still useful.',
    image: '/images/journal-failed-experiments.jpg',
    imageCaption: 'Documenting an unexpected result from week one.',
    content: [
      'We lost three seedlings in week one of the plant growth investigation. At first, the reaction in the room was disappointment.',
      'The failures pointed us toward variables we had not considered, and we added them to the observation protocol for the remaining weeks.',
      'Science is not clean. Our documentation should reflect that honestly.',
    ],
  },
  {
    id: 'jrn-03',
    slug: 'choosing-research-questions',
    title: 'Choosing Our Research Questions',
    type: 'club-update',
    typeLabel: 'CLUB UPDATE',
    date: 'September 21, 2026',
    dateISO: '2026-09-21',
    readingTime: '5 MIN READ',
    summary:
      'We spent our first three sessions generating questions, arguing about them constructively, and narrowing down to what we could actually investigate this term.',
    image: '/images/journal-research-questions.jpg',
    imageCaption: 'Early planning session — September 2026.',
    content: [
      'Choosing a good research question is harder than it sounds. The first session of the Science Club was mostly everyone writing questions on pieces of paper.',
      'Applying our testing criteria knocked the list from forty-three down to eleven. Those became our core focus areas.',
    ],
  },
  {
    id: 'jrn-04',
    slug: 'natural-indicators-results',
    title: 'Red Cabbage Was the Right Choice',
    type: 'project-log',
    typeLabel: 'PROJECT LOG',
    date: 'October 1, 2026',
    dateISO: '2026-10-01',
    readingTime: '3 MIN READ',
    summary:
      'Results from the natural indicators project confirmed our hypothesis — and gave us a question we had not thought of asking.',
    image: '/images/journal-indicators.jpg',
    imageCaption: 'Natural indicator color samples across pH range.',
    content: [
      'Red cabbage extract produced color changes across the widest visible range from deep pink to yellow-green.',
      'Turmeric showed a dramatic shift to reddish-orange specifically in strong alkalis, opening a new avenue for testing.',
    ],
  },
];

export function getPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}

export const postTypeLabels: Record<PostType, string> = {
  'project-log': 'PROJECT LOG',
  'field-notes': 'FIELD NOTES',
  'club-update': 'CLUB UPDATE',
  'reflection': 'REFLECTION',
};
