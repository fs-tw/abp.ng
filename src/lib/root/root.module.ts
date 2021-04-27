import { NgModule } from '@angular/core';
import { BaseRootModule } from './base-root.module';
import { LayoutModule } from '@fs-tw/theme-alain/layout';

@NgModule({
  imports: [LayoutModule,BaseRootModule],
  exports: [BaseRootModule],
  providers: [
    //...APPINIT_PROVIDES
  ]
})
export class RootModule { }

