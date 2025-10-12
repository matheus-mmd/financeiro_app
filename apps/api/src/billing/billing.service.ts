import { Injectable } from '@nestjs/common';
import { TenancyService } from '../tenancy/tenancy.service';
import { InvoiceStatus } from '@financeiro/shared';

@Injectable()
export class BillingService {
  constructor(private readonly tenancy: TenancyService) {}

  async listInvoices() {
    const tenantId = this.tenancy.getTenantId();
    return [
      {
        id: 'inv_01',
        tenantId,
        status: 'open' as InvoiceStatus,
        dueDate: new Date().toISOString(),
        total: 29900,
        currency: 'BRL',
        paymentMethod: 'pix'
      }
    ];
  }
}
