'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Button } from '@financeiro/ui';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/onboarding', label: 'Onboarding' },
  { href: '/contas', label: 'Contas' },
  { href: '/categorias', label: 'Categorias' },
  { href: '/lancamentos', label: 'Lançamentos' },
  { href: '/conciliacao', label: 'Conciliação' },
  { href: '/metas', label: 'Metas' },
  { href: '/assinatura', label: 'Assinatura' },
  { href: '/faturas', label: 'Faturas' },
  { href: '/relatorios', label: 'Relatórios' },
  { href: '/configuracoes', label: 'Configurações' }
];

export const AppShell = ({ children, title }: { children: ReactNode; title: string }) => {
  const pathname = usePathname();

  return (
    <div className="grid min-h-screen grid-cols-[260px_1fr] bg-slate-100 dark:bg-slate-950">
      <aside className="flex flex-col gap-6 border-r border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div>
          <span className="text-xl font-bold text-brand-600">Financeiro</span>
          <p className="text-sm text-slate-500 dark:text-slate-300">Multi-tenant SaaS</p>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={clsx(
                  'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  pathname?.startsWith(item.href)
                    ? 'bg-brand-50 text-brand-700 dark:bg-slate-800 dark:text-white'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        <Button variant="secondary">Criar lançamento</Button>
      </aside>
      <main className="overflow-y-auto p-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">{title}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            Interfaces mockadas para o MVP financeiro multi-tenant
          </p>
        </div>
        <div className="space-y-8">{children}</div>
      </main>
    </div>
  );
};
