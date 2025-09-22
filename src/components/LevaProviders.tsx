'use client';

import { Leva } from 'leva';

export function LevaProviders() {
  return (
    <Leva
      collapsed
      titleBar={{ position: { x: 0, y: 50 } }}
      theme={{
        colors: {
          elevation1: 'var(--primary000)', // panel background
          elevation2: 'var(--primary100)', // folder background
          elevation3: 'var(--secondary000)', // input background
          accent1: 'var(--secondary100)', // accent (sliders, highlights)
          accent2: 'var(--secondary300)', // secondary accent
          highlight1: 'var(--primary300)', // text color
          highlight2: 'var(--primary500)', // dim text
        },
        radii: { xs: '8px', sm: '10px' }, // roundness of inputs/panels
        fontSizes: { root: '12px' },
      }}
    />
  );
}
