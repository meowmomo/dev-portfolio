import { Group } from '@mantine/core';
import { IoMdMail } from 'react-icons/io';
import { SiGithub } from 'react-icons/si';
import { Logo } from '@/icons/Logo';
import { Text } from '@mantine/core';
import { TiHeartOutline } from 'react-icons/ti';
import MyIcons from '@/components/MyIcons';
import Link from 'next/link';
import { AiOutlineCopyright } from 'react-icons/ai';

type Navigation = {
  label: string;
  href: string;
};

const navigation: Navigation[] = [
  { label: 'Home', href: '/home' },
  { label: 'Project', href: '/project' },
  { label: 'Blog', href: '/blog' },
];

export default function Footer() {
  return (
    <div className="border-t-4 border-primaryOne">
      <div className="max-w-7xl mx-auto flex justify-between items-start flex-wrap  gap-4 p-4">
        <Group className="gap-4 justify-start flex-nowrap">
          <Logo />
          <div className="text-baseZero">
            <div className="flex items-center gap-1 py-2">
              <AiOutlineCopyright size={28} />
              <Text className="font-reggae text-lg">2025</Text>
              <TiHeartOutline size={28} className="text-secondaryTwo" />{' '}
              <Text className="font-ranchers tracking-wide text-lg">momo</Text>
            </div>
            <Text className="flex flex-wrap items-center gap-1 py-2">
              Build By
              <MyIcons iconName="TypeScript" />
              <MyIcons iconName="NextJS" />
              <MyIcons iconName="Mantine" />
              <MyIcons iconName="TailwindCSS" />
              <MyIcons iconName="microCMS" />
            </Text>
          </div>
        </Group>

        <Group>
          {navigation.map((nav) => (
            <Link
              key={nav.label}
              href={nav.href}
              className="text-baseZero text-lg hover:text-secondary300"
            >
              {nav.label}
            </Link>
          ))}
        </Group>

        <Group className="gap-2">
          <Link href="https://github.com/meowmomo">
            <SiGithub size={28} className="text-baseZero hover:secondaryTwo" />
          </Link>
          <Link href="mailto:modularmanul@gmail.com">
            <IoMdMail size={28} className="text-baseZero hover:secondaryTwo" />
          </Link>
        </Group>
      </div>
    </div>
  );
}
