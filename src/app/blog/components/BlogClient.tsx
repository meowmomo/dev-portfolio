'use client';

import { useState, useMemo, useEffect } from 'react';
import { Text, Group } from '@mantine/core';
import { TbMoodCry } from 'react-icons/tb';

import ArticleCard from '@/app/blog/components/ArticleCard';
import TagMenu from '@/components/TagMenu';
import Paginator from '@/components/Paginator';
import SortControls from '@/components/SortControls';

type Props = {
  tags: string[];
  articles: any[];
  total: number;
  page: number;
  perPage: number;
  lang: string;
  searchParams: { [key: string]: string | string[] | undefined };
};

function buildUrl(base: string, searchParams: Props['searchParams']) {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value === 'string') params.set(key, value);
    else if (Array.isArray(value)) params.set(key, value.join(','));
  });
  const query = params.toString();
  return query ? `${base}?${query}` : base;
}

function shuffleArray<T>(arr: T[]) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function BlogClient({
  tags,
  articles: rawArticles,
  total,
  page,
  perPage,
  lang,
  searchParams,
}: Props) {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [shuffledSnapshot, setShuffledSnapshot] = useState<any[] | null>(null);

  useEffect(() => {
    setShuffledSnapshot(null);
  }, [rawArticles]);

  function handleSort(order: 'newest' | 'oldest') {
    setShuffledSnapshot(null);
    setSortOrder(order);
  }

  function handleShuffle() {
    setShuffledSnapshot(shuffleArray(rawArticles));
  }

  const displayedArticles = useMemo(() => {
    if (shuffledSnapshot) return shuffledSnapshot;

    const sorted = rawArticles.slice();
    if (sortOrder === 'newest') {
      sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else {
      sorted.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }
    return sorted;
  }, [rawArticles, sortOrder, shuffledSnapshot]);

  return (
    <div className="flex flex-col my-4 md:p-4 md:m-4">
      {/* Header + controls */}

      <div className="flex flex-col items-center mb-4">
        <Text className="text-5xl mb-2 text-baseZero font-ranchers tracking-wide">Blog</Text>
        <SortControls
          sortOrder={sortOrder}
          shuffled={!!shuffledSnapshot}
          onSort={handleSort}
          onShuffle={handleShuffle}
        />
      </div>

      {/* Articles + Tag menu */}
      <div className="my-4 md:my-2 md:flex">
        <TagMenu tags={tags} basePath="blog" lang={lang} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto px-2 md:px-4 pb-4">
          {displayedArticles && displayedArticles.length ? (
            displayedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                lang={lang}
                url={buildUrl(`/blog/${article.id}`, searchParams)}
                {...article}
              />
            ))
          ) : (
            <div className="m-4">
              <Group className="items-start flex-nowrap">
                <Text className="text-lg">Sorry, this is unavailable.</Text>
                <TbMoodCry size={28} />
              </Group>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center">
        <Paginator
          totalCount={total}
          total={Math.ceil(total / perPage)}
          defaultValue={page}
          lang={lang}
          withEdges
        />
      </div>
    </div>
  );
}
