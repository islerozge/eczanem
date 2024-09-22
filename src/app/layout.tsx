import type { Metadata } from 'next';
import './globals.css';
import { ThemeModeScript } from 'flowbite-react';
import PrelineScript from '@/app/components/PrelineScript';

export const metadata: Metadata = {
  title: 'Reservl.io',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <main>{children}</main>
      </body>
      <PrelineScript />
    </html>
  );
}
