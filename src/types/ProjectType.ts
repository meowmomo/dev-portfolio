import type { ProjectTagType } from '@/types/ProjectTagType';

export type ProjectType = {
  id: number;
  name: string;
  title: string;
  summary: string;
  tags: ProjectTagType[];
  image: string;
  repoUrl: string;
  websiteUrl: string;
  date: string;
};
