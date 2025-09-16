'use client';

import { useState, useMemo, useEffect } from 'react';
import { Group, Text, Button, ActionIcon, Tooltip } from '@mantine/core';
import { TbMoodCry, TbArrowsShuffle } from 'react-icons/tb';

import { ProjectTagType } from '@/types/ProjectTagType';
import { ProjectType } from '@/types/ProjectType';
import ProjectCard from '@/app/project/components/ProjectCard';
import TagMenu from '@/components/TagMenu';
import Paginator from '@/components/Paginator';
import SortControls from '@/components/SortControls';

type Props = {
  projects: ProjectType[];
  tags: ProjectTagType[];
  page: number;
  perPage: number;
  searchParams: { [key: string]: string | string[] | undefined };
};

function shuffleArray<T>(arr: T[]) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ProjectClient({ projects, tags, page, perPage }: Props) {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [shuffledSnapshot, setShuffledSnapshot] = useState<ProjectType[] | null>(null);

  useEffect(() => {
    setShuffledSnapshot(null);
  }, [projects]);

  function handleSort(order: 'newest' | 'oldest') {
    setShuffledSnapshot(null);
    setSortOrder(order);
  }

  function handleShuffle() {
    setShuffledSnapshot(shuffleArray(projects));
  }

  const displayedProjects = useMemo(() => {
    if (shuffledSnapshot) return shuffledSnapshot;

    const sorted = projects.slice();
    if (sortOrder === 'newest') {
      sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    return sorted;
  }, [projects, sortOrder, shuffledSnapshot]);

  // pagination after sorting/shuffle
  const start = (page - 1) * perPage;
  const paginated = displayedProjects.slice(start, start + perPage);

  return (
    <div className="flex flex-col my-4 md:p-4 md:m-4 ">
      <div className="flex flex-col items-center mb-4">
        <Text className="text-5xl mb-2 text-baseZero font-ranchers tracking-wide">Project</Text>
        <SortControls
          sortOrder={sortOrder}
          shuffled={!!shuffledSnapshot}
          onSort={handleSort}
          onShuffle={handleShuffle}
        />
      </div>

      <div className="my-4 md:my-2 md:flex relative">
        <div className="relative">
          <div className="sticky top-10 mx-2 z-20">
            <TagMenu tags={tags} basePath="project" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto px-2 md:px-4 pb-4">
          {paginated.length ? (
            paginated.map((p) => <ProjectCard {...p} key={p.id} />)
          ) : (
            <Group className="items-start flex-nowrap m-4">
              <Text className="text-lg">Sorry, this is unavailable.</Text>
              <TbMoodCry size={28} />
            </Group>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Paginator
          totalCount={projects.length}
          total={Math.ceil(projects.length / perPage)}
          defaultValue={page}
          withEdges
        />
      </div>
    </div>
  );
}
