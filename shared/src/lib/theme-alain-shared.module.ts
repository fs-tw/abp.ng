import { CommonModule } from '@angular/common';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/theme-alain/shared/extensions';

const declarationsWithExports = [
];

// #region third libs

const ABPMODULES = [
  CoreModule,
  ThemeSharedModule,
  NgxValidateCoreModule,
  ThemeAlainUiExtensionsModule
];

// #endregion

@NgModule({
  imports: [
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...ABPMODULES,
  ],
  exports: [
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...ABPMODULES,
  ],
})
export class ThemeAlainSharedModule {}
