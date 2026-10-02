import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JournalPost } from '@/data/journal';
import { ImagePlaceholder } from './ui';

interface JournalCardProps {
  post: JournalPost;
  className?: string;
}

export function JournalCard({ post, className = '' }: JournalCardProps) {
  return (
    <article className={`journal-card ${className}`}>
      {/* Image */}
      <Link
        href={`/journal/${post.slug}`}
        className="block image-zoom"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ImagePlaceholder
          label={post.typeLabel}
          sublabel={post.date}
          caption="Replace with club photography"
          className="aspect-video"
        />
      </Link>

      {/* Meta */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="label text-[#D83933] text-xs">{post.typeLabel}</span>
        <span className="label text-[#E8E8E4]">—</span>
        <time
          dateTime={post.dateISO}
          className="label text-[#606060] text-xs"
        >
          {post.date}
        </time>
        <span className="label text-[#B8B8B8] text-xs">{post.readingTime}</span>
      </div>

      {/* Title */}
      <h3 className="text-[#111111] font-bold text-xl tracking-tight leading-tight">
        <Link
          href={`/journal/${post.slug}`}
          className="hover:text-[#D83933] transition-colors duration-200"
        >
          {post.title}
        </Link>
      </h3>

      {/* Summary */}
      <p className="text-[#606060] text-sm leading-relaxed">
        {post.summary}
      </p>

      {/* Link */}
      <Link
        href={`/journal/${post.slug}`}
        className="arrow-link text-sm text-[#111111]"
        aria-label={`Read: ${post.title}`}
      >
        <span>Read</span>
        <ArrowRight size={13} className="arrow-icon" aria-hidden="true" />
      </Link>
    </article>
  );
}

// Large featured journal card
interface FeaturedJournalCardProps {
  post: JournalPost;
}

export function FeaturedJournalCard({ post }: FeaturedJournalCardProps) {
  return (
    <article className="border-t border-[#E8E8E4] pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image */}
        <Link href={`/journal/${post.slug}`} className="block image-zoom" tabIndex={-1} aria-hidden="true">
          <ImagePlaceholder
            label={post.typeLabel}
            sublabel={post.date}
            caption="Replace with club photography"
            className="aspect-[4/3]"
          />
        </Link>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="label text-[#D83933] text-xs">{post.typeLabel}</span>
            <time dateTime={post.dateISO} className="label text-[#606060] text-xs">{post.date}</time>
            <span className="label text-[#B8B8B8] text-xs">{post.readingTime}</span>
          </div>

          <h3 className="text-[#111111] font-bold text-3xl tracking-tight leading-tight mb-4">
            <Link href={`/journal/${post.slug}`} className="hover:text-[#D83933] transition-colors duration-200">
              {post.title}
            </Link>
          </h3>

          <p className="text-[#606060] leading-relaxed mb-6">
            {post.summary}
          </p>

          <Link href={`/journal/${post.slug}`} className="arrow-link text-[#111111] font-semibold">
            <span>Read</span>
            <ArrowRight size={16} className="arrow-icon" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
