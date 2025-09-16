import { getAllTags } from '@/libs/microcms';
import { Metadata } from 'next';
import type { ArticleTagType } from '@/types/ArticleTagType';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import Blog from '@/app/blog/page';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { contents }: MicroCMSListResponse<ArticleTagType> = await getAllTags({ limit: 100 });
  const tagName = decodeURIComponent(props.params.id);
  const tagged = contents.find((item) => item.name === tagName);
  return { title: tagged?.name ?? 'Blog' };
}

export async function generateStaticParams() {
  const { contents } = await getAllTags({ limit: 100 });
  return contents.map((item) => ({
    id: encodeURIComponent(item.name),
  }));
}

export default async function Tags(props: Props) {
  const tagName = decodeURIComponent(props.params.id);
  const blogProps = { ...props, params: { id: tagName, isTagged: true } };
  return <Blog {...blogProps} />;
}
