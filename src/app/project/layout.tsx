import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'momo | Project',
};

export default async function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
