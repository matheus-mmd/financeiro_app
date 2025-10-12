export type Paginated<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
};

export type AuditLogEntry = {
  id: string;
  tenantId: string;
  actorId: string;
  action: string;
  resource: string;
  createdAt: Date;
  metadata?: Record<string, unknown>;
};
