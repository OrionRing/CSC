import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { journalPosts as postsV1, getPostBySlug as getPostV1 } from '@/data/v1/journal';
import { journalPosts as postsV2, getPostBySlug as getPostV2 } from '@/data/v2/journal';
import { SectionLabel, ImagePlaceholder, ArrowLink } from '@/components/ui';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allPosts = [...postsV1, ...postsV2];
  const uniqueSlugs = Array.from(new Set(allPosts.map((p) => p.slug)));
  return uniqueSlugs.map((slug) => ({ slug }));
}

function findPost(slug: string) {
  return getPostV2(slug) || getPostV1(slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return { title: 'Entry Not Found' };

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  const allPosts = [...postsV2, ...postsV1];
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-0 bg-[#FFFFFF]" aria-labelledby="post-title">
        <div className="container-main">
          {/* Back */}
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 label text-[#606060] hover:text-[#111111]
              transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Journal
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="label text-[#D83933] text-xs">{post.typeLabel}</span>
            <span className="label text-[#E8E8E4]">—</span>
            <time dateTime={post.dateISO} className="label text-[#606060] text-xs">
              {post.date}
            </time>
            <span className="label text-[#B8B8B8] text-xs">{post.readingTime}</span>
          </div>

          {/* Title */}
          <h1
            id="post-title"
            className="page-headline text-[#111111] mb-12 max-w-4xl"
          >
            {post.title}
          </h1>
        </div>

        {/* Feature image */}
        <div className="container-main px-0 lg:px-0">
          <ImagePlaceholder
            label={post.typeLabel}
            sublabel={post.imageCaption}
            caption={post.imageCaption}
            className="aspect-[16/7]"
            aspectRatio=""
          />
        </div>
      </section>

      {/* Article */}
      <section className="section-spacing bg-[#FFFFFF]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Body */}
            <article className="lg:col-span-7">
              {/* Summary */}
              <p className="text-[#111111] text-xl font-medium leading-relaxed mb-10 border-l-2 border-[#D83933] pl-6 italic">
                {post.summary}
              </p>

              <div className="space-y-6">
                {post.content.map((paragraph, i) => (
                  <p key={i} className="text-[#606060] leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="sticky top-24 bg-[#F4F4F1] p-8">
                <SectionLabel className="mb-5">ENTRY DETAILS</SectionLabel>
                <dl className="space-y-4">
                  <div>
                    <dt className="label text-[#B8B8B8] mb-1">TYPE</dt>
                    <dd className="label text-[#D83933]">{post.typeLabel}</dd>
                  </div>
                  <div>
                    <dt className="label text-[#B8B8B8] mb-1">DATE</dt>
                    <dd>
                      <time dateTime={post.dateISO} className="label text-[#111111]">
                        {post.date}
                      </time>
                    </dd>
                  </div>
                  <div>
                    <dt className="label text-[#B8B8B8] mb-1">READING TIME</dt>
                    <dd className="label text-[#606060]">{post.readingTime}</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Post navigation */}
      <section className="section-spacing-sm bg-[#F4F4F1] border-t border-[#E8E8E4]">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {prevPost && (
              <div className="border-t border-[#E8E8E4] pt-6">
                <SectionLabel className="mb-3">PREVIOUS</SectionLabel>
                <h3 className="text-[#111111] font-bold text-xl tracking-tight mb-4">
                  {prevPost.title}
                </h3>
                <ArrowLink href={`/journal/${prevPost.slug}`}>Read</ArrowLink>
              </div>
            )}
            {nextPost && (
              <div className="border-t border-[#E8E8E4] pt-6 sm:text-right">
                <SectionLabel className="mb-3">NEXT</SectionLabel>
                <h3 className="text-[#111111] font-bold text-xl tracking-tight mb-4">
                  {nextPost.title}
                </h3>
                <ArrowLink href={`/journal/${nextPost.slug}`}>Read</ArrowLink>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
