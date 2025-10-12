import { AppShell } from '@/components/shell';
import { Card, Button } from '@financeiro/ui';

export default function AssinaturaPage() {
  return (
    <AppShell title="Assinatura">
      <Card title="Plano atual" description="Assinatura Stripe integrada">
        <div className="space-y-3">
          <p className="text-lg font-semibold">Pro Anual</p>
          <p className="text-sm text-slate-500">R$ 299,00 / mês • Próxima cobrança em 10/03</p>
          <Button>Gerenciar no portal do cliente</Button>
          <Button variant="ghost" className="w-full">
            Aplicar cupom
          </Button>
        </div>
      </Card>
    </AppShell>
  );
}
