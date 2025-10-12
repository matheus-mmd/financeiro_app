import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BankingService } from './banking.service';

@ApiTags('banking')
@Controller('banking/accounts')
export class BankingController {
  constructor(private readonly service: BankingService) {}

  @Get()
  @ApiOkResponse({ description: 'Lista contas do tenant atual' })
  list() {
    return this.service.listAccounts();
  }
}
