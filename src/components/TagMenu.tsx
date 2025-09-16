'use client';

import { Text } from '@mantine/core';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import MyIcons from '@/components/MyIcons';

type TagMenuProps = {
  tags: string[];
  basePath: 'blog' | 'project';
  lang?: string;
};

export default function TagMenu({ tags, basePath, lang = '' }: TagMenuProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isTagged = () => pathname !== `/${basePath}`;

  const handleUrl = (tag?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (lang) {
      params.set('lang', lang);
    } else {
      params.delete('lang');
    }

    if (tag) {
      return `/${basePath}/tags/${encodeURIComponent(tag)}?${params.toString()}`;
    }

    return `/${basePath}?${params.toString()}`;
  };

  const isActive = (tag: string) => {
    const encoded = encodeURIComponent(tag);
    return pathname.includes(`/tags/${encoded}`);
  };

  return (
    <div className="bg-baseOne mx-auto min-w-max max-w-fit h-fit shadow-xl dark:shadow-lg dark:shadow-gray900">
      <ul className="mx-2 p-4">
        {/* TAGS header */}
        <li className="flex items-center justify-center">
          <Link
            href={handleUrl()}
            className={`flex gap-2 w-full justify-center mb-2 ${
              isTagged() ? 'border-b-2 border-primaryOne dark:border-none' : ''
            }`}
          >
            <Text
              className={`text-xl font-reggae font-semibold text-baseZero ${isTagged() ? 'dark:text-primaryOne' : ''}`}
            >
              TAGS
            </Text>
          </Link>
        </li>

        {/* Individual tags */}
        {tags.map((tag, id) => (
          <li key={id}>
            <Link href={handleUrl(tag)}>
              <p
                className={`flex text-sm text-baseZero items-center gap-4 my-1 ${basePath == 'blog' ? '' : 'justify-between'} hover:bg-secondaryOne ${
                  isActive(tag) ? 'bg-primaryOne text-gray900' : ''
                }`}
              >
                {basePath == 'blog' ? <MyIcons iconName="Hashtag" /> : <MyIcons iconName={tag} />}
                {tag}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
