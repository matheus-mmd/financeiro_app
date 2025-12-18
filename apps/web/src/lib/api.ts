'use client';

import { useQuery } from '@tanstack/react-query';
import type { Account, Category, Transaction } from '@financeiro/shared';

const DEMO_TENANT_ID = 'tenant-demo';

const MOCK_ACCOUNTS: Account[] = [
  {
    id: 'account-checking',
    tenantId: DEMO_TENANT_ID,
    name: 'Conta Corrente',
    type: 'checking',
    balance: 12500
  },
  {
    id: 'account-savings',
    tenantId: DEMO_TENANT_ID,
    name: 'Poupança',
    type: 'savings',
    balance: 8200
  }
];

const MOCK_CATEGORIES: Category[] = [
  {
    id: 'category-rent',
    tenantId: DEMO_TENANT_ID,
    name: 'Aluguel',
    type: 'expense'
  },
  {
    id: 'category-salary',
    tenantId: DEMO_TENANT_ID,
    name: 'Salário',
    type: 'income'
  }
];

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 'txn-2024-02-rent',
    tenantId: DEMO_TENANT_ID,
    accountId: 'account-checking',
    categoryId: 'category-rent',
    amount: -1200,
    description: 'Pagamento aluguel',
    occurredAt: new Date('2024-02-05T12:00:00Z'),
    status: 'cleared'
  },
  {
    id: 'txn-2024-02-salary',
    tenantId: DEMO_TENANT_ID,
    accountId: 'account-checking',
    categoryId: 'category-salary',
    amount: 4800,
    description: 'Recebimento salário',
    occurredAt: new Date('2024-02-01T12:00:00Z'),
    status: 'pending'
  }
];

const cloneArray = <T>(items: readonly T[]): T[] => items.map((item) => ({ ...item }));

export const useAccounts = () =>
  useQuery({
    queryKey: ['accounts'],
    queryFn: async (): Promise<Account[]> => cloneArray(MOCK_ACCOUNTS)
  });

export const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async (): Promise<Category[]> => cloneArray(MOCK_CATEGORIES)
  });

export const useTransactions = () =>
  useQuery({
    queryKey: ['transactions'],
    queryFn: async (): Promise<Transaction[]> => cloneArray(MOCK_TRANSACTIONS)
  });
