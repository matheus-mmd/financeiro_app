'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const ReactQueryDevtools =
  process.env.NODE_ENV === 'development'
    ? dynamic(
        () => import('@tanstack/react-query-devtools').then((mod) => mod.ReactQueryDevtools),
        { ssr: false }
      )
    : null;

export const DevtoolsProvider = ({ children }: { children: ReactNode }) => (
  <>
    {children}
    {ReactQueryDevtools ? <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> : null}
  </>
);
