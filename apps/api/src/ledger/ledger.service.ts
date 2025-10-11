import { Injectable } from '@nestjs/common';
import { TenancyService } from '../tenancy/tenancy.service';
import { Transaction } from '@financeiro/shared';

@Injectable()
export class LedgerService {
  constructor(private readonly tenancy: TenancyService) {}

  async listTransactions(): Promise<Transaction[]> {
    const tenantId = this.tenancy.getTenantId();
    return [
      {
        id: 'txn-1',
        tenantId,
        accountId: 'bank-1',
        categoryId: 'cat-1',
        amount: -1200,
        description: 'Pagamento aluguel',
        occurredAt: new Date(),
        status: 'cleared'
      }
    ];
  }
}
