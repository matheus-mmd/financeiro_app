import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BillingService } from './billing.service';
import { z } from 'zod';

const webhookSchema = z.object({
  type: z.string(),
  id: z.string(),
  data: z.record(z.unknown())
});

@ApiTags('billing')
@Controller('billing')
export class BillingController {
  constructor(private readonly service: BillingService) {}

  @Get('invoices')
  @ApiOkResponse({ description: 'Lista faturas do tenant' })
  listInvoices() {
    return this.service.listInvoices();
  }

  @Post('webhook')
  async stripeWebhook(@Body() payload: unknown) {
    const event = webhookSchema.parse(payload);
    return { received: true, event };
  }
}
