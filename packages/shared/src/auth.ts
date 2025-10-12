import { z } from 'zod';

export const roleSchema = z.enum(['owner', 'admin', 'member']);
export type Role = z.infer<typeof roleSchema>;

export const sessionSchema = z.object({
  userId: z.string().uuid(),
  tenantId: z.string().uuid(),
  roles: z.array(roleSchema),
  scopes: z.array(z.string()).default([]),
  expiresAt: z.date()
});

export type Session = z.infer<typeof sessionSchema>;

export const requiresRole = (session: Session, role: Role) =>
  session.roles.includes(role);
