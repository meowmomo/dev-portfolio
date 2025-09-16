'use client';

import { Group, Button, ActionIcon, Tooltip } from '@mantine/core';
import { TbArrowsShuffle } from 'react-icons/tb';

type Props = {
  sortOrder: 'newest' | 'oldest';
  shuffled: boolean;
  onSort: (order: 'newest' | 'oldest') => void;
  onShuffle: () => void;
};

export default function SortControls({ sortOrder, shuffled, onSort, onShuffle }: Props) {
  return (
    <Group align="center" className="mt-2">
      <Button
        variant={sortOrder === 'newest' && !shuffled ? 'filled' : 'outline'}
        size="sm"
        onClick={() => onSort('newest')}
        className={`text-baseZero hover:bg-secondaryOne hover:text-baseZero hover:border-none rounded-xl ${
          sortOrder === 'newest' && !shuffled
            ? 'bg-primaryOne border-none'
            : 'bg-baseOne border border-primaryOne'
        }`}
      >
        Newest
      </Button>
      <Button
        variant={sortOrder === 'oldest' && !shuffled ? 'filled' : 'outline'}
        size="sm"
        onClick={() => onSort('oldest')}
        className={`text-baseZero hover:bg-secondaryOne hover:text-baseZero hover:border-none rounded-xl ${
          sortOrder === 'oldest' && !shuffled
            ? 'bg-primaryOne border-none'
            : 'bg-baseOne border border-primaryOne'
        }`}
      >
        Oldest
      </Button>
      <Tooltip label="Shuffle items on this page">
        <ActionIcon
          variant={shuffled ? 'filled' : 'outline'}
          size="lg"
          onClick={onShuffle}
          aria-label="Shuffle"
          title="Shuffle"
          className={`text-baseZero hover:bg-secondaryOne hover:text-baseZero hover:border-none rounded-xl ${
            shuffled ? 'bg-primaryOne border-none' : 'bg-baseOne border border-primaryOne'
          }`}
        >
          <TbArrowsShuffle size={20} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
