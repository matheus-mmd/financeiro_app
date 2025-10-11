import { Injectable } from '@nestjs/common';
import { TenancyService } from '../tenancy/tenancy.service';
import { Account } from '@financeiro/shared';

@Injectable()
export class BankingService {
  constructor(private readonly tenancy: TenancyService) {}

  async listAccounts(): Promise<Account[]> {
    const tenantId = this.tenancy.getTenantId();
    return [
      {
        id: 'bank-1',
        tenantId,
        name: 'Conta Corrente Demo',
        type: 'checking',
        balance: 12500
      }
    ];
  }
}
