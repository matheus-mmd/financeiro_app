'use client';

import { ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const DevtoolsProvider = ({ children }: { children: ReactNode }) => (
  <>
    {children}
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </>
);
