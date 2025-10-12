'use client';

import { AppShell } from '@/components/shell';
import { Card, Button } from '@financeiro/ui';
import { useCategories } from '@/lib/api';

export default function CategoriasPage() {
  const { data, isLoading } = useCategories();

  return (
    <AppShell title="Categorias">
      <Card title="Categorias financeiras" description="Organize despesas e receitas">
        {isLoading ? (
          <p>Carregando categorias...</p>
        ) : (
          <ul className="grid gap-3 md:grid-cols-2">
            {data?.map((category) => (
              <li key={category.id} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                <p className="font-medium">{category.name}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500">{category.type}</p>
              </li>
            ))}
          </ul>
        )}
        <Button className="mt-6">Adicionar categoria</Button>
      </Card>
    </AppShell>
  );
}
