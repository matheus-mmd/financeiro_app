import { KPI, Card } from '@financeiro/ui';
import { AppShell } from '@/components/shell';

const CASH_FLOW_SUMMARY = [
  { day: 1, amount: 3250.5 },
  { day: 2, amount: 1875.2 },
  { day: 3, amount: 4120.75 }
];

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard">
      <div className="grid gap-4 md:grid-cols-dashboard">
        <KPI label="Receita" value="R$ 25.400" trend="↑ 12% vs mês anterior" />
        <KPI label="Despesas" value="R$ 17.200" trend="↓ 5% vs mês anterior" />
        <KPI label="Caixa" value="R$ 8.200" trend="Meta atingida" />
      </div>
      <Card title="Fluxo de Caixa" description="Resumo diário do período" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          {CASH_FLOW_SUMMARY.map((day) => (
            <div key={day.day} className="rounded-lg border border-dashed border-slate-300 p-4">
              <p className="text-sm text-slate-500">Dia {day.day}</p>
              <p className="text-lg font-semibold">R$ {day.amount.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
