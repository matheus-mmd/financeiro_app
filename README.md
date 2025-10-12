# Financeiro SaaS Monorepo

Monorepo moderno construído com Turborepo e PNPM para entregar um SaaS financeiro multi-tenant com foco em LGPD, pagamentos Brasil, observabilidade e DX excelente. O repositório inclui aplicações Web (Next.js), Mobile (Expo/React Native) e API (NestJS) além de pacotes compartilhados para UI, schemas e configuração.

## Estrutura de Pastas

```
.
├── apps
│   ├── api              # NestJS + Prisma + Stripe webhooks
│   ├── mobile           # Expo + React Native com OTA e push
│   └── web              # Next.js 14 App Router com PWA e i18n
├── packages
│   ├── config           # ESLint, Prettier, commitlint, tsconfig compartilhados
│   ├── shared           # DTOs, Zod schemas, utilitários multi-tenant
│   └── ui               # Design system (Tailwind + shadcn/ui-like)
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── turbo.json
└── README.md
```

## Pré-requisitos

- Node.js 20 (Corepack habilitado)
- PNPM 8+
- Docker / Docker Compose
- Stripe CLI (para testar webhooks)
- Expo CLI (opcional para desenvolvimento mobile local)

## Setup Rápido

1. Copie `.env.example` para `.env` e ajuste segredos.
2. Instale dependências com `pnpm install`.
3. Suba o ambiente completo com Docker Compose:

```bash
pnpm docker:dev # ou docker compose -f docker-compose.dev.yml up --build
```

> O comando `pnpm docker:dev` pode ser adicionado se desejar automatizar (veja seção Scripts).

## Scripts

### Root

- `pnpm dev` – roda todos os apps em modo desenvolvimento via Turborepo.
- `pnpm build` – build de todos os pacotes e apps.
- `pnpm test` – testes unitários agregados.
- `pnpm lint` – lint compartilhado.
- `pnpm typecheck` – checagem de tipos.
- `pnpm e2e` – orquestra testes end-to-end.
- `pnpm generate` – geração de artefatos (Prisma, OpenAPI).
- `pnpm migrate` – executa migrações Prisma na API.
- `pnpm seed` – executa seed multi-tenant.
- `pnpm release` – publica changesets (semver automatizado).
- `pnpm changeset` – cria nova entrada de versão.
- `pnpm ci` – pipeline local (lint + typecheck + test + build).

### Web (`apps/web`)

- `pnpm --filter apps-web dev`
- `pnpm --filter apps-web build`
- `pnpm --filter apps-web start`
- `pnpm --filter apps-web test`
- `pnpm --filter apps-web e2e`
- `pnpm --filter apps-web lint`

### Mobile (`apps/mobile`)

- `pnpm --filter apps-mobile dev`
- `pnpm --filter apps-mobile start`
- `pnpm --filter apps-mobile test`
- `pnpm --filter apps-mobile build:android`
- `pnpm --filter apps-mobile build:ios`

### API (`apps/api`)

- `pnpm --filter apps-api dev`
- `pnpm --filter apps-api build`
- `pnpm --filter apps-api start`
- `pnpm --filter apps-api start:prod`
- `pnpm --filter apps-api test`
- `pnpm --filter apps-api e2e`
- `pnpm --filter apps-api migrate`
- `pnpm --filter apps-api seed`

## Aplicações

### Web (Next.js 14)

- App Router, SSR/ISR pronto para autenticação com Auth.js.
- PWA com `next-pwa`, offline caching básico.
- TanStack Query + Zustand para estado.
- Rotas mapeadas para todas as features do MVP com mocks realistas.
- i18n configurado para `pt-BR` (default) e `en`.

### Mobile (React Native + Expo)

- Expo Router com tabs, OTA via `expo-updates` e push notifications (helper em `lib/notifications`).
- Telas equivalentes às features Web com estados loading/empty.
- Compartilha schemas e tipos do pacote `@financeiro/shared`.

### API (NestJS + Prisma)

- Módulos por bounded context (`auth`, `banking`, `ledger`, `billing`, `reports`).
- Prisma Client com estratégia multi-tenant via coluna `tenantId` (exemplo RLS-ready).
- Seeds realistas (tenant demo, owner, dados financeiros).
- OpenAPI em `/api/docs` via Swagger.
- Observabilidade com Pino + OpenTelemetry (exporter de console).

## Multi-tenancy

- `TENANT_HEADER = x-tenant-id` (definido em `@financeiro/shared`).
- Serviço de tenancy scopa consultas Prisma por tenant.
- Seed inclui tenant demo `00000000-0000-0000-0000-000000000000`.
- Estrutura do Prisma preparada para políticas RLS (aplicar via migrations).
- Suporte opcional a schema-per-tenant pode ser adicionado estendendo `TenancyService`.

