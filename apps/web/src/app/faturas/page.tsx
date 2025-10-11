import { AppShell } from '@/components/shell';
import { Card } from '@financeiro/ui';

const invoices = [
  { id: 'inv_01', status: 'open', amount: 29900, dueDate: '2024-03-10' },
  { id: 'inv_02', status: 'paid', amount: 29900, dueDate: '2024-02-10' }
];

export default function FaturasPage() {
  return (
    <AppShell title="Faturas">
      <Card title="Histórico" description="Integração idempotente com Stripe">
        <table className="min-w-full table-fixed text-left text-sm">
          <thead>
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Status</th>
              <th className="p-2">Vencimento</th>
              <th className="p-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-t border-slate-200 dark:border-slate-700">
                <td className="p-2 font-mono text-xs">{invoice.id}</td>
                <td className="p-2 capitalize">{invoice.status}</td>
                <td className="p-2">{invoice.dueDate}</td>
                <td className="p-2">R$ {(invoice.amount / 100).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
