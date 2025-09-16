import projects from '@/app/project/project.json';
import { ProjectTag, ProjectTagType } from '@/types/ProjectTagType';
import { ProjectType } from '@/types/ProjectType';
import ProjectClient from '@/app/project/components/ProjectClient';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
  tagId?: ProjectTagType;
};

export default function ProjectPage({ searchParams, tagId }: Props) {
  const perPage = 6;
  const page = Number(searchParams.page ?? '1');

  // Filter by tag if tagId is given
  const allProjects = (projects as ProjectType[]).filter((p) =>
    tagId ? p.tags.includes(tagId) : true,
  );

  return (
    <ProjectClient
      projects={allProjects}
      tags={ProjectTag}
      page={page}
      perPage={perPage}
      searchParams={searchParams}
    />
  );
}
