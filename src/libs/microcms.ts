import type { ArticleType } from '@/types/ArticleType';
import type { ArticleTagType } from '@/types/ArticleTagType';
import { MicroCMSQueries, createClient } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN) throw new Error('MICROCMS_SERVICE_DOMAIN is required');
if (!process.env.MICROCMS_API_KEY) throw new Error('MICROCMS_API_KEY is required');

export const microCMSClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export async function getArticles(queries?: MicroCMSQueries) {
  const articles = await microCMSClient.getList<ArticleType>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: 'articles',
    queries,
  });

  return articles;
}

export async function getArticleDetail(contentId: string, queries?: MicroCMSQueries) {
  const articlesDetail = await microCMSClient.getListDetail<ArticleType>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: 'articles',
    contentId,
    queries,
  });
  return articlesDetail;
}
export async function getAllTags(queries?: MicroCMSQueries) {
  const tags = await microCMSClient.getList<ArticleTagType>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: 'tags',
    queries,
  });
  return tags;
}

async function getTagIdByName(tagName: string): Promise<string | null> {
  const { contents } = await getAllTags();
  const match = contents.find(
    (tag: ArticleTagType) => tag.name.toLowerCase() === tagName.toLowerCase(),
  );
  return match ? match.id : null;
}

export async function getAllArticlesByTag(tagName: string, queries?: MicroCMSQueries) {
  const tagId = await getTagIdByName(decodeURIComponent(tagName)); // decode %20 etc.
  if (!tagId) {
    return { contents: [], totalCount: 0 }; // no matching tag, return empty
  }

  return getArticles({
    filters: `tags[contains]${tagId}`,
    orders: '-publishedAt',
    ...queries,
  });
}
