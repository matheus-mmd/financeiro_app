import { AppShell } from '@/components/shell';
import { Card, Button } from '@financeiro/ui';

export default function ConfiguracoesPage() {
  return (
    <AppShell title="Configurações">
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Segurança" description="2FA, WebAuthn e políticas de acesso">
          <ul className="space-y-2 text-sm">
            <li>• 2FA habilitado para administradores</li>
            <li>• WebAuthn disponível</li>
            <li>• Tokens de sessão com rotação automática</li>
          </ul>
          <Button className="mt-4">Gerenciar políticas</Button>
        </Card>
        <Card title="LGPD" description="Controle de consentimento e retenção">
          <ul className="space-y-2 text-sm">
            <li>• Consentimento atualizado em 12/02</li>
            <li>• Retenção automática de 5 anos</li>
            <li>• Portal de portabilidade ativo</li>
          </ul>
          <Button className="mt-4" variant="secondary">
            Exportar relatório de dados
          </Button>
        </Card>
      </div>
    </AppShell>
  );
}
