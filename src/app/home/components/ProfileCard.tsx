import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import Image from 'next/image';
import { IoMdMail } from 'react-icons/io';
import { SiGithub } from 'react-icons/si';
import { IoLocationOutline } from 'react-icons/io5';
import Link from 'next/link';
import { LuCoffee } from 'react-icons/lu';

export default function ProfileCard() {
  const bio = [
    `Hi, I'm Momo — a full-stack developer passionate about building clean, scalable, and user-friendly applications.`,
    `Outside of coding, you’ll probably find me lifting at the gym, reading a good book, or enjoying way too much coffee. I’m also a big fan of cats (and ferrets, a.k.a. “cat snakes”).`,
    `I’m currently employed but always open to new challenges, learning opportunities, and collaborations. Feel free to reach out if you’d like to connect or work together!`,
  ];

  return (
    <Card
      shadow="xl"
      padding="lg"
      radius="md"
      className="bg-baseOne text-baseZero flex flex-col justify-start"
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src="wallpaper.svg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          alt="Profile Wallpaper"
          priority={true}
        />
        <Avatar
          alt="Profile Image"
          src="/logo.png"
          mx="auto"
          className="border-2 rounded-full w-[120px] h-[120px] mt-[-60px] md:w-[200px] md:h-[200px] md:mt-[-100px] xl:w-[240px] xl:h-[240px] xl:mt-[-120px]"
        ></Avatar>
        <Text className="text-center text-baseZero text-2xl font-ranchers tracking-wide font-bold mt-2">
          momo
        </Text>
        <Text className="text-center text-lg text-baseTwo italic">Full Stack Web Developer</Text>
        <Group className="flex items-center text-baseTwo mb-2">
          <IoLocationOutline size={20} />
          <Text>JPN</Text>
        </Group>
        {bio.map((item, i) => (
          <Text key={i} className="text-baseTwo text-sm">
            {item}
          </Text>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
        <Group wrap="nowrap" gap={10} mt={5}>
          <Link href="https://github.com/meowmomo" rel="noopener noreferrer" target="_blank">
            <SiGithub size={28} className="text-baseZero hover:text-secondary300" />
          </Link>
          <Link href="mailto:example@gmail.com">
            <IoMdMail size={28} className="text-baseZero hover:text-secondary300" />
          </Link>
        </Group>
        <Link
          href="https://buymeacoffee.com/meowmomo"
          rel="noopener noreferrer"
          target="_blank"
          className="flex gap-2 items-center justify-end"
        >
          <LuCoffee size={28} className="text-baseZero hover:text-secondary300" /> Buy me a coffee
        </Link>
      </div>
    </Card>
  );
}
