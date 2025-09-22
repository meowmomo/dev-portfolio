'use client';

import { ActionIcon, MantineColorScheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { RxMoon } from 'react-icons/rx';
import { CgSun } from 'react-icons/cg';
import { useMantineColorScheme } from '@mantine/core';
import { useTheme } from 'next-themes';

export default function ModeSwitch() {
  const [mounted, setMounted] = useState(false);
  // const { colorScheme, setColorScheme, clearColorScheme } = useMantineColorScheme();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // setColorScheme(resolvedTheme as MantineColorScheme);
    // }, [resolvedTheme]);
  }, []);

  const setLight = () => {
    setTheme('light');
    // clearColorScheme();
    // setColorScheme('light');
  };
  const setDark = () => {
    setTheme('dark');
    // setColorScheme('dark');
  };
  if (!mounted) {
    return null;
  }

  return (
    <div>
      {resolvedTheme === 'dark' ? (
        <ActionIcon
          size="lg"
          onClick={setLight}
          className="text-baseZero bg-baseOne rounded-md hover:bg-secondaryOne border-1 border-baseTwo"
        >
          <RxMoon size={28} />
        </ActionIcon>
      ) : (
        <ActionIcon
          size="lg"
          onClick={setDark}
          className="text-baseZero bg-baseOne rounded-md hover:bg-secondaryOne hover:text-baseTwo"
        >
          <CgSun size={28} />
        </ActionIcon>
      )}
    </div>
  );
}
