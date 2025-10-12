'use client';

import { AppShell } from '@/components/shell';
import { Card, Button } from '@financeiro/ui';
import { useAccounts } from '@/lib/api';

export default function ContasPage() {
  const { data, isLoading } = useAccounts();

  return (
    <AppShell title="Contas">
      <Card description="Gerencie contas bancárias e carteiras" title="Minhas contas">
        {isLoading ? (
          <p>Carregando contas...</p>
        ) : (
          <ul className="space-y-3">
            {data?.map((account) => (
              <li key={account.id} className="flex items-center justify-between rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                <div>
                  <p className="font-medium">{account.name}</p>
                  <p className="text-sm text-slate-500">Saldo atual</p>
                </div>
                <span className="text-lg font-semibold">R$ {account.balance.toLocaleString('pt-BR')}</span>
              </li>
            ))}
          </ul>
        )}
        <Button className="mt-6">Adicionar conta</Button>
      </Card>
    </AppShell>
  );
}
