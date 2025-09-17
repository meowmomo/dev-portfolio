import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '40px',
      '7': '48px',
      '8': '56px',
      '9': '64px',
      '10': '72px',
    },
    extend: {
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1.1' }], // default max is 6xl
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['7rem', { lineHeight: '1.1' }],
        '10xl': ['8rem', { lineHeight: '1.1' }],
      },
      colors: {
        /* Gray Palette */
        gray000: 'var(--gray000)',
        gray100: 'var(--gray100)',
        gray300: 'var(--gray300)',
        gray500: 'var(--gray500)',
        gray700: 'var(--gray700)',
        gray800: 'var(--gray800)',
        gray900: 'var(--gray900)',

        /* Primary Palette */
        primary000: 'var(--primary000)',
        primary100: 'var(--primary100)',
        primary300: 'var(--primary300)',
        primary500: 'var(--primary500)',

        /* Secondary Palette */
        secondary000: 'var(--secondary000)',
        secondary100: 'var(--secondary100)',
        secondary300: 'var(--secondary300)',
        secondary900: 'var(--secondary900)',

        /* Theme-Specific Aliases */
        primaryOne: 'var(--primaryOne)',
        secondaryOne: 'var(--secondaryOne)',
        secondaryTwo: 'var(--secondaryTwo)',
        baseZero: 'var(--baseZero)',
        baseOne: 'var(--baseOne)',
        baseTwo: 'var(--baseTwo)',
      },
      fontFamily: {
        reggae: ['var(--font-reggae)', ...fontFamily.sans],
        wix: ['var(--font-wix)', ...fontFamily.sans],
        ranchers: ['var(--font-ranchers)', ...fontFamily.sans],
      },
      backgroundClip: ['text'],
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
