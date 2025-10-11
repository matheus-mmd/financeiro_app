import { AppShell } from '@/components/shell';
import { Card } from '@financeiro/ui';

const reconciliations = [
  { id: '1', description: 'PIX Cliente A', status: 'matched', amount: 800 },
  { id: '2', description: 'Boleto Cliente B', status: 'unmatched', amount: 1200 },
  { id: '3', description: 'Tarifa bancária', status: 'ignored', amount: -30 }
];

export default function ConciliacaoPage() {
  return (
    <AppShell title="Conciliação">
      <Card title="Sugestões" description="Revise e confirme pareamentos">
        <div className="space-y-3">
          {reconciliations.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-700"
            >
              <div>
                <p className="font-medium">{item.description}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500">{item.status}</p>
              </div>
              <span className="text-sm font-semibold">R$ {item.amount.toLocaleString('pt-BR')}</span>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
