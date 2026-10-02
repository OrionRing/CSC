import { Milestone, MilestoneStatus } from '@/data/roadmap';

const statusConfig: Record<MilestoneStatus, { label: string; color: string }> = {
  'completed': { label: 'COMPLETED', color: 'text-[#111111]' },
  'in-progress': { label: 'IN PROGRESS', color: 'text-[#D83933]' },
  'planned': { label: 'PLANNED', color: 'text-[#B8B8B8]' },
};

interface RoadmapItemProps {
  milestone: Milestone;
  light?: boolean;
}

export function RoadmapItem({ milestone, light = false }: RoadmapItemProps) {
  const config = statusConfig[milestone.status];

  return (
    <div className={`timeline-item ${light ? 'border-t-white/10' : ''}`}>
      {/* Date column */}
      <div className="flex-shrink-0">
        <time
          dateTime={milestone.date}
          className={`label text-xs ${light ? 'text-[#B8B8B8]' : 'text-[#606060]'}`}
        >
          {milestone.shortDate}
        </time>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span
              className={`label text-xs ${config.color} flex items-center gap-1.5`}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-current"
                aria-hidden="true"
              />
              {config.label}
            </span>
          </div>

          <h3
            className={`text-xl font-bold tracking-tight mb-2 ${
              light ? 'text-white' : 'text-[#111111]'
            }`}
          >
            {milestone.title}
          </h3>

          <p
            className={`text-sm leading-relaxed max-w-lg ${
              light ? 'text-[#B8B8B8]' : 'text-[#606060]'
            }`}
          >
            {milestone.description}
          </p>
        </div>
      </div>
    </div>
  );
}
