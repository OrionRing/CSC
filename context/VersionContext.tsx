'use client';

import React, { createContext, useContext } from 'react';
import { clubStats, clubInfo } from '@/data/v2/stats';
import {
  projects,
  getProjectBySlug,
  getFeaturedProject,
  statusLabels,
} from '@/data/v2/projects';

interface VersionContextType {
  version: 'v2';
  setVersion: (v: 'v2') => void;
  toggleVersion: () => void;
  stats: typeof clubStats;
  clubInfo: typeof clubInfo;
  projects: typeof projects;
  teamMembers: any[];
  journalPosts: any[];
  milestones: any[];
  longTermGoals: any[];
  statusGroups: any;
  getProjectBySlug: typeof getProjectBySlug;
  getPostBySlug: (slug: string) => any;
  getFeaturedProject: typeof getFeaturedProject;
  statusLabels: typeof statusLabels;
  postTypeLabels: Record<string, string>;
}

const defaultValue: VersionContextType = {
  version: 'v2',
  setVersion: () => {},
  toggleVersion: () => {},
  stats: clubStats,
  clubInfo: clubInfo,
  projects: projects,
  teamMembers: [],
  journalPosts: [],
  milestones: [],
  longTermGoals: [],
  statusGroups: { completed: [], current: [], upcoming: [] },
  getProjectBySlug: getProjectBySlug,
  getPostBySlug: () => undefined,
  getFeaturedProject: getFeaturedProject,
  statusLabels: statusLabels,
  postTypeLabels: {},
};

const VersionContext = createContext<VersionContextType>(defaultValue);

export function VersionProvider({ children }: { children: React.ReactNode }) {
  return (
    <VersionContext.Provider value={defaultValue}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  return useContext(VersionContext);
}
