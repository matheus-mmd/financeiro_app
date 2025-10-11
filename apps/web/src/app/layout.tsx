import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@financeiro/ui';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DevtoolsProvider } from '../providers/devtools-provider';

const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: 'Financeiro SaaS',
  description: 'Plataforma financeira multi-tenant para gestão de contas e assinaturas'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <DevtoolsProvider>{children}</DevtoolsProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
