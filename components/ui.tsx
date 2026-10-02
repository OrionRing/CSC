// Shared reusable UI components

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ProjectStatus, statusLabels } from '@/data/projects';

// ============================================================
// SectionLabel — small uppercase mono metadata label
// ============================================================
interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function SectionLabel({ children, light = false, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`label ${light ? 'text-[#B8B8B8]' : 'text-[#606060]'} ${className}`}
    >
      {children}
    </p>
  );
}

// ============================================================
// ArrowLink — inline text link with moving arrow
// ============================================================
interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function ArrowLink({ href, children, light = false, className = '' }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`arrow-link ${light ? 'text-white hover:text-white/80' : 'text-[#111111]'} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight
        size={16}
        className="arrow-icon"
        aria-hidden="true"
      />
    </Link>
  );
}

// ============================================================
// CircularCTA — text + circular red arrow button
// ============================================================
interface CircularCTAProps {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function CircularCTA({ href, children, light = false, className = '' }: CircularCTAProps) {
  return (
    <Link
      href={href}
      className={`circular-cta ${light ? 'text-white' : 'text-[#111111]'} ${className}`}
    >
      <span>{children}</span>
      <span className="circle" aria-hidden="true">
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}

// ============================================================
// StatusBadge — project status indicator
// ============================================================
interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

const statusClasses: Record<ProjectStatus, string> = {
  'completed': 'status-completed',
  'in-progress': 'status-in-progress',
  'planned': 'status-planned',
  'research': 'status-research',
};

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  return (
    <span
      className={`status-badge ${statusClasses[status]} ${className}`}
      aria-label={`Status: ${statusLabels[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}

// ============================================================
// ImagePlaceholder — polished image placeholder
// ============================================================
interface ImagePlaceholderProps {
  label?: string;
  sublabel?: string;
  caption?: string;
  dark?: boolean;
  className?: string;
  aspectRatio?: string;
}

export function ImagePlaceholder({
  label = 'PROJECT IMAGE',
  sublabel,
  caption,
  dark = false,
  className = '',
  aspectRatio = 'aspect-video',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder ${dark ? 'image-placeholder-dark' : ''} ${aspectRatio} ${className}`}
      aria-label={caption ?? label}
      role="img"
    >
      {/* Grid overlay lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(${dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px),
            linear-gradient(90deg, ${dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      {/* Corner marks */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-current opacity-20" aria-hidden="true" />
      <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-current opacity-20" aria-hidden="true" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-current opacity-20" aria-hidden="true" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-current opacity-20" aria-hidden="true" />

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <p
          className={`label text-xs tracking-widest ${dark ? 'text-white/30' : 'text-black/25'}`}
        >
          {label}
        </p>
        {sublabel && (
          <p className={`label text-xs ${dark ? 'text-white/20' : 'text-black/20'}`}>
            {sublabel}
          </p>
        )}
      </div>

      {/* Caption band */}
      {caption && (
        <div className="image-placeholder-content relative">
          <p className={`label text-xs ${dark ? 'text-white/30' : 'text-black/30'}`}>
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}

// ============================================================
// SectionHeader — section label + headline combination
// ============================================================
interface SectionHeaderProps {
  label?: string;
  heading: React.ReactNode;
  subheading?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  heading,
  subheading,
  light = false,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <SectionLabel light={light} className="mb-4">
          {label}
        </SectionLabel>
      )}
      <h2
        className={`section-headline ${light ? 'text-white' : 'text-[#111111]'} mb-4`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`body-large max-w-xl ${light ? 'text-[#B8B8B8]' : 'text-[#606060]'}`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
