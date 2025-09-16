import { Metadata } from 'next';
import { ProjectTag, type ProjectTagType } from '@/types/ProjectTagType';
import ProjectPage from '@/app/project/page';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `${decodeURIComponent(params.id)} Projects` };
}

export async function generateStaticParams() {
  return ProjectTag.map((tag) => ({
    id: encodeURIComponent(tag), // ✅ encode when generating
  }));
}

export default function TagPage({ params, searchParams }: Props) {
  const decodedTag = decodeURIComponent(params.id); // ✅ decode for filtering
  return <ProjectPage searchParams={searchParams} tagId={decodedTag as ProjectTagType} />;
}
