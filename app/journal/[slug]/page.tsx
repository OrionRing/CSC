import { redirect } from 'next/navigation';
import { projects } from '@/data/v2/projects';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function JournalPostPage() {
  redirect('/projects');
}
