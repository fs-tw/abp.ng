import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { SampleRoutingModule } from './sample-routing.module';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [
    SharedModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
