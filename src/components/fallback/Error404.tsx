'use client';

import { usePathname } from 'next/navigation';
import { Text, Button } from '@mantine/core';
import { FaRegSadCry } from 'react-icons/fa';

export default function Error404() {
  const pathname = usePathname();

  return (
    <div className="flex bg-primaryOne h-screen hover:bg-secondaryTwo flex items-center justify-center">
      <div className="flex items-center justify-center">
        <Text
          style={{ fontSize: '20vw' }}
          className="absolute italic font-gray900 text-secondaryOne hover:text-baseOne cursor-default"
        >
          404
        </Text>
        <div className="flex flex-col text-center px-4 mx-4 gap-4 z-10">
          <Text className="text-5xl">Oops! You have found a secret place.</Text>
          <Text className="text-xl">
            Just kidding, this is only a 404 page. 「{pathname}」 does not exist. You may have
            mistyped the address, or the page has been moved to another URL.
          </Text>
          <Button
            component="a"
            href="/"
            size="xl"
            variant="default"
            className="max-w-min m-auto opacity-50 border-0 hover:opacity-100"
          >
            Take me back home <FaRegSadCry size={28} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
