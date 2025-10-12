import { Module, Scope } from '@nestjs/common';
import { TenancyService } from './tenancy.service';

@Module({
  providers: [
    {
      provide: TenancyService,
      useClass: TenancyService,
      scope: Scope.REQUEST
    }
  ],
  exports: [TenancyService]
})
export class TenancyModule {}
