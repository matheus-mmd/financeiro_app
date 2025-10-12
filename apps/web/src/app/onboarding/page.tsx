import { AppShell } from '@/components/shell';
import { Card, Button } from '@financeiro/ui';

const steps = [
  { title: 'Dados da organização', description: 'Nome fantasia, CNPJ, fuso horário e moeda padrão.' },
  { title: 'Convidar membros', description: 'Envie convites para administradores e membros.' },
  { title: 'Conectar bancos', description: 'Integre contas para conciliação automática.' }
];

export default function OnboardingPage() {
  return (
    <AppShell title="Onboarding">
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={step.title} title={`Passo ${index + 1}`} description={step.description}>
            <p className="text-base font-semibold text-slate-900 dark:text-white">{step.title}</p>
            <Button className="mt-4 w-full">Iniciar</Button>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
