'use client';

import { Group, Pagination, Text } from '@mantine/core';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

type Props = {
  totalCount: number; // total items
  lang?: string;
  total: number; // total pages
  defaultValue: number; // current page
  withEdges?: boolean;
};

export default function Paginator({
  totalCount,
  lang = '',
  total,
  defaultValue,
  withEdges = true,
}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    lang != '' ? params.set('lang', lang) : params.delete('lang');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Group>
      <Pagination
        autoContrast
        color="var(--secondaryTwo)"
        onChange={handleChange}
        total={total}
        defaultValue={defaultValue}
        withEdges={withEdges}
      />
      {totalCount > 0 && <Text className="text-baseTwo">({totalCount})</Text>}
    </Group>
  );
}
