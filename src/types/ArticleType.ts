import { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk';
import type { ArticleTagType } from '@/types/ArticleTagType';

export type ArticleType = {
  id: string;
  title: string;
  headline: string;
  content: string;
  titleJa?: string;
  headlineJa?: string;
  contentJa?: string;
  image?: MicroCMSImage;
  tags?: ArticleTagType[];
} & MicroCMSDate;
