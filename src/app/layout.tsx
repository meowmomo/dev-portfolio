import '@mantine/core/styles.css';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import React from 'react';
import { Ranchers, Reggae_One, Wix_Madefor_Display } from 'next/font/google';
import { MantineProvider } from '@mantine/core';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';

const GA_TAG_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const metadata: Metadata = {
  title: 'Momo | Portfolio & Blog',
  description:
    'Welcome to Momo’s portfolio – showcasing full-stack web development projects, UI/UX design, and technical articles. Explore my work with Next.js, React, TypeScript, Tailwind CSS, and more.',
  keywords: [
    'portfolio',
    'software engineer',
    'front-end developer',
    'back-end developer',
    'full stack developer',
    'web developer',
    'UI/UX design',
    'React developer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'SCSS',
    'Python',
    'Django',
    'GitHub',
    'open source',
    'programming blog',
    'developer tips',
    'debugging',
    'coding projects',
    'tech portfolio',
  ],
  authors: [{ name: 'Momo' }],
  creator: 'Momo',
  publisher: 'Momo',
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Momo | Portfolio & Blog',
    description:
      'Explore Momo’s work in web development and design. Projects built with Next.js, React, TypeScript, and more.',
    url: 'https://meowmomo.vercel.app',
    siteName: 'Momo Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Momo Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momo | Portfolio & Blog',
    description:
      'Full-stack developer portfolio featuring projects, blogs, and open-source contributions.',
    images: ['/og-image.png'],
    creator: '@your_twitter_handle',
  },
};

export const reggae = Reggae_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-reggae',
});

export const wix_madefor_display = Wix_Madefor_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-wix',
});

export const ranchers = Ranchers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ranchers',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${reggae.variable} ${wix_madefor_display.variable} ${ranchers.variable}
          w-full min-h-screen font-wix bg-baseOne text-baseZero`}
      >
        <ThemeProvider attribute="class">
          <MantineProvider
            theme={{
              /** Disable Mantine color system */
              primaryColor: undefined,
              colors: {},
            }}
          >
            <Header />
            <div className="flex flex-col w-full min-h-screen mx-auto max-w-7xl">
              <main className="flex-grow pt-[100px]">{children}</main>
            </div>
            <Footer />
          </MantineProvider>

          {GA_TAG_ID && <GoogleAnalytics gaId={GA_TAG_ID} />}
          <VercelAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
