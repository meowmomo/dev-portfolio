'use client';

import { useState } from 'react';
import { Text, ActionIcon } from '@mantine/core';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { TbChevronDown, TbChevronUp } from 'react-icons/tb';
import MyIcons from '@/components/MyIcons';
import { motion, AnimatePresence } from 'framer-motion';

type TagMenuProps = {
  tags: string[];
  basePath: 'blog' | 'project';
  lang?: string;
};

export default function TagMenu({ tags, basePath, lang = '' }: TagMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTag = (() => {
    const match = pathname.match(/\/tags\/([^/?]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  })();

  const handleUrl = (tag?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    lang ? params.set('lang', lang) : params.delete('lang');
    return tag
      ? `/${basePath}/tags/${encodeURIComponent(tag)}?${params.toString()}`
      : `/${basePath}?${params.toString()}`;
  };

  const isActive = (tag: string) => pathname.includes(`/tags/${encodeURIComponent(tag)}`);

  return (
    <div className="bg-baseOne mx-auto mb-4 min-w-[240px] max-w-fit h-fit rounded-2xl shadow-xl dark:shadow-lg dark:shadow-gray900">
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-2 py-2 md:hidden">
        <Text className="text-lg font-semibold text-baseZero">
          {currentTag ? `Filter: ${currentTag}` : 'Filter: All'}
        </Text>
        <ActionIcon
          variant="subtle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle tag menu"
          className="rounded-full hover:bg-secondaryOne"
        >
          {open ? (
            <TbChevronUp className="text-baseZero" size={20} />
          ) : (
            <TbChevronDown className="text-baseZero" size={20} />
          )}
        </ActionIcon>
      </div>

      {/* Desktop tag list */}
      <ul className="hidden md:block px-2 py-2 space-y-2">
        <li className="flex items-center justify-center">
          <Link href={handleUrl()}>
            <Text
              className={`text-lg font-semibold cursor-pointer ${
                !currentTag ? 'text-primaryOne' : 'text-baseZero'
              }`}
            >
              Show All
            </Text>
          </Link>
        </li>
        {tags.map((tag, id) => (
          <li key={id}>
            <Link href={handleUrl(tag)}>
              <p
                className={`flex items-center gap-3 text-sm px-1 py-1 rounded-lg transition ${
                  isActive(tag)
                    ? 'bg-primaryOne text-gray900 font-semibold'
                    : 'hover:bg-secondaryOne text-baseZero'
                }`}
              >
                {basePath === 'blog' ? <MyIcons iconName="Hashtag" /> : <MyIcons iconName={tag} />}
                {tag}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="block md:hidden px-2 py-2 space-y-2 border-t border-gray300 dark:border-gray700"
          >
            <li className="flex items-center justify-center">
              <Link href={handleUrl()}>
                <Text
                  className={`text-base font-semibold cursor-pointer ${
                    !currentTag ? 'text-primaryOne' : 'text-baseZero'
                  }`}
                >
                  Show All
                </Text>
              </Link>
            </li>
            {tags.map((tag, id) => (
              <li key={id}>
                <Link href={handleUrl(tag)}>
                  <p
                    className={`flex items-center gap-3 text-sm px-1 py-1 rounded-lg transition ${
                      isActive(tag)
                        ? 'bg-primaryOne text-gray900 font-semibold'
                        : 'hover:bg-secondaryOne text-baseZero'
                    }`}
                  >
                    {basePath === 'blog' ? (
                      <MyIcons iconName="Hashtag" />
                    ) : (
                      <MyIcons iconName={tag} />
                    )}
                    {tag}
                  </p>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
