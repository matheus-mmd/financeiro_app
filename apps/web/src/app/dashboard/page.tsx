import { KPI, Card } from '@financeiro/ui';
import { AppShell } from '@/components/shell';

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
          {[1, 2, 3].map((day) => (
            <div key={day} className="rounded-lg border border-dashed border-slate-300 p-4">
              <p className="text-sm text-slate-500">Dia {day}</p>
              <p className="text-lg font-semibold">R$ {(Math.random() * 4000).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
