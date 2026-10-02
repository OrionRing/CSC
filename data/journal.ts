// data/journal.ts
// Science Club journal / update entries
// Add new entries at the top of the posts array.

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
      'The setup was straightforward: four prototype columns, each with a different material configuration, each receiving the same contaminated water sample. We prepared the samples using a controlled mixture of soil, clay, and a small amount of organic material — enough to produce consistently turbid water across all four tests.',
      'The layered column — combining gravel, fine sand, and activated charcoal — produced noticeably clearer output water than any single-material alternative. That much matched our hypothesis. But the interesting part was the flow rate data.',
      'The charcoal-only column had the slowest flow rate by far. Slower than we expected. The gravel-only column was fastest, but produced the least improvement in clarity — which we also expected, but not quite to that degree.',
      'What we did not expect was that the layered column\'s flow rate was significantly slower than the sand-and-gravel two-stage prototype, despite producing clearer output. This creates a real design question: does a slower, clearer result represent a better outcome, or does a system need to balance both clarity and flow rate to be practically useful?',
      'That question is now the focus of our next round of testing. We are going to try a modified layered configuration with a coarser upper gravel layer to see if we can improve flow rate while retaining most of the clarity improvement.',
      'We are also reviewing our turbidity measurement method. Our current approach uses a simple light-transmission test, which gives us a useful relative comparison between columns but does not produce a calibrated turbidity value. We are looking into whether the school has access to a nephelometer or similar instrument for future tests.',
      'First round: done. Second round: in preparation. More to follow.',
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
      'We lost three seedlings in week one of the plant growth investigation. Two from the indirect light group and one from the LED group. At first, the reaction in the room was disappointment. We had prepared the groups carefully, and losing nearly a quarter of our samples in the first week felt like a setback.',
      'But one of our members pointed out something that shifted the conversation: the question was not why did they fail — it was what did they fail to tell us before they did?',
      'We went back through the observation log. The two indirect-light seedlings that did not survive had both been planted in the same soil batch — a batch we later noticed had a noticeably different texture and color to the others. The LED seedling that failed had been placed closest to the ballast heat from the light fitting.',
      'Neither of these were things we had recorded as variables at the start. We had not thought to record soil batch consistency or distance from heat-emitting components. The failures pointed us toward variables we had not considered, and we added them to the observation protocol for the remaining weeks.',
      'The results we have with nine plants are less statistically robust than results with twelve would have been. That is a real limitation, and we have documented it as such. But the failures also produced genuinely useful information — they told us that our initial setup had uncontrolled variables we had not identified.',
      'There is a tendency to treat a failed sample as a mistake to apologize for. We are trying to build a habit of treating it as a data point instead.',
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
      'Choosing a good research question is harder than it sounds. The first session of the Science Club was mostly everyone writing questions on pieces of paper and sticking them on a wall. By the end, we had forty-three questions.',
      'Some were interesting but unanswerable with what we had: "How does school noise affect concentration?" — no way to measure concentration precisely. "Does music make plants grow faster?" — actually testable, but we wanted something more original.',
      'Some were genuinely good questions but better suited to later in the year, when we had more experience and equipment. Some needed much more precise conditions than a school environment could provide.',
      'We worked through three criteria: Is it testable here? Can we measure something? Does the answer actually tell us something useful?',
      'Applying those three tests knocked the list from forty-three down to eleven. Then we argued about which eleven mattered most. That argument was, honestly, the best part of the session — because the reasons people gave for caring about a question told you a lot about what they found interesting and what they thought science was for.',
      'We eventually grouped the survivors into biology (plant and ecological questions), environmental science (water and material science), chemistry (indicator and reaction questions), and physics (energy and structure questions). Those became our four initial focus areas.',
      'The shortlist became our first four projects. Three are now active. One is in planning.',
      'The other thirty-nine questions are saved. We come back to them regularly. Some of them are looking more interesting now that we have more experience.',
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
      'The natural indicators project wrapped up last week, and the results were satisfying — not because they proved us right, but because they showed exactly where our hypothesis was correct and where it needed more precision.',
      'Red cabbage extract produced color changes across the widest visible range. From deep pink-red in strongly acidic solutions through purple in neutral water to green and then yellow-green in alkaline conditions. Compared to the subtler shifts from turmeric and beetroot, the cabbage extract was clearly the most informative across the full range.',
      'Turmeric showed one very distinct change: in strongly alkaline solutions, it shifted from yellow to a reddish-orange. That change was more dramatic than the cabbage extract showed at the same pH. So turmeric, while less useful as a general indicator, may be specifically good for detecting high-alkalinity conditions.',
      'That was the unexpected result. We had framed the investigation as a comparison of overall range, and the conclusion was clear — cabbage extract wins for range. But turmeric\'s specific response to strong alkalis is a finding we had not anticipated and did not know how to fully explain. We have noted it in the project documentation and listed it as a direction for follow-up.',
      'The next step is to source a pH meter to verify the solutions against calibrated measurements. Our current estimates are based on color reference charts, which work for comparison but are not precise.',
      'We are also going to test a few more plant sources. Coffee grounds came up in the discussion. We will see.',
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
