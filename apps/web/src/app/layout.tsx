import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { AppProviders } from '../providers/app-providers';

export const metadata: Metadata = {
  title: 'Financeiro SaaS',
  description: 'Plataforma financeira multi-tenant para gestão de contas e assinaturas'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
