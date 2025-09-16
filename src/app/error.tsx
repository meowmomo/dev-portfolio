'use client';

import Error500 from '@/components/fallback/Error500';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <Error500 reset={reset} />
    </div>
  );
}
