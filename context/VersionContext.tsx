'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// V1 imports
import { clubStats as statsV1, clubInfo as infoV1 } from '@/data/v1/stats';
import { projects as projectsV1, getProjectBySlug as getProjectV1, getFeaturedProject as getFeaturedV1, statusLabels as labelsV1 } from '@/data/v1/projects';
import { teamMembers as teamV1 } from '@/data/v1/team';
import { journalPosts as postsV1, getPostBySlug as getPostV1, postTypeLabels as postLabelsV1 } from '@/data/v1/journal';
import { milestones as milestonesV1, longTermGoals as goalsV1, statusGroups as groupsV1 } from '@/data/v1/roadmap';

// V2 imports
import { clubStats as statsV2, clubInfo as infoV2 } from '@/data/v2/stats';
import { projects as projectsV2, getProjectBySlug as getProjectV2, getFeaturedProject as getFeaturedV2, statusLabels as labelsV2 } from '@/data/v2/projects';
import { teamMembers as teamV2 } from '@/data/v2/team';
import { journalPosts as postsV2, getPostBySlug as getPostV2, postTypeLabels as postLabelsV2 } from '@/data/v2/journal';
import { milestones as milestonesV2, longTermGoals as goalsV2, statusGroups as groupsV2 } from '@/data/v2/roadmap';

export type SiteVersion = 'v1' | 'v2';

interface VersionContextType {
  version: SiteVersion;
  setVersion: (v: SiteVersion) => void;
  toggleVersion: () => void;
  stats: typeof statsV1;
  clubInfo: typeof infoV2;
  projects: typeof projectsV2;
  teamMembers: typeof teamV2;
  journalPosts: typeof postsV2;
  milestones: typeof milestonesV2;
  longTermGoals: typeof goalsV2;
  statusGroups: typeof groupsV2;
  getProjectBySlug: (slug: string) => any;
  getPostBySlug: (slug: string) => any;
  getFeaturedProject: () => any;
  statusLabels: Record<string, string>;
  postTypeLabels: Record<string, string>;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

export function VersionProvider({ children }: { children: React.ReactNode }) {
  const [version, setVersionState] = useState<SiteVersion>('v1');

  useEffect(() => {
    // Check URL params first
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlVersion = params.get('v');
      if (urlVersion === '1' || urlVersion === 'v1') {
        setVersionState('v1');
      } else if (urlVersion === '2' || urlVersion === 'v2') {
        setVersionState('v2');
      } else {
        const saved = localStorage.getItem('cc_science_club_v');
        if (saved === 'v1' || saved === 'v2') {
          setVersionState(saved);
        }
      }
    }
  }, []);

  const setVersion = (v: SiteVersion) => {
    setVersionState(v);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cc_science_club_v', v);
    }
  };

  const toggleVersion = () => {
    setVersion(version === 'v1' ? 'v2' : 'v1');
  };

  const isV2 = version === 'v2';

  const value: VersionContextType = {
    version,
    setVersion,
    toggleVersion,
    stats: isV2 ? statsV2 : statsV1,
    clubInfo: (isV2 ? infoV2 : infoV1) as any,
    projects: (isV2 ? projectsV2 : projectsV1) as any,
    teamMembers: (isV2 ? teamV2 : teamV1) as any,
    journalPosts: (isV2 ? postsV2 : postsV1) as any,
    milestones: (isV2 ? milestonesV2 : milestonesV1) as any,
    longTermGoals: isV2 ? goalsV2 : goalsV1,
    statusGroups: (isV2 ? groupsV2 : groupsV1) as any,
    getProjectBySlug: (slug: string) => (isV2 ? getProjectV2(slug) || getProjectV1(slug) : getProjectV1(slug) || getProjectV2(slug)),
    getPostBySlug: (slug: string) => (isV2 ? getPostV2(slug) || getPostV1(slug) : getPostV1(slug) || getPostV2(slug)),
    getFeaturedProject: () => (isV2 ? getFeaturedV2() : getFeaturedV1()),
    statusLabels: isV2 ? labelsV2 : labelsV1,
    postTypeLabels: isV2 ? postLabelsV2 : postLabelsV1,
  };

  return <VersionContext.Provider value={value}>{children}</VersionContext.Provider>;
}

export function useVersion() {
  const context = useContext(VersionContext);
  if (!context) {
    // Fallback default if used outside provider
    return {
      version: 'v1' as SiteVersion,
      setVersion: () => {},
      toggleVersion: () => {},
      stats: statsV1,
      clubInfo: infoV1 as any,
      projects: projectsV1 as any,
      teamMembers: teamV1 as any,
      journalPosts: postsV1 as any,
      milestones: milestonesV1 as any,
      longTermGoals: goalsV1,
      statusGroups: groupsV1 as any,
      getProjectBySlug: getProjectV1,
      getPostBySlug: getPostV1,
      getFeaturedProject: getFeaturedV1,
      statusLabels: labelsV1,
      postTypeLabels: postLabelsV1,
    };
  }
  return context;
}
