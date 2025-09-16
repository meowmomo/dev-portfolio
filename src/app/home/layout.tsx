import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'momo | Home',
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
