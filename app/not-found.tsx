import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 — Experiment Not Found',
  description: 'This path has not been explored yet.',
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-start justify-center bg-[#FFFFFF]"
      style={{ paddingTop: '5rem' }}
    >
      <div className="container-main py-32">
        {/* Large 404 */}
        <p
          className="font-mono text-[12rem] font-bold text-[#E8E8E4] leading-none mb-0 select-none"
          aria-hidden="true"
        >
          404
        </p>

        {/* Content */}
        <div className="max-w-xl mt-4">
          <p className="label text-[#606060] mb-4">EXPERIMENT NOT FOUND</p>
          <h1 className="text-[#111111] text-4xl font-bold tracking-tight mb-4">
            This path hasn&apos;t been explored yet.
          </h1>
          <p className="text-[#606060] leading-relaxed mb-8">
            The page you are looking for does not exist, has been moved, or was part
            of an investigation that did not go as planned.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 font-bold text-[#111111] group"
          >
            <span>Return Home</span>
            <span
              className="w-10 h-10 rounded-full bg-[#D83933] flex items-center justify-center
                transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            >
              <ArrowRight size={16} className="text-white" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
