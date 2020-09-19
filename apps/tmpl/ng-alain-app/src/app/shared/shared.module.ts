import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { NgAlainSharedModule } from '@fs/theme.ng-alain/shared';
import { LayoutModule } from '@fs/theme.ng-alain/layout';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeBasicModule,
    NgxValidateCoreModule,
    LayoutModule,
    NgAlainSharedModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    ThemeBasicModule,
    NgxValidateCoreModule,
    LayoutModule,
    NgAlainSharedModule
  ],
  providers: [],
})
export class SharedModule {}
