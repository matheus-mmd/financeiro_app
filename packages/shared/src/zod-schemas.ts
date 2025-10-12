import { z } from 'zod';
import { invoiceStatusSchema, paymentMethodSchema } from './billing';

export const accountSchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string().uuid(),
  name: z.string(),
  type: z.enum(['checking', 'savings', 'credit', 'wallet']),
  balance: z.number()
});

export const categorySchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string().uuid(),
  name: z.string(),
  type: z.enum(['income', 'expense']),
  icon: z.string().optional()
});

export const transactionSchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string().uuid(),
  accountId: z.string().uuid(),
  categoryId: z.string().uuid(),
  amount: z.number(),
  description: z.string(),
  occurredAt: z.date(),
  status: z.enum(['pending', 'cleared'])
});

export const reconciliationSchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string().uuid(),
  transactionId: z.string().uuid(),
  externalReference: z.string(),
  status: z.enum(['matched', 'unmatched', 'ignored'])
});

export const invoiceSchema = z.object({
  id: z.string(),
  tenantId: z.string().uuid(),
  subscriptionId: z.string(),
  status: invoiceStatusSchema,
  dueDate: z.date(),
  total: z.number(),
  currency: z.enum(['BRL']),
  paymentMethod: paymentMethodSchema
});

export type Account = z.infer<typeof accountSchema>;
export type Category = z.infer<typeof categorySchema>;
export type Transaction = z.infer<typeof transactionSchema>;
