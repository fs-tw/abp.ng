import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DemoRoutingModule } from './routing.module';

@NgModule({
  imports: [SharedModule, DemoRoutingModule],
})
export class TanstackQueryModule {}
