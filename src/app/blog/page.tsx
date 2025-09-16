import { getArticles, getAllTags, getAllArticlesByTag } from '@/libs/microcms';
import BlogClient from './components/BlogClient';

type Props = {
  params: { id: string; isTagged: boolean };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Blog({ params, searchParams }: Props) {
  const tags = (await getAllTags({ limit: 100 })).contents.map((item) => item.name);
  const perPage = 6;
  const page = Number(searchParams.page ?? '1');

  const tagName = params.id;
  const { contents: tagged, totalCount: taggedTotal } = await getAllArticlesByTag(tagName, {
    offset: (page - 1) * perPage,
    limit: perPage,
  });

  const { contents, totalCount } = await getArticles({
    offset: (page - 1) * perPage,
    limit: perPage,
  });

  const isTagged = params.isTagged;
  const articles = isTagged ? tagged : contents;
  const total = isTagged ? taggedTotal : totalCount;
  const lang = searchParams.lang === 'ja' ? 'ja' : '';

  return (
    <BlogClient
      tags={tags}
      articles={articles}
      total={total}
      page={page}
      perPage={perPage}
      lang={lang}
      searchParams={searchParams}
    />
  );
}
