// #region root module

import { GlobalConfigModule } from './global-config.module';
import { NgAlainSharedModule } from '@fs/theme.ng-alain/shared';
import { NgAlainBasicModule } from '@fs/theme.ng-alain/basic';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ValidationErrorComponent } from '@fs/theme.ng-alain/basic';
import { AlainConfigService } from '@delon/util';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ThemeCoreModule } from '@fs/theme.core';
// #region default language
// 参考：https://ng-alain.com/docs/i18n
import { default as ngLang } from '@angular/common/locales/zh';
import { DELON_LOCALE, zh_TW as delonLang } from '@delon/theme';
import { zhCN as dateLang } from 'date-fns/locale';
import { NZ_DATE_LOCALE, NZ_I18N, zh_TW as zorroLang } from 'ng-zorro-antd/i18n';
const LANG = {
  abbr: 'zh',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
};
// register angular
import { registerLocaleData } from '@angular/common';
import { STYLES_PROVIDERS } from './providers/styles.provider';
registerLocaleData(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
  { provide: LOCALE_ID, useValue: LANG.abbr },
  { provide: NZ_I18N, useValue: LANG.zorro },
  { provide: NZ_DATE_LOCALE, useValue: LANG.date },
  { provide: DELON_LOCALE, useValue: LANG.delon },
];
// #endregion


@NgModule({
  imports: [
    NgxValidateCoreModule.forRoot({
      //targetSelector: 'nz-input-group',
      blueprints: {
        creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
        email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
        invalid: 'AbpValidation::ThisFieldIsNotValid.',
        max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        maxlength:
          'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
        min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        minlength:
          'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
        ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
        passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
        range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        required: 'AbpValidation::ThisFieldIsRequired.',
        url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
      },
      errorTemplate: ValidationErrorComponent,
    }),
    GlobalConfigModule.forRoot(),
    ThemeCoreModule.forRoot(),
    NgAlainSharedModule.forRoot(),
    NgAlainBasicModule.forRoot(),
  ],
  providers: [
    ...LANG_PROVIDES,
    STYLES_PROVIDERS,
    AlainConfigService,//Issue: https://github.com/ng-alain/ng-alain/issues/1624
  ],  
})
export class RootModule { }

// #endregion

