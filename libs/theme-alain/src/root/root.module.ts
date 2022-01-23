import { NgModule } from '@angular/core';
import { ThemeAlainCoreModule } from '@fs-tw/theme-alain/core';
import { LayoutModule } from '@fs-tw/theme-alain/layout';

@NgModule({
  imports: [LayoutModule.forRoot(),ThemeAlainCoreModule],
  exports: [LayoutModule,ThemeAlainCoreModule],
  providers: [
    //...APPINIT_PROVIDES
  ],
})
export class RootModule {}
