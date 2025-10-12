import { Module } from '@nestjs/common';
import { BankingController } from './banking.controller';
import { BankingService } from './banking.service';
import { TenancyModule } from '../tenancy/tenancy.module';

@Module({
  imports: [TenancyModule],
  controllers: [BankingController],
  providers: [BankingService]
})
export class BankingModule {}
