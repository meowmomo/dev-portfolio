'use client';

import { Card, Image, Text, Group } from '@mantine/core';
import FormatDate from '@/components/FormatDate';
import MyIcons from '@/components/MyIcons';
import { ProjectType } from '@/types/ProjectType';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export default function ProjectCard({
  title,
  summary,
  image,
  tags,
  date,
  repoUrl,
  websiteUrl,
}: ProjectType) {
  return (
    <Card className="flex flex-col rounded-none shadow-xl dark:shadow-lg dark:shadow-gray900 bg-baseOne h-full">
      <Card.Section>
        <Image src={image} alt={title} />
      </Card.Section>

      <Card.Section className="flex justify-between p-2">
        {repoUrl.includes('github') ? (
          <Link href={repoUrl} rel="noopener noreferrer" target="_blank">
            <SiGithub size={28} className="text-baseZero hover:text-secondary300" />
          </Link>
        ) : (
          <Link href={repoUrl} rel="noopener noreferrer" target="_blank">
            <MyIcons iconName="Info" />
          </Link>
        )}
        <FormatDate dateString={date} />
      </Card.Section>

      <Card.Section className="p-2 flex-grow">
        <Group justify="apart">
          <Text className="text-lg font-bold text-baseZero line-clamp-2">{title}</Text>
        </Group>
        <Text className="text-sm text-baseTwo line-clamp-3 pt-1">{summary}</Text>
      </Card.Section>

      <Card.Section className="border-b-2 flex justify-end p-2">
        <Link href={websiteUrl} rel="noopener noreferrer" target="_blank">
          <Text className={'text-sm underline text-baseZero hover:text-secondary300'}>
            See website
          </Text>
        </Link>
      </Card.Section>

      <Card.Section className="flex justify-end p-2">
        <Group className="gap-2">
          {tags.map((tag) => (
            <Text key={tag} className="flex items-center text-sm text-wrap text-baseZero gap-1">
              <MyIcons iconName={tag} /> {tag}
            </Text>
          ))}
        </Group>
      </Card.Section>
    </Card>
  );
}
