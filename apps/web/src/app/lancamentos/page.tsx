'use client';

import { AppShell } from '@/components/shell';
import { Card, Button } from '@financeiro/ui';
import { useTransactions } from '@/lib/api';

export default function LancamentosPage() {
  const { data, isLoading } = useTransactions();

  return (
    <AppShell title="Lançamentos">
      <Card title="Histórico" description="Registre receitas e despesas">
        {isLoading ? (
          <p>Carregando lançamentos...</p>
        ) : (
          <table className="min-w-full table-auto text-left text-sm">
            <thead>
              <tr>
                <th className="p-2">Descrição</th>
                <th className="p-2">Valor</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((transaction) => (
                <tr key={transaction.id} className="border-t border-slate-200 dark:border-slate-700">
                  <td className="p-2">{transaction.description}</td>
                  <td className="p-2 text-rose-500">
                    R$ {Math.abs(transaction.amount).toLocaleString('pt-BR')}
                  </td>
                  <td className="p-2 capitalize">{transaction.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <Button className="mt-6">Novo lançamento</Button>
      </Card>
    </AppShell>
  );
}
