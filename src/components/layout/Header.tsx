'use client';

import { Group, Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import ModeSwitch from '@/components/ModeSwitch';
import { usePathname } from 'next/navigation';
import { Logo } from '@/icons/Logo';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { PiShareNetwork, PiNotepad } from 'react-icons/pi';
import { IconType } from 'react-icons/lib';
import Navbar from '@/components/layout/Navbar';
import { ConvertLanguageSuspense } from '@/components/ConvertLanguage';

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false); // ✅ use toggle instead of open

  const pathname = usePathname();
  const isActive = (href: string) => pathname.includes(href);

  type Navigation = {
    label: string;
    href: string;
    icon: IconType;
  };

  const navigation: Navigation[] = [
    { label: 'Home', href: '/home', icon: HiOutlineHomeModern },
    { label: 'Project', href: '/project', icon: PiShareNetwork },
    { label: 'Blog', href: '/blog', icon: PiNotepad },
  ];

  const items = navigation.map((nav) => (
    <Link
      key={nav.label}
      href={nav.href}
      className={`flex flex-col items-center justify-between text-lg text-baseZero p-1 hover:border-b-2 hover:border-primaryOne hover:rounded-md dark:hover:border-primaryOne
        ${isActive(nav.href) ? 'bg-primaryOne text-gray900' : ''}
      `}
    >
      <nav.icon size={32} />
      <span>{nav.label}</span>
    </Link>
  ));

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-gradient-to-b from-baseOne to-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 px-4">
        {/* Left side */}
        <Group className="flex-nowrap">
          {/* ✅ now toggles open/close */}
          <Burger opened={opened} onClick={toggle} size="sm" className="burger md:hidden" />
          <Logo />
          <h1 className="text-2xl font-ranchers tracking-wide">momo</h1>
        </Group>

        {/* Right side (desktop) */}
        <Group>
          <Group className="header flex-wrap hidden md:flex">{items}</Group>
          <Group className="flex flex-nowrap items-center">
            <ModeSwitch />
            <ConvertLanguageSuspense />
          </Group>
        </Group>
      </div>

      {/* ✅ Drawer for mobile nav */}
      <Drawer opened={opened} onClose={close} size="md" padding="md">
        <Navbar setClose={close} />
      </Drawer>
    </header>
  );
}
