'use client';

import { Text, Group, Button } from '@mantine/core';
import Link from 'next/link';
import { SlPaperClip } from 'react-icons/sl';
import { useState } from 'react';

type TocNode = {
  tag: string;
  label: string;
  href: string;
  children: TocNode[];
};

export default function TableOfContents({ toc }: { toc: TocNode[] }) {
  const [tocOpen, setTocOpen] = useState(true);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const headerHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '100',
        10,
      );
      const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 60;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const TocList = ({ items }: { items: TocNode[] }) => (
    <ul className="ml-2 border-l border-gray-300 pl-2">
      {items.map((item) => (
        <TocItem key={item.href} item={item} />
      ))}
    </ul>
  );

  const TocItem = ({ item }: { item: TocNode }) => {
    const [open, setOpen] = useState(true);

    return (
      <li className="my-1">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => item.children.length > 0 && setOpen(!open)}
        >
          {item.children.length > 0 && (
            <span className="mr-1 text-xs text-gray-500 select-none">{open ? '▼' : '▶'}</span>
          )}
          <Link
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="block text-baseZero hover:bg-secondaryOne px-1"
          >
            {item.label}
          </Link>
        </div>
        {open && item.children.length > 0 && <TocList items={item.children} />}
      </li>
    );
  };

  return (
    <div className="flex flex-col p-4 text-baseZero bg-baseOne shadow-lg dark:shadow-lg dark:shadow-gray900 toc">
      <Group className="flex-nowrap justify-between py-2">
        <div className="flex items-center gap-2">
          <SlPaperClip size={20} />
          <Text className="text-lg font-semibold">Contents</Text>
        </div>
        <Button
          size="xs"
          // variant="light"
          onClick={() => setTocOpen(!tocOpen)}
          className="bg-secondaryOne text-baseZero hover:bg-secondaryTwo hover:text-baseZero tracking-widest"
        >
          {tocOpen ? 'Hide' : 'Show'}
        </Button>
      </Group>
      {tocOpen && <TocList items={toc} />}
    </div>
  );
}
