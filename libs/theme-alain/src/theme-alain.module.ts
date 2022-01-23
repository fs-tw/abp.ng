import { CoreModule } from '@abp/ng.core';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { LayoutModule } from '@fs-tw/theme-alain/layout';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NG_ALAIN_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { TenantBoxComponent } from './components/account-layout/tenant-box/tenant-box.component';
import { AuthWrapperComponent } from './components/account-layout/auth-wrapper/auth-wrapper.component';
import { ThemeAlainCoreModule } from '@fs-tw/theme-alain/core';
import { ValidationErrorComponent } from './components/validation-error-component/validation-error.component';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import {
  VALIDATION_ERROR_TEMPLATE,
  VALIDATION_INVALID_CLASSES,
  VALIDATION_TARGET_SELECTOR,
} from '@ngx-validate/core';

@NgModule({
  imports: [CoreModule, ThemeSharedModule, LayoutModule, NgxValidateCoreModule],
  exports: [],
  declarations: [
    ValidationErrorComponent,
    ApplicationLayoutComponent,
    EmptyLayoutComponent,
    AccountLayoutComponent,
    TenantBoxComponent,
    AuthWrapperComponent,
  ],
  providers: [],
})
export class ThemeAlainModule {
  static forRoot(): ModuleWithProviders<ThemeAlainModule> {
    return {
      ngModule: ThemeAlainCoreModule,
      providers: [
        NG_ALAIN_THEME_STYLES_PROVIDERS,
        // NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS,

        {
          provide: VALIDATION_ERROR_TEMPLATE,
          useValue: ValidationErrorComponent,
        },
        {
          provide: VALIDATION_TARGET_SELECTOR,
          useValue: '.form-group',
        },
        {
          provide: VALIDATION_INVALID_CLASSES,
          useValue: 'is-invalid',
        },
      ],
    };
  }
}
