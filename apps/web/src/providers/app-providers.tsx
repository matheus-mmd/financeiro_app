'use client';

import { ReactNode, useState } from 'react';
import { ThemeProvider } from '@financeiro/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DevtoolsProvider } from './devtools-provider';

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000,
            gcTime: 15 * 60 * 1000
          }
        }
      })
  );

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <DevtoolsProvider>{children}</DevtoolsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
