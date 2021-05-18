import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { ThemeAlainDemoRoutingModule } from './theme-alain-demo-routing.module';
import { SelectComponent } from './components/select.component';
import { ThemeAlainModule } from '../lib/theme-alain.module';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
//import { IdentityModule } from '@abp/ng.identity';


@NgModule({
  imports: [
    CoreModule,
    ThemeAlainModule,
    ThemeAlainSharedModule,
    ThemeAlainDemoRoutingModule,
    //IdentityModule.forChild()
  ],
  declarations:[
    SelectComponent
  ],
  //exports:[IdentityModule]
})
export class ThemeAlainDemoModule {
}