import { Group } from '@mantine/core';
import { Logo } from '@/icons/Logo';
import { PiCat } from 'react-icons/pi';
import { PiNotepad } from 'react-icons/pi';
import { PiShareNetwork } from 'react-icons/pi';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { IconType } from 'react-icons/lib';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar({ setClose }: { setClose: Function }) {
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
      className={`flex text-baseZero gap-2 text-lg items-center p-2 hover:border-b-2 hover:border-primaryOne hover:rounded-md
                  ${isActive(nav.href) ? 'bg-primaryOne text-gray900' : ''}
        `}
      onClick={() => setClose()}
    >
      <nav.icon size={32} />
      <span>{nav.label}</span>
    </Link>
  ));

  return (
    <div className="flex flex-col h-screen w-full justify-between text-baseZero">
      <nav>
        <Group className="pb-2 mb-2 justify-between">
          <Link href="/home">
            <Group>
              {/* <LogoLabel /> */}
              <Logo />
              <h1 className="text-2xl font-reggae">momo</h1>
            </Group>
          </Link>
        </Group>
        {items}
      </nav>
    </div>
  );
}
