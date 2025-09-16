'use client';

import { Card, Image, Text, Group } from '@mantine/core';
import Link from 'next/link';
import FormatDate from '@/components/FormatDate';
import type { ArticleType } from '@/types/ArticleType';
import MyIcons from '@/components/MyIcons';

type ArticleCardProps = ArticleType & {
  lang: string;
  url: string;
};

export default function ArticleCard({
  lang,
  url,
  title,
  headline,
  titleJa,
  headlineJa,
  image,
  tags,
  createdAt,
}: ArticleCardProps) {
  return (
    <Card className="flex flex-col rounded-none shadow-xl dark:shadow-lg dark:shadow-gray900 bg-baseOne h-full">
      <Card.Section>
        <Image src={image?.url ?? '/no-image.png'} alt={lang ? titleJa : title} />
      </Card.Section>

      <Card.Section className="flex justify-end p-2">
        <FormatDate dateString={createdAt} />
      </Card.Section>

      <Card.Section className="p-2 flex-grow">
        <Group justify="apart">
          <Text className="text-lg font-bold text-baseZero line-clamp-2">
            {lang ? titleJa : title}
          </Text>
        </Group>
        <Text className="text-sm text-baseTwo line-clamp-3 pt-1">
          {lang ? headlineJa : headline}
        </Text>
      </Card.Section>

      <Card.Section className="border-b-2 flex justify-end p-2">
        <Link href={url}>
          <Text className={`text-sm underline text-baseZero hover:text-secondary300`}>
            Read article
          </Text>
        </Link>
      </Card.Section>

      <Card.Section className="flex justify-end p-2">
        <Group className="gap-2">
          {tags &&
            tags.map((tag) => (
              <Text
                key={tag.id}
                className="flex items-center text-sm text-wrap text-baseZero gap-1"
              >
                <MyIcons iconName="Hashtag" />
                {tag.name}
              </Text>
            ))}
        </Group>
      </Card.Section>
    </Card>
  );
}
