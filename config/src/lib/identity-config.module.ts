import { NgModule, APP_INITIALIZER } from '@angular/core';
import { IdentityConfigService } from './services/identity-config.service';
import { noop } from '@abp/ng.core';

@NgModule({
  providers: [{ provide: APP_INITIALIZER, deps: [IdentityConfigService], useFactory: noop, multi: true }],
})
export class IdentityConfigModule {}
