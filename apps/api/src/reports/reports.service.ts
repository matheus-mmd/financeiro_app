import { Injectable } from '@nestjs/common';
import { TenancyService } from '../tenancy/tenancy.service';

@Injectable()
export class ReportsService {
  constructor(private readonly tenancy: TenancyService) {}

  async export(type: 'pdf' | 'csv') {
    const tenantId = this.tenancy.getTenantId();
    return {
      tenantId,
      type,
      url: `https://storage.local/${tenantId}/${type}/relatorio-demo`
    };
  }
}
