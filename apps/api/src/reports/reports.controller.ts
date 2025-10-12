import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ReportsService } from './reports.service';

@ApiTags('reports')
@Controller('reports/export')
export class ReportsController {
  constructor(private readonly service: ReportsService) {}

  @Get()
  @ApiQuery({ name: 'type', enum: ['pdf', 'csv'], required: true })
  @ApiOkResponse({ description: 'Retorna URL temporária para download' })
  export(@Query('type') type: 'pdf' | 'csv') {
    return this.service.export(type);
  }
}
