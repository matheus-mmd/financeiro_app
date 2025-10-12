'use client';

import { useQuery } from '@tanstack/react-query';
import type { Account, Category, Transaction } from '@financeiro/shared';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useAccounts = () =>
  useQuery({
    queryKey: ['accounts'],
    queryFn: async (): Promise<Account[]> => {
      await delay(200);
      return [
        {
          id: crypto.randomUUID(),
          tenantId: crypto.randomUUID(),
          name: 'Conta Corrente',
          type: 'checking',
          balance: 12500
        }
      ];
    }
  });

export const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async (): Promise<Category[]> => {
      await delay(100);
      return [
        {
          id: crypto.randomUUID(),
          tenantId: crypto.randomUUID(),
          name: 'Aluguel',
          type: 'expense'
        }
      ];
    }
  });

export const useTransactions = () =>
  useQuery({
    queryKey: ['transactions'],
    queryFn: async (): Promise<Transaction[]> => {
      await delay(150);
      return [
        {
          id: crypto.randomUUID(),
          tenantId: crypto.randomUUID(),
          accountId: crypto.randomUUID(),
          categoryId: crypto.randomUUID(),
          amount: -1200,
          description: 'Pagamento aluguel',
          occurredAt: new Date(),
          status: 'cleared'
        }
      ];
    }
  });
