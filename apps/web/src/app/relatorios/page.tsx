import { AppShell } from '@/components/shell';
import { Card, Button } from '@financeiro/ui';

export default function RelatoriosPage() {
  return (
    <AppShell title="Relatórios">
      <Card title="Exportações" description="Gere arquivos CSV e PDF com filtros refinados">
        <form className="grid gap-4 md:grid-cols-3">
          <label className="flex flex-col text-sm">
            Período inicial
            <input type="date" className="mt-1 rounded-md border border-slate-300 p-2" />
          </label>
          <label className="flex flex-col text-sm">
            Período final
            <input type="date" className="mt-1 rounded-md border border-slate-300 p-2" />
          </label>
          <label className="flex flex-col text-sm md:col-span-1">
            Categoria
            <select className="mt-1 rounded-md border border-slate-300 p-2">
              <option>Todos</option>
              <option>Receitas</option>
              <option>Despesas</option>
            </select>
          </label>
        </form>
        <div className="mt-6 flex gap-3">
          <Button>Exportar PDF</Button>
          <Button variant="secondary">Exportar CSV</Button>
        </div>
      </Card>
    </AppShell>
  );
}
