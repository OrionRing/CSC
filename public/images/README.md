# Science Club — Image Directory

This directory contains all images for the Science Club website.

## Current Status

All image slots are currently using polished placeholder components.
Replace the placeholders with actual club photography by adding files to this directory.

## File Naming Convention

Use the exact filenames listed below. After adding a file, the placeholder for that
slot will automatically be replaced (once the `<Image>` components are updated in code).

## Required Images

### Hero
- `hero-main.jpg` — Hero section background
  - Suggested: Students working in a lab, conducting an experiment, or collaborating
  - Ratio: 16:9 or wider landscape
  - Min width: 1920px

### Projects
- `project-plant-growth.jpg` — Plant Growth Under Different Light Conditions
- `project-water-filtration.jpg` — Low-Cost Water Filtration Prototype
- `project-solar.jpg` — Solar Energy Efficiency Investigation
- `project-indicators.jpg` — Natural Indicators and Acidity
- `project-cooling.jpg` — Passive Cooling Model
- `project-biodiversity.jpg` — School Biodiversity Survey
  - All project images: 4:3 ratio, min width 800px

### Journal
- `journal-filtration-test.jpg` — First filtration test
- `journal-failed-experiments.jpg` — Failed experiments post
- `journal-research-questions.jpg` — Research questions post
- `journal-indicators.jpg` — Natural indicators results
  - All journal images: 16:9 ratio, min width 800px

### About / General
- `club-mission.jpg` — About page mission section
- `club-team.jpg` — Team section

## Image Guidelines

- Use real photographs from actual club activities wherever possible
- Ensure all students photographed have provided appropriate consent
- Avoid heavily filtered or staged-looking images
- Natural, documentary-style photography works best for the editorial design
- Compress images before adding: JPEG quality 85%, or use WebP format
- Next.js `<Image>` component handles responsive sizing automatically

## After Adding Images

Update the relevant component or data file to use `<Image>` from `next/image`
instead of the `<ImagePlaceholder>` component. The `ImagePlaceholder` component
in `components/ui.tsx` can be replaced per-instance as real photos become available.
