import { z } from 'zod';

export const tenantIdSchema = z.string().uuid();

export type TenantId = z.infer<typeof tenantIdSchema>;

export const withTenantScope = <T extends { tenantId?: string }>(
  entity: T,
  tenantId: TenantId
): T & { tenantId: TenantId } => ({
  ...entity,
  tenantId
});

export const TENANT_HEADER = 'x-tenant-id';
