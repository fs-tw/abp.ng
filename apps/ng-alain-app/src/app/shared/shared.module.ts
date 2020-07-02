import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { SharedModule as NgAlinSharedModule } from '@fs/ng-alain/shared';
import { LayoutModule } from '@fs/ng-alain/layout';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeBasicModule,
    NgxValidateCoreModule,
    LayoutModule,
    NgAlinSharedModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    ThemeBasicModule,
    NgxValidateCoreModule,
    LayoutModule,
    NgAlinSharedModule
  ],
  providers: [],
})
export class SharedModule {}
