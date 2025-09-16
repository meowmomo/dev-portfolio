'use client';

import { ActionIcon, Menu } from '@mantine/core';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { HiOutlineTranslate } from 'react-icons/hi';
import { Suspense } from 'react';

export const ConvertLanguage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  if (!pathname.includes('/blog')) return null;

  const changeLang = (lang?: 'ja' | 'en') => {
    const params = new URLSearchParams(searchParams.toString());

    if (lang === 'ja') {
      params.set('lang', 'ja');
    } else {
      params.delete('lang');
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Menu transitionProps={{ transition: 'scale-y', duration: 360 }}>
      <Menu.Target>
        <ActionIcon
          size="lg"
          className="text-baseZero rounded-md hover:bg-secondaryOne hover:text-baseTwo bg-baseOne dark:hover:text-white dark:border-1 dark:border-baseTwo"
        >
          <HiOutlineTranslate size={28} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown className="bg-baseOne text-xs border-baseTwo dark:border-primaryOne">
        <Menu.Label className="text-baseTwo">Choose a language:</Menu.Label>
        <Menu.Item
          onClick={() => changeLang('en')}
          className="hover:bg-secondaryOne text-baseZero text-sm"
        >
          English
        </Menu.Item>
        <Menu.Item
          onClick={() => changeLang('ja')}
          className="hover:bg-secondaryOne text-baseZero text-sm"
        >
          Japanese
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export const ConvertLanguageSuspense = () => (
  <Suspense>
    <ConvertLanguage />
  </Suspense>
);
