import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
// import { NgxValidateCoreModule } from '@ngx-validate/core';
// import { NgAlainSharedModule } from '@fs/theme.ng-alain/shared';
// import { LayoutModule } from '@fs/theme.ng-alain/layout';
import { ThemeNgAlainModule } from '@fs/theme.ng-alain';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeNgAlainModule,
    //NgxValidateCoreModule,
    //LayoutModule,
    //NgAlainSharedModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    ThemeNgAlainModule
    // ThemeNgAlainModule,
    // NgxValidateCoreModule,
    // LayoutModule,
    // NgAlainSharedModule
  ],
  providers: [],
})
export class SharedModule {}
