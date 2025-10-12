import { AppShell } from '@/components/shell';
import { Card, Button } from '@financeiro/ui';

const goals = [
  { id: 1, name: 'Reserva de emergência', target: 50000, progress: 0.45 },
  { id: 2, name: 'Investimento em marketing', target: 15000, progress: 0.8 }
];

export default function MetasPage() {
  return (
    <AppShell title="Metas">
      <div className="grid gap-4 md:grid-cols-2">
        {goals.map((goal) => (
          <Card key={goal.id} title={goal.name} description={`Meta de R$ ${goal.target.toLocaleString('pt-BR')}`}>
            <div className="h-3 rounded-full bg-slate-200">
              <div
                className="h-3 rounded-full bg-brand-500"
                style={{ width: `${goal.progress * 100}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-slate-500">{Math.round(goal.progress * 100)}% concluído</p>
            <Button className="mt-4" variant="secondary">
              Ajustar meta
            </Button>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
