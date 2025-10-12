import { z } from 'zod';

export const currencySchema = z.enum(['BRL']);

export const invoiceStatusSchema = z.enum([
  'draft',
  'open',
  'paid',
  'uncollectible',
  'void',
  'past_due'
]);

export const paymentMethodSchema = z.enum(['pix', 'boleto', 'card']);

export const subscriptionPlanSchema = z.object({
  id: z.string(),
  name: z.string(),
  amount: z.number(),
  currency: currencySchema,
  interval: z.enum(['month', 'year']),
  trialDays: z.number().optional()
});

export type InvoiceStatus = z.infer<typeof invoiceStatusSchema>;
