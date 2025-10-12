import { Injectable, Scope } from '@nestjs/common';
import { RequestContext } from '@nestjs/core';
import { TENANT_HEADER, tenantIdSchema } from '@financeiro/shared';

@Injectable({ scope: Scope.REQUEST })
export class TenancyService {
  constructor(private readonly ctx: RequestContext) {}

  getTenantId(): string {
    const req = this.ctx.switchToHttp().getRequest<Request & { tenantId?: string }>();
    const tenantId = req?.headers?.[TENANT_HEADER] ?? req?.tenantId;
    return tenantIdSchema.parse(tenantId ?? '00000000-0000-0000-0000-000000000000');
  }
}
