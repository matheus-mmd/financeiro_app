import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { id: '00000000-0000-0000-0000-000000000000' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000000',
      name: 'Tenant Demo'
    }
  });

  await prisma.user.upsert({
    where: { email: 'owner@financeiro.dev' },
    update: {},
    create: {
      email: 'owner@financeiro.dev',
      name: 'Owner Demo',
      role: 'owner',
      tenantId: tenant.id
    }
  });

  const account = await prisma.account.create({
    data: {
      tenantId: tenant.id,
      name: 'Conta Corrente',
      type: 'checking',
      balance: 12500
    }
  });

  const category = await prisma.category.create({
    data: {
      tenantId: tenant.id,
      name: 'Aluguel',
      type: 'expense'
    }
  });

  await prisma.transaction.create({
    data: {
      tenantId: tenant.id,
      accountId: account.id,
      categoryId: category.id,
      amount: -1200,
      description: 'Pagamento aluguel',
      occurredAt: new Date(),
      status: 'cleared'
    }
  });

  await prisma.invoice.create({
    data: {
      tenantId: tenant.id,
      status: 'open',
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      total: 29900,
      paymentMethod: 'pix'
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
