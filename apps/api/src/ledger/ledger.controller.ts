import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LedgerService } from './ledger.service';

@ApiTags('ledger')
@Controller('ledger/transactions')
export class LedgerController {
  constructor(private readonly service: LedgerService) {}

  @Get()
  @ApiOkResponse({ description: 'Lista lançamentos do tenant' })
  list() {
    return this.service.listTransactions();
  }
}
