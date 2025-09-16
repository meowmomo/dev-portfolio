'use client';

import { Text, Button, Group } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { PiArrowsClockwiseBold } from 'react-icons/pi';
import { BsEmojiTear } from 'react-icons/bs';

export default function Error500({ reset }: { reset: () => void }) {
  const pathname = usePathname();
  return (
    <div className="flex bg-primaryOne h-screen hover:bg-secondaryTwo">
      <div className="flex items-center justify-center">
        <Text
          style={{ fontSize: '20vw' }}
          className="absolute italic font-gray900 text-secondaryOne hover:text-baseOne cursor-default"
        >
          500
        </Text>
        <div className="flex flex-col text-center px-4 mx-4 gap-4 z-10">
          <Text className="text-5xl">Shoot!</Text>
          <Text className="text-xl">
            Sorry, an unexpected server error has occured and I am working to fix the problem! You
            could try refreshing the page, try again in a few minutes or email me what happened if
            you need immediate support.
          </Text>
          <Group className="flex items-center justify-center">
            <Button
              component="a"
              href="/"
              size="xl"
              variant="default"
              className="max-w-min opacity-50 border-0 hover:opacity-100"
            >
              Take me back home <BsEmojiTear size={28} className="ml-2" />
            </Button>
            <Button
              component="a"
              href={pathname}
              size="xl"
              variant="default"
              className="max-w-min opacity-50 border-0 hover:opacity-100"
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Try again <PiArrowsClockwiseBold size={28} className="ml-2" />
            </Button>
          </Group>
        </div>
      </div>
    </div>
  );
}
