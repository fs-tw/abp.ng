import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { ThemeAlainDemoRoutingModule } from './theme-alain-demo-routing.module';
import { SelectComponent } from './components/select.component';
import { ThemeAlainModule } from '../lib/theme-alain.module';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { EntityBaseComponent } from './components/entity-base.component';


@NgModule({
  imports: [
    CoreModule,
    ThemeAlainModule,
    ThemeAlainSharedModule,
    ThemeAlainDemoRoutingModule
  ],
  declarations:[
    SelectComponent,
    EntityBaseComponent
  ]
})
export class ThemeAlainDemoModule {
}