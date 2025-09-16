'use client';

import Image from 'next/image';
import classes from '@/styles/Article.module.scss';
import FormatDate from '@/components/FormatDate';
import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/humanoid-dark.css';
import TableOfContents from '@/app/blog/[id]/components/TableOfContents';
import type { ArticleType } from '@/types/ArticleType';
import type { ArticleTagType } from '@/types/ArticleTagType';
import { Group, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { TbMoodCry } from 'react-icons/tb';
import MyIcons from '@/components/MyIcons';

type TocNode = {
  tag: string;
  label: string;
  href: string;
  children: TocNode[];
};

export default function Article({ lang, article }: { lang: string; article: ArticleType }) {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
    const sticky = document.querySelector('.toc-container');
    if (!sticky) return;

    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${sticky.getBoundingClientRect().height}px`,
      );
    });

    observer.observe(sticky);
    return () => observer.disconnect();
  }, []);

  const tags: ArticleTagType[] | undefined = article.tags;
  const loadContent = lang ? (article.contentJa as string) : article.content;

  if (!loadContent) {
    return (
      <Group className="flex text-baseTwo mx-auto px-2 md:px-4 flex-nowrap items-center m-4">
        <Text className="text-lg">Sorry, this is unavailable.</Text>
        <TbMoodCry size={28} />
      </Group>
    );
  }

  // Highlight.js + filenames
  const $ = cheerio.load(loadContent);
  $('pre code').each((_, elm) => {
    const parentElm = $(elm).parent().parent();
    const fileName = parentElm.attr('data-filename');

    const className = $(elm).attr('class');
    let language = className?.replace('language-', '');

    let result;
    if (language) {
      try {
        result = hljs.highlight($(elm).text(), { language });
      } catch {
        result = hljs.highlightAuto($(elm).text());
      }
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    } else {
      $(elm).addClass('plaintext hljs');
    }

    if (fileName) {
      $(elm).parent().before(`<div class="filename"><span>${fileName}</span></div>`);
    }
  });

  // Build nested TOC
  function buildToc(): TocNode[] {
    const nodes: TocNode[] = [];
    const stack: TocNode[] = [];

    $('h1, h2, h3, h4, h5').each((i, elm) => {
      const id = `toc_${i}`;
      $(elm).attr('id', id);

      const tagName = ($(elm).prop('tagName') as string).toLowerCase();
      const level = Number(tagName.substring(1));
      const node: TocNode = {
        tag: tagName,
        label: $(elm).text(),
        href: `#${id}`,
        children: [],
      };

      while (stack.length && Number(stack[stack.length - 1].tag.substring(1)) >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        nodes.push(node);
      } else {
        stack[stack.length - 1].children.push(node);
      }

      stack.push(node);
    });

    return nodes;
  }

  const toc = buildToc();
  const html = $.html();

  return (
    <div className="flex flex-col text-baseZero mx-auto xl:w-[70%] p-4 m-4">
      <div className="relative">
        <div className={classes.article}>
          <h1 className="mb-2 text-ellipsis overflow-hidden">
            {lang ? article.titleJa : article.title}
          </h1>
          <h2 className="mb-2 text-ellipsis overflow-hidden">
            {lang ? article.headlineJa : article.headline}
          </h2>
          <Group>
            {tags?.map(({ name, id }: { name: string; id: string }) => (
              <p key={id} className="text-xl flex items-center text-baseZero gap-1">
                <MyIcons iconName="Hashtag" />
                {name}
              </p>
            ))}
          </Group>
          <FormatDate dateString={article.createdAt} />
          <Image
            src={article.image?.url ?? '/no-image.png'}
            alt="Article Image"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-lg object-cover my-2 mx-auto w-full lg:w-[70%] xl:w-[60%]"
            priority={true}
          />
        </div>

        <div className="sticky top-10 z-20 py-4 w-full toc-container">
          <TableOfContents toc={toc} />
        </div>

        <article className={classes.article}>
          <div dangerouslySetInnerHTML={{ __html: html || '' }}></div>
        </article>
      </div>
    </div>
  );
}
