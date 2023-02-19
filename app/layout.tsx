'use client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import dynamic from 'next/dynamic';
import Loading from './loading';
import { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};
const MainLayout = dynamic(() => import('@/Container'), {
  ssr: false,
  loading: () => <Loading />
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title></title>
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
