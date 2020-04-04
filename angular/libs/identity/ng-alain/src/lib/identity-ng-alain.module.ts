import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { SharedModule } from './shared/shared.module';
import { SampleModule } from './sample/sample.module';
import { Store } from '@ngxs/store';
import { AddRoute,ABP } from '@abp/ng.core';
import { IdentityModule } from '@fs/identity';
import { IdentityNgAlainRoutingModule } from './identity-ng-alain-routing.module';

@NgModule({
  imports: [
    SharedModule,
    IdentityModule,
    IdentityNgAlainRoutingModule,
    SampleModule

  ]
})
export class IdentityNgAlainModule {
}