## Autenticação & Segurança

- Autenticação baseada em OIDC/OAuth2 (Auth.js / Passport) com estrutura pronta para rotacionar tokens.
- RBAC com enum `owner/admin/member` em `@financeiro/shared`.
- Suporte a 2FA/WebAuthn a ser ligado conforme provider.
- Boas práticas LGPD: consentimento, retenção, portabilidade (mocks em UI + docs).
- Políticas de CORS, rate limiting e sanitização devem ser implementadas conforme infraestrutura (documentadas abaixo).

## Pagamentos & Billing

- Integração Stripe modelada com endpoints `/billing/invoices` e `/billing/webhook` (idempotente via validação zod).
- Suporte PIX/Boleto via flags `NEXT_PUBLIC_FEATURE_PIX_BOLETO`.
- Portal do cliente previsto nas interfaces Web/Mobile.
- Estrutura para dunning e retries (pronto para implementação).

## Observabilidade

- OpenTelemetry provider em `apps/api/src/common/telemetry.ts` (Console exporter).
- Logs estruturados com `nestjs-pino`.
- Request-ID e correlação preparados via utilitários em `@financeiro/shared`.
- Healthcheck disponível em `GET /api/auth/health`.
- Métricas base podem ser expandidas integrando Prometheus/OTel exporter.

## Banco de Dados & Prisma

- PostgreSQL 16 (Docker) com RLS a ser habilitado nas migrations.
- `pnpm migrate` para aplicar migrações.
- `pnpm seed` popula dados de demonstração.
- Prisma Client gerado dentro de `apps/api`.

## Testes

- Unitários com Jest/Vitest conforme workspace.
- E2E API com Jest + Supertest (`apps/api/test`).
- Playwright (Web) e Detox opcional (Mobile) – rotas e hooks já preparados.
- Cobertura alvo 80% (configurável via Jest/Playwright).

## Observabilidade Local

- Traces exportados no console (`ConsoleSpanExporter`).
- Logs estruturados acessíveis em stdout.
- Para dashboards, conectar a um collector OTel (Jaeger/Grafana Tempo).

## Stripe e Webhooks

1. Configure o Stripe CLI: `stripe login`.
2. Registre webhook: `stripe listen --forward-to localhost:3333/api/billing/webhook`.
3. Simule eventos: `stripe trigger invoice.payment_succeeded`.
4. A UI refletirá estados mockados enquanto a API persiste eventos (implementar conforme necessário).

## Segurança e LGPD

- `.env` somente para uso local; em produção utilize secret manager (Doppler, Vault, 1Password Connect).
- Política de retenção configurável via configuração customizada (placeholder em `ConfigModule`).
- Exporte dados via endpoint `/reports/export?type=csv|pdf` (mock).
- Auditoria planejada (ver `@financeiro/shared/src/types.ts`).

## Deploy

- Web: Vercel/Netlify (build com `pnpm --filter apps-web build`).
- API: Fly.io/Render (Dockerfile pronto).
- Banco: Railway/Neon (Postgres 16+).
- Mobile: Expo EAS para OTA e builds nativos.

## Backup & Restore

- Utilize `pg_dump`/`pg_restore` com armazenamento seguro.
- Recomenda-se snapshots automáticos com retenção de 30 dias.

## Roadmap Próximo

- Implementar RLS automático via migrations Prisma.
- Conectar Auth.js a um provedor real (ex.: Keycloak, Auth0).
- Finalizar integrações Stripe (faturas, dunning, PIX/Boleto nativos).
- Adicionar dashboards OTel (Grafana, Tempo, Loki).
- Automatizar geração de relatórios PDF/CSV server-side.
- Cobertura de testes Playwright/Detox.
- Implementar auditoria imutável (EventStore/S3 + hashing).

## Convenções

- Commits: Conventional Commits (`feat:`, `fix:` ...).
- Versionamento: Changesets (semver automatizado via CI).
- Código TypeScript estrito, sem `any`.
- Validação de borda com Zod em todos os contratos.
- Feature flags disponíveis via variáveis `NEXT_PUBLIC_FEATURE_*` e `EXPO_PUBLIC_FEATURE_*`.

## Contribuição

1. Crie branch feature.
2. Rode `pnpm lint` e `pnpm test` antes do commit.
3. Utilize `pnpm changeset` para registrar mudanças relevantes.
4. Abra PR com checklist de critérios de aceite.
